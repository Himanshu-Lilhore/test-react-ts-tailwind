import { useEffect, useState, useRef } from "react";

export default function AnimatingSvg() {
    const [dynamicLen, setDynamicLen] = useState(3);
    const lastUpdateTime = useRef<any>(Date.now());
    const len = 7;
    const svgImg = (
        <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d={`M3 18H${dynamicLen}M10 18H21M5 21H12M16 21H19M8.8 15C6.14903 15 4 12.9466 4 10.4137C4 8.31435 5.6 6.375 8 6C8.75283 4.27403 10.5346 3 12.6127 3C15.2747 3 17.4504 4.99072 17.6 7.5C19.0127 8.09561 20 9.55741 20 11.1402C20 13.2719 18.2091 15 16 15L8.8 15Z`}
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                // className="transition-all duration-300 ease-in-out"
            />
        </svg>
    );

    useEffect(() => {
        const tick = () => {
            const currTime = Date.now();
            if ((currTime - lastUpdateTime.current) > 30) {
                setDynamicLen((prev) => (prev >= len ? prev : prev + 0.1));
                lastUpdateTime.current = currTime;
            }
            requestAnimationFrame(tick);
        };
        tick();
    }, []);

    return (
        <div>
            {svgImg}
        </div>
    );
}
