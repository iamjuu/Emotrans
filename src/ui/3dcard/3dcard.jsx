"use client";
import React, { useRef, useState } from "react";
import { cn } from "../../utils/utils";

function interpolate(value, inMin, inMax, outMin, outMax) {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

export const CometCard = ({
  rotateDepth = 17.5,
  translateDepth = 20,
  className,
  children
}) => {
  const ref = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    setMouse({ x: xPct, y: yPct });
  };

  const handleMouseLeave = () => {
    setMouse({ x: 0, y: 0 });
    setHover(false);
  };

  const handleMouseEnter = () => {
    setHover(true);
  };

  const rotateX = interpolate(mouse.y, -0.5, 0.5, -rotateDepth, rotateDepth);
  const rotateY = interpolate(mouse.x, -0.5, 0.5, rotateDepth, -rotateDepth);
  const translateX = interpolate(mouse.x, -0.5, 0.5, -translateDepth, translateDepth);
  const translateY = interpolate(mouse.y, -0.5, 0.5, translateDepth, -translateDepth);
  const glareX = interpolate(mouse.x, -0.5, 0.5, 0, 100);
  const glareY = interpolate(mouse.y, -0.5, 0.5, 0, 100);
  const glareBackground = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.9) 10%, rgba(255, 255, 255, 0.75) 20%, rgba(255, 255, 255, 0) 80%)`;

  return (
    <div className={cn("perspective-distant transform-3d", className)}>
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${translateX}px) translateY(${translateY}px) scale(${hover ? 1.05 : 1})`,
          transformStyle: "preserve-3d",
          boxShadow:
            "rgba(218, 20, 20, 0.01) 0px 520px 146px 0px, rgba(0, 0, 0, 0.04) 0px 333px 133px 0px, rgba(0, 0, 0, 0.26) 0px 83px 83px 0px, rgba(0, 0, 0, 0.29) 0px 21px 46px 0px",
          transition: "transform 0.2s ease-out",
        }}
        className="relative rounded-2xl">
        {children}
        <div
          className="pointer-events-none absolute inset-0 z-50 h-full w-full rounded-[16px] mix-blend-overlay transition-opacity duration-200"
          style={{
            background: glareBackground,
            opacity: 0.6,
          }}
        />
      </div>
    </div>
  );
};
