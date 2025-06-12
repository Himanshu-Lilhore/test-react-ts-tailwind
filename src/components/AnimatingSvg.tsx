import { useEffect, useRef, useState } from "react";

// Define each segment's start and end points or path commands
const segments = [
    // Horizontal lines
    { type: "H", from: 3, to: 7, y: 18 },   // M3 18H7
    { type: "H", from: 10, to: 21, y: 18 }, // M10 18H21
    { type: "H", from: 5, to: 12, y: 21 },  // M5 21H12
    { type: "H", from: 16, to: 19, y: 21 }, // M16 21H19
    // Curve (as a single path, for simplicity)
    { type: "C" } // We'll handle the curve separately
];

export default function AnimatingSvg() {
    // One progress value per segment (0 to 1)
    const [progress, setProgress] = useState(Array(segments.length).fill(0));
    const lastUpdateTime = useRef(Date.now());
    const [curveLength, setCurveLength] = useState(1); // Default to 1 to avoid division by zero
    const curveRef = useRef<SVGPathElement | null>(null);

    useEffect(() => {
        // After mount, measure the curve path length
        if (curveRef.current) {
            setCurveLength(curveRef.current.getTotalLength());
        }
    }, []);

    useEffect(() => {
        const tick = () => {
            const currTime = Date.now();
            if (currTime - lastUpdateTime.current > 41) {
                setProgress(prev =>
                    prev.map((p, i) =>
                        p < 1
                            ? Math.min(1, p + 0.03 ) // Staggered speed for demo
                            : 1
                    )
                );
                lastUpdateTime.current = currTime;
            }
            requestAnimationFrame(tick);
        };
        tick();
    }, []);

    // Use the last line's progress for the curve so all finish together
    const lastLineProgress = progress[segments.length - 2] ?? 0;

    // Build SVG paths for each segment
    const paths = segments.map((seg, i) => {
        if (seg.type === "H" && typeof seg.from === "number" && typeof seg.to === "number" && typeof seg.y === "number") {
            // Animate horizontal line from 'from' to 'to'
            const x = seg.from + (seg.to - seg.from) * progress[i];
            return (
                <path
                    key={i}
                    d={`M${seg.from} ${seg.y}H${x}`}
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            );
        }
        if (seg.type === "C") {
            // Animate the curve by using stroke-dasharray
            // The curve path from your original SVG:
            const curvePath =
                "M8.8 15C6.14903 15 4 12.9466 4 10.4137C4 8.31435 5.6 6.375 8 6C8.75283 4.27403 10.5346 3 12.6127 3C15.2747 3 17.4504 4.99072 17.6 7.5C19.0127 8.09561 20 9.55741 20 11.1402C20 13.2719 18.2091 15 16 15L8.8 15Z";
            // We'll use a fixed length for demo; for production, measure the path length
            const dash = curveLength * lastLineProgress;
            return (
                <path
                    key={i}
                    ref={curveRef}
                    d={curvePath}
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    strokeDasharray={curveLength}
                    strokeDashoffset={curveLength - dash}
                />
            );
        }
        return null;
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
