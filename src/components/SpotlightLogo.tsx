import { useRef, useEffect } from "react";

export default function SpotlightLogo() {
    const hoverRef = useRef<HTMLDivElement | null>(null);
    const targetCoords = useRef({ x: 0, y: 0 });
    const currentCoords = useRef({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { left, top } = e.currentTarget.getBoundingClientRect();
        targetCoords.current.x = clientX - left;
        targetCoords.current.y = clientY - top;
    };

    useEffect(() => {
        const smoothAnimation = () => {
            if (!hoverRef.current) return;

            // Interpolate current coordinates toward target coordinates
            const factor = 0.08
            currentCoords.current.x += (targetCoords.current.x - currentCoords.current.x) * factor;
            currentCoords.current.y += (targetCoords.current.y - currentCoords.current.y) * factor;

            // Update CSS variables
            hoverRef.current.style.setProperty("--x", `${currentCoords.current.x}px`);
            hoverRef.current.style.setProperty("--y", `${currentCoords.current.y}px`);

            requestAnimationFrame(smoothAnimation);
        };

        smoothAnimation();
    }, []);

    return (
        <div className="relative gradient-bg" onMouseMove={handleMouseMove}>
            <div className="base-image w-full h-full"></div>
            <div ref={hoverRef} className="gradient-image w-full h-full"></div>
        </div>
    );
}

