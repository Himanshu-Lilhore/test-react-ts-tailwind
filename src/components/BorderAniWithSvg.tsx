import { FC } from "react";

const BorderAniWithSvg = ({
    widthVw,
    heightVw,
    duration,
    color,
    title,
}: {
    widthVw: number;
    heightVw: number;
    duration: number;
    color: string;
    title: string;
}) => {
    const viewBoxW = widthVw * 10;
    const viewBoxH = heightVw * 10;
    const inset = 5; // defines stroke width
    const pathD = `
    M ${inset},${inset}
    H ${viewBoxW - inset}
    V ${viewBoxH - inset}
    H ${inset}
    V ${inset}
  `.trim();

    return (
        <div
            className="relative bg-[#404040] rounded-[1.25vw] flex items-center justify-center overflow-hidden"
            style={{
                width: `${widthVw}vw`,
                height: `${heightVw}vw`,
                padding: "1px", // defines thickness
            }}
        >
            <div
                className="flex gap-2 z-20 relative
             bg-[#212121] w-full h-full rounded-[1.25vw] flex items-center justify-center"
            >
                <img src="./images/stars.png" alt="logo" className="w-[2vw] h-[2vw]" />
                <div className="text-[#FFFFFF] text-[1.2vw] font-semibold font-montreal-medium">{title}</div>
            </div>

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
                    count={15}
                    baseRadius={8}
                    color={color}
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
    duration: number; // seconds
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
                const begin = (i * trailFraction * duration).toFixed(2) + "s";
                const r = baseRadius;
                const opacity = +((1 - i / (count - 1)) * 0.98 + 0.02).toFixed(2); // fade from 1.00 at i=0 to 0.02 at i=count-1

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
