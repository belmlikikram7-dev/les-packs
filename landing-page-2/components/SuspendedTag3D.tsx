"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function SuspendedTag3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [transformStyle, setTransformStyle] = useState({
    rotateX: 0,
    rotateY: 0,
    rotateZ: -4,
    translateX: 0,
    translateY: 0,
  });

  const mousePos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, isHovered: false });
  const animFrame = useRef<number | null>(null);
  const startTime = useRef(0);

  useEffect(() => {
    // 1. Intersection Observer: detect when section is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const el = containerRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  useEffect(() => {
    // 2. Physics loop: continuous 3D floating suspension & organic mouse interaction
    let prevTime = performance.now();

    const loop = (time: number) => {
      const dt = Math.min((time - prevTime) / 1000, 0.1);
      prevTime = time;
      startTime.current += dt;

      const t = startTime.current;

      // Smooth mouse spring interpolation
      const m = mousePos.current;
      const ease = m.isHovered ? 0.08 : 0.04;
      m.x += (m.targetX - m.x) * ease;
      m.y += (m.targetY - m.y) * ease;

      if (!m.isHovered) {
        m.targetX *= 0.97;
        m.targetY *= 0.97;
      }

      // Natural 3D suspension oscillation (pendulum sway + 3D ribbon twist)
      const swayZ = Math.sin(t * 1.5) * 3.5 + Math.cos(t * 0.8) * 1.5;
      const twistY = Math.sin(t * 1.2) * 8 + Math.cos(t * 1.9) * 2.5;
      const tiltX = Math.cos(t * 1.4) * 4 + Math.sin(t * 0.7) * 2;

      const rotX = tiltX - m.y * 10;
      const rotY = twistY + m.x * 16;
      const rotZ = -4 + swayZ + m.x * 6;
      const transX = Math.sin(t * 1.5) * 5 + m.x * 12;
      const transY = Math.abs(Math.sin(t * 1.5)) * 4 + m.y * 8;

      setTransformStyle({
        rotateX: rotX,
        rotateY: rotY,
        rotateZ: rotZ,
        translateX: transX,
        translateY: transY,
      });

      animFrame.current = requestAnimationFrame(loop);
    };

    animFrame.current = requestAnimationFrame(loop);

    return () => {
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const nx = Math.max(-1, Math.min(1, (e.clientX - centerX) / (rect.width * 0.7)));
    const ny = Math.max(-1, Math.min(1, (e.clientY - centerY) / (rect.height * 0.7)));
    mousePos.current.targetX = nx;
    mousePos.current.targetY = ny;
    mousePos.current.isHovered = true;
  };

  const handleMouseLeave = () => {
    mousePos.current.targetX = 0;
    mousePos.current.targetY = 0;
    mousePos.current.isHovered = false;
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="absolute top-2 sm:top-4 md:top-6 lg:top-8 left-[3%] sm:left-[5%] md:left-[7%] lg:left-[9%] z-20 pointer-events-auto select-none"
      style={{
        width: "clamp(200px, 26vw, 360px)",
        perspective: "1200px",
      }}
    >
      {/* 3D Suspended Tag Container */}
      <div
        className={`transition-all duration-1000 ease-[cubic-bezier(0.34,1.35,0.64,1)] ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-16 opacity-0"
        }`}
        style={{
          transformOrigin: "top center",
          transformStyle: "preserve-3d",
          transform: `translate3d(${transformStyle.translateX}px, ${transformStyle.translateY}px, 0px) rotateX(${transformStyle.rotateX}deg) rotateY(${transformStyle.rotateY}deg) rotateZ(${transformStyle.rotateZ}deg)`,
          filter: `drop-shadow(${transformStyle.rotateY > 0 ? "14px" : "-10px"} 20px 25px rgba(49, 15, 16, 0.32))`,
          transition: isVisible
            ? "transform 0.08s ease-out, filter 0.15s ease-out"
            : "transform 1.2s cubic-bezier(0.34, 1.35, 0.64, 1), opacity 0.8s ease-out",
        }}
      >
        <div className="relative w-full aspect-[695/960] cursor-grab active:cursor-grabbing hover:scale-[1.02] transition-transform duration-300">
          <Image
            src="/images/tag-3d.webp"
            alt="La santé de votre peau, notre responsabilité"
            fill
            sizes="(max-width: 640px) 210px, (max-width: 1024px) 280px, 360px"
            priority
            quality={95}
            className="object-contain object-top pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}
