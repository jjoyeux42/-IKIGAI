import React from "react";

export const WideIslandSvg = ({ color }: { color: string }) => (
  <svg
    viewBox="0 0 300 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M150 50 C 100 30, 50 40, 30 80 C 10 120, 30 150, 50 170 C 70 190, 130 190, 150 190 C 170 190, 230 190, 250 170 C 270 150, 290 120, 270 80 C 250 40, 200 30, 150 50Z"
      fill={`#${color}`}
      opacity="0.7"
    />
    <path
      d="M150 80 C 120 70, 80 75, 70 100 C 60 125, 70 140, 80 150 C 90 160, 130 160, 150 160 C 170 160, 210 160, 220 150 C 230 140, 240 125, 230 100 C 220 75, 180 70, 150 80Z"
      fill={`#${color}`}
      opacity="0.9"
    />
    <circle cx="150" cy="120" r="20" fill={`#${color}`} />
    <circle cx="100" cy="130" r="10" fill={`#${color}`} opacity="0.8" />
    <circle cx="200" cy="130" r="10" fill={`#${color}`} opacity="0.8" />
  </svg>
);

export default WideIslandSvg;