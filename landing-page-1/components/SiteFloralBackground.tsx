"use client";

export default function SiteFloralBackground({
  className = "",
  opacity = 0.65,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Master 5-Petal Flower Symbol (Matching the user-favorite Vinillia floral motif) */}
          <g id="viniliaFlower">
            {/* 5 soft pink petals */}
            <circle cx="0" cy="-6.5" r="5" fill="#F7DAE7" />
            <circle cx="6.2" cy="-2" r="5" fill="#F7DAE7" />
            <circle cx="4" cy="5.5" r="5" fill="#F7DAE7" />
            <circle cx="-4" cy="5.5" r="5" fill="#F7DAE7" />
            <circle cx="-6.2" cy="-2" r="5" fill="#F7DAE7" />
            {/* Soft cream center */}
            <circle cx="0" cy="0" r="3.2" fill="#FFF0F5" />
            {/* Delicate ruby pistil */}
            <circle cx="0" cy="0" r="1.6" fill="#A55166" opacity="0.65" />
          </g>

          {/* Single Floating Petal Symbol */}
          <g id="viniliaPetal">
            <path
              d="M0,0 C-3,-4.5 -3,-9 0,-11 C3,-9 3,-4.5 0,0 Z"
              fill="#F7DAE7"
              opacity="0.85"
            />
          </g>

          {/* Seamless Repeating Tile Pattern */}
          <pattern
            id="viniliaFloralPattern"
            width="320"
            height="320"
            patternUnits="userSpaceOnUse"
          >
            {/* Flower 1 - Top Left */}
            <use
              href="#viniliaFlower"
              x="60"
              y="55"
              transform="rotate(14 60 55) scale(1.1)"
              opacity="0.8"
            />

            {/* Flower 2 - Top Right */}
            <use
              href="#viniliaFlower"
              x="255"
              y="85"
              transform="rotate(-22 255 85) scale(0.9)"
              opacity="0.75"
            />

            {/* Flower 3 - Center */}
            <use
              href="#viniliaFlower"
              x="165"
              y="185"
              transform="rotate(38 165 185) scale(1.05)"
              opacity="0.85"
            />

            {/* Flower 4 - Bottom Left */}
            <use
              href="#viniliaFlower"
              x="50"
              y="265"
              transform="rotate(-15 50 265) scale(0.95)"
              opacity="0.75"
            />

            {/* Flower 5 - Bottom Right */}
            <use
              href="#viniliaFlower"
              x="275"
              y="270"
              transform="rotate(25 275 270) scale(1.15)"
              opacity="0.8"
            />

            {/* Soft Floating Petals */}
            <use
              href="#viniliaPetal"
              x="125"
              y="105"
              transform="rotate(45 125 105) scale(1.1)"
              opacity="0.7"
            />
            <use
              href="#viniliaPetal"
              x="215"
              y="140"
              transform="rotate(-35 215 140) scale(0.95)"
              opacity="0.65"
            />
            <use
              href="#viniliaPetal"
              x="115"
              y="225"
              transform="rotate(80 115 225) scale(1.05)"
              opacity="0.7"
            />
            <use
              href="#viniliaPetal"
              x="210"
              y="290"
              transform="rotate(-65 210 290) scale(1.15)"
              opacity="0.65"
            />

            {/* Tiny delicate buds */}
            <circle cx="185" cy="50" r="2.2" fill="#E2B4C1" opacity="0.65" />
            <circle cx="295" cy="180" r="2.4" fill="#E2B4C1" opacity="0.7" />
            <circle cx="35" cy="160" r="2.2" fill="#E2B4C1" opacity="0.65" />
          </pattern>
        </defs>

        {/* Seamless Infinite Fill with controllable opacity */}
        <rect
          width="100%"
          height="100%"
          fill="url(#viniliaFloralPattern)"
          opacity={opacity}
        />
      </svg>
    </div>
  );
}
