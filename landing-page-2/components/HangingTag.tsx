"use client";

import { useEffect, useRef, useState } from "react";

export default function HangingTag() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [angles, setAngles] = useState({ rotX: 0, rotY: -6, rotZ: -12, transX: 0, transY: 0 });
  const [ribbonCurve, setRibbonCurve] = useState({
    cp1x: 40,
    cp1y: 70,
    cp2x: 180,
    cp2y: 150,
    endX: 105,
    endY: 220,
  });

  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, active: false });
  const animFrameRef = useRef<number | null>(null);
  const timeRef = useRef(0);

  // 1. Trigger entrance drop when scrolling to the section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasEntered(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const el = containerRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  // 2. Physics & 3D continuous swaying loop (twist, swing, and ribbon wind)
  useEffect(() => {
    let prevTime = performance.now();

    const animate = (currentTime: number) => {
      const dt = Math.min((currentTime - prevTime) / 1000, 0.1);
      prevTime = currentTime;
      timeRef.current += dt;

      const t = timeRef.current;

      // Smooth mouse interpolation (inertia & spring damping)
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * (mouse.active ? 0.08 : 0.04);
      mouse.y += (mouse.targetY - mouse.y) * (mouse.active ? 0.08 : 0.04);

      if (!mouse.active) {
        // Return slowly to origin if mouse left
        mouse.targetX *= 0.96;
        mouse.targetY *= 0.96;
      }

      // Continuous realistic 3D pendulum oscillation
      const naturalSwayZ = Math.sin(t * 1.6) * 4.5 + Math.cos(t * 0.9) * 2;
      const naturalTwistY = Math.sin(t * 1.3) * 11 + Math.cos(t * 2.1) * 3;
      const naturalTiltX = Math.cos(t * 1.5) * 5 + Math.sin(t * 0.7) * 2.5;

      const rotZ = -14 + naturalSwayZ + mouse.x * 12;
      const rotY = naturalTwistY + mouse.x * 18;
      const rotX = 4 + naturalTiltX - mouse.y * 12;

      const transX = Math.sin(t * 1.6) * 6 + mouse.x * 16;
      const transY = Math.abs(Math.sin(t * 1.6)) * 4 + mouse.y * 10;

      setAngles({ rotX, rotY, rotZ, transX, transY });

      // Dynamic ribbon undulating spline (S-curve that twists and coils)
      const rBase = 110;
      const cp1x = rBase - 70 + Math.sin(t * 2.2) * 22 + mouse.x * 20;
      const cp1y = 65 + Math.cos(t * 1.8) * 12;
      const cp2x = rBase + 65 + Math.cos(t * 1.7) * 25 + mouse.x * 25;
      const cp2y = 150 + Math.sin(t * 2.0) * 15;
      const endX = rBase - 5 + transX * 0.8;
      const endY = 225 + transY * 0.5;

      setRibbonCurve({ cp1x, cp1y, cp2x, cp2y, endX, endY });

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const normX = Math.max(-1, Math.min(1, (e.clientX - centerX) / (rect.width * 0.8)));
    const normY = Math.max(-1, Math.min(1, (e.clientY - centerY) / (rect.height * 0.8)));
    mouseRef.current.targetX = normX;
    mouseRef.current.targetY = normY;
    mouseRef.current.active = true;
  };

  const handleMouseLeave = () => {
    mouseRef.current.targetX = 0;
    mouseRef.current.targetY = 0;
    mouseRef.current.active = false;
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="absolute top-0 left-[2%] sm:left-[4%] md:left-[6%] lg:left-[8%] z-30 pointer-events-auto select-none"
      style={{
        width: "clamp(220px, 28vw, 360px)",
        height: "clamp(340px, 45vw, 560px)",
        perspective: "1200px",
      }}
    >
      {/* Fall / drop entrance container */}
      <div
        className={`w-full h-full transition-transform duration-1000 ease-[cubic-bezier(0.34,1.4,0.64,1)] ${
          hasEntered ? "translate-y-0 opacity-100" : "-translate-y-[150%] opacity-0"
        }`}
        style={{
          transformOrigin: "top center",
        }}
      >
        {/* SVG Ribbon (Silky twisted hanging string with realistic undulations) */}
        <div className="absolute top-0 left-0 w-full h-[240px] pointer-events-none overflow-visible">
          <svg
            viewBox="0 0 220 240"
            className="w-full h-full overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Rich silk ribbon linear gradient matching site deep red */}
              <linearGradient id="silkRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4A0508" />
                <stop offset="25%" stopColor="#8A0C13" />
                <stop offset="50%" stopColor="#A8141D" />
                <stop offset="75%" stopColor="#74070D" />
                <stop offset="100%" stopColor="#4A0508" />
              </linearGradient>

              {/* Silk ribbon highlight specular glow */}
              <linearGradient id="silkHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.45)" />
                <stop offset="50%" stopColor="rgba(243,227,178,0.6)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
              </linearGradient>

              {/* Soft ribbon drop shadow */}
              <filter id="ribbonShadow" x="-20%" y="-20%" width="160%" height="160%">
                <feDropShadow dx="3" dy="8" stdDeviation="5" floodColor="#310F10" floodOpacity="0.25" />
              </filter>
            </defs>

            {/* Ribbon Drop Shadow */}
            <path
              d={`M 110 0 C ${ribbonCurve.cp1x} ${ribbonCurve.cp1y}, ${ribbonCurve.cp2x} ${ribbonCurve.cp2y}, ${ribbonCurve.endX} ${ribbonCurve.endY}`}
              stroke="rgba(49,15,16,0.2)"
              strokeWidth="9"
              strokeLinecap="round"
              fill="none"
              transform="translate(4, 8)"
            />

            {/* Base Silk Ribbon Strip */}
            <path
              d={`M 110 0 C ${ribbonCurve.cp1x} ${ribbonCurve.cp1y}, ${ribbonCurve.cp2x} ${ribbonCurve.cp2y}, ${ribbonCurve.endX} ${ribbonCurve.endY}`}
              stroke="url(#silkRibbon)"
              strokeWidth="7.5"
              strokeLinecap="round"
              fill="none"
              filter="url(#ribbonShadow)"
            />

            {/* Fine Shiny Spine (Silk sheen) */}
            <path
              d={`M 110 0 C ${ribbonCurve.cp1x} ${ribbonCurve.cp1y}, ${ribbonCurve.cp2x} ${ribbonCurve.cp2y}, ${ribbonCurve.endX} ${ribbonCurve.endY}`}
              stroke="url(#silkHighlight)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.75"
            />

            {/* Top Attachment Knot */}
            <ellipse cx="110" cy="0" rx="6" ry="3.5" fill="#5A050A" />

            {/* Bottom Loop / Knot tying through tag eyelet */}
            <g transform={`translate(${ribbonCurve.endX}, ${ribbonCurve.endY})`}>
              <circle cx="0" cy="0" r="7.5" fill="#4A0508" />
              <path
                d="M -5 -3 C -1 -8, 5 -6, 5 2 C 5 7, -2 8, -5 3 Z"
                fill="#8A0C13"
                stroke="#FAF7EE"
                strokeWidth="0.5"
                opacity="0.8"
              />
              <circle cx="0" cy="0" r="3.5" fill="#FAF7EE" opacity="0.3" />
            </g>
          </svg>
        </div>

        {/* 3D Hanging Tag Card - Positioned lower with suspended physics */}
        <div
          className="absolute top-[205px] left-1/2 -translate-x-1/2 cursor-grab active:cursor-grabbing"
          style={{
            transformOrigin: "top center",
            transformStyle: "preserve-3d",
            transform: `translate3d(${angles.transX}px, ${angles.transY}px, 0px) rotateZ(${angles.rotZ}deg) rotateY(${angles.rotY}deg) rotateX(${angles.rotX}deg)`,
            transition: "transform 0.08s ease-out",
          }}
        >
          {/* Tag Body in 3D */}
          <div
            className="relative rounded-2xl overflow-hidden transition-shadow duration-300"
            style={{
              width: "clamp(200px, 24vw, 300px)",
              padding: "clamp(18px, 2.4vw, 28px) clamp(20px, 2.8vw, 32px)",
              background: "linear-gradient(145deg, #870D14 0%, #74070D 38%, #560509 75%, #3C0306 100%)",
              /* Realistic multi-layer 3D cardboard bevel & elevation */
              boxShadow: `
                1px 1px 0px #430407,
                2px 2px 0px #3A0306,
                3px 3px 0px #310204,
                4px 5px 0px #260103,
                ${angles.rotY > 0 ? "18px" : "-12px"} 24px 35px -5px rgba(49, 15, 16, 0.45),
                0 6px 16px rgba(0, 0, 0, 0.25)
              `,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Elegant Double Inset Gold Foil Border */}
            <div
              className="absolute inset-[6px] rounded-xl pointer-events-none"
              style={{
                border: "1.5px solid rgba(243, 227, 178, 0.45)",
                boxShadow: "inset 0 0 0 1px rgba(116, 7, 13, 0.6), inset 0 0 12px rgba(243, 227, 178, 0.08)",
              }}
            />

            {/* Corner Decorative Ornaments */}
            <div className="absolute top-2 left-2 text-[#F3E3B2]/50 text-[10px] leading-none pointer-events-none">✦</div>
            <div className="absolute top-2 right-2 text-[#F3E3B2]/50 text-[10px] leading-none pointer-events-none">✦</div>
            <div className="absolute bottom-2 left-2 text-[#F3E3B2]/50 text-[10px] leading-none pointer-events-none">✦</div>
            <div className="absolute bottom-2 right-2 text-[#F3E3B2]/50 text-[10px] leading-none pointer-events-none">✦</div>

            {/* 3D Metallic Brass/Gold Eyelet (Grommet) at top */}
            <div className="flex justify-center -mt-1 mb-3.5">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center relative"
                style={{
                  background: "radial-gradient(circle at 35% 35%, #FDE49E 0%, #D4A342 55%, #8B651B 100%)",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.7)",
                }}
              >
                {/* Hole through tag */}
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{
                    background: "radial-gradient(circle, #240506 60%, #4A0508 100%)",
                    boxShadow: "inset 0 1.5px 3px rgba(0,0,0,0.8)",
                  }}
                />
              </div>
            </div>

            {/* Moving Dynamic 3D Specular Sheen (Reflects light as tag rotates) */}
            <div
              className="absolute inset-0 pointer-events-none opacity-45"
              style={{
                background: `linear-gradient(${115 + angles.rotY * 2.5}deg, rgba(255,255,255,0.35) 0%, rgba(243,227,178,0.15) 35%, transparent 65%)`,
              }}
            />

            {/* Message Content: Elegant Serif Typography in Site Warm Beige */}
            <div className="relative z-10 text-center flex flex-col items-center justify-center">
              {/* Subtle Brand Tag Header */}
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.28em] text-[#F3E3B2]/80 font-semibold mb-2 block">
                Engagement & Soin
              </span>

              {/* Main Message requested by user */}
              <p
                className="font-serif italic text-sm sm:text-base md:text-lg text-[#FAF7EE] leading-snug tracking-wide font-normal"
                style={{
                  textShadow: "0 2px 4px rgba(49, 15, 16, 0.8), 0 0 1px rgba(243, 227, 178, 0.3)",
                }}
              >
                «&nbsp;La santé de votre peau,
                <br />
                <span className="font-medium text-[#F3E3B2] not-italic font-serif">
                  notre responsabilité.
                </span>&nbsp;»
              </p>

              {/* Delicate Gold Underline Divider */}
              <div className="flex items-center gap-1.5 mt-3 opacity-75">
                <div className="w-5 h-[1px] bg-gradient-to-r from-transparent to-[#F3E3B2]" />
                <div className="w-1.5 h-1.5 rotate-45 bg-[#F3E3B2]" />
                <div className="w-5 h-[1px] bg-gradient-to-l from-transparent to-[#F3E3B2]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
