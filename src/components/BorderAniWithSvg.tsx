import { FC } from "react";

const BorderAniWithSvg = () => {
    const widthVw = 29;
    const heightVw = 4.1;
    const duration = 4; // seconds

    // SVG viewBox: 1 unit = 0.1vw (so 290 units → 29vw, 41 units → 4.1vw)
    const viewBoxW = widthVw * 10;
    const viewBoxH = heightVw * 10;
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
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                />

                <TrailDots
                    count={30}
                    baseRadius={8}
                    color="#FFA500"
                    duration={duration}
                    trailFraction={0.008}
                />
            </svg>
        </div>
    );
};

export default BorderAniWithSvg;

interface TrailDotsProps {
    count: number;
    baseRadius: number;
    color: string; // hex
    duration: number; // loop duration in seconds
    trailFraction: number; // offset fraction per dot
}

export const TrailDots: FC<TrailDotsProps> = ({
    count,
    baseRadius,
    color,
    duration,
    trailFraction,
}) => {
    return (
        <>
            {Array.from({ length: count }).map((_, i) => {
                // compute delay (in seconds)
                const begin = (i * trailFraction * duration).toFixed(2) + "s";
                // const r = +(baseRadius * (1 - 0.1 * i)).toFixed(1); // taper radius -10% each
                const r = baseRadius;
                // fade from 1.00 at i=0 to 0.02 at i=count-1
                const opacity = +((1 - i / (count - 1)) * 0.98 + 0.02).toFixed(2);

                return (
                    <circle key={i} r={r} fill={color} opacity={opacity}>
                        <animateMotion
                            dur={`${duration}s`}
                            repeatCount="indefinite"
                            rotate="auto"
                            begin={begin}
                        >
                            <mpath xlinkHref="#borderPath" />
                        </animateMotion>
                    </circle>
                );
            })}
        </>
    );
};
