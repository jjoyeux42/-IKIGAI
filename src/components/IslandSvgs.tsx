import React from "react";

export const TreasureChestSvg = (props: React.SVGAttributes<SVGElement>) => (
  <svg width="40" height="40" viewBox="0 0 40 40" {...props}>
    <rect x="5" y="15" width="30" height="20" rx="2" fill="#8B4513" />
    <rect x="5" y="15" width="30" height="5" rx="1" fill="#A0522D" />
    <rect x="19" y="15" width="2" height="20" fill="#A0522D" />
    <circle cx="10" cy="25" r="2" fill="#FFD700" />
    <circle cx="30" cy="25" r="2" fill="#FFD700" />
  </svg>
);

export const TrophyChestSvg = (props: React.SVGAttributes<SVGElement>) => (
  <svg width="40" height="40" viewBox="0 0 40 40" {...props}>
    <path d="M20 5L25 15H15L20 5Z" fill="#FFD700" />
    <rect x="15" y="15" width="10" height="15" fill="#FFD700" />
    <rect x="18" y="30" width="4" height="5" fill="#FFD700" />
    <rect x="16" y="35" width="8" height="2" fill="#FFD700" />
  </svg>
);

// Autres composants SVG susceptibles d'être importés
export const BookSvg = (props: React.SVGAttributes<SVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M21,4H3C2.447,4,2,4.447,2,5v14c0,0.553,0.447,1,1,1h18c0.553,0,1-0.447,1-1V5C22,4.447,21.553,4,21,4z M20,18H4V6h16V18z"/>
    <path d="M9.5,8h5C14.776,8,15,7.776,15,7.5S14.776,7,14.5,7h-5C9.224,7,9,7.224,9,7.5S9.224,8,9.5,8z"/>
    <path d="M9.5,11h5c0.276,0,0.5-0.224,0.5-0.5S14.776,10,14.5,10h-5C9.224,10,9,10.224,9,10.5S9.224,11,9.5,11z"/>
    <path d="M9.5,14h5c0.276,0,0.5-0.224,0.5-0.5S14.776,13,14.5,13h-5C9.224,13,9,13.224,9,13.5S9.224,14,9.5,14z"/>
  </svg>
);

export const DumbbellSvg = (props: React.SVGAttributes<SVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.57,14.86L22,13.43L20.57,12,17,15.57V8.43L20.57,12,22,10.57,20.57,9.14,17,12.71V5.57L18.57,7.14,20,5.71l-1.43-1.43L17,5.71V4a1,1,0,0,0-2,0V17a1,1,0,0,0,2,0V15.71L20.57,19.14,22,17.71Z"/>
    <path d="M13.57,14.86,15,13.43,13.57,12,10,15.57V8.43L13.57,12,15,10.57,13.57,9.14,10,12.71V5.57L11.57,7.14,13,5.71,11.57,4.28,10,5.71V4A1,1,0,0,0,8,4V17a1,1,0,0,0,2,0V15.71L13.57,19.14,15,17.71Z"/>
    <path d="M6.57,14.86,8,13.43,6.57,12,3,15.57V8.43L6.57,12,8,10.57,6.57,9.14,3,12.71V5.57L4.57,7.14,6,5.71,4.57,4.28,3,5.71V4A1,1,0,0,0,1,4V17a1,1,0,0,0,2,0V15.71L6.57,19.14,8,17.71Z"/>
  </svg>
);

export const TrophySvg = (props: React.SVGAttributes<SVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18,5h-2V3H8v2H6C4.897,5,4,5.897,4,7v2c0,2.206,1.794,4,4,4h1c0,1.103,0.897,2,2,2h2c1.103,0,2-0.897,2-2h1c2.206,0,4-1.794,4-4V7C20,5.897,19.103,5,18,5z M6,7h2v4c-1.103,0-2-0.897-2-2V7z M18,9c0,1.103-0.897,2-2,2V7h2V9z"/>
    <path d="M8 18H16V20H8z"/>
  </svg>
);

export const TreasureSvg = (props: React.SVGAttributes<SVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M21,4h-8V3c0-0.553-0.447-1-1-1h-0.5C10.12,2,10,2.12,10,2.5v0.547C10,3.57,9.57,4,9.047,4H3C2.447,4,2,4.447,2,5v14c0,0.553,0.447,1,1,1h18c0.553,0,1-0.447,1-1V5C22,4.447,21.553,4,21,4z M20,18H4V6h16V18z"/>
    <path d="M12,15c2.206,0,4-1.794,4-4s-1.794-4-4-4s-4,1.794-4,4S9.794,15,12,15z M12,9c1.103,0,2,0.897,2,2s-0.897,2-2,2s-2-0.897-2-2S10.897,9,12,9z"/>
  </svg>
);