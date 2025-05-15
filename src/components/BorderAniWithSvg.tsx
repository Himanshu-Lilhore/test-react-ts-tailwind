const BorderAniWithSvg = () => {
    const widthVw = 29;
    const heightVw = 4.1;
    const duration = 5; // seconds

    // SVG viewBox: 1 unit = 0.1vw (so 290 units → 29vw, 41 units → 4.1vw)
    const viewBoxW = 290;
    const viewBoxH = 41;
    const inset = 2; // increase inset to allow thicker stroke inside
    const pathD = `
    M ${inset},${inset}
    H ${viewBoxW - inset}
    V ${viewBoxH - inset}
    H ${inset}
    V ${inset}
  `.trim();

    return (
        <div
            className="relative bg-[#121212] rounded-2xl p-1 flex items-center justify-center overflow-hidden"
            style={{
                width: `${widthVw}vw`,
                height: `${heightVw}vw`,
                padding: "0.4px",
            }}
        >
            <div className="z-20 w-[99%] h-[94%] bg-zinc-700 rounded-2xl"></div>
            {/* SVG overlay */}
            <svg
                className="absolute inset-0 z-10"
                width="100%"
                height="100%"
                viewBox={`0 0 ${viewBoxW} ${viewBoxH}`}
                preserveAspectRatio="none"
            >
                <path
                    id="borderPath"
                    d={pathD}
                    fill="none"
                    stroke="url(#grad)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                />

                {/* <defs>
                    <linearGradient
                        id="grad"
                        gradientUnits="userSpaceOnUse"
                        x1="0"
                        y1="0"
                        x2={viewBoxW}
                        y2="0"
                    >
                        <stop offset="0%" stopColor="#32CD32" />
                        <stop offset="20%" stopColor="#32CD32" />
                        <stop offset="100%" stopColor="#171717" />
                    </linearGradient>
                </defs> */}

                {/* Moving dot */}
                <circle r="16" fill="#32CD32">
                    <animateMotion dur={`${duration}s`} repeatCount="indefinite" rotate="auto">
                        <mpath xlinkHref="#borderPath" />
                    </animateMotion>
                </circle>
            </svg>
        </div>
    );
};

export default BorderAniWithSvg;
