"use client";

interface BotanicalProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  blobColor1?: string;
  blobColor2?: string;
  strokeColor?: string;
  opacity?: number;
}

export default function FooterBotanicalFloral({
  className = "",
  width = 240,
  height = 290,
  blobColor1 = "#F5B8C7",
  blobColor2 = "#E58FA3",
  strokeColor = "#9B3D55",
  opacity = 0.85,
}: BotanicalProps) {
  return (
    <svg
      viewBox="0 0 320 380"
      width={width}
      height={height}
      className={className}
      style={{ opacity }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* --- Organic Pastel Blobs ("lbo9a3") --- */}
      <g className="blobs">
        {/* Large Left Organic Blob */}
        <path
          d="M75 140 C50 180 35 240 65 280 C95 320 180 315 220 280 C260 245 255 185 225 145 C195 105 100 100 75 140 Z"
          fill={blobColor1}
          fillOpacity="0.55"
        />

        {/* Small Upper Right Rounded Blob */}
        <path
          d="M190 120 C170 140 175 190 205 210 C235 230 280 215 290 175 C300 135 260 95 220 98 C205 99 195 110 190 120 Z"
          fill={blobColor2}
          fillOpacity="0.6"
        />
      </g>

      {/* --- Botanical Line Art ("wridat") --- */}
      <g stroke={strokeColor} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        {/* Main curved central stem */}
        <path d="M172 340 C170 270 165 210 125 105" />

        {/* Branch to upper-right buds */}
        <path d="M165 200 C175 160 188 120 182 85" />
        <path d="M175 150 C195 138 215 130 230 122" />

        {/* Branch to lower-left bud */}
        <path d="M168 250 C155 242 140 242 128 245" />

        {/* --- Top Left 5-Petal Flower --- */}
        {/* Center pistil */}
        <circle cx="123" cy="98" r="6" strokeWidth="2.2" fill="none" />

        {/* Petal 1 (Top Left) */}
        <path d="M118 94 C100 80 82 88 88 108 C94 116 114 104 118 98" />
        {/* Petal 2 (Top) */}
        <path d="M123 92 C120 70 135 55 148 68 C155 76 132 92 126 94" />
        {/* Petal 3 (Right) */}
        <path d="M129 96 C148 88 168 96 162 114 C158 124 135 106 128 102" />
        {/* Petal 4 (Bottom Right) */}
        <path d="M126 103 C138 122 135 142 118 138 C106 134 118 112 122 104" />
        {/* Petal 5 (Bottom Left) */}
        <path d="M119 101 C98 112 88 132 102 140 C114 144 118 118 120 104" />

        {/* Decorative stippling dots inside flower petals */}
        <g stroke="none" fill={strokeColor} opacity="0.85">
          <circle cx="100" cy="98" r="1.3" />
          <circle cx="106" cy="92" r="1.2" />
          <circle cx="112" cy="85" r="1.3" />
          <circle cx="132" cy="72" r="1.2" />
          <circle cx="138" cy="80" r="1.4" />
          <circle cx="148" cy="95" r="1.3" />
          <circle cx="142" cy="108" r="1.2" />
          <circle cx="126" cy="122" r="1.3" />
          <circle cx="118" cy="128" r="1.2" />
          <circle cx="106" cy="124" r="1.3" />
        </g>

        {/* --- Upper Buds --- */}
        {/* Bud 1 (Topmost) */}
        <path d="M182 85 C178 72 178 60 185 52 C194 60 194 72 188 85 Z" />
        {/* Little sepals on top */}
        <path d="M180 50 L185 45 L190 50 M185 45 L185 42" strokeWidth="1.8" />
        {/* Dots on bud 1 */}
        <g stroke="none" fill={strokeColor} opacity="0.85">
          <circle cx="184" cy="62" r="1.2" />
          <circle cx="186" cy="70" r="1.2" />
        </g>

        {/* Bud 2 (Upper right) */}
        <path d="M230 122 C236 115 246 112 254 118 C256 128 248 135 238 128 Z" />
        <path d="M255 116 L262 118 L260 124" strokeWidth="1.8" />
        <g stroke="none" fill={strokeColor} opacity="0.85">
          <circle cx="244" cy="120" r="1.2" />
          <circle cx="248" cy="124" r="1.2" />
        </g>

        {/* Bud 3 (Lower left) */}
        <path d="M128 245 C120 248 112 248 108 240 C114 232 122 235 128 240 Z" />
        <path d="M106 240 L100 242 M106 238 L102 234" strokeWidth="1.8" />
        <g stroke="none" fill={strokeColor} opacity="0.85">
          <circle cx="116" cy="242" r="1.2" />
        </g>

        {/* --- Leaves with center veins --- */}
        {/* Left leaf 1 */}
        <path d="M155 160 C130 150 105 162 98 178 C116 182 142 178 155 165" />
        <path d="M155 160 C135 165 110 172 100 177" strokeWidth="1.5" opacity="0.8" />

        {/* Left leaf 2 */}
        <path d="M160 185 C135 185 115 205 112 225 C132 222 150 210 160 190" />
        <path d="M160 185 C142 198 125 210 114 223" strokeWidth="1.5" opacity="0.8" />

        {/* Left leaf 3 (Lower) */}
        <path d="M166 225 C145 228 128 245 130 262 C148 255 160 242 166 230" />

        {/* Right branch leaves */}
        {/* Right leaf 1 (top) */}
        <path d="M192 145 C215 138 238 148 245 165 C228 170 205 165 192 150" />
        <path d="M192 145 C212 150 232 158 243 164" strokeWidth="1.5" opacity="0.8" />

        {/* Right leaf 2 */}
        <path d="M185 170 C210 168 232 182 236 200 C218 202 198 192 185 175" />
        <path d="M185 170 C205 178 222 188 234 198" strokeWidth="1.5" opacity="0.8" />

        {/* Right leaf 3 */}
        <path d="M180 198 C202 202 220 220 218 238 C202 234 190 220 180 202" />
        <path d="M180 198 C196 208 210 222 216 236" strokeWidth="1.5" opacity="0.8" />

        {/* Right leaf 4 (lower) */}
        <path d="M174 225 C195 235 208 255 202 272 C188 266 180 248 174 230" />
      </g>
    </svg>
  );
}
