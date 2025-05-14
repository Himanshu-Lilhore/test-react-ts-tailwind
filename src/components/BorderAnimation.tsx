import { useEffect, useRef } from "react";

const BorderAnimation = () => {
    const borderRef = useRef<HTMLDivElement>(null);
    const width = 29,
        currWidth = `${width}vw`,
        height = 4.1,
        currHeight = `${height}vw`;
    const total = 2 * (width + height);

    const keyframes = [
        {
            offset: 0,
            transform: "rotate(0deg) scale(8)",
        },
        {
            offset: width / 2 / total,
            transform: `rotate(-${((width / 2 / total) * 360).toFixed(2)}deg) scale(8)`,
        },
        {
            offset: (width / 2 + height) / total,
            transform: `rotate(-${(((width / 2 + height) / total) * 360).toFixed(2)}deg) scale(8)`,
        },
        {
            offset: ((3 * width) / 2 + height) / total,
            transform: `rotate(-${((((3 * width) / 2 + height) / total) * 360).toFixed(
                2
            )}deg) scale(8)`,
        },
        {
            offset: ((3 * width) / 2 + 2 * height) / total,
            transform: `rotate(-${((((3 * width) / 2 + 2 * height) / total) * 360).toFixed(
                2
            )}deg) scale(8)`,
        },
        {
            offset: 1,
            transform: "rotate(-360deg) scale(8)",
        },
    ];

    console.log("Keyframes:");
    keyframes.forEach((kf, i) => {
        console.log(`Step ${i}: offset=${kf.offset.toFixed(4)}, transform=${kf.transform}`);
    });
    
    useEffect(() => {
        const el = borderRef.current;
        if (!el) return;

        const animation = el.animate(keyframes, {
            duration: 5000,
            easing: "linear",
            iterations: Infinity,
        });

        return () => {
            animation.cancel();
        };
    }, []);

    return (
        <div
            className="borderAniParent relative text-black bg-[#999999] rounded-2xl p-[0.4px] overflow-hidden"
            style={{
                width: currWidth,
                height: currHeight,
            }}
        >
            <div
                ref={borderRef}
                className="borderEle z-10 absolute bg-[conic-gradient(#32CD32_20deg,#171717_120deg)] h-[100%] w-[100%] left-0 top-0"
            ></div>
            <div className="flex gap-2 z-20 relative bg-[#212121] w-full h-full rounded-2xl flex items-center justify-center">
                <img src="./images/stars.png" alt="logo" className="w-[2vw] h-[2vw]" />
                <div className="text-[#FFFFFF] text-[1.2vw] font-semibold">
                    Raised $2M to Build India’s #1 UG Platform
                </div>
            </div>
        </div>
    );
};

export default BorderAnimation;
