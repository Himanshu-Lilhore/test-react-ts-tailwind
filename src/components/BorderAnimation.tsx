import { useEffect, useRef } from "react";

// function updateGlobalRotationAngle() {
//     const parent = document.querySelector(".borderAniParent");
//     if (!parent) return;
//     const { clientWidth: w, clientHeight: h } = parent;
//     const deg = Math.atan(w / h) * (180 / Math.PI);
//     document.documentElement.style.setProperty("--angle", `${deg}deg`);
// }

const BorderAnimation = () => {
    const borderRef = useRef<HTMLElement>(null);
    // useEffect(() => {
    //     updateGlobalRotationAngle();
    //     window.addEventListener("resize", updateGlobalRotationAngle);
    //     return () => {
    //         window.removeEventListener("resize", updateGlobalRotationAngle);
    //     };
    // }, []);

    useEffect(() => {
        const el = borderRef.current;
        if (!el) return;

        // define your keyframes with offsets matching percentages
        const keyframes = [
            { offset: 0.0, transform: "rotate(0deg)   scale(8)" },
            { offset: 0.25, transform: "rotate(-80deg)  scale(8)" },
            { offset: 0.4, transform: "rotate(-100deg) scale(8)" },
            { offset: 0.6, transform: "rotate(-260deg) scale(8)" },
            { offset: 0.75, transform: "rotate(-280deg) scale(8)" },
            { offset: 1.0, transform: "rotate(-360deg) scale(8)" },
        ];

        // drive it with a 5s linear infinite loop
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
        <div className="borderAniParent relative w-[29vw] h-[4.1vw] text-black bg-[#999999] rounded-2xl p-[0.4px] overflow-hidden">
            <div ref={borderRef} className="borderEle z-10 absolute bg-[conic-gradient(#FF0000_20deg,#999999_120deg)] h-[100%] w-[100%] left-0 top-0"></div>
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
