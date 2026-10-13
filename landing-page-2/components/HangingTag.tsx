"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function HangingTag() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasDropped, setHasDropped] = useState(false);
  const [swayAngle, setSwayAngle] = useState(0);
  const [swayX, setSwayX] = useState(0);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // 1. Intersection Observer: Trigger the drop when user scrolls into the section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasDropped(true);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  useEffect(() => {
    // 2. React to mouse move and scroll: subtle natural trembling/sway when active, calm when static
    let lastMouseX = 0;
    let lastScrollY = window.scrollY;

    const handleMouseMove = (e: MouseEvent) => {
      if (!hasDropped) return;
      const deltaX = e.clientX - lastMouseX;
      lastMouseX = e.clientX;

      // Soft tilt based on mouse velocity
      const targetAngle = Math.max(-6, Math.min(6, deltaX * 0.4));
      const targetX = Math.max(-8, Math.min(8, deltaX * 0.5));
      setSwayAngle(targetAngle);
      setSwayX(targetX);

      // Return to calm rest state when mouse stops
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(() => {
        setSwayAngle(0);
        setSwayX(0);
      }, 400);
    };

    const handleScroll = () => {
      if (!hasDropped) return;
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      // Subtle flutter/tremble on scroll
      const scrollAngle = Math.max(-4, Math.min(4, deltaY * 0.15));
      setSwayAngle(scrollAngle);

      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(() => {
        setSwayAngle(0);
        setSwayX(0);
      }, 350);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [hasDropped]);

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-[2%] sm:left-[4%] md:left-[6%] lg:left-[8%] z-20 pointer-events-auto select-none"
      style={{
        width: "clamp(130px, 22vw, 260px)",
        transformOrigin: "top center",
      }}
    >
      <div
        className={`transition-all duration-1000 ease-[cubic-bezier(0.34,1.45,0.64,1)] ${
          hasDropped
            ? "translate-y-0 opacity-100"
            : "-translate-y-[140%] opacity-0"
        }`}
        style={{
          transformOrigin: "top center",
          transform: hasDropped
            ? `translateY(0) translateX(${swayX}px) rotate(${swayAngle}deg)`
            : "translateY(-140%)",
          transition: hasDropped
            ? "transform 0.45s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.8s ease-out"
            : "transform 1.2s cubic-bezier(0.34, 1.45, 0.64, 1), opacity 0.6s ease-out",
        }}
      >
        {/* Hanging Ribbon & Tag Container */}
        <div
          className="relative w-full aspect-[320/460] cursor-pointer drop-shadow-[0_12px_24px_rgba(116,7,13,0.18)] hover:scale-[1.03] transition-transform duration-300"
          onMouseEnter={() => {
            setSwayAngle(5);
            setTimeout(() => setSwayAngle(-3), 200);
            setTimeout(() => setSwayAngle(0), 450);
          }}
          title="La santé de votre peau, notre responsabilité"
        >
          <Image
            src="/images/hanging-tag.webp"
            alt="La santé de votre peau, notre responsabilité"
            fill
            sizes="(max-width: 768px) 160px, 260px"
            priority
            className="object-contain object-top filter brightness-[1.02]"
          />
        </div>
      </div>
    </div>
  );
}
