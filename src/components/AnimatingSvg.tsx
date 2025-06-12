import { useEffect, useRef, useState } from "react";

const segments = [
    { type: "H", from: 3, to: 7, y: 18 },   // M3 18H7
    { type: "H", from: 10, to: 21, y: 18 }, // M10 18H21
    { type: "H", from: 5, to: 12, y: 21 },  // M5 21H12
    { type: "H", from: 16, to: 19, y: 21 }, // M16 21H19
    { type: "C" }
];

export default function AnimatingSvg() {
    const [progress, setProgress] = useState(Array(segments.length).fill(0));
    const lastUpdateTime = useRef(Date.now());
    const [lengths, setLengths] = useState(Array(segments.length).fill(1));
    const pathRefs = useRef<(SVGPathElement | null)[]>([]);

    // Measure all path lengths after mount
    useEffect(() => {
        const newLengths = pathRefs.current.map(ref => ref?.getTotalLength() || 1);
        setLengths(newLengths);
    }, []);

    useEffect(() => {
        const tick = () => {
            const currTime = Date.now();
            if (currTime - lastUpdateTime.current > 30) {
                setProgress(prev =>
                    prev.map((p, i) =>
                        p < 1
                            ? Math.min(1, p + 0.03)
                            : 1
                    )
                );
                lastUpdateTime.current = currTime;
            }
            requestAnimationFrame(tick);
        };
        tick();
    }, []);

    // Build SVG paths for each segment
    const paths = segments.map((seg, i) => {
        let d = "";
        if (seg.type === "H" && typeof seg.from === "number" && typeof seg.to === "number" && typeof seg.y === "number") {
            d = `M${seg.from} ${seg.y}H${seg.to}`;
        }
        if (seg.type === "C") {
            d = "M8.8 15C6.14903 15 4 12.9466 4 10.4137C4 8.31435 5.6 6.375 8 6C8.75283 4.27403 10.5346 3 12.6127 3C15.2747 3 17.4504 4.99072 17.6 7.5C19.0127 8.09561 20 9.55741 20 11.1402C20 13.2719 18.2091 15 16 15L8.8 15Z";
        }
        return (
            <path
                key={i}
                ref={el => { pathRefs.current[i] = el; }}
                d={d}
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                strokeDasharray={lengths[i]}
                strokeDashoffset={lengths[i] - lengths[i] * progress[i]}
            />
        );
    });

    return (
        <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {paths}
        </svg>
    );
}
