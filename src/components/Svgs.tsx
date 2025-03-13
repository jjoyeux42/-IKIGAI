import type { ComponentProps } from "react";
import React from "react";

// SVG Component for Close Icon
export const CloseSvg = (props: React.SVGAttributes<SVGElement>) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
export const DoneSvg = (props: React.SVGAttributes<SVGElement>) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
};

export const BigCloseSvg = (props: React.SVGAttributes<SVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.2" />
    <path d="M15 9l-6 6M9 9l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const LessonTopBarHeart = (props: React.SVGAttributes<SVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" />
  </svg>
);

export const LessonTopBarEmptyHeart = (props: React.SVGAttributes<SVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

export const CheckmarkSvg = (props: React.SVGAttributes<SVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const LockSvg = (props: React.SVGAttributes<SVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M8 11V7a4 4 0 118 0v4" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const StarSvg = (props: React.SVGAttributes<SVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />
  </svg>
);

export const ActiveBookSvg = (props: React.SVGAttributes<SVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" fill="currentColor" />
  </svg>
);

export const GoldenBookSvg = (props: React.SVGAttributes<SVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" fill="#FFD700" />
  </svg>
);

export const BronzeLeagueSvg = (props: React.SVGAttributes<SVGElement>) => (
  <svg width={props.width || "40"} height={props.height || "40"} viewBox="0 0 40 40" fill="none" {...props}>
    <circle cx="20" cy="20" r="16" fill="#CD7F32" />
    <circle cx="20" cy="20" r="12" fill="#E9967A" />
    <path d="M15 26V14L25 20L15 26Z" fill="white" />
  </svg>
);

export const EditPencilSvg = (props: React.SVGAttributes<SVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const EmptyFireSvg = (props: React.SVGAttributes<SVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 2c1 2 2 3.5 2 5 0 1.5-1 2-2 2-1 0-2-.5-2-2 0-1.5 1-3 2-5zm0 8c3 0 5 2 5 4.5S13.5 20 12 20s-5-2-5-5.5c0-2.5 1-6.5 2.5-6.5.75 0 1.25.5 1.5 1.5.25-1 .75-1.5 1.5-1.5z" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const FireSvg = (props: React.SVGAttributes<SVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 2c1 2 2 3.5 2 5 0 1.5-1 2-2 2-1 0-2-.5-2-2 0-1.5 1-3 2-5zm0 8c3 0 5 2 5 4.5S13.5 20 12 20s-5-2-5-5.5c0-2.5 1-6.5 2.5-6.5.75 0 1.25.5 1.5 1.5.25-1 .75-1.5 1.5-1.5z" fill="currentColor" />
  </svg>
);

export const LightningProgressSvg = ({ size = 24, ...props }: { size?: number } & React.SVGAttributes<SVGElement>) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M13 2L4.093 12.688l5.296 1.254L11 22l8.907-10.688-5.297-1.254L13 2z" fill="#FFD700" />
  </svg>
);

export const EmptyMedalSvg = (props: React.SVGAttributes<SVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="9" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M7 14l-3 7h6l2-5m5 0l2 5h6l-3-7" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const ProfileFriendsSvg = (props: React.SVGAttributes<SVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
    <path d="M5 21v-2a7 7 0 0114 0v2" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const ProfileTimeJoinedSvg = (props: React.SVGAttributes<SVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const SettingsGearSvg = (props: React.SVGAttributes<SVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="2" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const LeaderboardBannerSvg = (props: React.SVGAttributes<SVGElement>) => (
  <svg width="300" height="150" viewBox="0 0 300 150" {...props}>
    <rect width="300" height="150" rx="10" fill="#F8F8F8" />
    <text x="150" y="75" fontSize="20" textAnchor="middle" fill="#333">Leaderboard Banner</text>
  </svg>
);

export const LeaderboardExplanationSvg = (props: React.SVGAttributes<SVGElement>) => (
  <svg width="120" height="120" viewBox="0 0 120 120" {...props}>
    <rect width="120" height="120" rx="10" fill="#F0F0F0" />
    <text x="60" y="60" fontSize="12" textAnchor="middle" fill="#555">Leaderboard Info</text>
  </svg>
);

export const LockedLeaderboardSvg = (props: React.SVGAttributes<SVGElement>) => (
  <svg width="240" height="200" viewBox="0 0 240 200" {...props}>
    <rect width="240" height="200" rx="10" fill="#F0F0F0" />
    <circle cx="120" cy="90" r="40" fill="#DDD" />
    <rect x="110" y="80" width="20" height="30" rx="5" fill="#AAA" />
    <circle cx="120" cy="90" r="5" fill="#F0F0F0" />
  </svg>
);

export const LockedLeagueSvg = (props: React.SVGAttributes<SVGElement>) => (
  <svg width="40" height="40" viewBox="0 0 40 40" {...props}>
    <circle cx="20" cy="20" r="18" fill="#DADADA" />
    <circle cx="20" cy="20" r="15" fill="#EEEEEE" />
    <circle cx="20" cy="20" r="8" fill="#DADADA" />
  </svg>
);

export const FirstPlaceSvg = (props: React.SVGAttributes<SVGElement>) => (
  <svg width="40" height="40" viewBox="0 0 40 40" {...props}>
    <circle cx="20" cy="20" r="20" fill="#FFD700" />
    <text x="20" y="25" fontSize="14" textAnchor="middle" fill="#FFF" fontWeight="bold">1</text>
  </svg>
);

export const SecondPlaceSvg = (props: React.SVGAttributes<SVGElement>) => (
  <svg width="40" height="40" viewBox="0 0 40 40" {...props}>
    <circle cx="20" cy="20" r="20" fill="#C0C0C0" />
    <text x="20" y="25" fontSize="14" textAnchor="middle" fill="#FFF" fontWeight="bold">2</text>
  </svg>
);

export const ThirdPlaceSvg = (props: React.SVGAttributes<SVGElement>) => (
  <svg width="40" height="40" viewBox="0 0 40 40" {...props}>
    <circle cx="20" cy="20" r="20" fill="#CD7F32" />
    <text x="20" y="25" fontSize="14" textAnchor="middle" fill="#FFF" fontWeight="bold">3</text>
  </svg>
);

// Ajout des SVG manquants dans WideIslandSvg
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

export const GlobeSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg
      width="360"
      height="360"
      viewBox="0 0 360 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M180 360C279.411 360 360 279.411 360 180C360 80.5887 279.411 0 180 0C80.5887 0 0 80.5887 0 180C0 279.411 80.5887 360 180 360Z"
        fill="#24D4DE"
        fillOpacity="0.04"
      />
      <path
        d="M180.382 331.398C263.786 331.398 331.398 263.786 331.398 180.382C331.398 96.9778 263.786 29.3656 180.382 29.3656C96.9779 29.3656 29.3657 96.9778 29.3657 180.382C29.3657 263.786 96.9779 331.398 180.382 331.398Z"
        fill="#24D4DE"
        fillOpacity="0.06"
      />
      <path
        d="M180.478 306.574C250.119 306.574 306.575 250.119 306.575 180.478C306.575 110.836 250.119 54.3807 180.478 54.3807C110.836 54.3807 54.3807 110.836 54.3807 180.478C54.3807 250.119 110.836 306.574 180.478 306.574Z"
        fill="#49C0F8"
      />
      <path
        opacity="0.732096"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M95.3311 195.735C118.141 195.735 136.633 214.226 136.633 237.037C136.633 258.078 120.898 275.444 100.554 278.011L100.551 278.013C76.428 258.222 59.7785 229.657 55.4786 197.194L55.48 197.192C58.9565 196.242 62.6159 195.735 66.3937 195.735H95.3311Z"
        fill="#58A700"
      />
      <path
        opacity="0.732096"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M162.59 91.2974C162.59 111.499 148.085 128.314 128.922 131.895L128.341 131.999L128.382 132.296C128.619 134.088 128.742 135.916 128.742 137.773C128.742 160.583 110.25 179.074 87.4401 179.074H58.5027C57.176 179.074 55.8639 179.012 54.5692 178.889L54.5665 178.888C55.274 121.617 94.1611 73.5406 146.951 58.9345L146.953 58.9361C156.48 66.5021 162.59 78.1863 162.59 91.2974Z"
        fill="#58A700"
      />
      <path
        opacity="0.732096"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M249.314 153.118C272.124 153.118 290.615 171.61 290.615 194.42C290.615 201.494 288.837 208.153 285.702 213.974L295.041 215.768C297.111 216.165 299.12 216.745 301.051 217.491L301.055 217.492C294.852 237.723 283.697 255.788 269.005 270.274L249.489 270.271C230.312 270.271 214.739 254.843 214.504 235.722L211.257 235.721C188.446 235.721 169.955 217.23 169.955 194.42C169.955 171.61 188.446 153.118 211.257 153.118H249.314Z"
        fill="#58A700"
      />
      <path
        opacity="0.732096"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M241.033 69.8457C263.696 82.2766 282.123 101.468 293.601 124.706L274.213 124.708C270.958 135.27 261.12 142.946 249.489 142.946H236.511C222.224 142.946 210.642 131.365 210.642 117.078C210.642 103.34 221.352 92.1025 234.879 91.2605C234.856 90.75 234.845 90.2359 234.845 89.7192C234.845 82.3763 237.106 75.5618 240.972 69.9344L241.033 69.8457Z"
        fill="#58A700"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M259.135 253.435C266.273 253.435 272.368 257.9 274.779 264.189C266.999 272.949 258.016 280.617 248.09 286.934L210.029 286.932C200.779 286.932 193.28 279.433 193.28 270.183C193.28 260.933 200.779 253.435 210.029 253.435H259.135Z"
        fill="#BBF3F6"
      />
      <path
        d="M184.774 74.5488H164.781C155.531 74.5488 148.032 82.0475 148.032 91.2975C148.032 100.547 155.531 108.046 164.781 108.046H184.774C194.024 108.046 201.523 100.547 201.523 91.2975C201.523 82.0475 194.024 74.5488 184.774 74.5488Z"
        fill="#BBF3F6"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M95.65 87.1767L106.979 87.1784C116.229 87.1784 123.728 94.677 123.728 103.927C123.728 106.194 123.277 108.356 122.461 110.329L127.849 110.328C137.099 110.328 144.598 117.827 144.598 127.077C144.598 136.327 137.099 143.826 127.849 143.826H107.856C98.606 143.826 91.1074 136.327 91.1074 127.077C91.1074 124.81 91.5579 122.648 92.3742 120.675L69.4354 120.675C76.1737 108.189 84.9564 96.9698 95.335 87.4643L95.65 87.1767Z"
        fill="#BBF3F6"
      />
    </svg>
  );
};

export const GlobeIconSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg viewBox="0 0 46 46" fill="none" {...props}>
      <rect
        x="14.3356"
        width="29.533"
        height="29.533"
        rx="14.7665"
        transform="rotate(26.843 14.3356 0)"
        fill="#84D8FF"
      />
      <path
        d="M35.815 27.4202C39.9852 19.1801 36.7117 9.1259 28.5059 4.91498L28.42 4.87151C27.7585 4.53674 27.4936 3.7291 27.8284 3.06759C28.1631 2.40611 28.9707 2.14124 29.6322 2.47595L29.7521 2.53661C39.2561 7.42736 43.0445 19.0807 38.2105 28.6326C35.4596 34.0683 30.5066 37.657 24.9852 38.863V42.1031H27.4216C28.0945 42.1031 28.6399 42.6485 28.6399 43.3214C28.6399 43.9942 28.0945 44.5397 27.4216 44.5397H18.8936C18.2207 44.5397 17.6753 43.9942 17.6753 43.3214C17.6753 42.6485 18.2207 42.1031 18.8936 42.1031H21.3303V39.3058C18.2548 39.3855 15.1166 38.7355 12.1737 37.271L12.0537 37.2108C11.3922 36.8761 11.1273 36.0684 11.4621 35.4069C11.7968 34.7454 12.6045 34.4806 13.266 34.8153C21.5348 39 31.6303 35.6891 35.815 27.4202Z"
        fill="#FF9600"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.939 34.5711C19.3448 34.7666 16.6659 34.279 14.1754 33.0185C12.9784 32.4128 11.8994 31.6662 10.9485 30.8092C10.8494 30.0944 10.9605 29.343 11.313 28.6512C12.2294 26.8527 14.4303 26.1376 16.2288 27.054L20.5708 29.2664C22.3693 30.1828 23.0844 32.3836 22.168 34.1822C22.0988 34.3181 22.0222 34.4478 21.939 34.5711ZM35.367 17.1728C35.9334 20.2408 35.536 23.5124 34.0185 26.5109C33.112 28.3022 31.8902 29.8291 30.4548 31.0583L29.1899 30.4138C25.5928 28.581 24.1626 24.1792 25.9954 20.5822C27.7507 17.1371 31.8625 15.6797 35.367 17.1728ZM24.321 5.48865C26.3883 6.57048 27.2043 9.11783 26.1424 11.202C25.0733 13.3003 22.5056 14.1346 20.4073 13.0655L20.2654 12.9932C20.2119 14.0587 19.938 15.1304 19.4223 16.1425C17.4641 19.9856 12.7613 21.5136 8.91819 19.5555C7.85295 19.0127 6.96557 18.2591 6.28101 17.3713C6.52338 15.9462 6.9808 14.5328 7.66777 13.1754C10.8254 6.93606 17.8073 3.90455 24.321 5.48865Z"
        fill="#58CC02"
      />
    </svg>
  );
};

export const PodcastIconSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg viewBox="0 0 46 46" fill="none" {...props}>
      <g clipPath="url(#clip0)">
        <path
          d="M40.9961 31C40.9961 26.5817 37.4144 23 32.9961 23H29.9961V39H32.9961C37.4144 39 40.9961 35.4183 40.9961 31Z"
          fill="#CE82FF"
        />
        <path
          d="M4.99609 31C4.99609 26.5817 8.57782 23 12.9961 23H15.9961V39H12.9961C8.57782 39 4.99609 35.4183 4.99609 31Z"
          fill="#CE82FF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.99609 23C7.99609 14.7157 14.7118 8 22.9961 8C31.2804 8 37.9961 14.7157 37.9961 23V29H32.9961V32H37.9961H40.9961V29V23C40.9961 13.0589 32.9372 5 22.9961 5C13.055 5 4.99609 13.0589 4.99609 23V29V32H7.99609H11.9961V29H7.99609V23Z"
          fill="#CE82FF"
        />
        <path
          d="M10.9961 25C10.9961 22.7909 12.787 21 14.9961 21C17.2052 21 18.9961 22.7909 18.9961 25V37C18.9961 39.2091 17.2052 41 14.9961 41C12.787 41 10.9961 39.2091 10.9961 37V25Z"
          fill="#9069CD"
        />
        <path
          d="M26.9961 25C26.9961 22.7909 28.787 21 30.9961 21C33.2052 21 34.9961 22.7909 34.9961 25V37C34.9961 39.2091 33.2052 41 30.9961 41C28.787 41 26.9961 39.2091 26.9961 37V25Z"
          fill="#9069CD"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="37.3484"
            height="36.2166"
            fill="white"
            transform="translate(4.32617 4.8916)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ChevronDownSvg = () => {
  return (
    <svg height="40" viewBox="0 96 960 960" width="40">
      <path
        fill="white"
        d="M480 717.138 233.623 470.761l53.71-53.71L480 610.385l192.667-192.667 53.71 53.71L480 717.138Z"
      />
    </svg>
  );
};

export const TreasureProgressSvg = () => {
  return (
    <svg width="38" height="40" viewBox="0 0 38 40" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.6449 0H14.7191C13.4736 0 12.4546 1.01903 12.4546 2.26452V2.9248H4.8748C3.79785 2.9248 2.9248 3.79785 2.9248 4.8748V6.3732C1.75898 7.0475 0.974609 8.30793 0.974609 9.75156V20.485C0.383741 20.55 0 20.9835 0 21.6088V37.8693C0 38.5487 0.452903 39.0016 1.13226 39.0016H7.92581V38.9978H29.4395V39.0016H36.233C36.9124 39.0016 37.3653 38.5487 37.3653 37.8693V21.6088C37.3653 20.9295 36.9124 20.4766 36.233 20.4766H36.0746V9.75156C36.0746 8.30809 35.2904 7.04778 34.1248 6.37343V4.8748C34.1248 3.79785 33.2518 2.9248 32.1748 2.9248H24.9094V2.26452C24.9094 1.01903 23.8904 0 22.6449 0Z"
        fill="#F9D448"
      />
      <path
        d="M2.9248 4.87578C2.9248 3.79883 3.79785 2.92578 4.8748 2.92578H32.1748C33.2518 2.92578 34.1248 3.79883 34.1248 4.87578V15.6008C34.1248 16.6777 33.2518 17.5508 32.1748 17.5508H4.87481C3.79785 17.5508 2.9248 16.6777 2.9248 15.6008V4.87578Z"
        fill="#F9D448"
      />
      <path
        d="M14.7191 3.05176e-05H22.6449C23.8904 3.05176e-05 24.9094 1.01906 24.9094 2.26455V11.3226C24.9094 12.5681 23.8904 13.5871 22.6449 13.5871H14.7191C13.4736 13.5871 12.4546 12.5681 12.4546 11.3226V2.26455C12.4546 1.01906 13.4736 3.05176e-05 14.7191 3.05176e-05Z"
        fill="#F9D448"
      />
      <path
        d="M0.974609 9.75156C0.974609 7.59765 2.7207 5.85156 4.87461 5.85156H32.1746C34.3285 5.85156 36.0746 7.59765 36.0746 9.75156V22.4266H0.974609V9.75156Z"
        fill="#AA572A"
      />
      <rect x="4.875" y="9.75003" width="27.3" height="11.7" fill="#743611" />
      <path d="M33.15 21.4499H4.875V36.0749H33.15V21.4499Z" fill="#AA572A" />
      <path
        d="M32.8358 34.4727H4.5293V39.0017H32.8358V34.4727Z"
        fill="#F9D448"
      />
      <path
        d="M14.7191 16.3516H22.6449C23.8904 16.3516 24.9094 17.3706 24.9094 18.6161V27.6741C24.9094 28.9196 23.8904 29.9387 22.6449 29.9387H14.7191C13.4736 29.9387 12.4546 28.9196 12.4546 27.6741V18.6161C12.4546 17.3706 13.4736 16.3516 14.7191 16.3516Z"
        fill="#F9D448"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.5124 21.4439C21.5124 19.8588 20.2669 18.6133 18.6817 18.6133C17.0966 18.6133 15.8511 19.8588 15.8511 21.4439C15.8511 22.3854 16.2904 23.207 16.9793 23.7191L16.0781 26.0848V26.4244C16.0781 27.1038 16.531 27.5567 17.2104 27.5567H19.9278H20.2675C20.8336 27.4435 21.2865 26.7641 21.0601 26.198L20.384 23.7192C21.073 23.2071 21.5124 22.3854 21.5124 21.4439Z"
        fill="#E3A23C"
      />
      <path
        d="M1.13226 20.4766H6.79355C7.4729 20.4766 7.92581 20.9295 7.92581 21.6088V39.0016H1.13226C0.452903 39.0016 0 38.5487 0 37.8693V21.6088C0 20.9295 0.452903 20.4766 1.13226 20.4766Z"
        fill="#F9D448"
      />
      <path
        d="M30.5717 20.4766H36.233C36.9124 20.4766 37.3653 20.9295 37.3653 21.6088V37.8693C37.3653 38.5487 36.9124 39.0016 36.233 39.0016H29.4395V21.6088C29.4395 20.9295 29.8924 20.4766 30.5717 20.4766Z"
        fill="#F9D448"
      />
    </svg>
  );
};

export const LightningProgressSvg = ({ size = 56 }: { size?: number }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.082 10.2876C31.7904 7.41973 28.1083 6.43313 26.4218 8.77092L12.5412 28.0121C11.2575 29.7916 12.1524 32.3055 14.2719 32.8734L22.1682 34.9892L23.3346 46.4591C23.6262 49.327 27.3083 50.3135 28.9948 47.9758L42.8754 28.7346C44.1592 26.9551 43.2642 24.4412 41.1447 23.8733L33.2485 21.7575L32.082 10.2876Z"
        fill="#FFD900"
      />
      <path
        d="M15.2647 30.5578C14.5466 30.3639 14.4773 29.3724 15.1614 29.0805L20.6493 26.739C21.1448 26.5276 21.7009 26.8677 21.7385 27.4051L22.011 31.3016C22.0485 31.839 21.5452 32.2531 21.0251 32.1127L15.2647 30.5578Z"
        fill="#F7C100"
      />
      <path
        d="M40.4157 25.8056C41.1338 25.9995 41.2031 26.991 40.519 27.2829L35.0311 29.6244C34.5356 29.8358 33.9795 29.4957 33.9419 28.9583L33.6695 25.0618C33.6319 24.5244 34.1353 24.1103 34.6554 24.2507L40.4157 25.8056Z"
        fill="#FFEF8F"
      />
    </svg>
  );
};

export const ChevronLeftSvg = () => {
  return (
    <svg height="40" viewBox="0 96 960 960" width="40">
      <path
        fill="currentColor"
        d="M560.667 822.377 313.623 575.333 560.667 328.29l53.71 53.71-193.334 193.333 193.334 193.334-53.71 53.71Z"
      />
    </svg>
  );
};

export const ChevronRightSvg = () => {
  return (
    <svg height="40" viewBox="0 96 960 960" width="40">
      <path
        fill="currentColor"
        d="m375.333 822.377-53.71-53.71 193.334-193.334L321.623 382l53.71-53.71 247.044 247.043-247.044 247.044Z"
      />
    </svg>
  );
};

export const CheckmarkSvg = () => {
  return (
    <svg width="42" height="34" viewBox="0 0 42 34" fill="none">
      <g clipPath="url(#clip0_7030_116512)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.5239 18.112L14.4053 13.9934C13.1459 12.734 11.104 12.734 9.84455 13.9934C8.58514 15.2528 8.58514 17.2947 9.84455 18.5541L16.1331 24.8427C16.7889 25.4985 17.6569 25.8128 18.5161 25.7856C19.3802 25.817 20.2545 25.5028 20.9142 24.8432L32.2521 13.5053C33.5115 12.2459 33.5115 10.204 32.2521 8.94456C30.9927 7.68515 28.9508 7.68515 27.6914 8.94456L18.5239 18.112Z"
          fill="#CD7900"
        />
      </g>
      <defs>
        <clipPath id="clip0_7030_116512">
          <rect
            width="24.2966"
            height="17.7878"
            fill="white"
            transform="translate(8.89999 8)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const GoldenShineSvg = () => {
  return (
    <svg width="56" height="46" viewBox="0 0 56 46" fill="none">
      <path
        d="M34.2346 3.25135C35.3157 2.1269 34.7053 0.276787 33.1512 0.143156C32.0512 0.0485729 30.9331 0 29.8002 0C13.342 0 0 10.2517 0 22.8979C0 26.3985 1.02236 29.7157 2.85016 32.6827C3.47761 33.7012 4.88715 33.7751 5.71626 32.9128L34.2346 3.25135Z"
        fill="#FFE700"
      />
      <path
        d="M55.0954 12.5231C53.3548 9.61289 49.8186 6.8733 47.2219 5.21074C46.2417 4.58319 44.9772 4.77038 44.1616 5.60066C34.5035 15.4328 18.3374 31.8498 12.05 38.0427C10.9724 39.1041 10.996 40.8688 12.249 41.716C16.2271 44.4058 20.9121 45.5851 23.4852 45.9072C24.1853 45.9949 24.8657 45.7259 25.3691 45.2315C34.775 35.9934 50.2041 19.9015 54.7166 15.0879C55.3787 14.3818 55.5923 13.3539 55.0954 12.5231Z"
        fill="#FFE700"
      />
    </svg>
  );
};

export const StarSvg = () => {
  return (
    <svg width="42" height="34" viewBox="0 0 42 34" fill="none">
      <g clipPath="url(#clip0_7030_116432)">
        <path
          d="M18.7521 4.41157C19.6598 2.52948 22.3402 2.52948 23.2479 4.41157L25.8539 9.81517C26.225 10.5847 26.9639 11.1109 27.8125 11.2099L33.7906 11.9076C35.9269 12.1569 36.7684 14.8114 35.1658 16.2459L30.8845 20.0785C30.224 20.6697 29.9267 21.567 30.1035 22.4357L31.2468 28.053C31.6684 30.124 29.4857 31.7487 27.6228 30.7506L22.1786 27.8339C21.4424 27.4395 20.5576 27.4395 19.8214 27.8339L14.3772 30.7506C12.5143 31.7487 10.3316 30.124 10.7532 28.053L11.8965 22.4357C12.0733 21.567 11.776 20.6697 11.1155 20.0785L6.83415 16.2459C5.23162 14.8114 6.07307 12.1569 8.20939 11.9076L14.1875 11.2099C15.0361 11.1109 15.775 10.5847 16.1461 9.81517L18.7521 4.41157Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_7030_116432">
          <rect
            width="30"
            height="28"
            fill="white"
            transform="translate(6 3)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const LockedBookSvg = () => {
  return (
    <svg width="42" height="34" viewBox="0 0 42 34" fill="none">
      <path
        d="M42 8.49236C42 6.4901 40.3329 4.86694 38.2765 4.86694H29.9359C24.4521 4.86694 20.0066 9.19536 20.0066 14.5347V31.8401C20.0066 32.5075 20.5686 33.0638 21.2481 32.9753C25.129 32.4696 23.7034 29.5177 30.4323 29.5177C32.3039 29.5177 36.1106 29.5177 38.2776 29.5177C40.3341 29.5177 42 27.8945 42 25.8923V8.49236Z"
        fill="#AFAFAF"
      />
      <path
        d="M0 8.49237C0 6.4901 1.66706 4.86694 3.72348 4.86694H12.0641C17.5479 4.86694 21.9934 9.19536 21.9934 14.5347V31.8401C21.9934 32.5075 21.4313 33.0594 20.749 32.9948C15.97 32.5427 18.3992 29.3905 11.5676 29.3905C9.69604 29.3905 5.88932 29.3905 3.72233 29.3905C1.66591 29.3905 0 27.7673 0 25.765V8.49237Z"
        fill="#AFAFAF"
      />
      <path
        d="M36.8864 3.90058C36.8864 2.29877 35.5527 1.00024 33.9076 1.00024H27.95C23.563 1.00024 20.0066 4.46298 20.0066 8.73448V26.1365C20.0066 26.6704 20.4591 27.1221 20.9949 27.0082C23.3482 26.5078 23.1355 24.2029 28.4465 24.2029C29.9718 24.2029 32.1481 24.2029 33.9087 24.2029C35.5538 24.2029 36.8864 22.9044 36.8864 21.3026V3.90058Z"
        fill="#D8D8D8"
      />
      <path
        d="M5.11316 3.90058C5.11316 2.29877 6.44681 1.00024 8.09194 1.00024H14.0495C18.4366 1.00024 21.9929 4.46298 21.9929 8.73448V26.1365C21.9929 26.6704 21.5445 27.1184 21.0036 27.0307C18.236 26.5817 18.9484 24.2029 13.5531 24.2029C12.0277 24.2029 9.85141 24.2029 8.09083 24.2029C6.44569 24.2029 5.11316 22.9044 5.11316 21.3026V3.90058Z"
        fill="#D8D8D8"
      />
      <path
        opacity="0.4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5113 3.11898C20.0999 3.66189 20.6032 4.29157 20.9995 4.987C21.3964 4.29065 21.9005 3.66022 22.4901 3.11682V26.2959C22.2659 26.4645 22.0336 26.6186 21.769 26.7459C21.5866 26.9583 21.3098 27.0806 21.0034 27.0308C20.9797 27.027 20.9563 27.023 20.9332 27.0189C20.7276 27.0465 20.5368 26.9915 20.3824 26.8822C20.0419 26.7707 19.7625 26.6235 19.5113 26.4552V3.11898Z"
        fill="#AFAFAF"
      />
    </svg>
  );
};

export const ActiveBookSvg = () => {
  return (
    <svg width="42" height="34" viewBox="0 0 42 34" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5113 8.14018C17.6919 6.13294 15.0298 4.86694 12.0641 4.86694H3.72348C1.66706 4.86694 0 6.4901 0 8.49237V25.765C0 27.7673 1.66591 29.3905 3.72233 29.3905H11.5676C15.368 29.3905 16.3025 30.366 17.2063 31.3095C17.9272 32.062 18.6285 32.7942 20.749 32.9948C20.853 33.0046 20.9541 33.0002 21.0509 32.9832C21.1152 32.9865 21.1811 32.984 21.2481 32.9753C22.8488 32.7667 23.5467 32.142 24.2865 31.4799C25.3402 30.5367 26.4787 29.5177 30.4323 29.5177H38.2776C40.3341 29.5177 42 27.8945 42 25.8923V8.49236C42 6.4901 40.3329 4.86694 38.2765 4.86694H29.9359C26.9709 4.86694 24.3095 6.13229 22.4901 8.13863V26.2959C22.2659 26.4645 22.0336 26.6186 21.769 26.7459C21.5866 26.9583 21.3098 27.0806 21.0034 27.0308C20.9797 27.027 20.9563 27.023 20.9332 27.0189C20.7276 27.0465 20.5368 26.9915 20.3824 26.8822C20.0419 26.7707 19.7625 26.6235 19.5113 26.4552V8.14018Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.11316 3.90058C5.11316 2.29877 6.44681 1.00024 8.09194 1.00024H14.0495C17.04 1.00024 19.6446 2.60928 20.9997 4.9867C20.9997 4.9868 20.9996 4.9869 20.9995 4.987C20.6032 4.29157 20.0999 3.66189 19.5113 3.11898V26.4549C19.2475 26.2781 19.0148 26.0781 18.7751 25.8721C17.8556 25.0819 16.8328 24.2029 13.5531 24.2029H8.09083C6.44569 24.2029 5.11316 22.9044 5.11316 21.3026V3.90058ZM21.5861 26.9072C21.6541 26.8626 21.7157 26.8081 21.7691 26.7458C22.2102 26.5336 22.5617 26.247 22.9349 25.9427C23.9252 25.1353 25.0687 24.2029 28.4465 24.2029H33.9087C35.5538 24.2029 36.8864 22.9044 36.8864 21.3026V3.90058C36.8864 2.29877 35.5527 1.00024 33.9076 1.00024H27.95C25.8352 1.00024 23.9135 1.80489 22.4901 3.1169V26.2959C22.2659 26.4645 22.0336 26.6186 21.769 26.7459C21.7156 26.8081 21.6541 26.8626 21.5861 26.9072Z"
        fill="white"
      />
      <path
        opacity="0.4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5113 3.11898C20.0999 3.66189 20.6032 4.29157 20.9995 4.987C21.3964 4.29065 21.9005 3.66022 22.4901 3.11682V26.2959C22.2659 26.4645 22.0336 26.6186 21.769 26.7459C21.5866 26.9583 21.3098 27.0806 21.0034 27.0308C20.9797 27.027 20.9563 27.023 20.9332 27.0189C20.7276 27.0465 20.5368 26.9915 20.3824 26.8822C20.0419 26.7707 19.7625 26.6235 19.5113 26.4552V3.11898Z"
        fill="white"
      />
    </svg>
  );
};

export const GoldenBookSvg = () => {
  return (
    <svg width="42" height="34" viewBox="0 0 42 34" fill="none">
      <path
        d="M42 8.49241C42 6.49014 40.3329 4.86699 38.2765 4.86699H29.9359C24.4521 4.86699 20.0066 9.19541 20.0066 14.5348V31.8401C20.0066 32.5075 20.5687 33.0638 21.2481 32.9753C25.1291 32.4696 23.7034 29.5177 30.4324 29.5177C32.304 29.5177 36.1107 29.5177 38.2777 29.5177C40.3341 29.5177 42 27.8946 42 25.8923V8.49241Z"
        fill="#CD7900"
      />
      <path
        d="M0 8.49241C0 6.49015 1.66706 4.86699 3.72348 4.86699H12.0641C17.5479 4.86699 21.9934 9.19541 21.9934 14.5348V31.8401C21.9934 32.5075 21.4313 33.0594 20.749 32.9949C15.97 32.5427 18.3992 29.3905 11.5676 29.3905C9.69604 29.3905 5.88932 29.3905 3.72233 29.3905C1.66591 29.3905 0 27.7674 0 25.7651V8.49241Z"
        fill="#CD7900"
      />
      <path
        d="M36.8864 3.90056C36.8864 2.29875 35.5528 1.00023 33.9076 1.00023H27.95C23.563 1.00023 20.0066 4.46296 20.0066 8.73446V26.1365C20.0066 26.6704 20.4592 27.1221 20.9949 27.0082C23.3482 26.5078 23.1356 24.2029 28.4465 24.2029C29.9719 24.2029 32.1482 24.2029 33.9087 24.2029C35.5539 24.2029 36.8864 22.9044 36.8864 21.3026V3.90056Z"
        fill="#FFF1C0"
      />
      <path
        d="M5.11316 3.90056C5.11316 2.29875 6.44681 1.00023 8.09194 1.00023H14.0495C18.4366 1.00023 21.9929 4.46296 21.9929 8.73446V26.1365C21.9929 26.6704 21.5445 27.1184 21.0036 27.0307C18.236 26.5817 18.9484 24.2029 13.5531 24.2029C12.0277 24.2029 9.85141 24.2029 8.09083 24.2029C6.44569 24.2029 5.11316 22.9044 5.11316 21.3026V3.90056Z"
        fill="#FFF1C0"
      />
      <path
        opacity="0.4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5113 3.11903C20.0999 3.66193 20.6032 4.29162 20.9996 4.98705C21.3965 4.2907 21.9005 3.66027 22.4901 3.11687V26.2959C22.2659 26.4645 22.0336 26.6186 21.769 26.7459C21.5866 26.9584 21.3099 27.0806 21.0034 27.0309C20.9797 27.0271 20.9564 27.0231 20.9332 27.019C20.7277 27.0466 20.5368 26.9915 20.3824 26.8822C20.0419 26.7708 19.7625 26.6235 19.5113 26.4552V3.11903Z"
        fill="#E6A000"
      />
    </svg>
  );
};

export const LockedDumbbellSvg = () => {
  return (
    <svg width="42" height="34" viewBox="0 0 42 34" fill="none">
      <g clipPath="url(#clip0_334_225170)">
        <line
          x1="16"
          y1="20.3246"
          x2="24.7589"
          y2="15.2676"
          stroke="#AFAFAF"
          strokeWidth={4}
        />
        <rect
          x="17.7635"
          y="3.66309"
          width="9.1025"
          height="26.2961"
          rx="4.55125"
          transform="rotate(-30 17.7635 3.66309)"
          fill="#AFAFAF"
        />
        <rect
          x="2.87354"
          y="12.2598"
          width="9.1025"
          height="26.2961"
          rx="4.55125"
          transform="rotate(-30 2.87354 12.2598)"
          fill="#AFAFAF"
        />
        <rect
          x="25.9183"
          y="3.62891"
          width="9.1025"
          height="18.205"
          rx="4.55125"
          transform="rotate(-30 25.9183 3.62891)"
          fill="#AFAFAF"
        />
        <rect
          x="-1.23499"
          y="19.3027"
          width="9.1025"
          height="18.205"
          rx="4.55125"
          transform="rotate(-30 -1.23499 19.3027)"
          fill="#AFAFAF"
        />
        <rect
          opacity="0.2"
          x="2.81079"
          y="20.3145"
          width="3.03417"
          height="5.05694"
          rx="1.51708"
          transform="rotate(-30 2.81079 20.3145)"
          fill="white"
        />
        <rect
          opacity="0.2"
          x="31.1294"
          y="5.14355"
          width="3.03417"
          height="5.05694"
          rx="1.51708"
          transform="rotate(-30 31.1294 5.14355)"
          fill="white"
        />
        <rect
          opacity="0.2"
          x="6.85596"
          y="13.2354"
          width="3.03417"
          height="6.06833"
          rx="1.51708"
          transform="rotate(-30 6.85596 13.2354)"
          fill="white"
        />
        <rect
          opacity="0.2"
          x="22.027"
          y="5.14355"
          width="3.03417"
          height="6.06833"
          rx="1.51708"
          transform="rotate(-30 22.027 5.14355)"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_334_225170">
          <rect width="42" height="34" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ActiveDumbbellSvg = () => {
  return (
    <svg width="42" height="34" viewBox="0 0 42 34" fill="none">
      <g clipPath="url(#clip0_334_225192)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.8461 15.9274L17.8332 19.9763L16.3162 17.3486L23.329 13.2998L24.8461 15.9274Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.8148 9.98445C4.63797 11.2412 3.89214 14.0247 5.14893 16.2016L5.27901 16.4269C4.41076 16.3693 3.51657 16.5597 2.7064 17.0274C0.529574 18.2842 -0.216264 21.0677 1.04053 23.2445L5.59178 31.1275C6.84857 33.3044 9.63207 34.0502 11.8089 32.7934C12.6191 32.3257 13.231 31.6464 13.6153 30.8657L13.7457 31.0917C15.0025 33.2685 17.786 34.0143 19.9629 32.7575C22.1397 31.5008 22.8855 28.7172 21.6287 26.5404L13.0319 11.6503C11.7751 9.47349 8.99163 8.72766 6.8148 9.98445Z"
          fill="black"
          fillOpacity="0.3"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.7049 1.38844C19.5281 2.64523 18.7823 5.42873 20.0391 7.60556L28.6359 22.4957C29.8926 24.6725 32.6761 25.4183 34.853 24.1615C37.0298 22.9047 37.7756 20.1212 36.5188 17.9444L36.3892 17.7198C37.2575 17.7774 38.1519 17.5871 38.9622 17.1193C41.139 15.8625 41.8849 13.079 40.6281 10.9022L36.0768 3.01915C34.82 0.842324 32.0365 0.0964886 29.8597 1.35328C29.0494 1.82111 28.4374 2.50048 28.0531 3.28136L27.922 3.05431C26.6653 0.877481 23.8818 0.131645 21.7049 1.38844Z"
          fill="black"
          fillOpacity="0.3"
        />
        <rect
          opacity="0.2"
          x="2.81067"
          y="20.3154"
          width="3.03417"
          height="5.05694"
          rx="1.51708"
          transform="rotate(-30 2.81067 20.3154)"
          fill="white"
        />
        <rect
          opacity="0.2"
          x="31.1292"
          y="5.14355"
          width="3.03417"
          height="5.05694"
          rx="1.51708"
          transform="rotate(-30 31.1292 5.14355)"
          fill="white"
        />
        <rect
          opacity="0.2"
          x="22.0269"
          y="5.14355"
          width="3.03417"
          height="6.06833"
          rx="1.51708"
          transform="rotate(-30 22.0269 5.14355)"
          fill="white"
        />
        <rect
          opacity="0.2"
          x="6.85583"
          y="13.2363"
          width="3.03417"
          height="6.06833"
          rx="1.51708"
          transform="rotate(-30 6.85583 13.2363)"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_334_225192">
          <rect width="42" height="34" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const GoldenDumbbellSvg = () => {
  return (
    <svg width="42" height="34" viewBox="0 0 42 34" fill="none">
      <g clipPath="url(#clip0_334_225119)">
        <line
          x1="16"
          y1="20.3246"
          x2="24.7589"
          y2="15.2676"
          stroke="#E6A000"
          strokeWidth="4"
        />
        <rect
          x="17.7635"
          y="3.66309"
          width="9.1025"
          height="26.2961"
          rx="4.55125"
          transform="rotate(-30 17.7635 3.66309)"
          fill="#CD7900"
        />
        <rect
          x="2.87354"
          y="12.2598"
          width="9.1025"
          height="26.2961"
          rx="4.55125"
          transform="rotate(-30 2.87354 12.2598)"
          fill="#CD7900"
        />
        <rect
          x="25.9184"
          y="3.62891"
          width="9.1025"
          height="18.205"
          rx="4.55125"
          transform="rotate(-30 25.9184 3.62891)"
          fill="#CD7900"
        />
        <rect
          x="-1.23499"
          y="19.3027"
          width="9.1025"
          height="18.205"
          rx="4.55125"
          transform="rotate(-30 -1.23499 19.3027)"
          fill="#CD7900"
        />
        <rect
          opacity="0.2"
          x="2.81079"
          y="20.3145"
          width="3.03417"
          height="5.05694"
          rx="1.51708"
          transform="rotate(-30 2.81079 20.3145)"
          fill="white"
        />
        <rect
          opacity="0.2"
          x="31.1294"
          y="5.14355"
          width="3.03417"
          height="5.05694"
          rx="1.51708"
          transform="rotate(-30 31.1294 5.14355)"
          fill="white"
        />
        <rect
          opacity="0.2"
          x="6.85596"
          y="13.2354"
          width="3.03417"
          height="6.06833"
          rx="1.51708"
          transform="rotate(-30 6.85596 13.2354)"
          fill="white"
        />
        <rect
          opacity="0.2"
          x="22.0269"
          y="5.14355"
          width="3.03417"
          height="6.06833"
          rx="1.51708"
          transform="rotate(-30 22.0269 5.14355)"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_334_225119">
          <rect width="42" height="34" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const GuidebookSvg = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M0.019043 4.83285C0.019043 4.10489 0.609167 3.51477 1.33712 3.51477H3.09456C3.82251 3.51477 4.41264 4.10489 4.41264 4.83285C4.41264 5.5608 3.82251 6.15093 3.09456 6.15093H1.33712C0.609167 6.15093 0.019043 5.5608 0.019043 4.83285Z"
        fill="currentColor"
      />
      <path
        d="M0.019043 11.8628C0.019043 11.1348 0.609167 10.5447 1.33712 10.5447H3.09456C3.82251 10.5447 4.41264 11.1348 4.41264 11.8628C4.41264 12.5907 3.82251 13.1808 3.09456 13.1808H1.33712C0.609167 13.1808 0.019043 12.5907 0.019043 11.8628Z"
        fill="currentColor"
      />
      <path
        d="M0.019043 18.8923C0.019043 18.1643 0.609167 17.5742 1.33712 17.5742H3.09456C3.82251 17.5742 4.41264 18.1643 4.41264 18.8923C4.41264 19.6202 3.82251 20.2104 3.09456 20.2104H1.33712C0.609167 20.2104 0.019043 19.6202 0.019043 18.8923Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.65527 3.51493V6.15108H3.09466C3.82261 6.15108 4.41274 5.56096 4.41274 4.83301C4.41274 4.10505 3.82261 3.51493 3.09466 3.51493H2.65527ZM3.09466 1.75749H3.09349C3.68239 0.708669 4.80532 0 6.09377 0H20.4134C22.3125 0 23.8519 1.53947 23.8519 3.4385V20.2869C23.8519 22.1859 22.3125 23.7254 20.4134 23.7254H6.09377C4.80535 23.7254 3.68244 23.0168 3.09353 21.968H3.09464C4.7932 21.968 6.17016 20.591 6.17016 18.8925C6.17016 17.1939 4.7932 15.817 3.09464 15.817H2.65527V14.9383H3.09464C4.7932 14.9383 6.17016 13.5614 6.17016 11.8628C6.17016 10.1643 4.7932 8.78731 3.09464 8.78731H2.65527V7.90852H3.09466C4.79322 7.90852 6.17017 6.53157 6.17017 4.83301C6.17017 3.13445 4.79322 1.75749 3.09466 1.75749ZM3.09464 20.2105H2.65527V17.5744H3.09464C3.8226 17.5744 4.41272 18.1645 4.41272 18.8925C4.41272 19.6204 3.8226 20.2105 3.09464 20.2105ZM3.09464 13.1809H2.65527V10.5448H3.09464C3.8226 10.5448 4.41272 11.1349 4.41272 11.8628C4.41272 12.5908 3.8226 13.1809 3.09464 13.1809ZM9.90473 3.95423C9.2981 3.95423 8.80633 4.446 8.80633 5.05263C8.80633 5.65926 9.2981 6.15103 9.90473 6.15103H19.1313C19.7379 6.15103 20.2297 5.65926 20.2297 5.05263C20.2297 4.446 19.7379 3.95423 19.1313 3.95423H9.90473ZM8.80633 10.3249C8.80633 9.71831 9.2981 9.22654 9.90473 9.22654H19.1313C19.7379 9.22654 20.2297 9.71831 20.2297 10.3249C20.2297 10.9316 19.7379 11.4233 19.1313 11.4233H9.90473C9.2981 11.4233 8.80633 10.9316 8.80633 10.3249ZM9.90473 14.4989C9.2981 14.4989 8.80633 14.9906 8.80633 15.5973C8.80633 16.2039 9.2981 16.6957 9.90473 16.6957H16.4951C17.1017 16.6957 17.5935 16.2039 17.5935 15.5973C17.5935 14.9906 17.1017 14.4989 16.4951 14.4989H9.90473Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const PracticeExerciseSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg width="23" height="19" viewBox="0 0 23 19" {...props}>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g fill="#1CB0F6" fillRule="nonzero">
          <g>
            <g>
              <g>
                <g>
                  <g>
                    <g>
                      <path d="M4.157 17.781a1.5 1.5 0 0 0 2.598-1.5l-3.5-6.062a1.5 1.5 0 0 0-2.598 1.5l3.5 6.062zm4.463-.268a1.5 1.5 0 0 0 2.599-1.5l-5.5-9.526a1.5 1.5 0 0 0-2.598 1.5l5.5 9.526zM18.843 1.219a1.5 1.5 0 0 0-2.598 1.5l3.5 6.062a1.5 1.5 0 0 0 2.598-1.5l-3.5-6.062zm-4.463.268a1.5 1.5 0 0 0-2.599 1.5l5.5 9.526a1.5 1.5 0 0 0 2.598-1.5l-5.5-9.526zm.035 8.062l-1.5-2.598-4.33 2.5 1.5 2.598z" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export const UpArrowSvg = () => {
  return (
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.820019 7.29641C-0.00641216 8.12284 -0.00641276 9.46275 0.820019 10.2892C1.64645 11.1156 2.98636 11.1156 3.81279 10.2892L6.89729 7.20468V17.8841C6.89729 19.0529 7.84474 20.0004 9.01349 20.0004C10.1822 20.0004 11.1297 19.0529 11.1297 17.8841V7.22501L14.1939 10.2892C15.0203 11.1156 16.3602 11.1156 17.1866 10.2892C18.0131 9.46275 18.0131 8.12284 17.1866 7.29641L10.5101 0.619824C10.0944 0.204119 9.54675 -0.00261376 9.00332 2.49416e-05C8.45989 -0.00261173 7.9123 0.204122 7.4966 0.619823L0.820019 7.29641Z"
        fill="#1CB0F6"
      />
    </svg>
  );
};

export const FastForwardSvg = () => {
  return (
    <svg width="42" height="34" viewBox="0 0 42 34" fill="none">
      <g clipPath="url(#clip0_7030_116434)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.0423 14.9989C23.4698 15.8749 23.4698 17.9491 22.0423 18.825L8.91839 26.8783C7.42288 27.796 5.5 26.7199 5.5 24.9653L5.5 8.85865C5.5 7.10401 7.42288 6.02791 8.9184 6.94562L22.0423 14.9989Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M35.4535 14.9989C36.881 15.8749 36.881 17.9491 35.4535 18.825L22.3296 26.8783C20.8341 27.796 18.9112 26.7199 18.9112 24.9653L18.9112 8.85865C18.9112 7.10401 20.8341 6.02791 22.3296 6.94562L35.4535 14.9989Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_7030_116434">
          <rect
            width="31"
            height="30"
            fill="white"
            transform="translate(5.5 2)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const LockedTrophySvg = () => {
  return (
    <svg width="42" height="34" viewBox="0 0 42 34" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.0867 0.656357C11.241 -0.566997 7.97179 1.50405 7.97179 4.66166V13.4091C7.97179 19.8104 12.3546 25.1645 18.2181 26.5027C19.2287 26.8827 19.5393 27.3939 19.5793 27.8013V27.8899L19.579 27.8896L19.5793 27.8957V27.9759C19.5687 28.2279 19.4591 28.5701 19.1536 28.8471H15.9409C15.1526 28.8471 14.5136 29.4861 14.5136 30.2744C14.5136 30.435 14.5401 30.5893 14.5889 30.7333H13.0182C12.2272 30.7333 11.5859 31.3746 11.5859 32.1657C11.5859 32.9568 12.2272 33.598 13.0182 33.598H28.7601C29.5512 33.598 30.1925 32.9568 30.1925 32.1657C30.1925 31.3746 29.5512 30.7333 28.7601 30.7333H27.4615C27.5103 30.5893 27.5368 30.435 27.5368 30.2744C27.5368 29.4861 26.8978 28.8471 26.1095 28.8471H22.8507C22.5685 28.6241 22.4241 28.3499 22.3681 28.1133V27.8309C22.4457 27.3726 22.8765 26.805 24.2268 26.4375C29.9533 24.998 34.2011 19.711 34.2011 13.4091V4.66166C34.2011 1.50405 30.9319 -0.566996 28.0862 0.656358C25.4325 1.79713 22.5919 2.84158 21.0864 2.84158C19.581 2.84158 16.7403 1.79713 14.0867 0.656357ZM4.35009 16.3748C2.6223 15.4664 1.68222 13.4485 2.20034 11.4887C2.30684 11.0859 2.71874 10.8494 3.12034 10.9605L3.25989 10.9991C4.46034 11.3312 5.40222 12.1498 5.93 13.1841C6.27824 13.3866 6.50967 13.7663 6.50263 14.1977C6.48629 15.1997 6.65091 16.9075 7.20872 18.6485C7.76885 20.3967 8.68562 22.0565 10.0855 23.122C10.5909 23.5066 10.6887 24.2281 10.3041 24.7335C10.2195 24.8446 10.1187 24.936 10.0075 25.0069C9.05615 26.8441 6.86647 27.7005 4.88711 26.9278C4.50596 26.7791 4.31291 26.3477 4.45591 25.9643L4.57108 25.6556C5.00725 24.4863 5.91081 23.6374 6.98825 23.2401C6.67974 22.8379 6.40435 22.4164 6.15877 21.9847C4.26086 22.3411 2.32119 21.3362 1.55668 19.4685C1.39911 19.0836 1.58132 18.6388 1.96365 18.475L2.11386 18.4107C2.9626 18.0472 3.85995 17.9849 4.68935 18.1762C4.53785 17.5503 4.42727 16.9423 4.35009 16.3748ZM35.6154 13.2459C35.3208 13.4585 35.1315 13.8069 35.1379 14.1977C35.1542 15.1997 34.9896 16.9075 34.4318 18.6485C33.8717 20.3967 32.9549 22.0565 31.555 23.122C31.0496 23.5066 30.9518 24.2281 31.3364 24.7335C31.4351 24.8632 31.556 24.9661 31.6897 25.0408C32.6503 26.8546 34.8252 27.6957 36.7924 26.9278C37.1735 26.7791 37.3666 26.3477 37.2236 25.9643L37.1084 25.6556C36.6681 24.4753 35.7516 23.6214 34.6608 23.229C34.9786 22.8134 35.2612 22.3774 35.5122 21.9309C37.4859 22.4262 39.5623 21.4168 40.3598 19.4685C40.5174 19.0836 40.3352 18.6388 39.9528 18.475L39.8026 18.4107C38.852 18.0035 37.8405 17.9743 36.9317 18.2559C37.0997 17.5756 37.2193 16.9152 37.3 16.3035C39.0398 15.3373 39.9272 13.2427 39.3135 11.2768C39.1894 10.8792 38.7679 10.6618 38.372 10.7911L38.2291 10.8378C37.0073 11.2369 36.0835 12.1414 35.6154 13.2459Z"
        fill="#AFAFAF"
      />
    </svg>
  );
};

export const ActiveTrophySvg = () => {
  return (
    <svg width="42" height="34" viewBox="0 0 42 34" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.0867 0.656406C11.241 -0.566948 7.97179 1.5041 7.97179 4.66171V13.4091C7.97179 19.8104 12.3546 25.1645 18.2181 26.5027C19.2287 26.8828 19.5393 27.3939 19.5793 27.8013V27.8899L19.579 27.8896L19.5793 27.8958V27.9759C19.5687 28.2279 19.4591 28.5701 19.1536 28.8471H15.9409C15.1526 28.8471 14.5136 29.4862 14.5136 30.2745C14.5136 30.435 14.5401 30.5894 14.5889 30.7334H13.0182C12.2272 30.7334 11.5859 31.3747 11.5859 32.1657C11.5859 32.9568 12.2272 33.5981 13.0182 33.5981H28.7601C29.5512 33.5981 30.1925 32.9568 30.1925 32.1657C30.1925 31.3747 29.5512 30.7334 28.7601 30.7334H27.4615C27.5103 30.5894 27.5368 30.435 27.5368 30.2745C27.5368 29.4862 26.8978 28.8471 26.1095 28.8471H22.8507C22.5685 28.6242 22.4241 28.35 22.3681 28.1133V27.831C22.4457 27.3727 22.8765 26.805 24.2268 26.4375C29.9533 24.998 34.2011 19.711 34.2011 13.4091V4.66171C34.2011 1.5041 30.9319 -0.566947 28.0862 0.656407C25.4325 1.79718 22.5919 2.84163 21.0864 2.84163C19.581 2.84163 16.7403 1.79718 14.0867 0.656406ZM4.35009 16.3748C2.6223 15.4664 1.68222 13.4485 2.20034 11.4888C2.30684 11.0859 2.71874 10.8494 3.12034 10.9605L3.25989 10.9991C4.46034 11.3312 5.40222 12.1499 5.93 13.1842C6.27824 13.3866 6.50967 13.7664 6.50263 14.1978C6.48629 15.1998 6.65091 16.9075 7.20872 18.6485C7.76885 20.3967 8.68562 22.0566 10.0855 23.122C10.5909 23.5067 10.6887 24.2282 10.3041 24.7336C10.2195 24.8447 10.1187 24.9361 10.0075 25.007C9.05615 26.8441 6.86647 27.7005 4.88711 26.9279C4.50596 26.7791 4.31291 26.3477 4.45591 25.9644L4.57108 25.6556C5.00725 24.4864 5.91081 23.6374 6.98825 23.2401C6.67974 22.8379 6.40435 22.4165 6.15877 21.9847C4.26086 22.3411 2.32119 21.3362 1.55668 19.4686C1.39911 19.0837 1.58132 18.6389 1.96365 18.4751L2.11386 18.4107C2.9626 18.0472 3.85995 17.9849 4.68935 18.1762C4.53785 17.5503 4.42727 16.9424 4.35009 16.3748ZM35.6154 13.2459C35.3208 13.4585 35.1315 13.807 35.1379 14.1978C35.1542 15.1998 34.9896 16.9075 34.4318 18.6485C33.8717 20.3967 32.9549 22.0566 31.555 23.122C31.0496 23.5067 30.9518 24.2282 31.3364 24.7336C31.4351 24.8633 31.556 24.9661 31.6897 25.0409C32.6503 26.8546 34.8252 27.6957 36.7924 26.9279C37.1735 26.7791 37.3666 26.3477 37.2236 25.9644L37.1084 25.6556C36.6681 24.4754 35.7516 23.6215 34.6608 23.229C34.9786 22.8135 35.2612 22.3774 35.5122 21.9309C37.4859 22.4263 39.5623 21.4169 40.3598 19.4686C40.5174 19.0837 40.3352 18.6389 39.9528 18.4751L39.8026 18.4108C38.852 18.0036 37.8405 17.9743 36.9317 18.256C37.0997 17.5757 37.2193 16.9153 37.3 16.3036C39.0398 15.3374 39.9272 13.2427 39.3135 11.2768C39.1894 10.8793 38.7679 10.6618 38.372 10.7912L38.2291 10.8379C37.0073 11.2369 36.0835 12.1415 35.6154 13.2459Z"
        fill="white"
      />
    </svg>
  );
};

export const GoldenTrophySvg = () => {
  return (
    <svg width="105" height="89" viewBox="0 0 105 89" fill="none">
      <ellipse
        cx="52.5564"
        cy="67.7784"
        rx="22.4297"
        ry="20.3697"
        fill="#FFB800"
      />
      <ellipse
        cx="52.5564"
        cy="62.6959"
        rx="22.4297"
        ry="20.3697"
        fill="#FFD600"
      />
      <path
        d="M35.2837 71.8353C37.0692 74.9453 41.8904 78.7941 46.7356 80.0312"
        stroke="#FFF500"
        strokeWidth="4.6734"
        strokeLinecap="round"
      />
      <path
        d="M40.97 69.3791C41.9876 71.1516 44.7353 73.3452 47.4968 74.0502"
        stroke="#FFF500"
        strokeWidth="4.6734"
        strokeLinecap="round"
      />
      <path
        d="M68.2007 64.1053C68.2007 70.8805 61.5298 76.8096 52.7121 76.8096C43.8943 76.8096 37.2235 70.8805 37.2235 64.1053C37.2235 57.3301 43.8943 51.401 52.7121 51.401C61.5298 51.401 68.2007 57.3301 68.2007 64.1053Z"
        stroke="#FFB800"
        strokeWidth="3.01241"
      />
      <path
        d="M17.3816 11.4355C17.3816 3.1568 26.1494 -2.27311 33.7815 0.934306C40.8985 3.92521 48.517 6.66357 52.5545 6.66357C56.5921 6.66357 64.2106 3.92521 71.3275 0.934308C78.9597 -2.27311 87.7275 3.1568 87.7275 11.4355V34.3697C87.7275 53.7952 71.98 69.5427 52.5545 69.5427C33.1291 69.5427 17.3816 53.7952 17.3816 34.3697V11.4355Z"
        fill="#FFB800"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M87.7275 21.0444C86.643 41.5035 69.7102 57.7589 48.9808 57.7589C36.5675 57.7589 25.5156 51.9298 18.4131 42.8596C17.7392 40.1407 17.3816 37.297 17.3816 34.3697V11.4355C17.3816 3.1568 26.1494 -2.27311 33.7815 0.934306C40.8985 3.92521 48.517 6.66357 52.5545 6.66357C56.5921 6.66357 64.2106 3.92521 71.3275 0.934308C78.9597 -2.27311 87.7275 3.1568 87.7275 11.4355V21.0444Z"
        fill="#FFD600"
      />
      <circle cx="29.6788" cy="11.2542" r="6.94978" fill="#FFF500" />
      <path
        d="M58.7405 13.872C64.2067 12.9001 67.262 11.6908 71.377 9.41648"
        stroke="#FFF500"
        strokeWidth="9.29181"
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.26014 26.1716C3.24474 25.897 2.19899 26.4976 1.92438 27.513L1.79236 28.0011C0.251515 33.6987 3.62117 39.5665 9.31868 41.1073L10.0909 41.3162C10.2291 42.5931 10.495 44.0908 10.9274 45.6959C8.28389 44.4473 5.14154 44.2821 2.23252 45.5002L1.16946 45.9454C0.199208 46.3516 -0.257982 47.4675 0.148295 48.4378L0.343623 48.9043C2.62328 54.3484 8.88469 56.9138 14.3289 54.6341L14.8702 54.4075C15.5961 55.4647 16.4218 56.4893 17.3585 57.4489C13.4278 57.8114 9.85 60.3467 8.3477 64.2837L7.93681 65.3604C7.5618 66.3432 8.05448 67.4439 9.03724 67.8189L9.50972 67.9992C15.0241 70.1034 21.2002 67.3389 23.3044 61.8246L23.7153 60.7478C23.9141 60.2269 23.869 59.6728 23.6364 59.2112C23.5574 58.8347 23.3276 58.4909 22.9715 58.2775C19.8938 56.4338 17.6739 53.7916 16.1067 50.9741C15.9303 50.5815 15.733 50.2045 15.5165 49.844C15.354 49.5123 15.2 49.1793 15.0541 48.8461C13.5172 45.3356 12.9251 41.8875 12.8428 39.7864L12.899 39.5787C14.4398 33.8812 11.0702 28.0133 5.37267 26.4725L4.26014 26.1716Z"
        fill="#FFF500"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M99.0225 25.7233C100.025 25.4034 101.096 25.9563 101.416 26.9583L101.57 27.4401C103.365 33.0626 100.263 39.076 94.6403 40.8713L93.9755 41.0836C93.8396 42.4669 93.5502 44.1295 93.0544 45.9174C95.7851 44.4706 99.1184 44.2137 102.191 45.5004L103.254 45.9456C104.225 46.3518 104.682 47.4677 104.275 48.438L104.08 48.9045C101.801 54.3486 95.5391 56.914 90.0949 54.6343L89.2569 54.2834C88.5047 55.3934 87.6435 56.469 86.6603 57.4731C90.4992 57.9122 93.9664 60.4245 95.439 64.2839L95.8499 65.3606C96.2249 66.3434 95.7323 67.4441 94.7495 67.8191L94.277 67.9994C88.7627 70.1036 82.5866 67.3391 80.4824 61.8248L80.0715 60.748C79.7439 59.8896 80.0784 58.9412 80.8232 58.465C80.8973 58.3952 80.98 58.3322 81.0709 58.2777C84.9149 55.9749 87.4209 52.4263 88.9882 48.8463C90.4535 45.4995 91.0599 42.2096 91.1846 40.0893C91.1718 40.0557 91.1598 40.0215 91.1487 39.9868L90.9949 39.5051C89.1996 33.8826 92.3021 27.8692 97.9246 26.0739L99.0225 25.7233Z"
        fill="#FFF500"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.26014 27.92C3.24474 27.6454 2.19899 28.246 1.92438 29.2614L1.79236 29.7495C0.251515 35.4471 3.62117 41.3149 9.31868 42.8558L10.0909 43.0646C10.2291 44.3415 10.495 45.8392 10.9274 47.4443C8.28389 46.1957 5.14154 46.0305 2.23252 47.2486L1.16946 47.6938C0.199208 48.1001 -0.257982 49.2159 0.148295 50.1862L0.343623 50.6527C2.62328 56.0968 8.88469 58.6622 14.3289 56.3825L14.8702 56.1559C15.5961 57.2131 16.4218 58.2377 17.3585 59.1973C13.4278 59.5598 9.85 62.0951 8.3477 66.0321L7.93681 67.1088C7.5618 68.0916 8.05448 69.1923 9.03724 69.5673L9.50972 69.7476C15.0241 71.8518 21.2002 69.0874 23.3044 63.573L23.7153 62.4962C23.9141 61.9753 23.869 61.4212 23.6364 60.9596C23.5574 60.5831 23.3276 60.2393 22.9715 60.026C19.8939 58.1822 17.6739 55.54 16.1067 52.7225C15.9303 52.3299 15.733 51.9529 15.5165 51.5924C15.354 51.2607 15.2 50.9277 15.0541 50.5945C13.5172 47.084 12.9251 43.6359 12.8428 41.5348L12.899 41.3271C14.4398 35.6296 11.0702 29.7618 5.37267 28.2209L4.26014 27.92Z"
        fill="#FFD600"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M99.0225 27.4717C100.025 27.1518 101.096 27.7047 101.416 28.7067L101.57 29.1885C103.365 34.811 100.263 40.8244 94.6403 42.6197L93.9755 42.832C93.8396 44.2153 93.5502 45.8779 93.0544 47.6658C95.7851 46.219 99.1184 45.9621 102.191 47.2488L103.254 47.694C104.225 48.1003 104.682 49.2162 104.275 50.1864L104.08 50.6529C101.801 56.0971 95.5391 58.6624 90.0949 56.3827L89.2569 56.0318C88.5047 57.1418 87.6435 58.2174 86.6603 59.2215C90.4992 59.6606 93.9664 62.173 95.439 66.0323L95.8499 67.109C96.2249 68.0918 95.7323 69.1925 94.7495 69.5675L94.277 69.7478C88.7627 71.852 82.5866 69.0876 80.4824 63.5732L80.0715 62.4964C79.7439 61.638 80.0784 60.6896 80.8232 60.2134C80.8973 60.1436 80.9799 60.0806 81.0709 60.0262C84.9149 57.7233 87.4209 54.1747 88.9882 50.5947C90.4535 47.2479 91.0599 43.958 91.1846 41.8377C91.1718 41.8041 91.1598 41.77 91.1487 41.7353L90.9949 41.2535C89.1996 35.631 92.3021 29.6176 97.9246 27.8223L99.0225 27.4717Z"
        fill="#FFB800"
      />
    </svg>
  );
};

export const LockedTreasureSvg = () => {
  return (
    <svg width="80" height="90" viewBox="0 0 80 90" fill="none">
      <rect opacity="0.3" y="38" width="80" height="40" rx="4" fill="#AFAFAF" />
      <path
        d="M8.28882 39.7366C8.28882 34.2001 12.777 29.7119 18.3135 29.7119H60.7557C66.2922 29.7119 70.7804 34.2001 70.7804 39.7366V66.3203C70.7804 68.5349 68.9851 70.3302 66.7705 70.3302H12.2987C10.0841 70.3302 8.28882 68.5349 8.28882 66.3203V39.7366Z"
        fill="#9A9A9A"
      />
      <path
        d="M6.12195 25.2274C6.12195 19.6909 10.6102 15.2027 16.1467 15.2027H63.2628C68.7993 15.2027 73.2876 19.6909 73.2876 25.2274V55.051H6.12195V25.2274Z"
        fill="#9A9A9A"
      />
      <rect
        x="3.10956"
        y="42.7716"
        width="73.8089"
        height="11.5284"
        fill="#D8D8D8"
      />
      <path
        d="M67.0209 25.477H74.9174C76.0247 25.477 76.9223 26.3746 76.9223 27.4819V45.777H67.0209V25.477Z"
        fill="#D8D8D8"
      />
      <path
        d="M3.10956 27.4819C3.10956 26.3746 4.0072 25.477 5.1145 25.477H11.5072C12.6145 25.477 13.5122 26.3746 13.5122 27.4819V43.7721C13.5122 44.8794 12.6145 45.777 11.5072 45.777H5.1145C4.0072 45.777 3.10956 44.8794 3.10956 43.7721V27.4819Z"
        fill="#D8D8D8"
      />
      <path
        d="M6.12195 14.0049C6.12195 12.8976 7.01959 12 8.12689 12H18.6528C19.7601 12 20.6578 12.8976 20.6578 14.0049V34.5027H6.12195V14.0049Z"
        fill="#D8D8D8"
      />
      <path
        d="M58.7524 14.0049C58.7524 12.8976 59.6501 12 60.7574 12H71.2833C72.3906 12 73.2883 12.8976 73.2883 14.0049V34.5027H58.7524V14.0049Z"
        fill="#D8D8D8"
      />
      <path
        d="M6.25378 24.1446L20.6019 20.5723V33.2222L6.25378 33.0464V24.1446Z"
        fill="#EDEDED"
      />
      <path
        d="M6.12195 31.725H20.6578V46.2197H6.12195V31.725Z"
        fill="#BFBFBF"
      />
      <path
        d="M6.12195 52.5436C6.12195 51.4363 7.01959 50.5386 8.12689 50.5386H18.6528C19.7601 50.5386 20.6578 51.4363 20.6578 52.5436V70.3903C20.6578 71.4976 19.7601 72.3953 18.6528 72.3953H8.12689C7.01959 72.3953 6.12195 71.4976 6.12195 70.3903V52.5436Z"
        fill="#BFBFBF"
      />
      <path
        d="M57.4348 52.5436C57.4348 51.4363 58.3325 50.5386 59.4398 50.5386H69.9657C71.073 50.5386 71.9707 51.4363 71.9707 52.5436V70.3903C71.9707 71.4976 71.073 72.3953 69.9657 72.3953H59.4398C58.3325 72.3953 57.4348 71.4976 57.4348 70.3903V52.5436Z"
        fill="#BFBFBF"
      />
      <rect
        x="58.7524"
        y="31.725"
        width="14.5358"
        height="14.4947"
        fill="#BFBFBF"
      />
      <rect
        x="36.9485"
        y="49.9128"
        width="5.51359"
        height="9.71144"
        fill="#C4C4C4"
      />
      <rect
        x="6.12195"
        y="55.3079"
        width="14.5358"
        height="4.88705"
        fill="#9A9A9A"
      />
      <rect
        x="57.4348"
        y="55.3079"
        width="14.5358"
        height="4.88705"
        fill="#9A9A9A"
      />
      <rect
        x="20.6531"
        y="63.818"
        width="36.7782"
        height="2.63149"
        fill="#898989"
      />
      <rect
        x="20.6531"
        y="23.6395"
        width="38.0939"
        height="2.63149"
        fill="#898989"
      />
      <rect
        opacity="0.92"
        x="20.6531"
        y="55.3079"
        width="36.7782"
        height="4.88705"
        fill="#888888"
      />
      <rect
        opacity="0.92"
        x="20.6531"
        y="35.3047"
        width="38.0939"
        height="7.46567"
        fill="#898989"
      />
      <path
        d="M3.10956 46.2159H76.9185V55.3008C76.9185 56.4081 76.0208 57.3058 74.9135 57.3058H5.1145C4.0072 57.3058 3.10956 56.4081 3.10956 55.3008V46.2159Z"
        fill="#BFBFBF"
      />
      <rect
        x="28.9253"
        y="38.383"
        width="20.9266"
        height="18.2007"
        rx="3.00742"
        fill="#D8D8D8"
      />
      <path
        d="M33.6012 38.383H31.9327C30.2718 38.383 28.9253 39.7294 28.9253 41.3904V53.5763C28.9253 55.2372 30.2718 56.5837 31.9327 56.5837H32.9367C33.4621 56.5837 33.8848 56.1518 33.8735 55.6265L33.6012 42.9729V38.383Z"
        fill="#EDEDED"
      />
      <rect
        x="28.9253"
        y="42.8631"
        width="20.9266"
        height="17.9407"
        rx="3.00742"
        fill="#BFBFBF"
      />
      <ellipse
        cx="39.0436"
        cy="49.7057"
        rx="3.94723"
        ry="3.54472"
        fill="#8A8A8A"
      />
      <path
        d="M38.147 51.6033C38.5164 50.8645 39.5708 50.8645 39.9402 51.6033L41.7365 55.1957C42.0698 55.8622 41.5852 56.6465 40.8399 56.6465H37.2473C36.5021 56.6465 36.0174 55.8622 36.3507 55.1957L38.147 51.6033Z"
        fill="#8A8A8A"
      />
      <path
        d="M58.7855 16.3848L73.2562 12.8931V20.8578L58.7855 24.3496V16.3848Z"
        fill="#EDEDED"
      />
      <rect
        x="20.4848"
        y="42.358"
        width="8.44234"
        height="3.80299"
        fill="#EDEDED"
      />
    </svg>
  );
};

export const ActiveTreasureSvg = () => {
  return (
    <svg width="80" height="90" viewBox="0 0 80 90" fill="none">
      <rect opacity="0.3" y="38" width="80" height="40" rx="4" fill="#AFAFAF" />
      <path
        d="M8.43329 39.7366C8.43329 34.2001 12.9215 29.7119 18.458 29.7119H60.9001C66.4366 29.7119 70.9248 34.2001 70.9248 39.7366V66.3203C70.9248 68.5349 69.1296 70.3302 66.915 70.3302H12.4432C10.2286 70.3302 8.43329 68.5349 8.43329 66.3203V39.7366Z"
        fill="#CE7D03"
      />
      <path
        d="M6.26642 25.2274C6.26642 19.6909 10.7546 15.2027 16.2911 15.2027H63.4073C68.9438 15.2027 73.432 19.6909 73.432 25.2274V55.051H6.26642V25.2274Z"
        fill="#CE7D03"
      />
      <rect
        x="3.25403"
        y="42.7716"
        width="73.8089"
        height="11.5284"
        fill="#FEC700"
      />
      <path
        d="M67.1654 25.477H75.0618C76.1691 25.477 77.0668 26.3746 77.0668 27.4819V45.777H67.1654V25.477Z"
        fill="#FEC700"
      />
      <path
        d="M3.25403 27.4819C3.25403 26.3746 4.15167 25.477 5.25897 25.477H11.6517C12.759 25.477 13.6566 26.3746 13.6566 27.4819V43.7721C13.6566 44.8794 12.759 45.777 11.6517 45.777H5.25897C4.15167 45.777 3.25403 44.8794 3.25403 43.7721V27.4819Z"
        fill="#FEC700"
      />
      <path
        d="M6.26642 14.0049C6.26642 12.8976 7.16406 12 8.27136 12H18.7973C19.9046 12 20.8023 12.8976 20.8023 14.0049V34.5027H6.26642V14.0049Z"
        fill="#FEC700"
      />
      <path
        d="M58.8969 14.0049C58.8969 12.8976 59.7946 12 60.9019 12H71.4278C72.5351 12 73.4328 12.8976 73.4328 14.0049V34.5027H58.8969V14.0049Z"
        fill="#FEC700"
      />
      <path
        d="M6.39819 24.1446L20.7463 20.5723V33.2222L6.39819 33.0464V24.1446Z"
        fill="#FEF400"
      />
      <path
        d="M6.26642 31.725H20.8023V46.2197H6.26642V31.725Z"
        fill="#EEAB00"
      />
      <path
        d="M6.26642 52.5436C6.26642 51.4363 7.16406 50.5386 8.27136 50.5386H18.7973C19.9046 50.5386 20.8023 51.4363 20.8023 52.5436V70.3903C20.8023 71.4976 19.9046 72.3953 18.7973 72.3953H8.27136C7.16406 72.3953 6.26642 71.4976 6.26642 70.3903V52.5436Z"
        fill="#EEAB00"
      />
      <path
        d="M57.5793 52.5436C57.5793 51.4363 58.4769 50.5386 59.5842 50.5386H70.1102C71.2175 50.5386 72.1151 51.4363 72.1151 52.5436V70.3903C72.1151 71.4976 71.2175 72.3953 70.1102 72.3953H59.5842C58.4769 72.3953 57.5793 71.4976 57.5793 70.3903V52.5436Z"
        fill="#EEAB00"
      />
      <rect
        x="58.8969"
        y="31.725"
        width="14.5358"
        height="14.4947"
        fill="#EEAB00"
      />
      <rect
        x="37.093"
        y="49.9128"
        width="5.51359"
        height="9.71144"
        fill="#C4C4C4"
      />
      <rect
        x="6.26642"
        y="55.3079"
        width="14.5358"
        height="4.88705"
        fill="#BF7402"
      />
      <rect
        x="57.5793"
        y="55.3079"
        width="14.5358"
        height="4.88705"
        fill="#BF7402"
      />
      <rect
        x="20.7975"
        y="63.818"
        width="36.7782"
        height="2.63149"
        fill="#B46C00"
      />
      <rect
        x="20.7975"
        y="23.6395"
        width="38.0939"
        height="2.63149"
        fill="#B46C00"
      />
      <rect
        opacity="0.92"
        x="20.7975"
        y="55.3079"
        width="36.7782"
        height="4.88705"
        fill="#8F5702"
      />
      <rect
        opacity="0.92"
        x="20.7975"
        y="35.3047"
        width="38.0939"
        height="7.46567"
        fill="#B46C00"
      />
      <path
        d="M3.25403 46.2159H77.063V55.3008C77.063 56.4081 76.1653 57.3058 75.058 57.3058H5.25897C4.15167 57.3058 3.25403 56.4081 3.25403 55.3008V46.2159Z"
        fill="#EEAB00"
      />
      <rect
        x="29.0696"
        y="38.383"
        width="20.9266"
        height="18.2007"
        rx="3.00742"
        fill="#FEC700"
      />
      <path
        d="M33.7456 38.383H32.0771C30.4161 38.383 29.0696 39.7294 29.0696 41.3904V53.5763C29.0696 55.2372 30.4161 56.5837 32.0771 56.5837H33.081C33.6064 56.5837 34.0291 56.1518 34.0178 55.6265L33.7456 42.9729V38.383Z"
        fill="#FEF400"
      />
      <rect
        x="29.0696"
        y="42.8631"
        width="20.9266"
        height="17.9407"
        rx="3.00742"
        fill="#EEAB00"
      />
      <ellipse
        cx="39.1881"
        cy="49.7057"
        rx="3.94723"
        ry="3.54472"
        fill="#BF7402"
      />
      <path
        d="M38.2915 51.6033C38.6609 50.8645 39.7153 50.8645 40.0847 51.6033L41.881 55.1957C42.2143 55.8622 41.7296 56.6465 40.9844 56.6465H37.3918C36.6465 56.6465 36.1618 55.8622 36.4951 55.1957L38.2915 51.6033Z"
        fill="#BF7402"
      />
      <path
        d="M58.9299 16.3848L73.4007 12.8931V20.8578L58.9299 24.3496V16.3848Z"
        fill="#FEF400"
      />
      <rect
        x="20.6292"
        y="42.358"
        width="8.44234"
        height="3.80299"
        fill="#FEF400"
      />
    </svg>
  );
};

export const GoldenTreasureSvg = () => {
  return (
    <svg width="80" height="90" viewBox="0 0 80 90" fill="none">
      <rect opacity="0.3" y="49" width="80" height="40" rx="4" fill="#AFAFAF" />
      <path
        d="M9.43689 49.1673C9.43689 43.6308 13.9251 39.1426 19.4616 39.1426H61.9037C67.4402 39.1426 71.9284 43.6308 71.9284 49.1673V75.7509C71.9284 77.9655 70.1332 79.7608 67.9186 79.7608H13.4468C11.2322 79.7608 9.43689 77.9655 9.43689 75.7509V49.1673Z"
        fill="#CE7D03"
      />
      <path
        d="M7.26642 34.6581C7.26642 29.1216 11.7546 24.6334 17.2911 24.6334H63.3456C68.8821 24.6334 73.3703 29.1216 73.3703 34.6581V64.4816H7.26642V34.6581Z"
        fill="#CE7D03"
      />
      <path
        d="M7.26642 61.9743C7.26642 60.867 8.16406 59.9693 9.27136 59.9693H19.7973C20.9046 59.9693 21.8023 60.867 21.8023 61.9743V79.821C21.8023 80.9283 20.9046 81.826 19.7973 81.826H9.27136C8.16406 81.826 7.26642 80.9283 7.26642 79.821V61.9743Z"
        fill="#EEAB00"
      />
      <path
        d="M58.5792 61.9743C58.5792 60.867 59.4769 59.9693 60.5842 59.9693H71.1101C72.2174 59.9693 73.1151 60.867 73.1151 61.9743V79.821C73.1151 80.9283 72.2174 81.826 71.1101 81.826H60.5842C59.4769 81.826 58.5792 80.9283 58.5792 79.821V61.9743Z"
        fill="#EEAB00"
      />
      <rect
        x="21.8011"
        y="73.2487"
        width="36.7782"
        height="2.63149"
        fill="#B46C00"
      />
      <rect
        x="7.26642"
        y="24.6334"
        width="66.1039"
        height="41.8457"
        fill="#724500"
      />
      <rect
        x="7.26642"
        y="3.0307"
        width="65.8487"
        height="25.6729"
        fill="#CE7D03"
      />
      <rect
        x="7.26642"
        y="60.9063"
        width="66.1039"
        height="5.57271"
        fill="#FEC700"
      />
      <rect
        x="73.3703"
        y="23.3889"
        width="42.3453"
        height="5.57271"
        transform="rotate(90 73.3703 23.3889)"
        fill="#FEC700"
      />
      <rect
        x="12.8409"
        y="23.3889"
        width="42.3453"
        height="5.57271"
        transform="rotate(90 12.8409 23.3889)"
        fill="#FEC700"
      />
      <rect
        x="7.26642"
        y="32.6273"
        width="5.57271"
        height="8.53299"
        fill="#EEAB00"
      />
      <rect
        x="67.7993"
        y="32.6273"
        width="5.57271"
        height="8.53299"
        fill="#EEAB00"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.26641 2.00494C7.26641 0.897644 8.16405 0 9.27135 0H19.7973C20.9046 0 21.8022 0.897644 21.8022 2.00494V18.0889L59.271 18.0889V2.00494C59.271 0.897644 60.1686 0 61.2759 0H71.8019C72.9092 0 73.8068 0.897644 73.8068 2.00494V18.0889H74.6741C75.7814 18.0889 76.6791 18.9865 76.6791 20.0938V30.6198C76.6791 31.7271 75.7814 32.6247 74.6741 32.6247L5.54334 32.6247C4.43604 32.6247 3.53839 31.7271 3.53839 30.6198L3.53839 20.0938C3.53839 18.9865 4.43604 18.0889 5.54333 18.0889H7.26641V2.00494Z"
        fill="#FEC700"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M76.4615 19.1845L30.164 32.6247H5.54334C4.43604 32.6247 3.53839 31.7271 3.53839 30.6198V20.0938C3.53839 18.9865 4.43604 18.0889 5.54333 18.0889H7.26641V15.0871L21.8022 10.8673V18.0889L59.271 18.0889V2.00494C59.271 0.897644 60.1686 0 61.2759 0H71.8019C72.9092 0 73.8068 0.897644 73.8068 2.00494V18.0889H74.6741C75.4541 18.0889 76.13 18.5342 76.4615 19.1845Z"
        fill="#FEF400"
      />
      <rect
        opacity="0.3"
        x="12.8409"
        y="45.936"
        width="54.9585"
        height="14.974"
        fill="#CE7D03"
      />
      <rect
        x="30.7248"
        y="15.3657"
        width="20.9266"
        height="19.5457"
        rx="3.00742"
        fill="#FEC700"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M51.6514 22.6388L30.7248 28.7138V18.3731C30.7248 16.7121 32.0713 15.3657 33.7322 15.3657H48.644C50.3049 15.3657 51.6514 16.7121 51.6514 18.3731V22.6388Z"
        fill="#FEF400"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42.7647 26.1885C44.1615 25.6425 45.1381 24.392 45.1381 22.9367C45.1381 20.979 43.3709 19.392 41.1909 19.392C39.0109 19.392 37.2437 20.979 37.2437 22.9367C37.2437 24.392 38.2203 25.6425 39.6171 26.1885L38.498 28.4266C38.1647 29.0932 38.6493 29.8774 39.3946 29.8774H42.9872C43.7324 29.8774 44.2171 29.0932 43.8838 28.4266L42.7647 26.1885Z"
        fill="#BF7402"
      />
      <rect
        x="59.2802"
        y="16.1855"
        width="14.4799"
        height="1.87404"
        fill="#FEC700"
      />
      <rect
        x="7.26642"
        y="16.1855"
        width="14.4799"
        height="1.87404"
        fill="#FEC700"
      />
    </svg>
  );
};

export const LockSvg = () => {
  return (
    <svg width="42" height="34" viewBox="0 0 42 34" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.8731 4.53816C16.9449 4.53816 13.7604 7.52403 13.7604 11.2073V13.483C13.7604 13.5386 13.7612 13.5941 13.7626 13.6493H13.7049C11.854 13.6493 10.3535 15.1498 10.3535 17.0007V25.9418C10.3535 27.7927 11.854 29.2932 13.7049 29.2932H28.0455C29.8965 29.2932 31.397 27.7927 31.397 25.9418V17.0008C31.397 15.1498 29.8965 13.6493 28.0455 13.6493H27.9837C27.9851 13.5941 27.9858 13.5386 27.9858 13.483V11.2073C27.9858 7.52402 24.8014 4.53816 20.8731 4.53816ZM24.4812 13.6493C24.484 13.5942 24.4855 13.5388 24.4855 13.483V11.2073C24.4855 9.33665 22.8682 7.82022 20.8731 7.82022C18.8781 7.82022 17.2608 9.33665 17.2608 11.2073V13.483C17.2608 13.5388 17.2622 13.5942 17.2651 13.6493H24.4812Z"
        fill="#AFAFAF"
      />
    </svg>
  );
};

export const LessonFastForwardStartSvg = () => {
  return (
    <svg
      width="214"
      height="233"
      viewBox="0 0 214 233"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.7734 182.392L51.4093 172.816C54.639 169.908 59.6145 170.169 62.5226 173.398L62.5242 173.399C65.4323 176.629 65.1716 181.605 61.9419 184.513C61.9419 184.513 61.9418 184.513 61.9418 184.513L51.3058 194.089C48.0761 196.997 43.1006 196.736 40.1925 193.506L40.1909 193.505C37.2828 190.276 37.5435 185.3 40.7731 182.392C40.7732 182.392 40.7732 182.392 40.7733 182.392L40.7734 182.392Z"
        fill="#58CC02"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46.5306 118.274L68.1354 131.773C76.2438 136.84 78.7098 147.52 73.6432 155.629C73.6431 155.629 73.643 155.629 73.643 155.629L60.1421 177.233C55.0754 185.341 44.3951 187.807 36.2868 182.74L14.6818 169.241C6.57333 164.175 4.1074 153.494 9.17398 145.386C9.17406 145.386 9.17414 145.385 9.17422 145.385L22.6751 123.782C27.7418 115.674 38.4221 113.208 46.5304 118.274L46.5306 118.274Z"
        fill="#58CC02"
      />
      <path
        d="M80.9277 111.64L162.503 45.635C166.875 42.0971 173.429 43.8501 175.446 49.0969C185.136 74.306 177.436 103.36 155.884 120.798C134.332 138.237 104.289 139.722 81.6256 125.01C76.9086 121.948 76.5552 115.178 80.9277 111.64Z"
        fill="#58CC02"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M93.0455 49.5699C94.9888 47.7007 97.2856 46.2385 99.8012 45.2692C110.236 41.248 121.952 46.4526 125.97 56.8938L148.464 115.354C148.479 115.393 148.494 115.432 148.508 115.471C160.385 146.529 144.849 181.343 113.809 193.23C82.6861 205.149 47.7973 189.607 35.8245 158.491L13.4134 100.245C12.4312 97.6923 11.9759 94.967 12.0748 92.2334C12.4793 81.0519 21.866 72.3146 33.0405 72.7182C49.8299 73.3246 60.9302 72.5917 66.3413 70.5194C71.7954 68.4307 80.6968 61.4476 93.0455 49.5699Z"
        fill="#58CC02"
      />
      <path
        d="M90.7175 62.139C91.2276 60.8136 92.5241 60.5073 93.6287 61.3997C98.9362 65.6874 100.922 73.0108 98.4077 79.5434C95.8932 86.0761 89.5037 90.1932 82.6827 89.8377C81.263 89.7638 80.33 88.3284 80.8402 87.0031L90.7175 62.139Z"
        fill="#89E219"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M82.5098 81.8735C87.7444 95.3142 92.3779 107.356 96.4103 118C81.9801 123.443 74.779 126.201 74.8071 126.274C74.8493 126.383 66.4985 104.68 60.896 90.1192C68.8441 94.2307 79.2512 90.2767 82.5098 81.8735Z"
        fill="#89E219"
      />
      <path
        d="M100.736 63.1648C101.246 61.8386 102.903 61.3938 104.007 62.2865C109.314 66.5755 111.299 73.9028 108.783 80.44C106.266 86.9771 99.8755 91.0982 93.0539 90.7441C91.6341 90.6704 90.7014 89.2344 91.2119 87.9082L100.736 63.1648Z"
        fill="#89E219"
      />
      <path
        d="M42.641 80.6621L66.3956 92.9423C67.6494 93.6076 67.8863 95.3034 66.8633 96.2913C61.9484 101.038 54.4272 102.126 48.2469 98.8464C42.0666 95.567 38.7645 88.7361 39.9593 82.0155C40.2079 80.6167 41.3872 79.9967 42.641 80.6621Z"
        fill="#89E219"
      />
      <path
        d="M35.7541 88.0139L59.1628 100.435C60.4175 101.101 60.655 102.797 59.6317 103.785C54.7156 108.531 47.1906 109.616 41.0061 106.335C34.8215 103.053 31.5157 96.2203 32.7092 89.499C32.9576 88.1001 34.4994 87.3481 35.7541 88.0139Z"
        fill="#89E219"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M96.626 69.2154C108.203 64.782 121.18 70.563 125.634 82.1373L131.537 97.4796C131.543 97.4941 131.548 97.5087 131.554 97.5232C135.99 109.124 130.187 122.127 118.593 126.567L116.848 127.236C105.271 131.669 92.2936 125.888 87.8402 114.314L81.9369 98.9716C81.9313 98.957 81.9258 98.9425 81.9202 98.928C77.4843 87.3273 83.2869 74.3238 94.8808 69.8838L96.626 69.2154Z"
        fill="#89E219"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42.1208 89.5711C42.1601 89.5561 42.1994 89.5411 42.2387 89.5263C53.8573 85.1515 66.8193 91.0292 71.1901 102.655L76.9754 118.042C81.3289 129.621 75.518 142.546 63.9701 146.968L62.3424 147.592C50.7655 152.025 37.788 146.244 33.3345 134.67L27.4313 119.327C27.4257 119.313 27.4201 119.298 27.4146 119.284C22.9786 107.683 28.7813 94.6796 40.3751 90.2396L42.1208 89.5711Z"
        fill="#89E219"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M100.353 76.9145C108.897 73.6426 118.474 77.9089 121.761 86.4508L125.304 95.6598C125.308 95.6705 125.312 95.6812 125.316 95.6918C128.577 104.218 124.312 113.774 115.791 117.037C107.248 120.309 97.6703 116.043 94.3836 107.501L90.8403 98.2921C90.8362 98.2814 90.8321 98.2708 90.828 98.2601C87.5679 89.7343 91.8324 80.1776 100.353 76.9145Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M45.2941 98.1694C53.8378 94.8975 63.4151 99.1638 66.7018 107.706L70.2451 116.915C70.2492 116.925 70.2533 116.936 70.2574 116.947C73.5175 125.472 69.253 135.029 60.7322 138.292C52.1885 141.564 42.6112 137.298 39.3246 128.756L35.7812 119.547C35.7771 119.536 35.773 119.526 35.7689 119.515C32.5088 110.989 36.7734 101.432 45.2941 98.1694Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M101.456 86.9142C105.483 85.3718 109.998 87.383 111.548 91.4099L114.592 99.3227C114.594 99.3277 114.596 99.3328 114.598 99.3378C116.135 103.357 114.125 107.862 110.108 109.401C106.08 110.943 101.565 108.932 100.016 104.905L96.9709 96.9923C96.969 96.9872 96.9671 96.9822 96.9651 96.9771C95.4282 92.9579 97.4387 88.4525 101.456 86.9142Z"
        fill="#4B4B4B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M51.3575 105.759C55.3852 104.216 59.9002 106.228 61.4496 110.255L64.4942 118.167C64.4962 118.172 64.4981 118.177 64.5 118.183C66.0369 122.202 64.0265 126.707 60.0096 128.245C55.9818 129.788 51.4668 127.777 49.9174 123.75L46.8728 115.837C46.8709 115.832 46.8689 115.827 46.867 115.822C45.3301 111.803 47.3405 107.297 51.3575 105.759Z"
        fill="#4B4B4B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M82.5186 113.537C86.9125 111.854 91.838 114.049 93.5282 118.441L94.3666 120.62C94.3687 120.626 94.3708 120.631 94.3729 120.637C96.0495 125.021 93.8563 129.936 89.4742 131.614C85.0803 133.297 80.1549 131.103 78.4646 126.71L77.6263 124.531C77.6241 124.526 77.622 124.52 77.6199 124.515C75.9433 120.13 78.1365 115.215 82.5186 113.537Z"
        fill="#F49000"
      />
      <path
        d="M96.6643 118.258L96.9102 118.897L86.5895 125.003L74.8241 127.355L74.5782 126.716C73.5668 121.323 76.7014 115.637 81.8631 113.661C87.6558 111.442 93.7987 113.575 96.6643 118.258Z"
        fill="#FFC200"
      />
      <path
        d="M86.5558 115.053C87.4875 115.037 88.256 115.779 88.2722 116.711C88.2884 117.644 87.5463 118.413 86.6146 118.429C85.1643 118.454 83.9253 118.929 82.8311 119.878C82.1268 120.488 81.0613 120.412 80.4511 119.707C79.8409 119.003 79.9172 117.937 80.6215 117.326C82.3142 115.858 84.3145 115.092 86.5558 115.053Z"
        fill="#FFDE00"
      />
      <path
        d="M117.568 146.575C118.324 146.286 119.135 146.793 119.169 147.578C119.333 151.345 116.955 154.9 113.226 156.326C109.496 157.753 105.342 156.697 102.934 153.788C102.433 153.183 102.695 152.265 103.451 151.975L117.568 146.575Z"
        fill="#89E219"
      />
      <path
        d="M50.4816 116.153C48.1304 117.565 45.0806 116.807 43.6696 114.459C42.2586 112.11 43.0208 109.062 45.372 107.649C47.7232 106.236 50.773 106.994 52.184 109.343C53.595 111.691 52.8328 114.74 50.4816 116.153Z"
        fill="white"
      />
      <path
        d="M92.9693 156.275C93.726 155.985 94.537 156.493 94.571 157.277C94.7345 161.044 92.3568 164.599 88.6272 166.026C84.8977 167.452 80.7439 166.396 78.3355 163.487C77.8342 162.882 78.0962 161.964 78.8528 161.675L92.9693 156.275Z"
        fill="#89E219"
      />
      <path
        d="M109.917 163.446C110.674 163.157 111.485 163.664 111.519 164.449C111.682 168.216 109.305 171.771 105.575 173.197C101.845 174.624 97.6917 173.568 95.2833 170.659C94.782 170.054 95.0439 169.136 95.8006 168.847L109.917 163.446Z"
        fill="#89E219"
      />
      <path
        d="M99.6376 98.3509C97.2865 99.7636 94.2366 99.0052 92.8256 96.6569C91.4146 94.3086 92.1768 91.2598 94.528 89.847C96.8792 88.4343 99.929 89.1927 101.34 91.541C102.751 93.8893 101.989 96.9382 99.6376 98.3509Z"
        fill="white"
      />
      <path
        d="M104.94 69.2627L118.678 77.3672C108.237 87.8207 98.0068 93.9657 84.8111 98.1574L82.668 82.8953C91.6254 80.9517 98.9253 76.4756 104.94 69.2627Z"
        fill="#8EE000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M139.176 219.234C137.217 223.071 132.524 224.597 128.685 222.645L121.075 218.775C121.07 218.772 121.065 218.77 121.06 218.767C117.236 216.813 115.72 212.126 117.674 208.3C119.632 204.463 124.326 202.938 128.164 204.889L135.775 208.759C135.78 208.762 135.784 208.765 135.789 208.767C139.613 210.722 141.129 215.408 139.176 219.234Z"
        fill="#F49000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M96.8213 215.73C96.8213 220.05 93.3211 223.553 89.0035 223.553H76.5168C72.1991 223.553 68.699 220.05 68.699 215.73C68.699 211.41 72.1991 207.907 76.5168 207.907H89.0035C93.3211 207.907 96.8213 211.41 96.8213 215.73Z"
        fill="#F49000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M144.14 215.761C144.14 220.064 140.654 223.553 136.353 223.553H133.946C129.646 223.553 126.159 220.064 126.159 215.761C126.159 211.457 129.646 207.969 133.946 207.969H136.353C140.654 207.969 144.14 211.457 144.14 215.761Z"
        fill="#F49000"
      />
      <path
        opacity="0.3"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M152.671 223.553C155.277 223.553 157.39 225.667 157.39 228.275C157.39 230.883 155.277 232.998 152.671 232.998H47.1249C44.5185 232.998 42.4055 230.883 42.4055 228.275C42.4055 225.667 44.5185 223.553 47.1249 223.553H152.671Z"
        fill="#AFAFAF"
      />
      <path
        d="M105.13 30.8026C105.419 29.7337 106.52 29.1015 107.589 29.3906L108.76 29.7073C114.758 31.3293 118.305 37.5062 116.683 43.5038L116.544 44.0177C116.255 45.0866 115.154 45.7187 114.085 45.4297L112.914 45.1129C106.917 43.4909 103.369 37.314 104.991 31.3165L105.13 30.8026Z"
        fill="#FFD600"
      />
      <path
        d="M209.863 30.2175C209.526 29.1627 208.398 28.5807 207.343 28.9175L206.187 29.2865C200.268 31.1764 197.002 37.5064 198.892 43.4251L199.054 43.9322C199.391 44.987 200.519 45.5691 201.574 45.2323L202.73 44.8632C208.648 42.9733 211.914 36.6433 210.024 30.7246L209.863 30.2175Z"
        fill="#FFB800"
      />
      <path
        d="M103.261 52.8288C102.833 51.8075 103.314 50.6328 104.336 50.2051L105.455 49.7365C111.186 47.3368 117.777 50.0373 120.177 55.7682L120.382 56.2592C120.81 57.2806 120.329 58.4552 119.307 58.8829L118.188 59.3515C112.457 61.7512 105.866 59.0508 103.466 53.3199L103.261 52.8288Z"
        fill="#FFD600"
      />
      <path
        d="M212.873 52.8288C213.3 51.8075 212.819 50.6328 211.798 50.2051L210.679 49.7365C204.948 47.3368 198.357 50.0373 195.957 55.7682L195.751 56.2592C195.324 57.2806 195.805 58.4552 196.826 58.8829L197.945 59.3515C203.676 61.7512 210.267 59.0508 212.667 53.3199L212.873 52.8288Z"
        fill="#FFB800"
      />
      <path
        d="M112.619 73.2314C111.584 72.8366 111.066 71.678 111.46 70.6434L111.893 69.51C114.108 63.7052 120.609 60.7951 126.414 63.0102L126.911 63.2C127.946 63.5947 128.465 64.7534 128.07 65.7879L127.637 66.9214C125.422 72.7262 118.921 75.6362 113.116 73.4212L112.619 73.2314Z"
        fill="#FFD600"
      />
      <path
        d="M202.845 73.2314C203.879 72.8366 204.398 71.678 204.003 70.6434L203.571 69.51C201.356 63.7052 194.854 60.7951 189.05 63.0102L188.552 63.2C187.518 63.5947 186.999 64.7534 187.394 65.7879L187.826 66.9214C190.041 72.7262 196.543 75.6362 202.347 73.4212L202.845 73.2314Z"
        fill="#FFB800"
      />
      <path
        d="M121.405 12.0378C121.405 3.32306 130.635 -2.39283 138.669 0.983514C146.16 4.13194 154.18 7.01453 158.43 7.01453C162.681 7.01453 170.7 4.13194 178.192 0.983516C186.226 -2.39283 195.456 3.32306 195.456 12.0378V36.1799C195.456 56.6284 178.879 73.2053 158.43 73.2053C137.982 73.2053 121.405 56.6285 121.405 36.1799V12.0378Z"
        fill="#FFB800"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M195.454 22.1429C194.317 43.6843 176.491 60.8011 154.666 60.8011C141.599 60.8011 129.966 54.6655 122.489 45.1181C121.78 42.2556 121.403 39.2617 121.403 36.1799V12.0378C121.403 3.32306 130.633 -2.39283 138.667 0.983514C146.159 4.13194 154.178 7.01453 158.428 7.01453C162.679 7.01453 170.698 4.13194 178.19 0.983516C186.224 -2.39283 195.454 3.32306 195.454 12.0378V22.1429Z"
        fill="#FFD600"
      />
      <path
        d="M139.782 83.9932C139.782 81.8099 141.552 80.04 143.735 80.04H172.094C174.277 80.04 176.047 81.8099 176.047 83.9932C176.047 86.1765 174.277 87.9464 172.094 87.9464H143.735C141.552 87.9464 139.782 86.1765 139.782 83.9932Z"
        fill="#FFB800"
      />
      <circle cx="134.012" cy="11.5121" r="7.3158" fill="#FFF500" />
      <rect
        x="154.173"
        y="68.918"
        width="7.87336"
        height="16.9914"
        fill="#FFB800"
      />
      <path
        d="M148.585 80.113C153.222 80.113 154.242 77.4674 154.173 76.1445L160.073 81.2618L150.622 85.4392C148.011 83.6638 143.949 80.113 148.585 80.113Z"
        fill="#FFB800"
      />
      <path
        d="M148.639 71.802C153.136 72.9334 154.187 74.8134 154.187 76.1621L160.075 71.0359L150.623 68.1985C148.013 69.9739 144.592 70.7837 148.639 71.802Z"
        fill="#FFB800"
      />
      <path
        d="M167.557 72.0696C163.06 73.201 162.009 75.081 162.009 76.4297L156.121 71.3034L165.572 67.1261C168.183 68.9014 171.603 71.0513 167.557 72.0696Z"
        fill="#FFD600"
      />
      <path
        d="M167.557 72.0696C163.06 73.201 162.009 75.081 162.009 76.4297L156.121 71.3034L165.572 67.1261C168.183 68.9014 171.603 71.0513 167.557 72.0696Z"
        fill="#FFB800"
      />
      <path
        d="M167.691 79.9792C163.054 79.9792 161.9 77.3336 161.97 76.0107L156.204 81.128L165.655 85.3054C168.266 83.53 172.328 79.9792 167.691 79.9792Z"
        fill="#FFB800"
      />
      <path
        d="M131.606 87.9463C131.606 85.7631 133.376 83.9932 135.56 83.9932H180.184C182.367 83.9932 184.137 85.7631 184.137 87.9463C184.137 90.1296 182.367 91.8995 180.184 91.8995H135.56C133.376 91.8995 131.606 90.1296 131.606 87.9463Z"
        fill="#FFD600"
      />
      <path
        d="M115.114 43.6221C115.254 48.3819 117.73 59.2169 126.513 64.4781"
        stroke="#FFD600"
        strokeWidth="3.0119"
        strokeLinecap="round"
      />
      <path
        d="M200.619 43.6221C200.479 48.3819 198.003 59.2169 189.221 64.4781"
        stroke="#FFB800"
        strokeWidth="3.0119"
        strokeLinecap="round"
      />
      <path
        d="M168.753 74.4138C161.521 70.0153 161.763 59.4371 169.188 55.3732L171.694 54.0016C179.119 49.9376 188.16 55.4358 187.966 63.8983L187.901 66.7544C187.708 75.217 178.426 80.2969 171.194 75.8984L168.753 74.4138Z"
        fill="#58CC02"
      />
      <rect
        opacity="0.3"
        x="107.173"
        y="1.12598"
        width="13.6068"
        height="13.6068"
        rx="2.54446"
        transform="rotate(45 107.173 1.12598)"
        fill="#FFC800"
      />
      <rect
        opacity="0.3"
        x="195.606"
        y="90.0488"
        width="11.3225"
        height="11.3225"
        rx="1.27223"
        transform="rotate(45 195.606 90.0488)"
        fill="#FFC800"
      />
    </svg>
  );
};

export const LessonFastForwardEndPassSvg = () => {
  return (
    <svg width="301" height="265" viewBox="0 0 301 265" fill="none">
      <g clipPath="url(#clip0_2061_83374)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M210.08 246.097C210.08 242.034 213.374 238.741 217.437 238.741H228.858C232.921 238.741 236.215 242.034 236.215 246.097C236.215 250.16 232.921 253.454 228.858 253.454H217.437C213.374 253.454 210.08 250.16 210.08 246.097Z"
          fill="#F49000"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M145.459 246.097C145.459 242.034 148.753 238.741 152.816 238.741H164.237C168.3 238.741 171.594 242.034 171.594 246.097C171.594 250.16 168.3 253.454 164.237 253.454H152.816C148.753 253.454 145.459 250.16 145.459 246.097Z"
          fill="#F49000"
        />
        <path
          d="M160.688 140.591L120.395 108.758L106.692 117.704C106.692 117.704 105.037 128.481 106.083 134.724C109.236 153.541 139.298 170.553 139.298 170.553L160.688 140.591Z"
          fill="#58CC02"
        />
        <path
          d="M48.6327 67.9373C48.9422 66.7163 50.1829 65.9774 51.4038 66.2869L52.7415 66.626C59.5923 68.3626 63.7382 75.324 62.0016 82.1747L61.8528 82.7617C61.5434 83.9827 60.3027 84.7215 59.0818 84.412L57.7441 84.073C50.8933 82.3364 46.7474 75.375 48.484 68.5242L48.6327 67.9373Z"
          fill="#FFD600"
        />
        <path
          d="M167.743 65.382C167.341 64.1883 166.048 63.5467 164.854 63.9488L163.546 64.3894C156.848 66.6457 153.248 73.9043 155.504 80.6019L155.698 81.1758C156.1 82.3694 157.394 83.011 158.587 82.6089L159.895 82.1683C166.593 79.912 170.193 72.6534 167.937 65.9558L167.743 65.382Z"
          fill="#FFB800"
        />
        <path
          d="M46.9051 93.023C46.4002 91.869 46.9264 90.5243 48.0804 90.0195L49.3447 89.4663C55.8195 86.6335 63.3649 89.5859 66.1977 96.0608L66.4404 96.6156C66.9453 97.7695 66.4191 99.1142 65.2652 99.6191L64.0009 100.172C57.526 103.005 49.9806 100.053 47.1478 93.5778L46.9051 93.023Z"
          fill="#FFD600"
        />
        <path
          d="M171.572 91.0441C172.04 89.8747 171.471 88.5474 170.302 88.0794L169.021 87.5666C162.459 84.9407 155.011 88.1311 152.385 94.6926L152.16 95.2548C151.692 96.4242 152.261 97.7515 153.43 98.2195L154.712 98.7323C161.273 101.358 168.721 98.1678 171.347 91.6063L171.572 91.0441Z"
          fill="#FFB800"
        />
        <path
          d="M57.9171 116.059C56.7333 115.629 56.1225 114.321 56.5528 113.137L57.0243 111.84C59.4389 105.198 66.7808 101.771 73.423 104.185L73.9921 104.392C75.1759 104.822 75.7866 106.131 75.3563 107.315L74.8849 108.612C72.4703 115.254 65.1284 118.681 58.4862 116.266L57.9171 116.059Z"
          fill="#FFD600"
        />
        <path
          d="M160.536 114.431C161.706 113.963 162.275 112.636 161.807 111.466L161.295 110.185C158.671 103.623 151.224 100.43 144.661 103.054L144.099 103.279C142.93 103.747 142.361 105.074 142.828 106.244L143.341 107.525C145.965 114.087 153.412 117.28 159.974 114.656L160.536 114.431Z"
          fill="#FFB800"
        />
        <path
          d="M66.8042 46.3008C66.6469 36.3889 77.0412 29.7212 86.2399 33.4164C94.8177 36.8621 103.991 39.9959 108.825 39.9192C113.659 39.8425 122.729 36.4191 131.193 32.703C140.27 28.7178 150.87 35.0523 151.027 44.9642L151.463 72.4227C151.832 95.6803 133.278 114.834 110.02 115.203C86.7623 115.572 67.6091 97.017 67.24 73.7594L66.8042 46.3008Z"
          fill="#FFB800"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M150.947 43.6632L151.062 50.9388C151.47 76.5959 131 97.7253 105.343 98.1325C90.1029 98.3744 76.46 91.2502 67.8089 80.0482C67.4684 77.9991 67.2754 75.8991 67.2414 73.7594L66.8057 46.3008C66.6484 36.3889 77.0427 29.7212 86.2414 33.4164C94.8191 36.8621 103.993 39.9959 108.827 39.9192C113.661 39.8425 122.73 36.4191 131.194 32.703C139.867 28.8951 149.931 34.5091 150.947 43.6632Z"
          fill="#FFD600"
        />
        <circle
          cx="81.134"
          cy="45.4758"
          r="8.32183"
          transform="rotate(-0.909229 81.134 45.4758)"
          fill="#FFF500"
        />
        <path
          d="M116.358 47.8611C122.884 46.5936 126.519 45.0876 131.403 42.2865"
          stroke="#FFF500"
          strokeWidth="11.1262"
          strokeLinecap="round"
        />
        <rect
          x="105.104"
          y="110.404"
          width="8.95607"
          height="19.328"
          transform="rotate(-0.909229 105.104 110.404)"
          fill="#FFB800"
        />
        <path
          d="M99.0467 123.544C104.301 123.084 105.333 120.126 105.23 118.623L112.033 124.337L101.359 129.258C98.3577 127.286 93.9253 123.993 99.0467 123.544Z"
          fill="#FFB800"
        />
        <path
          d="M98.8616 113.785C103.996 114.99 105.226 117.11 105.25 118.644L111.854 112.707L101.054 109.65C98.1161 111.717 94.2404 112.7 98.8616 113.785Z"
          fill="#FFB800"
        />
        <path
          d="M120.383 113.746C115.289 115.114 114.127 117.272 114.151 118.806L107.362 113.081L118.036 108.16C121.038 110.132 124.967 112.515 120.383 113.746Z"
          fill="#FFD600"
        />
        <path
          d="M120.383 113.746C115.289 115.114 114.127 117.272 114.151 118.806L107.362 113.081L118.036 108.16C121.038 110.132 124.967 112.515 120.383 113.746Z"
          fill="#FFB800"
        />
        <path
          d="M120.631 122.979C115.383 122.454 114.041 119.836 114.096 118.33L107.63 124.255L118.455 128.835C121.392 126.769 125.924 123.508 120.631 122.979Z"
          fill="#FFB800"
        />
        <path
          d="M60.2205 82.3379C60.4658 87.7491 63.4775 100.028 73.5611 105.853"
          stroke="#FFD600"
          strokeWidth="3.42608"
          strokeLinecap="round"
        />
        <path
          d="M157.47 80.7959C157.397 86.2121 154.776 98.5802 144.883 104.723"
          stroke="#FFB800"
          strokeWidth="3.42608"
          strokeLinecap="round"
        />
        <ellipse
          cx="111.884"
          cy="129.697"
          rx="25.5525"
          ry="7.0642"
          transform="rotate(-0.264391 111.884 129.697)"
          fill="#FFB800"
        />
        <rect
          x="79.7495"
          y="134.613"
          width="64.3076"
          height="7.1573"
          transform="rotate(-0.264391 79.7495 134.613)"
          fill="#FFD600"
        />
        <ellipse
          cx="111.906"
          cy="134.585"
          rx="32.1538"
          ry="7.79638"
          transform="rotate(-0.264391 111.906 134.585)"
          fill="#FFD600"
        />
        <ellipse
          cx="111.939"
          cy="142.261"
          rx="32.1538"
          ry="7.79638"
          transform="rotate(-0.264391 111.939 142.261)"
          fill="#FFB800"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M95.3845 135.269C95.8816 135.197 96.244 134.759 96.2144 134.257L95.9269 129.375C95.8939 128.816 95.3913 128.403 94.8379 128.488C92.265 128.879 89.9579 129.364 87.9999 129.923C87.575 130.044 87.297 130.447 87.323 130.888L87.6051 135.677C87.6414 136.294 88.2432 136.717 88.841 136.56C90.7513 136.058 92.955 135.622 95.3845 135.269Z"
          fill="#FFF500"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M99.645 133.715C99.6772 134.262 100.16 134.671 100.706 134.618C101.892 134.504 103.117 134.407 104.372 134.331C104.904 134.298 105.311 133.843 105.28 133.312L104.988 128.357C104.957 127.83 104.505 127.426 103.977 127.46C102.684 127.543 101.425 127.647 100.206 127.771C99.6984 127.822 99.324 128.267 99.3541 128.776L99.645 133.715Z"
          fill="#FFF500"
        />
        <path
          d="M200.513 109.709C197.394 107.241 189.558 102.097 176.221 100.368C159.694 98.225 143.603 112.058 142.249 122.496C139.699 142.164 135.27 173.707 135.015 175.678C134.695 178.143 131.475 227.99 184.678 234.889C227.24 240.408 243.525 205.078 246.347 186.724C248.766 168.071 253.847 131.513 254.825 123.974C256.047 114.551 249.529 104.567 237.497 103.007C227.871 101.759 208.83 106.955 200.513 109.709Z"
          fill="#58CC02"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M141.323 129.628L145.358 132.04L144.315 153.721L153.321 161.006L168.606 159.081L169.794 155.034L171.655 140.682L179.927 137.701L207.736 136.959C210.547 139.164 213.13 131.669 215.097 125.964C215.361 125.197 215.615 124.462 215.856 123.787C218.4 116.673 217.32 113.069 216.188 112.701C215.283 112.407 208.276 116.122 204.886 118.016C210.711 109.88 210.347 109.024 209.959 108.111C209.951 108.093 209.943 108.076 209.936 108.058C208.816 107.673 202.593 110.81 195.076 114.598C184.116 120.123 170.407 127.033 165.764 126.431C157.935 125.416 162.242 111.528 163.441 109.104C164.64 106.68 164.128 105.508 161.954 105.226C159.576 104.918 154.93 108.05 152.904 109.654L151.585 108.222C146.387 112.51 142.851 117.841 142.247 122.497C141.96 124.712 141.649 127.111 141.323 129.628Z"
          fill="#89E219"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M170.445 126.3C167.638 130.096 165.731 134.639 165.081 139.653L164.002 147.973C161.964 163.69 173.053 178.083 188.77 180.121C204.487 182.159 218.88 171.07 220.918 155.353L221.997 147.033C223.442 135.885 218.284 125.404 209.554 119.524L208.043 131.176L170.445 126.3Z"
          fill="#89E219"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M142.295 122.138L137.089 162.29C136.471 167.054 139.832 171.416 144.596 172.034C149.359 172.652 153.722 169.291 154.34 164.527L160.258 118.884C160.724 115.288 158.923 111.92 155.962 110.22L154.216 123.684L142.295 122.138Z"
          fill="#89E219"
        />
        <rect
          x="176.457"
          y="123.542"
          width="38.0074"
          height="46.7784"
          rx="19.0037"
          transform="rotate(7.38809 176.457 123.542)"
          fill="white"
        />
        <rect
          x="183.119"
          y="134.908"
          width="17.5253"
          height="26.3231"
          rx="8.76266"
          transform="rotate(7.38809 183.119 134.908)"
          fill="#535353"
        />
        <path
          d="M142.972 130.554C143.772 124.387 147.081 119.733 150.364 120.158C153.646 120.584 155.659 125.928 154.859 132.095L151.89 154.993C151.091 161.16 147.781 165.814 144.499 165.389C141.216 164.963 139.203 159.619 140.003 153.452L142.972 130.554Z"
          fill="white"
        />
        <path
          d="M153.476 161.895C154.22 158.099 157.784 155.533 161.62 156.03C165.639 156.551 168.475 160.232 167.954 164.251L166.804 173.119C166.262 177.297 162.436 180.244 158.258 179.703C153.888 179.136 150.906 174.994 151.754 170.67L153.476 161.895Z"
          fill="#F49000"
        />
        <path
          opacity="0.61"
          d="M154.998 159.959C155.503 157.334 157.964 155.555 160.616 155.899C163.507 156.274 165.484 159.009 164.933 161.872L162.834 172.77C162.328 175.395 159.867 177.174 157.216 176.83C154.325 176.455 152.348 173.72 152.899 170.857L154.998 159.959Z"
          fill="#8E4D00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M154.832 132.309L151.891 154.994C151.822 155.527 151.734 156.049 151.629 156.558C150.816 157.033 149.9 157.25 148.966 157.129C146.305 156.784 144.495 153.83 144.923 150.532L146.759 136.371C147.187 133.073 149.69 130.679 152.351 131.024C153.31 131.148 154.159 131.612 154.832 132.309Z"
          fill="#535353"
        />
        <path
          d="M154.023 161.408C150.426 151.89 143.923 149.458 139.004 150.35L140.139 162.045L146.194 169.631C147.008 169.582 152.388 165.618 154.023 161.408Z"
          fill="#89E219"
        />
        <circle
          cx="184.47"
          cy="138.628"
          r="5.04329"
          transform="rotate(7.38809 184.47 138.628)"
          fill="white"
        />
        <ellipse
          cx="147.835"
          cy="133.613"
          rx="2.9695"
          ry="4.71024"
          transform="rotate(7.38809 147.835 133.613)"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M163.801 167.75L162.835 172.77C162.329 175.396 159.868 177.174 157.217 176.83C155.39 176.594 153.929 175.415 153.239 173.858C154.144 169.713 158.088 166.88 162.373 167.436C162.866 167.499 163.343 167.606 163.801 167.75Z"
          fill="#FEB7FF"
        />
        <path
          d="M149.606 160.531C150.247 157.096 155.358 152.935 160.933 153.658C167.085 154.456 168.995 160.243 169.182 163.33L151.798 163.226C151.318 162.903 150.441 161.734 149.606 160.531Z"
          fill="#FFC200"
        />
        <path
          d="M97.1701 120.404L95.0631 116.077C94.4716 114.862 95.4178 113.463 96.7654 113.559L108.305 114.385C111.118 114.587 112.556 117.857 110.802 120.066L109.466 121.749C106.122 125.962 99.5251 125.241 97.1701 120.404Z"
          fill="#58CC02"
        />
        <path
          d="M175.936 166.247C185.198 156.73 199.208 154.099 211.873 154.991L208.949 166.686L192.361 175.272C190.266 175.223 180.146 170.457 175.936 166.247Z"
          fill="#89E219"
        />
        <path
          d="M157.432 156.192C158.177 155.87 160.229 155.639 161.767 156.192"
          stroke="#FFDE00"
          strokeWidth="3.33483"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M177.89 197.763L162.741 195.798C162.27 195.737 161.436 195.629 161.262 196.97C161.088 198.311 163.992 203.773 169.5 204.487C175.009 205.202 178.86 200.8 179.057 199.278C179.215 198.06 178.345 197.76 177.89 197.763Z"
          fill="#89E219"
        />
        <path
          d="M165.37 208.336C163.54 208.099 154.819 205.439 153.17 205.225C152.373 205.122 152.077 205.415 151.981 206.158C151.884 206.901 153.842 212.83 159.333 213.542C163.726 214.112 165.8 211.653 166.288 210.353C166.335 209.991 167.2 208.574 165.37 208.336Z"
          fill="#89E219"
        />
        <path
          d="M253.901 203.216C257.375 194.185 253.833 184.226 249.098 176.219C245.076 169.416 235.54 170.419 231.577 177.257L223.057 191.96C207.124 193.568 202.886 216.518 209.902 220.319C216.919 224.12 245.588 224.83 253.901 203.216Z"
          fill="#58CC02"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M228.23 221.966C223.013 222.611 218.345 221.829 214.588 220.518C210.637 219.139 207.855 215.71 207.931 211.937C208.097 203.608 214.894 195.468 226.859 195.468C227.989 195.468 228.906 194.552 228.906 193.422C228.906 192.291 227.989 191.375 226.859 191.375C212.762 191.375 204.052 201.202 203.838 211.855C203.719 217.792 208.02 222.561 213.239 224.382C216.103 225.382 219.425 226.107 223.077 226.26C224.917 224.928 226.633 223.488 228.23 221.966Z"
          fill="#38AD00"
        />
        <path
          d="M152.829 192.965C149.169 192.491 146.139 189.997 144.435 189.776C143.566 189.663 143.071 190.336 143.13 191.45C143.189 192.581 144.916 198.572 148.903 199.089C152.89 199.606 154.543 195.951 154.623 195.335C154.703 194.719 154.786 193.219 152.829 192.965Z"
          fill="#89E219"
        />
        <rect
          opacity="0.3"
          x="102.318"
          y="253.454"
          width="171.964"
          height="10.574"
          rx="5.28698"
          fill="#AFAFAF"
        />
        <path
          d="M247.636 47.7783C244.236 46.1783 240.511 42.8617 239.511 41.2783C239.111 44.6783 242.969 49.695 244.511 51.9033C245.219 51.0908 246.836 49.1283 247.636 47.7783Z"
          fill="#FF6E6E"
        />
        <path
          d="M52.4003 186.004C48.6719 184.048 44.84 180.951 42.5193 178.539C41.8658 177.86 40.7136 178.249 40.9137 179.17C41.8716 183.579 45.5478 188.746 47.7612 191.857L47.7765 191.878C48.1535 192.408 48.9271 192.448 49.3435 191.948C50.374 190.712 51.7788 188.944 52.7963 187.423C53.1242 186.932 52.9226 186.278 52.4003 186.004Z"
          fill="#FFD600"
        />
        <path
          d="M279.015 201.037C275.335 198.946 271.674 195.931 269.429 193.574C268.779 192.892 267.622 193.279 267.812 194.202C268.682 198.442 271.998 203.381 274.362 206.73C275.112 207.792 276.665 207.865 277.483 206.854C278.219 205.943 279.035 204.894 279.753 203.887C280.438 202.927 280.041 201.62 279.015 201.037Z"
          fill="#FF6E6E"
        />
        <path
          d="M89.005 188.623C86.5059 186.644 84.2659 183.114 82.8918 180.497C82.3451 179.456 82.8995 178.209 84.0211 177.855C84.8425 177.596 85.7958 177.301 86.7885 177.005C88.0546 176.627 89.4911 177.586 90.1007 178.759C91.0192 180.525 92.5918 182.556 94.0055 184.186C94.8802 185.195 94.6322 186.782 93.4535 187.409C92.7511 187.783 91.912 188.229 90.946 188.742C90.3215 189.074 89.5594 189.062 89.005 188.623Z"
          fill="#1CB0F6"
        />
        <path
          d="M261.851 144.465C264.864 142.341 267.561 137.803 268.915 135.02C269.173 134.491 268.895 133.869 268.335 133.688C267.057 133.276 265.161 132.682 263.264 132.135C262.629 131.952 261.962 132.435 261.743 133.058C260.924 135.389 258.317 138.612 256.418 140.683C255.967 141.175 256.089 141.967 256.679 142.281C257.626 142.786 259.043 143.539 260.871 144.51C261.183 144.676 261.562 144.669 261.851 144.465Z"
          fill="#58CC02"
        />
        <path
          d="M78.5675 13.1232C76.0684 11.1441 73.8284 7.61448 72.4543 4.9971C71.9076 3.95581 72.462 2.70922 73.5836 2.35516C74.405 2.09585 75.3583 1.80107 76.351 1.50503C77.6171 1.12748 79.0536 2.08643 79.6632 3.2586C80.5817 5.02495 82.1543 7.05623 83.568 8.68636C84.4427 9.695 84.1947 11.2823 83.016 11.9093C82.3136 12.283 81.4745 12.7291 80.5085 13.2425C79.884 13.5743 79.1219 13.5622 78.5675 13.1232Z"
          fill="#1CB0F6"
        />
        <path
          d="M186 82.2783C182.4 80.7129 179.167 76.5267 178 74.6293C179.25 74.3328 182.475 73.5976 185.375 73.0283C185.375 74.8783 189.708 78.4834 191.875 80.0548C191.25 80.2919 189.2 81.0687 186 82.2783Z"
          fill="#FFD600"
        />
        <path
          d="M224.605 93.9234C226.82 92.7353 228.847 90.653 230.269 88.8773C231.121 87.8139 230.51 86.309 229.18 86.0138C228.469 85.856 227.687 85.6855 226.882 85.5152C225.65 85.2547 224.215 86.1848 223.425 87.1655C222.749 88.0058 221.827 88.9066 220.887 89.7366C219.695 90.7894 219.976 92.8037 221.464 93.3666L223.114 93.9908C223.602 94.175 224.146 94.1696 224.605 93.9234Z"
          fill="#BD8AFF"
        />
        <path
          d="M214.708 164.606C212.073 163.193 209.663 160.717 207.972 158.605C206.96 157.341 207.686 155.551 209.267 155.2C210.112 155.013 211.043 154.81 212.001 154.607C213.466 154.298 215.171 155.404 216.111 156.57C216.915 157.569 218.011 158.64 219.129 159.627C220.547 160.879 220.212 163.275 218.443 163.944L216.481 164.686C215.901 164.905 215.254 164.899 214.708 164.606Z"
          fill="#BD8AFF"
        />
        <path
          d="M80.875 238.778C84.475 237.213 87.7083 233.027 88.875 231.129C87.625 230.833 84.4 230.098 81.5 229.528C81.5 231.378 77.1667 234.983 75 236.555C75.625 236.792 77.675 237.569 80.875 238.778Z"
          fill="#BD8AFF"
        />
        <path
          d="M293.875 238.778C297.475 237.213 300.708 233.027 301.875 231.129C300.625 230.833 297.4 230.098 294.5 229.528C294.5 231.378 290.167 234.983 288 236.555C288.625 236.792 290.675 237.569 293.875 238.778Z"
          fill="#1CB0F6"
        />
        <path
          d="M7.31921 109.385C9.77401 108.069 12.0197 105.761 13.5954 103.793C14.539 102.615 13.8624 100.947 12.3887 100.62C11.6011 100.445 10.7341 100.257 9.84181 100.068C8.47669 99.7792 6.88723 100.81 6.01199 101.896C5.26198 102.828 4.24124 103.826 3.19936 104.746C1.8779 105.912 2.18981 108.144 3.83847 108.768L5.6673 109.46C6.20717 109.664 6.81057 109.658 7.31921 109.385Z"
          fill="#FF6E6E"
        />
      </g>
      <defs>
        <clipPath id="clip0_2061_83374">
          <rect
            width="301"
            height="264"
            fill="white"
            transform="translate(0 0.77832)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const LessonFastForwardEndFailSvg = () => {
  return (
    <svg width="207" height="159" viewBox="0 0 207 159" fill="none">
      <g clipPath="url(#clip0_1883_314216)">
        <path
          d="M5.69174 89.1438H43.9035V82.8086L61.3777 101.028C61.5119 101.162 61.645 101.298 61.777 101.435C72.236 112.33 71.9881 129.673 61.1394 140.212C50.2906 150.75 33.1363 150.314 22.6774 139.42C22.274 139 21.8865 138.57 21.5149 138.132C9.38905 124.393 3.95657 106.519 5.69174 89.1438Z"
          fill="#4EC602"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M204.414 124.777C200.987 128.453 195.229 128.654 191.554 125.227L181.068 115.448C177.393 112.021 177.192 106.264 180.619 102.589C184.046 98.9135 189.804 98.7125 193.479 102.14L203.965 111.918C207.64 115.345 207.841 121.102 204.414 124.777Z"
          fill="#F49000"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M204.414 63.9872C200.987 60.3121 195.229 60.111 191.554 63.5381L181.068 73.3162C177.393 76.7433 177.192 82.5009 180.619 86.176C184.046 89.8511 189.804 90.0522 193.479 86.6251L203.965 76.8469C207.64 73.4198 207.841 67.6623 204.414 63.9872Z"
          fill="#F49000"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.4197 55.7247C38.4827 23.3927 75.2826 7.77205 107.615 20.835L145.45 36.1214C177.782 49.1844 193.403 85.9844 180.34 118.316C175.261 130.887 166.594 140.932 155.996 147.746H84.6311L60.3094 137.92C27.9774 124.857 12.3568 88.0567 25.4197 55.7247Z"
          fill="#58CC02"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M83.0251 147.096C86.2048 144.719 87.8716 140.871 87.2763 137.132C87.1343 136.24 86.1299 135.783 85.2927 136.228L72.7053 142.927L83.0251 147.096Z"
          fill="#89E219"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M94.485 147.746H108.004C108.795 145.978 109.089 144.023 108.782 142.096C108.64 141.205 107.636 140.748 106.799 141.193L94.485 147.746Z"
          fill="#89E219"
        />
        <path
          d="M19.9164 84.1809C24.9415 84.1809 29.0152 80.1073 29.0152 75.0822C29.0152 70.0571 24.9415 65.9834 19.9164 65.9834C14.8913 65.9834 10.8176 70.0571 10.8176 75.0822C10.8176 80.1073 14.8913 84.1809 19.9164 84.1809Z"
          fill="#8EE000"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.891602 90.7981C0.891602 86.8389 4.10115 83.6294 8.06032 83.6294H17.9862C21.9454 83.6294 25.155 86.8389 25.155 90.7981C25.155 94.7573 21.9454 97.9668 17.9862 97.9668H8.06032C4.10115 97.9668 0.891602 94.7573 0.891602 90.7981Z"
          fill="#4EC602"
        />
        <path
          d="M129.328 1.71704C100.341 10.3065 81.5476 14.6012 72.9477 14.6012C68.0325 14.6012 62.9129 12.5094 57.5889 8.32573C47.316 0.253017 32.4439 2.03664 24.3712 12.3096C21.0957 16.4778 19.3152 21.6253 19.3152 26.9265V77.8313C19.3152 105.067 41.3937 127.145 68.629 127.145C75.8452 127.145 82.9734 125.561 89.5107 122.506C121.283 128.87 152.199 108.274 158.563 76.5017C159.323 72.7074 159.706 68.8472 159.706 64.9775V24.399C159.706 11.3337 149.115 0.742188 136.049 0.742188C133.774 0.742188 131.51 1.07052 129.328 1.71704Z"
          fill="#58CC02"
        />
        <path
          d="M93.3367 132.953L108.892 124.675C109.725 124.231 110.735 124.704 110.885 125.608C111.607 129.954 109.361 134.416 105.252 136.603C101.142 138.79 96.1909 138.158 92.9952 135.129C92.33 134.498 92.503 133.397 93.3367 132.953Z"
          fill="#89E219"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M94.0857 79.2178H115.592L109.25 88.0408H94.0857V79.2178Z"
          fill="#8EE000"
        />
        <path
          opacity="0.3"
          d="M182.459 158.631C185.428 158.631 187.835 156.159 187.835 153.111C187.835 150.062 185.428 147.591 182.459 147.591H10.6068C7.63785 147.591 5.23103 150.062 5.23103 153.111C5.23103 156.159 7.63785 158.631 10.6068 158.631H182.459Z"
          fill="#AFAFAF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M79.1956 35.873C73.1556 42.4558 63.2952 41.3623 58.2387 35.8084C50.4037 27.3874 49.0519 40.028 54.1833 73.7299H83.5806C84.6839 44.1034 83.2223 31.4845 79.1956 35.873Z"
          fill="#89E219"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M103.157 26.1826H101.262C86.7572 26.1826 74.999 37.9408 74.999 52.4454V68.3938C74.999 82.8983 86.7572 94.6565 101.262 94.6565H103.157C117.662 94.6565 129.42 82.8983 129.42 68.3938V52.4454C129.42 37.9408 117.662 26.1826 103.157 26.1826Z"
          fill="#89E219"
        />
        <path
          d="M97.9937 15.4489L76.7098 38.5677C75.5932 39.8069 76.0091 41.772 77.5311 42.4486C84.844 45.6995 93.5694 43.8655 99.0732 37.7576C104.577 31.6497 105.49 22.787 101.49 15.8595C100.658 14.4177 99.1103 14.2097 97.9937 15.4489Z"
          fill="#89E219"
        />
        <path
          d="M108.586 20.9452L87.7543 44.0639C86.6377 45.3031 87.0536 47.2682 88.5757 47.9448C95.8885 51.1957 104.614 49.3617 110.118 43.2538C115.622 37.1459 116.535 28.2832 112.535 21.3557C111.702 19.9139 109.703 19.7061 108.586 20.9452Z"
          fill="#89E219"
        />
        <path
          d="M40.1664 16.3017L57.4646 34.9966C58.3697 36.0009 57.8103 37.7937 56.3599 38.5373C49.3912 42.11 41.5997 41.2715 37.1384 36.3215C32.6772 31.3714 32.6558 23.541 36.9392 16.9886C37.8307 15.6249 39.2613 15.2974 40.1664 16.3017Z"
          fill="#89E219"
        />
        <path
          d="M31.7426 21.7621L48.6402 40.5112C49.5459 41.5162 48.987 43.3095 47.5364 44.0529C40.5667 47.6246 32.7725 46.7831 28.3082 41.8296C23.8439 36.8761 23.8199 29.0427 28.1023 22.4894C28.9936 21.1254 30.8369 20.7571 31.7426 21.7621Z"
          fill="#89E219"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M39.8095 26.1826C28.3888 26.1826 19.1305 35.4409 19.1305 46.8616V73.9775C19.1305 85.3982 28.3888 94.6565 39.8095 94.6565C51.2302 94.6565 60.4885 85.3982 60.4885 73.9775V46.8616C60.4885 35.4409 51.2302 26.1826 39.8095 26.1826Z"
          fill="#89E219"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M101.422 35.3467C90.7502 35.3467 82.0988 43.9981 82.0988 54.6702V66.5651C82.0988 77.2371 90.7502 85.8886 101.422 85.8886C112.094 85.8886 120.746 77.2371 120.746 66.5651V54.6702C120.746 43.9981 112.094 35.3467 101.422 35.3467Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M42.5051 35.8994C33.9686 35.8994 27.0483 42.8197 27.0483 51.3562V70.433C27.0483 78.9696 33.9686 85.8899 42.5051 85.8899C51.0417 85.8899 57.9619 78.9696 57.9619 70.433V51.3562C57.9619 42.8197 51.0417 35.8994 42.5051 35.8994Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M99.6818 55.4504C101.144 54.4391 102.918 53.8467 104.831 53.8467C109.836 53.8467 113.894 57.9043 113.894 62.9096V73.1435C113.894 78.1489 109.836 82.2065 104.831 82.2065C99.8254 82.2065 95.7678 78.1489 95.7678 73.1435V64.5627C96.4239 64.8825 97.161 65.062 97.94 65.062C100.681 65.062 102.903 62.84 102.903 60.099C102.903 57.971 101.564 56.1558 99.6818 55.4504Z"
          fill="#4B4B4B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M44.8481 55.5788C46.147 54.4973 47.8174 53.8467 49.6397 53.8467C53.7779 53.8467 57.1325 57.2013 57.1325 61.3395V74.7837C57.1325 78.9219 53.7779 82.2765 49.6397 82.2765C45.5016 82.2765 42.147 78.9219 42.147 74.7837V65.0199C42.3594 65.0477 42.5761 65.062 42.7962 65.062C45.5371 65.062 47.7591 62.84 47.7591 60.099C47.7591 58.0899 46.5652 56.3595 44.8481 55.5788Z"
          fill="#4B4B4B"
        />
        <path
          d="M19.7786 83.667C14.9063 83.7431 10.8949 79.8551 10.8187 74.9828C10.7426 70.1106 14.6306 66.0992 19.5029 66.023C19.9161 66.0166 20.5807 66.0206 21.4646 66.0476C22.8756 66.0907 24.4386 66.1825 26.1222 66.3361C30.9447 66.7762 35.8362 67.6297 40.564 69.0277C45.5072 70.4894 50.003 72.4734 53.9189 75.0994C57.966 77.8133 59.0468 83.2942 56.3328 87.3413C53.6189 91.3884 48.138 92.4692 44.0909 89.7552C41.7907 88.2128 38.8997 86.937 35.5603 85.9495C32.0488 84.9112 28.2667 84.2513 24.5185 83.9092C23.2023 83.7891 21.9926 83.7181 20.9252 83.6854C20.3221 83.667 19.9281 83.6646 19.7786 83.667Z"
          fill="#89E219"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.8207 31.5576L52.9262 30.5762L64.0908 50.0502C57.4321 49.2166 51.2086 48.7998 45.4202 48.7998C39.6318 48.7998 32.9963 49.6657 25.5135 51.3974L24.8207 31.5576Z"
          fill="#89E219"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M119.285 33.8939L89.7805 29.1015L77.9472 49.7558C84.7164 48.7296 90.9043 48.4003 96.511 48.768C102.118 49.1358 110.234 50.4397 120.86 52.6797L119.285 33.8939Z"
          fill="#89E219"
        />
        <path
          d="M21.775 75.2242C20.1211 75.4894 18.5653 74.3637 18.3001 72.7098C18.0348 71.0559 19.1605 69.5002 20.8144 69.2349C24.0717 68.7125 26.9748 69.1168 29.4214 70.5206C30.8743 71.3542 31.3763 73.2078 30.5427 74.6607C29.7091 76.1135 27.8555 76.6156 26.4026 75.7819C25.2477 75.1193 23.7392 74.9091 21.775 75.2242Z"
          fill="#9AF300"
        />
        <path
          d="M52.6326 79.4564C53.8652 73.0529 59.4456 68.084 67.1475 68.084C74.0105 68.084 80.1782 73.0529 81.4108 79.4564V80.6802C81.4108 82.6012 79.1656 83.8124 77.4513 82.9456C74.6438 81.526 70.6859 79.9859 66.728 79.9859C62.9674 79.9859 59.3608 81.3763 56.7373 82.7327C54.9922 83.6349 52.6326 82.4079 52.6326 80.4435V79.4564Z"
          fill="#FFC200"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M63.1817 74.5208C63.179 74.5223 63.1764 74.5237 63.1737 74.5252C63.1747 74.5246 63.1764 74.5237 63.1787 74.5225C63.1882 74.5177 63.2081 74.5075 63.2378 74.493C63.2975 74.4639 63.3959 74.4176 63.5281 74.3613C63.7939 74.2481 64.1875 74.098 64.6698 73.965C65.6524 73.6939 66.8962 73.5227 68.1491 73.7771C69.2884 74.0083 70.3994 73.2722 70.6307 72.1329C70.862 70.9936 70.1259 69.8826 68.9866 69.6513C66.8709 69.2218 64.9201 69.5287 63.5502 69.9067C62.8562 70.0981 62.2841 70.3153 61.8782 70.4882C61.6746 70.5749 61.5107 70.6514 61.392 70.7093C61.3326 70.7383 61.2843 70.7627 61.2478 70.7816L61.202 70.8055L61.1858 70.8141L61.1795 70.8176L61.1767 70.819L61.1754 70.8197C61.1748 70.8201 61.1743 70.8204 62.1785 72.6702L61.1743 70.8204C60.1526 71.375 59.774 72.6529 60.3286 73.6746C60.8816 74.6932 62.1535 75.0726 63.1737 74.5252"
          fill="#FFDE00"
        />
        <path
          d="M61.4429 83.9428C61.4429 83.9428 67.2854 80.4185 72.6018 83.9428"
          stroke="#F49000"
          strokeWidth="10.5984"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M76.8177 95.6979C77.066 94.7796 78.0118 94.2365 78.9301 94.4848L79.9363 94.7569C85.0891 96.1505 88.1366 101.457 86.743 106.61L86.6236 107.052C86.3753 107.97 85.4295 108.513 84.5112 108.265L83.505 107.993C78.3522 106.599 75.3047 101.292 76.6983 96.1394L76.8177 95.6979Z"
          fill="#FFD600"
        />
        <path
          d="M166.798 95.1965C166.509 94.2903 165.54 93.7902 164.634 94.0796L163.641 94.3967C158.556 96.0203 155.75 101.459 157.373 106.544L157.513 106.979C157.802 107.886 158.771 108.386 159.677 108.096L160.67 107.779C165.755 106.156 168.561 100.717 166.937 95.6322L166.798 95.1965Z"
          fill="#FFB800"
        />
        <path
          d="M75.2117 114.622C74.8443 113.745 75.2577 112.735 76.1352 112.368L77.0966 111.965C82.0203 109.904 87.6831 112.224 89.7448 117.147L89.9215 117.569C90.2889 118.447 89.8754 119.456 88.998 119.823L88.0365 120.226C83.1128 122.288 77.4501 119.968 75.3883 115.044L75.2117 114.622Z"
          fill="#FFD600"
        />
        <path
          d="M169.384 114.622C169.751 113.745 169.338 112.735 168.46 112.368L167.499 111.965C162.575 109.904 156.913 112.224 154.851 117.147L154.674 117.569C154.307 118.447 154.72 119.456 155.598 119.823L156.559 120.226C161.483 122.288 167.146 119.968 169.207 115.044L169.384 114.622Z"
          fill="#FFB800"
        />
        <path
          d="M83.2519 132.151C82.3631 131.812 81.9175 130.817 82.2567 129.928L82.6283 128.954C84.5313 123.967 90.1169 121.467 95.1041 123.37L95.5314 123.533C96.4202 123.872 96.8658 124.867 96.5266 125.756L96.155 126.73C94.252 131.717 88.6664 134.217 83.6792 132.314L83.2519 132.151Z"
          fill="#FFD600"
        />
        <path
          d="M160.769 132.151C161.658 131.812 162.103 130.817 161.764 129.928L161.393 128.954C159.49 123.967 153.904 121.467 148.917 123.37L148.489 123.533C147.601 123.872 147.155 124.867 147.494 125.756L147.866 126.73C149.769 131.717 155.355 134.217 160.342 132.314L160.769 132.151Z"
          fill="#FFB800"
        />
        <path
          d="M90.7999 79.5766C90.7999 72.0894 98.7295 67.1786 105.632 70.0794C112.068 72.7843 118.959 75.2609 122.61 75.2609C126.262 75.2609 133.152 72.7843 139.588 70.0794C146.491 67.1786 154.42 72.0894 154.42 79.5766V100.318C154.42 117.886 140.178 132.128 122.61 132.128C105.042 132.128 90.7999 117.886 90.7999 100.318V79.5766Z"
          fill="#FFB800"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M154.419 88.2609C153.441 106.767 138.126 121.471 119.376 121.471C108.15 121.471 98.155 116.2 91.7315 107.997C91.122 105.538 90.7986 102.966 90.7986 100.318V79.5766C90.7986 72.0894 98.7281 67.1786 105.631 70.0794C112.067 72.7843 118.957 75.2609 122.609 75.2609C126.26 75.2609 133.15 72.7843 139.587 70.0794C146.489 67.1786 154.419 72.0894 154.419 79.5766V88.2609Z"
          fill="#FFD600"
        />
        <path
          d="M106.589 141.396C106.589 139.521 108.109 138 109.985 138H134.35C136.225 138 137.746 139.521 137.746 141.396C137.746 143.272 136.225 144.793 134.35 144.793H109.985C108.109 144.793 106.589 143.272 106.589 141.396Z"
          fill="#FFB800"
        />
        <circle cx="101.631" cy="79.1252" r="6.28534" fill="#FFF500" />
        <rect
          x="118.953"
          y="128.444"
          width="6.76437"
          height="14.5981"
          fill="#FFB800"
        />
        <path
          d="M114.152 138.064C118.136 138.064 119.012 135.791 118.953 134.654L124.022 139.051L115.902 142.64C113.659 141.114 110.169 138.064 114.152 138.064Z"
          fill="#FFB800"
        />
        <path
          d="M114.198 130.922C118.061 131.894 118.965 133.509 118.965 134.668L124.023 130.264L115.903 127.826C113.66 129.351 110.721 130.047 114.198 130.922Z"
          fill="#FFB800"
        />
        <path
          d="M130.451 131.152C126.588 132.125 125.684 133.74 125.684 134.898L120.626 130.494L128.746 126.905C130.989 128.431 133.928 130.278 130.451 131.152Z"
          fill="#FFD600"
        />
        <path
          d="M130.451 131.152C126.588 132.125 125.684 133.74 125.684 134.898L120.626 130.494L128.746 126.905C130.989 128.431 133.928 130.278 130.451 131.152Z"
          fill="#FFB800"
        />
        <path
          d="M130.567 137.949C126.583 137.949 125.592 135.676 125.651 134.539L120.697 138.936L128.817 142.525C131.06 140.999 134.551 137.949 130.567 137.949Z"
          fill="#FFB800"
        />
        <path
          d="M99.5647 144.793C99.5647 142.917 101.085 141.396 102.961 141.396H141.3C143.175 141.396 144.696 142.917 144.696 144.793C144.696 146.669 143.175 148.189 141.3 148.189H102.961C101.085 148.189 99.5647 146.669 99.5647 144.793Z"
          fill="#FFD600"
        />
        <path
          d="M85.3955 106.712C85.516 110.801 87.6432 120.11 95.1884 124.63"
          stroke="#FFD600"
          strokeWidth="2.58766"
          strokeLinecap="round"
        />
        <path
          d="M158.857 106.712C158.737 110.801 156.609 120.11 149.064 124.63"
          stroke="#FFB800"
          strokeWidth="2.58766"
          strokeLinecap="round"
        />
        <path
          d="M152.622 122.381C158.93 126.197 160.306 134.761 155.511 140.361L153.255 142.995C146.64 150.72 134.013 147.165 132.4 137.124L131.688 132.695C130.075 122.654 140.953 115.322 149.655 120.586L152.622 122.381Z"
          fill="#58CC02"
        />
      </g>
      <defs>
        <clipPath id="clip0_1883_314216">
          <rect
            width="206"
            height="158"
            fill="white"
            transform="translate(0.853516 0.234375)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const LessonTopBarHeart = () => {
  return (
    <svg width="28" height="23" viewBox="0 0 28 23" fill="none">
      <path
        d="M0.5 7.67929C0.5 10.2722 1.81423 12.5649 3.82688 13.9554L12.4105 21.4445C13.4302 22.3342 14.9537 22.3223 15.9595 21.4169L24.592 13.6451C26.3662 12.2371 27.5001 10.0877 27.5001 7.67929C27.5001 3.43814 23.9839 0 19.6464 0C17.43 0 15.428 0.897744 14 2.34164C12.5721 0.897744 10.5701 0 8.35369 0C4.01622 0 0.5 3.43814 0.5 7.67929Z"
        fill="#FF4B4B"
      />
      <path
        opacity="0.3"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.0348 10.9896C9.76872 10.9896 11.1743 9.54248 11.1743 7.75737C11.1743 5.97226 9.76872 4.52515 8.0348 4.52515C6.30088 4.52515 4.89526 5.97226 4.89526 7.75737C4.89526 9.54248 6.30088 10.9896 8.0348 10.9896Z"
        fill="white"
      />
    </svg>
  );
};

export const LessonTopBarEmptyHeart = () => {
  return (
    <svg width="28" height="23" viewBox="0 0 28 23" fill="none">
      <path
        d="M0.5 7.67929C0.5 10.2722 1.81423 12.5649 3.82688 13.9554L12.4105 21.4445C13.4302 22.3342 14.9537 22.3223 15.9595 21.4169L24.592 13.6451C26.3662 12.2371 27.5001 10.0877 27.5001 7.67929C27.5001 3.43814 23.9839 0 19.6464 0C17.43 0 15.428 0.897744 14 2.34164C12.5721 0.897744 10.5701 0 8.35369 0C4.01622 0 0.5 3.43814 0.5 7.67929Z"
        fill="#E5E5E5"
      />
    </svg>
  );
};

export const LessonCompletionSvg0 = (props: ComponentProps<"svg">) => {
  return (
    <svg
      style={{ transitionDuration: "400ms" }}
      viewBox="0 0 100 100"
      className="absolute"
      {...props}
    >
      <defs>
        <clipPath id="clip-session/ProgressRing1">
          <path d="M3.061616997868383e-15,-50L2.5717582782094417e-15,-42Z"></path>
        </clipPath>
      </defs>
      <g transform="translate(50, 50)">
        <path
          d="M3.061616997868383e-15,-50A50,50,0,1,1,-3.061616997868383e-15,50A50,50,0,1,1,3.061616997868383e-15,-50M-7.715274834628325e-15,-42A42,42,0,1,0,7.715274834628325e-15,42A42,42,0,1,0,-7.715274834628325e-15,-42Z"
          fill="rgb(229,229,229)"
        ></path>
        <circle
          clipPath="url(#clip-session/ProgressRing1)"
          cx="-3.9949609477190866"
          cy="-45.82619651494328"
          fill="rgb(255,255,255)"
          r="4"
        ></circle>
        <path
          d="M3.061616997868383e-15,-50L2.5717582782094417e-15,-42Z"
          fill="rgb(255,200,0)"
        ></path>
      </g>
    </svg>
  );
};

export const LessonCompletionSvg1 = (props: ComponentProps<"svg">) => {
  return (
    <svg
      style={{ transitionDuration: "400ms" }}
      viewBox="0 0 100 100"
      className="absolute"
      {...props}
    >
      <defs>
        <clipPath id="clip-session/ProgressRing614">
          <path d="M3.552713678800501e-15,-45.8257569495584A4,4,0,0,1,4.347826086956525,-49.81060537995478A50,50,0,0,1,49.979156518488836,1.4435767040219651A4,4,0,0,1,45.51809422092188,5.301235563081284L45.51809422092188,5.301235563081285A4,4,0,0,1,41.98249147553062,1.2126044313784499A42,42,0,0,0,3.6521739130434776,-41.840908519162014A4,4,0,0,1,3.552713678800501e-15,-45.8257569495584Z"></path>
        </clipPath>
      </defs>
      <g transform="translate(50, 50)">
        <path
          d="M3.061616997868383e-15,-50A50,50,0,1,1,-3.061616997868383e-15,50A50,50,0,1,1,3.061616997868383e-15,-50M-7.715274834628325e-15,-42A42,42,0,1,0,7.715274834628325e-15,42A42,42,0,1,0,-7.715274834628325e-15,-42Z"
          fill="#E5E5E5"
        ></path>
        <circle
          clipPath="url(#clip-session/ProgressRing614)"
          cx="45.82619651494328"
          cy="-3.994960947719092"
          fill="#FFFFFF"
          r="6.666666666666666"
        ></circle>
        <path
          d="M3.552713678800501e-15,-45.8257569495584A4,4,0,0,1,4.347826086956525,-49.81060537995478A50,50,0,0,1,49.81060537995478,-4.347826086956522A4,4,0,0,1,45.8257569495584,0L45.8257569495584,0A4,4,0,0,1,41.840908519162014,-3.652173913043479A42,42,0,0,0,3.6521739130434776,-41.840908519162014A4,4,0,0,1,3.552713678800501e-15,-45.8257569495584Z"
          fill="#FFC800"
        ></path>
      </g>
    </svg>
  );
};

export const LessonCompletionSvg2 = (props: ComponentProps<"svg">) => {
  return (
    <svg
      viewBox="0 0 100 100"
      style={{ transitionDuration: "400ms" }}
      className="absolute"
      {...props}
    >
      <defs>
        <clipPath id="clip-session/ProgressRing1043">
          <path d="M3.552713678800501e-15,-45.8257569495584A4,4,0,0,1,4.347826086956525,-49.81060537995478A50,50,0,0,1,-1.4435767040219774,49.979156518488836A4,4,0,0,1,-5.30123556308129,45.51809422092188L-5.301235563081291,45.51809422092188A4,4,0,0,1,-1.2126044313784563,41.98249147553062A42,42,0,0,0,3.6521739130434776,-41.840908519162014A4,4,0,0,1,3.552713678800501e-15,-45.8257569495584Z"></path>
        </clipPath>
      </defs>
      <g transform="translate(50, 50)">
        <path
          d="M3.061616997868383e-15,-50A50,50,0,1,1,-3.061616997868383e-15,50A50,50,0,1,1,3.061616997868383e-15,-50M-7.715274834628325e-15,-42A42,42,0,1,0,7.715274834628325e-15,42A42,42,0,1,0,-7.715274834628325e-15,-42Z"
          fill="rgb(229,229,229)"
        ></path>
        <circle
          clipPath="url(#clip-session/ProgressRing1043)"
          cx="3.9949609477190924"
          cy="45.82619651494328"
          fill="rgb(255,255,255)"
          r="6.666666666666666"
        ></circle>
        <path
          d="M3.552713678800501e-15,-45.8257569495584A4,4,0,0,1,4.347826086956525,-49.81060537995478A50,50,0,0,1,4.347826086956521,49.81060537995478A4,4,0,0,1,3.552713678800501e-15,45.8257569495584L3.552713678800501e-15,45.8257569495584A4,4,0,0,1,3.6521739130434816,41.840908519162014A42,42,0,0,0,3.6521739130434776,-41.840908519162014A4,4,0,0,1,3.552713678800501e-15,-45.8257569495584Z"
          fill="rgb(255,200,0)"
        ></path>
      </g>
    </svg>
  );
};

export const LessonCompletionSvg3 = (props: ComponentProps<"svg">) => {
  return (
    <svg
      viewBox="0 0 100 100"
      style={{ transitionDuration: "400ms" }}
      className="absolute"
      {...props}
    >
      <defs>
        <clipPath id="clip-session/ProgressRing1577">
          <path d="M3.552713678800501e-15,-45.8257569495584A4,4,0,0,1,4.347826086956525,-49.81060537995478A50,50,0,1,1,-49.979156518488836,-1.4435767040219978A4,4,0,0,1,-45.518094220921874,-5.301235563081309L-45.518094220921874,-5.301235563081308A4,4,0,0,1,-41.982491475530615,-1.212604431378473A42,42,0,1,0,3.6521739130434776,-41.840908519162014A4,4,0,0,1,3.552713678800501e-15,-45.8257569495584Z"></path>
        </clipPath>
      </defs>
      <g transform="translate(50, 50)">
        <path
          d="M3.061616997868383e-15,-50A50,50,0,1,1,-3.061616997868383e-15,50A50,50,0,1,1,3.061616997868383e-15,-50M-7.715274834628325e-15,-42A42,42,0,1,0,7.715274834628325e-15,42A42,42,0,1,0,-7.715274834628325e-15,-42Z"
          fill="rgb(229,229,229)"
        ></path>
        <circle
          clipPath="url(#clip-session/ProgressRing1577)"
          cx="-45.82619651494328"
          cy="3.994960947719095"
          fill="rgb(255,255,255)"
          r="6.666666666666666"
        ></circle>
        <path
          d="M3.552713678800501e-15,-45.8257569495584A4,4,0,0,1,4.347826086956525,-49.81060537995478A50,50,0,1,1,-49.81060537995478,4.347826086956535A4,4,0,0,1,-45.8257569495584,5.329070518200751e-15L-45.8257569495584,5.329070518200751e-15A4,4,0,0,1,-41.840908519162014,3.652173913043483A42,42,0,1,0,3.6521739130434776,-41.840908519162014A4,4,0,0,1,3.552713678800501e-15,-45.8257569495584Z"
          fill="rgb(255,200,0)"
        ></path>
      </g>
    </svg>
  );
};

export const EmptyFireSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg
      width="25px"
      height="30px"
      viewBox="0 0 25 30"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="streak-empty"
          transform="translate(1.000000, 1.000000)"
          fillRule="nonzero"
        >
          <g id="Group" fill="#E5E5E5" stroke="#FFFFFF" strokeWidth="2">
            <path
              d="M0.068,15.675 L0.044,7.216 C0.039,5.334 1.25,3.942 3.056,4.246 C3.413,4.306 3.998,4.491 4.306,4.656 L5.997,5.561 L9.247,1.464 C9.79255754,0.776391272 10.6222536,0.37555895 11.5,0.37555895 C12.3777464,0.37555895 13.2074425,0.776391272 13.753,1.464 L20.523,10 C22.1231469,11.939276 22.9988566,14.3747884 23,16.889 C23,23.034 17.843,28 11.5,28 C5.157,28 0,23.034 0,16.889 C0,16.481 0.023,16.076 0.068,15.675 Z"
              id="Path"
            />
          </g>
          <g
            id="Group"
            transform="translate(7.000000, 11.000000)"
            fill="#FFFFFF"
          >
            <path
              d="M1.012,5.077 C1.02645313,5.04002851 1.04561094,5.00507392 1.069,4.973 L3.719,1.364 C3.89306825,1.12674185 4.1697362,0.986581193 4.464,0.986581193 C4.7582638,0.986581193 5.03493175,1.12674185 5.209,1.364 L7.732,4.8 C8.54117469,5.59477404 8.99791508,6.68079318 9,7.815 C9,10.208 6.985,12.148 4.5,12.148 C2.015,12.148 0,10.208 0,7.815 C0,6.776 0.38,5.823 1.012,5.077 L1.012,5.077 Z"
              id="Path"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export const FireSvg = () => {
  return (
    <svg width="25px" height="30px" viewBox="0 0 25 30">
      <g
        id="Page-1"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="streak"
          transform="translate(1.000000, 1.000000)"
          fillRule="nonzero"
        >
          <g id="Group" fill="#FF9600" stroke="#FFFFFF" strokeWidth={2}>
            <path
              d="M0.068,15.675 L0.044,7.216 C0.039,5.334 1.25,3.942 3.056,4.246 C3.413,4.306 3.998,4.491 4.306,4.656 L5.997,5.561 L9.247,1.464 C9.79255754,0.776391272 10.6222536,0.37555895 11.5,0.37555895 C12.3777464,0.37555895 13.2074425,0.776391272 13.753,1.464 L20.523,10 C22.1231469,11.939276 22.9988566,14.3747884 23,16.889 C23,23.034 17.843,28 11.5,28 C5.157,28 0,23.034 0,16.889 C0,16.481 0.023,16.076 0.068,15.675 Z"
              id="Path"
            />
          </g>
          <g
            id="Group"
            transform="translate(7.000000, 11.000000)"
            fill="#FFC800"
          >
            <path
              d="M1.012,5.077 C1.02645313,5.04002851 1.04561094,5.00507392 1.069,4.973 L3.719,1.364 C3.89306825,1.12674185 4.1697362,0.986581193 4.464,0.986581193 C4.7582638,0.986581193 5.03493175,1.12674185 5.209,1.364 L7.732,4.8 C8.54117469,5.59477404 8.99791508,6.68079318 9,7.815 C9,10.208 6.985,12.148 4.5,12.148 C2.015,12.148 0,10.208 0,7.815 C0,6.776 0.38,5.823 1.012,5.077 L1.012,5.077 Z"
              id="Path"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export const EmptyGemSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg width="26" height="30" viewBox="0 0 26 30" {...props}>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g fill="#E5E5E5" stroke="#FFF" strokeWidth="2">
          <path d="M4.12 6.36l6.475-3.908a4.387 4.387 0 0 1 4.534 0l6.475 3.907a4.387 4.387 0 0 1 2.12 3.757v9.666a4.387 4.387 0 0 1-2.12 3.756l-6.475 3.907a4.387 4.387 0 0 1-4.534 0L4.12 23.538A4.387 4.387 0 0 1 2 19.782v-9.666c0-1.538.804-2.962 2.12-3.757z" />
        </g>
      </g>
    </svg>
  );
};

export const GemSvg = () => {
  return (
    <svg width="24px" height="30px" viewBox="0 0 24 30">
      <g
        id="Page-1"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="lingot"
          transform="translate(1.000000, 1.000000)"
          fillRule="nonzero"
        >
          <path
            d="M2.12,5.36 L8.595,1.452 C9.9891922,0.61047923 11.7348078,0.61047923 13.129,1.452 L19.604,5.359 C20.9201138,6.15339332 21.7243996,7.57872448 21.7240001,9.116 L21.7240001,18.782 C21.7240001,20.3189192 20.9198086,21.7437908 19.604,22.538 L13.129,26.445 C11.7348078,27.2865208 9.9891922,27.2865208 8.595,26.445 L2.12,22.538 C0.804191377,21.7437908 0,20.3189192 0,18.782 L0,9.116 C0,7.578 0.804,6.154 2.12,5.359 L2.12,5.36 Z"
            id="Path"
            stroke="#FFFFFF"
            strokeWidth={2}
            fill="#FC4848"
          />
          <path
            d="M10.89,5.273 L10.89,8.438 C10.89,8.816 10.692,9.166 10.37,9.362 L7.422,11.145 C7.05578595,11.3664376 6.59336378,11.350749 6.243,11.105 L3.857,9.433 C3.55901568,9.22418286 3.38621247,8.87935269 3.39729469,8.51565441 C3.40837691,8.15195613 3.60185462,7.81828687 3.912,7.628 L9.245,4.352 C9.57820431,4.14746267 9.99593499,4.1389799 10.3371682,4.32982156 C10.6784014,4.52066323 10.8898476,4.88102607 10.89,5.272 L10.89,5.273 Z"
            id="Path"
            fill="#FFFFFF"
            opacity="0.793"
          />
        </g>
      </g>
    </svg>
  );
};

export const LingotsTreasureChestSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg width="124" height="124" viewBox="0 0 124 124" {...props}>
      <title>lingot_chest</title>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(12 16)">
          <rect
            fill="#FFBC00"
            x="41.074"
            y="13.018"
            width="19.396"
            height="11.343"
            rx="3.404"
          />
          <rect
            fill="#FFBC00"
            x="13.691"
            y="17.555"
            width="73.02"
            height="11.343"
            rx="3.404"
          />
          <path
            d="M16.561 24.766c-.738 0-1.337.599-1.337 1.337V60.05c0 .738.599 1.337 1.337 1.337h66.14c.737 0 1.336-.599 1.336-1.337V26.103c0-.738-.599-1.337-1.337-1.337H16.561z"
            stroke="#AA572A"
            strokeWidth="5.348"
            fill="#864624"
          />
          <g fill="#E33535">
            <path d="M54.805 31.994l10.76-3.007c1.433-.4 2.97.012 4.01 1.075l7.815 7.984a4.076 4.076 0 0 1 1.025 3.906l-3.55 13.247a4.076 4.076 0 0 1-2.84 2.87l-10.76 3.007a4.076 4.076 0 0 1-4.01-1.074l-7.815-7.985a4.076 4.076 0 0 1-1.024-3.905l3.55-13.247a4.076 4.076 0 0 1 2.84-2.87z" />
          </g>
          <g>
            <path
              d="M48.95 24.032l-10.588-3.566a4.076 4.076 0 0 0-4.06.863l-8.223 7.564a4.076 4.076 0 0 0-1.227 3.847l2.85 13.415a4.076 4.076 0 0 0 2.687 3.015l10.588 3.566a4.076 4.076 0 0 0 4.06-.863l8.223-7.565a4.076 4.076 0 0 0 1.227-3.847l-2.851-13.414a4.076 4.076 0 0 0-2.686-3.015z"
              fill="#FF4B4B"
            />
            <path
              d="M36.967 24.627l1.773 8.343a1.3 1.3 0 0 1-1.609 1.525l-8.308-2.237a1.3 1.3 0 0 1-.549-2.204l6.534-6.106a1.3 1.3 0 0 1 2.159.68z"
              fill="#FFA6A6"
            />
          </g>
          <g fill="#E33535">
            <path d="M53.073 39.666l-11.153.66a4.076 4.076 0 0 0-3.441 2.322l-4.79 10.094a4.076 4.076 0 0 0 .302 4.026l7.67 11.37a4.076 4.076 0 0 0 3.619 1.789l11.153-.66a4.076 4.076 0 0 0 3.442-2.321l4.79-10.094a4.076 4.076 0 0 0-.304-4.026l-7.669-11.37a4.076 4.076 0 0 0-3.62-1.79z" />
          </g>
          <g>
            <path
              d="M64.07 36.264l11.153.66a4.076 4.076 0 0 1 3.441 2.32l4.79 10.095a4.076 4.076 0 0 1-.303 4.026l-7.669 11.37a4.076 4.076 0 0 1-3.62 1.79l-11.153-.661a4.076 4.076 0 0 1-3.441-2.321l-4.79-10.094a4.076 4.076 0 0 1 .303-4.026l7.67-11.37a4.076 4.076 0 0 1 3.619-1.79z"
              fill="#FF4B4B"
            />
            <path
              d="M74.642 41.65l-4.77 7.071a1.3 1.3 0 0 1-2.215-.098l-4.161-7.53a1.3 1.3 0 0 1 1.204-1.926l8.93.459a1.3 1.3 0 0 1 1.012 2.024z"
              fill="#FFA6A6"
            />
          </g>
          <g fill="#FF4B4B">
            <path d="M34.98 37.059l-11.052.615a4.076 4.076 0 0 0-3.462 2.335l-4.71 10.017a4.076 4.076 0 0 0 .309 4.014l7.68 11.385a4.076 4.076 0 0 0 3.605 1.79l11.052-.615a4.076 4.076 0 0 0 3.462-2.335l4.71-10.017a4.076 4.076 0 0 0-.309-4.014l-7.68-11.385a4.076 4.076 0 0 0-3.605-1.79z" />
          </g>
          <path
            d="M21.564 41.801l5.424 9.238a1.3 1.3 0 0 0 2.38-.976l-2.354-9.323a1.3 1.3 0 0 0-1.296-.98l-3.07.084a1.3 1.3 0 0 0-1.084 1.957z"
            fill="#FFA6A6"
          />
          <path
            d="M1.35 28.913l1.307-2.252a2.674 2.674 0 0 1 3.644-.976l2.278 1.308a2.674 2.674 0 0 1 .981 3.662l-1.307 2.251a2.674 2.674 0 0 1-3.644.977l-2.278-1.308a2.674 2.674 0 0 1-.981-3.662zM79.269 8.04l-3.02-5.199a2.674 2.674 0 0 0-3.642-.976l-5.243 3.01a2.674 2.674 0 0 0-.981 3.661l3.019 5.199a2.674 2.674 0 0 0 3.643.976l5.243-3.01a2.674 2.674 0 0 0 .981-3.661zM99.276 50.658l-.737-1.27a2.674 2.674 0 0 0-3.643-.976l-1.29.74a2.674 2.674 0 0 0-.982 3.663l.737 1.269a2.674 2.674 0 0 0 3.644.976l1.29-.74a2.674 2.674 0 0 0 .981-3.662z"
            fill="#FF4B4B"
            opacity=".301"
          />
          <path fill="#AA572A" d="M13.691 50.49H85.57v41.97H13.691z" />
          <path
            d="M21.207 78.28H73.49"
            stroke="#904821"
            strokeWidth="2.674"
            strokeLinecap="square"
          />
          <g>
            <path fill="#FFBC00" d="M21.678 84.52h54.765v7.94H21.678z" />
            <path
              d="M24.621 84.52h50.02l-7.987 7.94H21.678v-5.015l2.943-2.926z"
              fill="#FFD300"
            />
          </g>
          <path
            d="M21.207 62.4H73.49"
            stroke="#904821"
            strokeWidth="2.674"
            strokeLinecap="square"
          />
          <g transform="translate(10.268 50.49)">
            <rect
              fill="#FFBC00"
              x="0"
              y="0"
              width="15.973"
              height="41.969"
              rx="2.674"
            />
            <path
              d="M15.973 2.786L0 18.666V2.674A2.674 2.674 0 0 1 2.674 0h10.625a2.674 2.674 0 0 1 2.674 2.674v.112zM15.973 28.218v11.077a2.674 2.674 0 0 1-2.674 2.674H2.674a2.69 2.69 0 0 1-.488-.045l13.787-13.706z"
              fill="#FFD300"
            />
          </g>
          <g transform="translate(73.02 50.49)">
            <rect
              fill="#FFBC00"
              x="0"
              y="0"
              width="15.973"
              height="41.969"
              rx="2.674"
            />
            <path
              d="M15.973 19.761L0 35.641V2.674A2.674 2.674 0 0 1 2.674 0h10.625a2.674 2.674 0 0 1 2.674 2.674V19.76z"
              fill="#FFD300"
            />
          </g>
          <rect
            fill="#FFBC00"
            x="38.792"
            y="47.088"
            width="21.678"
            height="26.089"
            rx="2.674"
          />
          <g transform="translate(44.496 51.625)" fill="#DB8500">
            <ellipse cx="5.134" cy="5.293" rx="5.134" ry="5.293" />
            <path d="M7.717 8.424l1.726 4.89a1.925 1.925 0 0 1-1.815 2.566H2.544a1.925 1.925 0 0 1-1.815-2.565l1.726-4.89a2.79 2.79 0 0 1 5.262 0z" />
          </g>
          <ellipse
            fill="#F8A201"
            cx="18.825"
            cy="57.863"
            rx="2.852"
            ry="2.836"
          />
          <ellipse
            fill="#F8A201"
            cx="18.825"
            cy="83.952"
            rx="2.852"
            ry="2.836"
          />
          <ellipse
            fill="#F8A201"
            cx="81.577"
            cy="83.952"
            rx="2.852"
            ry="2.836"
          />
          <ellipse
            fill="#F8A201"
            cx="81.577"
            cy="57.863"
            rx="2.852"
            ry="2.836"
          />
        </g>
      </g>
    </svg>
  );
};

export const MoreOptionsSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      className="h-[36px] w-[36px]"
      {...props}
    >
      <circle
        cx="23"
        cy="23"
        r="19"
        fill="none"
        stroke="white"
        strokeWidth={2}
      />
      <circle cx="15" cy="23" r="2" fill="white" />
      <circle cx="23" cy="23" r="2" fill="white" />
      <circle cx="31" cy="23" r="2" fill="white" />
    </svg>
  );
};

export const CloseSvg = () => {
  return (
    <svg height="24" width="24">
      <path
        fill="currentColor"
        d="m6.4 19.2-1.6-1.6 5.6-5.6-5.6-5.6 1.6-1.6 5.6 5.6 5.6-5.6 1.6 1.6-5.6 5.6 5.6 5.6-1.6 1.6-5.6-5.6Z"
      />
    </svg>
  );
};

export const BigCloseSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg height="48" viewBox="0 96 960 960" width="48" {...props}>
      <path
        fill="currentColor"
        d="m249 873-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z"
      />
    </svg>
  );
};

export const DoneSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg height="48" viewBox="0 96 960 960" width="48" {...props}>
      <path
        fill="currentColor"
        d="M378 834 130 586l68-68 180 180 383-383 68 68-451 451Z"
      />
    </svg>
  );
};

export const AppleSvg = () => {
  return (
    <svg width="212px" height="212px" viewBox="0 0 212 212" className="w-full">
      <title>apple</title>
      <desc>Created with Sketch.</desc>
      <g
        id="apple"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Group" transform="translate(14.000000, 14.000000)">
          <path
            d="M92,29.7321429 C95.0928396,29.7321429 97.6000815,32.2393847 97.6000815,35.3322243 C97.6000815,35.4793895 97.5942804,35.6264975 97.5826918,35.7732057 L94.9713949,68.8314433 C94.8489343,70.3817572 93.555143,71.577381 92,71.577381 C90.444857,71.577381 89.1510657,70.3817572 89.0286051,68.8314433 L86.4173082,35.7732057 C86.1737609,32.6899701 88.4757831,29.9930798 91.5590187,29.7495325 C91.7057268,29.7379439 91.8528348,29.7321429 92,29.7321429 Z"
            id="Rectangle-197"
            fill="#743D00"
            opacity="0.807142857"
          />
          <path
            d="M70.4556019,51.9405926 L70.5913656,51.9406255 C95.7944998,51.9689234 116.224153,72.3985749 116.252452,97.6017091 L116.258899,124.146291 C116.28719,149.358084 95.8539538,169.801248 70.6421557,169.807372 C70.6347648,169.807374 70.6273739,169.807374 70.6199884,169.785205 L70.4842247,169.785172 C45.2810905,169.756874 24.8514378,149.327222 24.8231383,124.124088 L24.816691,97.5795063 C24.7884002,72.3677136 45.2216366,51.9245489 70.4334347,51.9184253 C70.4408255,51.9184235 70.4482164,51.9184235 70.4556019,51.9405926 Z"
            id="Rectangle-196"
            fill="#FF4B4B"
            transform="translate(70.537795, 110.862899) rotate(-31.000000) translate(-70.537795, -110.862899)"
          />
          <path
            d="M113.425662,51.9405926 L113.561426,51.9406255 C138.76456,51.9689234 159.194212,72.3985749 159.222512,97.6017091 L159.228959,124.146291 C159.25725,149.358084 138.824014,169.801248 113.612216,169.807372 C113.604825,169.807374 113.597434,169.807374 113.590048,169.785205 L113.454285,169.785172 C88.2511504,169.756874 67.8214977,149.327222 67.7931982,124.124088 L67.7867509,97.5795063 C67.75846,72.3677136 88.1916965,51.9245489 113.403495,51.9184253 C113.410885,51.9184235 113.418276,51.9184235 113.425662,51.9405926 Z"
            id="Rectangle-196"
            fill="#FF4B4B"
            transform="translate(113.507855, 110.862899) scale(-1, 1) rotate(-31.000000) translate(-113.507855, -110.862899)"
          />
          <ellipse
            id="Oval"
            fill="#FF7878"
            cx="58.3952096"
            cy="92.5"
            rx="16.5269461"
            ry="16.5178571"
          />
          <path
            d="M123.034317,60.3070264 C125.907803,60.306238 137.767642,44.9188732 137.596227,31.3705908 C137.424812,17.8223085 125.578094,1.99694752 123.050316,1.99764111 C120.522537,1.99833469 108.505205,17.5953626 108.488265,31.3785776 C108.471362,45.1617926 120.160831,60.3078149 123.034317,60.3070264 Z"
            id="Oval-2"
            fill="#5ABB1A"
            transform="translate(123.043166, 31.152334) scale(-1, -1) rotate(-313.000000) translate(-123.043166, -31.152334)"
          />
          <ellipse
            id="Oval-3"
            fill="#EA2B2B"
            cx="133.868263"
            cy="118.377976"
            rx="9.36526946"
            ry="9.36011905"
          />
          <ellipse
            id="Oval-3-Copy"
            fill="#EA2B2B"
            cx="120.095808"
            cy="136.547619"
            rx="6.61077844"
            ry="6.60714286"
          />
        </g>
      </g>
    </svg>
  );
};

export const LeaderboardBannerSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg width="267" height="169" viewBox="0 0 267 169" {...props}>
      <title>Locked Tab NEW</title>
      <g fill="none" fillRule="nonzero">
        <path
          d="M7.315 72.39L51.1 47.11c6.801-3.927 15.498-1.596 19.425 5.205l19.22 33.29c10.035 17.381 4.08 39.606-13.301 49.641l-5.474 3.16c-17.38 10.035-39.606 4.08-49.641-13.301L2.11 91.815C-1.817 85.014.514 76.317 7.315 72.39z"
          fill="#CF9C6D"
        />
        <path
          d="M40.982 52.952l10.107-5.835c6.801-3.927 15.513-1.57 19.459 5.264l6.886 11.927-20.772 78.763c-13.55 1.423-27.327-4.898-34.904-17.225l19.224-72.894z"
          fill="#D3A67B"
        />
        <path
          d="M17.851 119.08c8.322 8.055 15.466 12.5 21.433 13.334 5.967.836 16.329-1.16 31.087-5.984 8.374-8.526 13.465-15.453 15.273-20.782 1.808-5.328 2.016-14.017.623-26.068l3.479 6.025c10.035 17.381 4.08 39.606-13.301 49.641l-5.474 3.16c-17.38 10.035-39.606 4.08-49.641-13.301l-3.479-6.025z"
          fill="#C88E57"
        />
        <path
          d="M22.483 123.294c6.372 5.404 11.972 8.445 16.8 9.12 4.503.63 11.51-.35 21.018-2.944l-3.588 13.603c-13.582 1.463-27.379-4.842-34.915-17.18l.685-2.6z"
          fill="#CD9968"
        />
        <path
          d="M11.182 79.917a5.374 5.374 0 0 0-1.96 7.343l16.905 29.28c7.426 12.862 23.855 17.28 36.695 9.868l7.306-4.219c12.84-7.413 17.228-23.85 9.802-36.713l-16.905-29.28a5.374 5.374 0 0 0-7.339-1.973L11.182 79.917zm-4.226-7.32L51.46 46.903c6.603-3.812 15.052-1.54 18.872 5.075l16.904 29.28c9.76 16.906 3.993 38.508-12.881 48.251l-7.307 4.219c-16.875 9.742-38.467 3.936-48.228-12.97L1.916 91.478c-3.82-6.615-1.563-15.069 5.04-18.88z"
          fill="#E5AE7C"
        />
        <path
          d="M24.849 114.325l1.278 2.214c7.048 12.208 22.205 16.81 34.707 10.91l-2.61 9.893c-13.24 3.418-27.53-1.18-36.275-12.02l2.9-10.997zM74.42 75.933L63.025 56.197a5.374 5.374 0 0 0-7.339-1.974L38.008 64.429l3.036-11.512 10.416-6.014c6.603-3.812 15.052-1.54 18.872 5.075l7.143 12.373-3.055 11.582z"
          fill="#E7B689"
        />
        <g>
          <path
            d="M215.815 47.11L259.6 72.39c6.801 3.927 9.132 12.624 5.205 19.425l-19.22 33.29c-10.035 17.381-32.26 23.336-49.641 13.301l-5.474-3.16c-17.38-10.035-23.336-32.26-13.301-49.641l19.22-33.29c3.927-6.801 12.624-9.132 19.425-5.205z"
            fill="#C2D1DD"
          />
          <path
            d="M249.482 66.548l10.107 5.835c6.801 3.927 9.116 12.65 5.17 19.484l-6.885 11.927-78.597 21.392c-8.008-11.024-9.422-26.114-2.535-38.84l72.74-19.798z"
            fill="#D1DCE5"
          />
          <path
            d="M180.649 79.58c-2.815 11.234-3.093 19.643-.832 25.228 2.26 5.585 9.169 13.562 20.726 23.93 11.57 2.99 20.115 3.935 25.634 2.836 5.518-1.098 13.147-5.263 22.888-12.494l-3.479 6.025c-10.035 17.381-32.26 23.336-49.641 13.301l-5.474-3.16c-17.38-10.035-23.336-32.26-13.301-49.641l3.479-6.025z"
            fill="#AAC1D4"
          />
          <path
            d="M179.315 85.698c-1.495 8.22-1.328 14.59.502 19.11 1.705 4.215 6.058 9.791 13.058 16.73l-13.574 3.694c-8.058-11.031-9.496-26.132-2.58-38.828l2.594-.706z"
            fill="#BFD0DE"
          />
          <path
            d="M211.23 54.223a5.374 5.374 0 0 0-7.339 1.974l-16.905 29.28c-7.426 12.862-3.038 29.3 9.802 36.712l7.306 4.219c12.84 7.413 29.269 2.994 36.695-9.869l16.905-29.28a5.374 5.374 0 0 0-1.96-7.342L211.23 54.223zm4.226-7.32l44.504 25.694c6.603 3.812 8.86 12.266 5.04 18.881l-16.904 29.28c-9.76 16.906-31.353 22.712-48.228 12.97l-7.307-4.219c-16.874-9.743-22.642-31.345-12.881-48.251l16.904-29.28c3.82-6.615 12.269-8.887 18.872-5.075z"
            fill="#D6E4EF"
          />
          <path
            d="M188.265 83.262l-1.279 2.214c-7.048 12.208-3.454 27.636 7.906 35.512l-9.872 2.687c-9.581-9.758-12.745-24.433-7.729-37.426l10.974-2.987zm58.034 23.734l11.395-19.736a5.374 5.374 0 0 0-1.96-7.343L238.055 69.71l11.489-3.127 10.416 6.014c6.603 3.812 8.86 12.266 5.04 18.881l-7.143 12.373-11.558 3.145z"
            fill="#E0EAF3"
          />
        </g>
        <rect
          fill="#FFF1BF"
          transform="rotate(45 85.728 11.728)"
          x="76.728"
          y="2.728"
          width="18"
          height="18"
          rx="5"
        />
        <rect
          fill="#FEE68C"
          transform="rotate(45 71 29.757)"
          x="65"
          y="23.757"
          width="12"
          height="12"
          rx="2"
        />
        <rect
          fill="#FFF1BF"
          transform="rotate(45 184.728 157.728)"
          x="175.728"
          y="148.728"
          width="18"
          height="18"
          rx="5"
        />
        <g>
          <path
            d="M100.54 35h65.92C176.7 35 185 43.3 185 53.54v49.08c0 26.167-21.213 47.38-47.38 47.38h-8.24C103.213 150 82 128.787 82 102.62V53.54C82 43.3 90.3 35 100.54 35z"
            fill="#FEC701"
          />
          <path
            d="M151.226 35h15.216c10.239 0 18.54 8.266 18.54 18.462v17.796l-74.8 74.717C93.954 138.812 82.52 122.839 82 104.15L151.226 35z"
            fill="#FED540"
          />
          <path
            d="M130.798 67.728l6.688-6.688c5.81-5.81 15.426-5.612 21.479.441 6.053 6.053 6.25 15.67.441 21.479l-16.404 16.405c-.34.34-.805.524-1.285.51l-8.68-.25a.576.576 0 0 0-.425.166.6.6 0 0 0 .018.848l3.932 3.932c.34.34.34.893 0 1.234l-3.224 3.223c-1.466 1.466-3.594 2.081-5.682 1.643l-14.775-3.106-3.106-14.775c-.438-2.089.177-4.216 1.643-5.682l12.956-12.956a.872.872 0 0 1 1.234 0l3.915 3.915a.6.6 0 0 0 .847.017.576.576 0 0 0 .167-.425l-.25-8.647c-.013-.48.171-.945.51-1.284z"
            fill="#F89701"
          />
          <path
            d="M145.125 75.622l-36.94 36.94"
            stroke="#ED8200"
            strokeWidth="4.292"
            strokeLinecap="round"
          />
          <path
            d="M82 94.054c4.145 14.39 9.314 23.98 15.507 28.769 6.193 4.79 19.194 9.252 39.003 13.387 15.013-4.13 25.277-8.593 30.792-13.387 5.515-4.795 11.414-14.384 17.698-28.769v8.566c0 26.167-21.213 47.38-47.38 47.38h-8.24C103.213 150 82 128.787 82 102.62v-8.566z"
            fill="#FFC100"
          />
          <path
            d="M84.483 101.762c3.67 10.164 8.012 17.185 13.024 21.06 4.673 3.615 13.223 7.043 25.65 10.285l-12.893 12.879c-16.187-7.146-27.62-23.09-28.238-41.77l2.457-2.454z"
            fill="#FFD040"
          />
          <path
            d="M100 45.922c-3.866 0-7 3.111-7 6.95v43.686c0 19.192 15.67 34.75 35 34.75h11c19.33 0 35-15.558 35-34.75V52.872c0-3.839-3.134-6.95-7-6.95h-67zM100 35h67c9.941 0 18 8.001 18 17.872v43.686c0 25.224-20.595 45.672-46 45.672h-11c-25.405 0-46-20.448-46-45.672V52.872C82 43.002 90.059 35 100 35z"
            fill="#FEE333"
          />
          <path
            d="M93 93.255v3.303c0 18.215 14.115 33.156 32.077 34.63l-9.395 9.386c-17.18-4.73-30.318-19.107-33.125-36.888L93 93.255zm81-10.935V52.872c0-3.839-3.134-6.95-7-6.95h-26.615L151.32 35H167c9.941 0 18 8.001 18 17.872v18.46L174 82.32z"
            fill="#FEEA66"
          />
        </g>
      </g>
    </svg>
  );
};

export const LockedLeaderboardSvg = () => {
  return (
    <div
      className="relative grid w-full items-center gap-5"
      style={{ gridTemplateColumns: "min-content 1fr min-content" }}
    >
      <svg width="16" height="448" viewBox="0 0 16 448" fill="none">
        <rect width="16" height="16" rx="8" fill="#E5E5E5" />
        <rect y="72" width="16" height="16" rx="8" fill="#E5E5E5" />
        <rect y="144" width="16" height="16" rx="8" fill="#E5E5E5" />
        <rect y="216" width="16" height="16" rx="8" fill="#E5E5E5" />
        <rect y="288" width="16" height="16" rx="8" fill="#E5E5E5" />
        <rect y="360" width="16" height="16" rx="8" fill="#E5E5E5" />
        <rect y="432" width="16" height="16" rx="8" fill="#E5E5E5" />
      </svg>

      <svg
        width="208"
        height="480"
        viewBox="0 0 208 480"
        fill="none"
        className="grow"
      >
        <circle cx="24" cy="312" r="24" fill="#ECECEC" />
        <g opacity="0.5">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.9714 291.533C29.9714 294.663 27.4196 297.2 24.2718 297.2C21.124 297.2 18.5723 294.663 18.5723 291.533C18.5723 290.383 18.917 289.313 19.5093 288.419C20.9639 288.144 22.4649 288 23.9996 288C25.7556 288 27.4676 288.189 29.1163 288.547C29.6584 289.414 29.9714 290.437 29.9714 291.533Z"
            fill="#AFAFAF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M40.2227 329.685C35.9508 333.606 30.2543 336 23.9987 336C17.9989 336 12.5133 333.798 8.30566 330.158C11.46 326.353 16.223 323.929 21.5522 323.929H27.3828C32.4877 323.929 37.0731 326.153 40.2227 329.685Z"
            fill="#A7A7A7"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.4372 298.576H31.0192C37.5203 298.576 42.7904 303.846 42.7904 310.347C42.7904 316.848 37.5203 322.118 31.0192 322.118H17.4372C10.9361 322.118 5.66602 316.848 5.66602 310.347C5.66602 303.846 10.9361 298.576 17.4372 298.576Z"
            fill="#AFAFAF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.0189 322.117H17.4368C11.4397 322.117 6.49008 317.633 5.75879 311.834H42.6969C41.9656 317.633 37.016 322.117 31.0189 322.117Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.3695 303.097C32.4198 303.097 38.9459 309.623 38.9459 317.673V328.581H9.79297V317.673C9.79297 309.623 16.3191 303.097 24.3695 303.097Z"
            fill="#D7D7D7"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.2812 302.048H35.5727V305.52H14.2812V302.048Z"
            fill="#AFAFAF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.4413 302.834H13.3377C15.0344 302.834 16.4098 304.209 16.4098 305.906V308.803C16.4098 310.499 15.0344 311.875 13.3377 311.875H10.4413C8.74458 311.875 7.36914 310.499 7.36914 308.803V305.906C7.36914 304.209 8.74458 302.834 10.4413 302.834Z"
            fill="#AFAFAF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M35.4012 302.507H37.9046C39.6013 302.507 40.9767 303.882 40.9767 305.579V308.803C40.9767 310.5 39.6013 311.875 37.9046 311.875H35.4012C33.7045 311.875 32.3291 310.5 32.3291 308.803V305.579C32.3291 303.882 33.7045 302.507 35.4012 302.507Z"
            fill="#AFAFAF"
          />
        </g>
        <circle cx="24" cy="240" r="24" fill="#ECECEC" />
        <g opacity="0.5">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M46.2142 249.102C43.8318 248.419 40.7872 246.323 39.5756 241.918C39.2232 240.636 39.13 237.453 39.2962 232.368C39.2983 232.302 39.2994 232.237 39.2994 232.171C39.2994 228.847 36.6042 226.151 33.2795 226.151H14.681L14.6217 226.152C11.2971 226.184 8.62865 228.906 8.66143 232.231C8.7014 236.285 8.75315 238.847 8.81667 239.917C9.39786 249.707 12.5321 254.602 15.2095 254.602C15.6131 254.602 16.1596 254.575 16.8239 254.524L13.9968 254.972L14.0473 255.291C14.5828 258.672 17.7582 260.979 21.1397 260.444L40.5646 257.367C42.9854 255.057 44.9241 252.247 46.2142 249.102Z"
            fill="#AFAFAF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M36.996 260.181C33.2507 262.598 28.7893 264.001 24.0004 264.001C19.0787 264.001 14.503 262.519 10.6949 259.978V242.814C10.3336 242.975 9.93319 243.065 9.51181 243.065C7.90884 243.065 6.60938 241.766 6.60938 240.163C6.60938 238.56 7.90884 237.26 9.51181 237.26C9.93319 237.26 10.3336 237.35 10.6949 237.511V235.97C10.6949 232.843 13.2297 230.309 16.3565 230.309H31.3345C34.4613 230.309 36.996 232.843 36.996 235.97V237.618C37.4105 237.39 37.8868 237.26 38.3933 237.26C39.9963 237.26 41.2958 238.56 41.2958 240.163C41.2958 241.766 39.9963 243.065 38.3933 243.065C37.8868 243.065 37.4105 242.935 36.996 242.707V260.181Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.0947 219.2C27.6568 219.2 30.5445 222.088 30.5445 225.65C30.5445 229.212 27.6568 232.1 24.0947 232.1C21.5266 232.1 19.3091 230.599 18.2714 228.427C17.8126 228.15 17.3877 227.803 17.0141 227.387C15.4199 225.612 15.1559 223.036 16.3152 221.023C16.5565 220.604 17.0048 220.543 17.3282 220.903L18.5932 222.282C19.7274 220.433 21.7671 219.2 24.0947 219.2Z"
            fill="#AFAFAF"
          />
        </g>
        <circle cx="24" cy="384" r="24" fill="#ECECEC" />
        <g opacity="0.4">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.0948 367.467C27.6569 367.467 30.5446 370.354 30.5446 373.917C30.5446 377.479 27.6569 380.367 24.0948 380.367C21.5268 380.367 19.3093 378.866 18.2716 376.693C17.8127 376.417 17.3877 376.069 17.0141 375.653C15.4199 373.879 15.1559 371.303 16.3152 369.289C16.5565 368.87 17.0048 368.81 17.3282 369.17L18.5933 370.548C19.7275 368.7 21.7671 367.467 24.0948 367.467Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M36.996 404.181C33.2507 406.598 28.7893 408.001 24.0004 408.001C19.0787 408.001 14.503 406.519 10.6949 403.978V386.814C10.3336 386.975 9.93319 387.065 9.51181 387.065C7.90884 387.065 6.60938 385.766 6.60938 384.163C6.60938 382.56 7.90884 381.26 9.51181 381.26C9.93319 381.26 10.3336 381.35 10.6949 381.511V379.97C10.6949 376.843 13.2297 374.309 16.3565 374.309H31.3345C34.4613 374.309 36.996 376.843 36.996 379.97V381.618C37.4105 381.39 37.8868 381.26 38.3933 381.26C39.9963 381.26 41.2958 382.56 41.2958 384.163C41.2958 385.766 39.9963 387.065 38.3933 387.065C37.8868 387.065 37.4105 386.935 36.996 386.707V404.181Z"
            fill="#AFAFAF"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 192C37.2548 192 48 181.255 48 168C48 154.745 37.2548 144 24 144C10.7452 144 0 154.745 0 168C0 181.255 10.7452 192 24 192Z"
          fill="#ECECEC"
        />
        <g opacity="0.5">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.6205 160.014C31.6205 165.32 27.2657 169.627 21.9001 169.627H16.5553C11.1897 169.627 6.83496 165.32 6.83496 160.014C6.83496 154.707 11.1828 150.4 16.5484 150.4H21.8932C27.2657 150.4 31.6205 154.707 31.6205 160.014Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M36.6187 188.42C32.9528 190.69 28.6301 192 24.0014 192C19.6181 192 15.5092 190.825 11.9727 188.773C14.916 185.187 19.4092 182.896 24.4448 182.896C29.3132 182.896 33.6746 185.037 36.6187 188.42Z"
            fill="#AFAFAF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.1366 191.507V183.778C17.1219 184.477 15.2941 185.559 13.7433 186.935C13.1124 187.494 12.5058 188.102 11.9375 188.753C14.1387 190.035 16.5624 190.977 19.1366 191.507ZM36.6404 188.405C34.5204 189.721 32.1802 190.716 29.6877 191.322V183.751C31.7301 184.456 33.5786 185.545 35.1433 186.935C35.6615 187.393 36.1631 187.885 36.6404 188.405Z"
            fill="#CECECE"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.7385 159.611H31.1351C35.5932 159.611 39.36 162.549 40.5638 166.576C40.894 166.446 41.2542 166.375 41.6312 166.375C43.2257 166.375 44.5183 167.653 44.5183 169.23C44.5183 170.807 43.2257 172.085 41.6312 172.085C41.3228 172.085 41.0256 172.037 40.7469 171.949C39.7943 176.337 35.8507 179.625 31.1282 179.625H17.7385C12.9891 179.619 9.02753 176.293 8.1038 171.871C7.70412 172.034 7.2612 172.111 6.8007 172.078C5.21023 171.967 4.01252 170.601 4.12555 169.028C4.23858 167.455 5.61955 166.27 7.21002 166.382C7.59255 166.409 7.95236 166.509 8.27668 166.666C9.45126 162.592 13.2418 159.611 17.7385 159.611Z"
            fill="#AFAFAF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.1572 177.645H29.6876V183.807H19.1572V177.645Z"
            fill="#AFAFAF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.1245 160.677V161.328C21.1245 165.265 17.8982 168.462 13.9104 168.462C9.92256 168.462 6.69629 165.265 6.69629 161.328V160.677C6.69629 156.74 9.92256 153.543 13.9104 153.543C17.8982 153.543 21.1245 156.734 21.1245 160.677Z"
            fill="white"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 120C37.2548 120 48 109.255 48 96C48 82.7452 37.2548 72 24 72C10.7452 72 0 82.7452 0 96C0 109.255 10.7452 120 24 120Z"
          fill="#ECECEC"
        />
        <g opacity="0.5">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M43.412 110.117C39.0482 116.107 31.9791 120 24.0008 120C15.982 120 8.88178 116.068 4.52346 110.026C4.52345 110.019 4.52344 110.012 4.52344 110.005V83.9833C4.52344 83.1811 4.6072 82.3985 4.76645 81.6437C8.03007 77.2783 12.7449 74.061 18.1959 72.707H22.5943C28.0678 72.707 32.6305 76.6068 33.6553 81.7794H35.0271C39.658 81.7794 43.412 85.5335 43.412 90.1643V110.117Z"
            fill="#AFAFAF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.0481 118.949C28.8197 119.632 26.4532 120 24.0008 120C22.0742 120 20.2006 119.773 18.4053 119.344L19.7031 115.35V103.32C19.7031 101.262 20.3504 99.5928 21.1488 99.5928H28.4494C29.2479 99.5928 29.8951 101.262 29.8951 103.32V115.4L31.0481 118.949Z"
            fill="#D5D5D5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.2574 84.7432H31.1238C34.4373 84.7432 37.1234 87.4293 37.1234 90.7427V104.26C37.1234 107.573 34.4373 110.259 31.1238 110.259H18.2574C14.9439 110.259 12.2578 107.573 12.2578 104.26V90.7427C12.2578 87.4293 14.9439 84.7432 18.2574 84.7432Z"
            fill="#D5D5D5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.6553 81.0566C17.9308 81.0566 19.7755 82.9013 19.7755 85.1768V88.7187C19.7755 90.9942 17.9308 92.8389 15.6553 92.8389C13.3798 92.8389 11.5352 90.9942 11.5352 88.7187V85.1768C11.5352 82.9013 13.3798 81.0566 15.6553 81.0566Z"
            fill="#AFAFAF"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
          fill="#ECECEC"
        />
        <g opacity="0.4">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.5421 0.00390625C25.2155 0.953972 26.5513 2.40045 27.3709 4.12296C28.6614 6.59224 29.7022 7.86834 30.4931 7.95147C31.1318 8.01859 31.8378 7.96117 32.6112 7.77919C32.8002 7.73472 32.9893 7.70931 33.1766 7.70175C33.6219 7.61856 34.0866 7.59759 34.5601 7.64736C37.1929 7.92408 39.1029 10.2827 38.8261 12.9154C38.5494 15.5482 36.1908 17.4582 33.5581 17.1814C31.045 16.9173 29.1905 14.7562 29.2677 12.2705L27.3993 12.0742C25.762 15.5857 22.029 17.84 17.9597 17.4123C12.8317 16.8733 9.11156 12.2794 9.65053 7.15136C9.76229 6.0881 10.0484 5.08536 10.4774 4.16856C14.2107 1.61809 18.7011 0.0943357 23.5421 0.00390625Z"
            fill="#AFAFAF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M40.1983 41.7079C35.9292 45.6152 30.2427 47.9991 23.9993 47.9991C17.7857 47.9991 12.1236 45.6378 7.86146 41.7636V23.9077C7.86146 23.5713 7.87173 23.2374 7.89198 22.9061C6.45096 22.9047 5.2832 21.7361 5.2832 20.2948C5.2832 18.8526 6.45231 17.6835 7.89448 17.6835H9.10293C11.5409 11.8436 17.3061 7.73926 24.0299 7.73926C30.7537 7.73926 36.5189 11.8436 38.9569 17.6835H40.3029C41.7451 17.6835 42.9142 18.8526 42.9142 20.2948C42.9142 21.737 41.7451 22.9061 40.3029 22.9061H40.1678C40.1881 23.2374 40.1983 23.5713 40.1983 23.9077V41.7079Z"
            fill="#C2C2C2"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M40.1982 41.7082C35.9291 45.6154 30.2426 47.9993 23.9993 47.9993C17.7857 47.9993 12.1235 45.638 7.86133 41.7637V38.3457H19.3292L23.8213 43.3154C24.1393 43.6671 24.6821 43.6945 25.0339 43.3766C25.0553 43.3572 25.0757 43.3368 25.0951 43.3154L29.5872 38.3457H40.1982V41.7082Z"
            fill="#AFAFAF"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 480C37.2548 480 48 469.255 48 456C48 442.745 37.2548 432 24 432C10.7452 432 0 442.745 0 456C0 469.255 10.7452 480 24 480Z"
          fill="#ECECEC"
        />
        <g opacity="0.4">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.5421 432.004C25.2155 432.954 26.5513 434.4 27.3709 436.123C28.6614 438.592 29.7022 439.868 30.4931 439.951C31.1318 440.019 31.8378 439.961 32.6112 439.779C32.8002 439.735 32.9893 439.709 33.1766 439.702C33.6219 439.619 34.0866 439.598 34.5601 439.647C37.1929 439.924 39.1029 442.283 38.8261 444.915C38.5494 447.548 36.1908 449.458 33.5581 449.181C31.045 448.917 29.1905 446.756 29.2677 444.27L27.3993 444.074C25.762 447.586 22.029 449.84 17.9597 449.412C12.8317 448.873 9.11156 444.279 9.65053 439.151C9.76229 438.088 10.0484 437.085 10.4774 436.169C14.2107 433.618 18.7011 432.094 23.5421 432.004Z"
            fill="#AFAFAF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M40.1983 473.708C35.9292 477.615 30.2427 479.999 23.9993 479.999C17.7857 479.999 12.1236 477.638 7.86146 473.764V455.908C7.86146 455.571 7.87173 455.237 7.89198 454.906C6.45096 454.905 5.2832 453.736 5.2832 452.295C5.2832 450.853 6.45231 449.684 7.89448 449.684H9.10293C11.5409 443.844 17.3061 439.739 24.0299 439.739C30.7537 439.739 36.5189 443.844 38.9569 449.684H40.3029C41.7451 449.684 42.9142 450.853 42.9142 452.295C42.9142 453.737 41.7451 454.906 40.3029 454.906H40.1678C40.1881 455.237 40.1983 455.571 40.1983 455.908V473.708Z"
            fill="#C2C2C2"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M40.1982 473.708C35.9291 477.615 30.2426 479.999 23.9993 479.999C17.7857 479.999 12.1235 477.638 7.86133 473.764V470.346H19.3292L23.8213 475.315C24.1393 475.667 24.6821 475.695 25.0339 475.377C25.0553 475.357 25.0757 475.337 25.0951 475.315L29.5872 470.346H40.1982V473.708Z"
            fill="#AFAFAF"
          />
        </g>
        <rect x="76" y="18" width="52" height="12" rx="6" fill="#E5E5E5" />
        <rect x="76" y="90" width="82" height="12" rx="6" fill="#E5E5E5" />
        <rect x="76" y="162" width="42" height="12" rx="6" fill="#E5E5E5" />
        <rect x="76" y="234" width="112" height="12" rx="6" fill="#E5E5E5" />
        <rect x="76" y="306" width="62" height="12" rx="6" fill="#E5E5E5" />
        <rect x="76" y="378" width="132" height="12" rx="6" fill="#E5E5E5" />
        <rect x="76" y="450" width="52" height="12" rx="6" fill="#E5E5E5" />
      </svg>

      <svg width="48" height="444" viewBox="0 0 48 444" fill="none">
        <rect width="48" height="12" rx="6" fill="#E5E5E5" />
        <rect y="72" width="48" height="12" rx="6" fill="#E5E5E5" />
        <rect y="144" width="48" height="12" rx="6" fill="#E5E5E5" />
        <rect y="216" width="48" height="12" rx="6" fill="#E5E5E5" />
        <rect y="288" width="48" height="12" rx="6" fill="#E5E5E5" />
        <rect y="360" width="48" height="12" rx="6" fill="#E5E5E5" />
        <rect y="432" width="48" height="12" rx="6" fill="#E5E5E5" />
      </svg>

      <div
        className="absolute bottom-0 left-0 right-0 h-3/4"
        style={{ background: "linear-gradient(0deg, white, #ffffff00" }}
      ></div>
    </div>
  );
};

export const LeaderboardExplanationSvg = () => {
  return (
    <svg
      width="107"
      height="158"
      viewBox="0 0 107 158"
      fill="none"
      className="absolute right-0"
    >
      <path
        d="M28.4774 76.1387L39.0343 77.7164C40.2236 77.8941 41.2935 78.537 42.0087 79.5036L48.3579 88.084C49.0731 89.0506 49.3751 90.2617 49.1974 91.4509L47.6196 102.008C47.4419 103.197 46.799 104.267 45.8325 104.982L37.252 111.331C36.2854 112.047 35.0743 112.349 33.8851 112.171L23.3282 110.593C22.139 110.415 21.0691 109.773 20.3539 108.806L14.0046 100.225C13.2894 99.2589 12.9874 98.0478 13.1652 96.8586L14.7429 86.3017C14.9206 85.1125 15.5635 84.0426 16.5301 83.3273L25.1106 76.9781C26.0771 76.2629 27.2882 75.9609 28.4774 76.1387Z"
        fill="#676767"
      />
      <path
        d="M35.5968 104.884L82.544 74.3263C85.0604 72.6884 88.4302 73.9744 89.199 76.8659C92.8933 90.7588 87.1614 105.744 74.758 113.817C62.355 121.89 46.3649 121.044 35.2048 112.01C32.8819 110.13 33.0804 106.522 35.5968 104.884Z"
        fill="#58CC02"
      />
      <path
        d="M65.0387 90.1495C62.2153 83.8079 54.7855 80.9559 48.4439 83.7794C42.1023 86.6028 39.2503 94.0326 42.0738 100.374C44.8972 106.716 52.327 109.568 58.6686 106.744C65.0102 103.921 67.8622 96.4911 65.0387 90.1495Z"
        fill="#58CC02"
      />
      <path
        d="M26.3758 80.8707L37.4213 82.5215C38.6731 82.7086 39.7993 83.3853 40.5522 84.4027L47.1953 93.3804C47.9482 94.3978 48.266 95.6727 48.0789 96.9245L46.4282 107.97C46.2411 109.222 45.5644 110.348 44.547 111.101L35.5693 117.744C34.5519 118.497 33.277 118.815 32.0252 118.628L20.9797 116.977C19.7279 116.79 18.6017 116.113 17.8488 115.096L11.2057 106.118C10.4528 105.101 10.135 103.826 10.322 102.574L11.9728 91.5284C12.1599 90.2766 12.8366 89.1503 13.854 88.3975L22.8317 81.7544C23.8491 81.0015 25.124 80.6836 26.3758 80.8707Z"
        fill="#7B7B7B"
      />
      <path
        d="M28.3146 88.6502L33.2912 89.394C34.543 89.5811 35.6692 90.2578 36.4221 91.2752L39.4152 95.3201C40.168 96.3376 40.4859 97.6124 40.2988 98.8642L39.555 103.841C39.368 105.093 38.6913 106.219 37.6738 106.972L33.6289 109.965C32.6115 110.718 31.3366 111.035 30.0848 110.848L25.1083 110.105C23.8565 109.918 22.7302 109.241 21.9774 108.223L18.9843 104.178C18.2314 103.161 17.9136 101.886 18.1007 100.634L18.8444 95.6578C19.0315 94.406 19.7082 93.2798 20.7257 92.5269L24.7705 89.5339C25.788 88.781 27.0628 88.4632 28.3146 88.6502Z"
        fill="#676767"
      />
      <path
        opacity="0.742327"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M51.6719 105.685C51.5418 105.048 51.9532 104.425 52.5908 104.295C54.2932 103.948 55.6453 103.259 56.6973 102.257C57.7525 101.253 58.563 99.8788 59.0923 98.0758C59.2757 97.4513 59.9305 97.0938 60.5549 97.2771C61.1794 97.4604 61.5369 98.1153 61.3536 98.7397C60.731 100.86 59.7327 102.622 58.3224 103.964C56.9088 105.31 55.1387 106.181 53.062 106.604C52.4244 106.734 51.802 106.323 51.6719 105.685Z"
        fill="#3EB200"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M77.0711 60.8664L78.1952 59.9883C78.8161 59.5032 79.7128 59.6132 80.1975 60.2343C80.6828 60.855 80.5726 61.7517 79.9518 62.2366L78.8277 63.1148C78.2069 63.5999 77.3103 63.4898 76.8252 62.8689C76.3402 62.2481 76.4503 61.3515 77.0711 60.8664Z"
        fill="#FFEB16"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M91.4711 66.3025L93.4179 43.6452C93.7085 40.2588 96.69 37.7489 100.076 38.0402C100.083 38.0405 100.089 38.0412 100.096 38.0415L128.299 40.5536C131.677 40.8546 134.175 43.8317 133.885 47.2111L131.939 69.8679C131.648 73.2549 128.666 75.7647 125.28 75.4732C125.273 75.4731 125.267 75.4721 125.261 75.4715L97.0578 72.9595C93.6791 72.6588 91.181 69.6816 91.4711 66.3025Z"
        fill="#58CC02"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43.8038 47.2176C53.9317 44.4982 60.4074 42.0357 63.2308 39.8299C66.0358 37.6385 69.9254 32.0376 74.9005 23.0264C78.2567 16.9474 85.9057 14.7399 91.9848 18.0961C93.4685 18.9156 94.7715 20.0266 95.8155 21.3622L119.704 51.9375C132.351 68.1227 129.482 91.4947 113.296 104.14L113.294 104.142C97.1077 116.787 73.7346 113.918 61.0881 97.7316L37.1566 67.1019C32.8813 61.63 33.8513 53.7283 39.3232 49.4531C40.6518 48.4151 42.1755 47.6549 43.8038 47.2176Z"
        fill="#58CC02"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M62.4717 50.6598C67.9645 51.6211 73.3637 47.3799 73.7026 41.8626C79.6526 49.4778 86.7194 58.5229 86.6746 58.4656C86.6449 58.4273 82.8978 61.3547 75.4327 67.2483C72.2643 63.2522 67.944 57.7227 62.4717 50.6598Z"
        fill="#89E219"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50.9672 54.0533L51.7253 53.4611C57.8004 48.7159 66.5721 49.793 71.3187 55.8669L76.8327 62.9241C81.5796 68.9983 80.5028 77.7704 74.4281 82.5167L74.4271 82.5165L73.6691 83.1087C67.594 87.8539 58.8223 86.7769 54.0757 80.7029L48.5616 73.6457C43.8148 67.5716 44.8916 58.7995 50.9662 54.0532L50.9672 54.0533Z"
        fill="#89E219"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M79.061 31.7341L79.8182 31.1424C85.8935 26.3972 94.6649 27.4744 99.4116 33.5483L104.926 40.6053C109.673 46.6794 108.596 55.4515 102.521 60.1977L102.52 60.1979L101.817 60.7468C95.7768 65.4659 87.0605 64.4307 82.2934 58.4275L76.7233 51.4141C71.9292 45.3771 72.937 36.5967 78.9739 31.8027C79.0032 31.7795 79.032 31.7567 79.061 31.7341Z"
        fill="#89E219"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M54.2441 58.1777C58.6875 54.7062 65.1037 55.4941 68.5754 59.9373L72.3994 64.8316C75.8708 69.2745 75.0832 75.6904 70.6402 79.1618C70.6404 79.1616 70.6401 79.1619 70.6402 79.1618C66.1968 82.6332 59.7801 81.8457 56.3085 77.4024L52.4845 72.5082C49.0131 68.0653 49.8011 61.6491 54.2441 58.1777C54.2442 58.1775 54.2439 58.1778 54.2441 58.1777Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M82.7489 35.9094C87.1923 32.4381 93.6085 33.2259 97.0803 37.669L100.904 42.5635C104.376 47.0063 103.588 53.4224 99.1452 56.8935C94.7018 60.3648 88.2851 59.5774 84.8132 55.1344L80.989 50.2403C77.5179 45.7971 78.3058 39.381 82.7489 35.9094Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M94.1297 33.8287L79.0585 49.1163L78.6235 48.559C75.0043 43.927 75.8252 37.2384 80.4572 33.6192L82.0824 32.3496C85.8179 29.4313 91.2114 30.0936 94.1297 33.8287Z"
        fill="#89E219"
      />
      <path
        d="M86.3156 50.899C86.8153 50.631 87.2435 50.2173 87.5295 49.6794C88.2991 48.2319 87.7478 46.433 86.2972 45.662C85.8949 45.4481 85.4657 45.3357 85.0391 45.3159C85.3458 44.5681 85.8453 43.8874 86.5278 43.3541C88.6224 41.7177 91.6477 42.0887 93.284 44.1835L96.5463 48.3585C98.1831 50.453 97.8119 53.4776 95.7168 55.1145C93.6223 56.7509 90.5976 56.3796 88.9607 54.285L86.3156 50.899Z"
        fill="#4B4B4B"
      />
      <path
        d="M60.3309 71.18C61.0769 70.9655 61.7379 70.4609 62.1307 69.7222C62.9004 68.2746 62.3485 66.4761 60.8982 65.7049C60.3464 65.4115 59.7441 65.3091 59.1672 65.3746C59.4778 64.7189 59.942 64.1237 60.5527 63.6466C62.6474 62.01 65.6723 62.3813 67.3089 64.476L70.571 68.6511C72.2076 70.7456 71.8363 73.7704 69.7417 75.4069C67.647 77.0435 64.6222 76.6722 62.9855 74.5775L60.3309 71.18Z"
        fill="#4B4B4B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M102.73 55.7126L95.2132 61.1744C92.8597 62.8843 89.566 62.3624 87.8561 60.0089L85.6196 56.9312L102.307 41.1894L104.543 44.267C107.203 47.9284 106.391 53.0527 102.73 55.7126Z"
        fill="#89E219"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.1516 61.641L90.8859 15.7553C91.5084 15.2689 92.3256 15.2737 92.7108 15.7661L97.8729 22.3732C98.2575 22.866 98.0647 23.6598 97.4415 24.1466L38.7077 70.0319C38.0849 70.5186 37.2678 70.5138 36.8829 70.0211L31.7208 63.4141C31.336 62.9214 31.5289 62.1276 32.1516 61.641Z"
        fill="#FF4B4B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.5034 65.07L94.1086 16.9414L96.6309 20.1699L35.0258 68.2984L32.5034 65.07Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M68.8338 83.9143L76.1556 78.1943C78.448 76.4033 78.8545 73.0931 77.0636 70.8006L74.7213 67.8027L54.9897 79.5043L57.3319 82.5022C60.1181 86.0681 65.2676 86.7004 68.8338 83.9143Z"
        fill="#89E219"
      />
      <path
        d="M87.3574 90.2512L94.7318 84.4859C95.1268 84.1766 95.6929 84.3236 95.8498 84.7764C96.6029 86.9505 95.8217 89.4689 93.8735 90.9921C91.9249 92.5149 89.2943 92.6644 87.3687 91.4073C86.9676 91.1452 86.962 90.56 87.3574 90.2512Z"
        fill="#89E219"
      />
      <path
        d="M100.23 80.1943L107.604 74.4286C108 74.1195 108.565 74.2667 108.723 74.7194C109.475 76.893 108.694 79.4114 106.746 80.9346C104.798 82.4579 102.167 82.6069 100.241 81.3498C99.8401 81.0884 99.8346 80.5031 100.23 80.1943Z"
        fill="#89E219"
      />
      <path
        d="M98.6597 91.4492L106.034 85.6841C106.429 85.3744 106.995 85.5216 107.152 85.9743C107.905 88.1484 107.124 90.6668 105.176 92.19C103.227 93.7129 100.597 93.8624 98.671 92.6054C98.2699 92.3432 98.2643 91.758 98.6597 91.4492Z"
        fill="#89E219"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M78.514 58.902C80.9738 57.0514 84.4642 57.5402 86.3166 59.9941L87.2354 61.2111C87.2377 61.2142 87.24 61.2172 87.2424 61.2203C89.0845 63.6715 88.5891 67.1549 86.1361 69.0003C83.6764 70.8508 80.1857 70.3622 78.3335 67.9082L77.4148 66.6911C77.4125 66.6881 77.4102 66.685 77.4079 66.6819C75.5657 64.2307 76.0609 60.7475 78.514 58.902Z"
        fill="#F49000"
      />
      <path
        d="M88.2558 59.3135L88.5255 59.6702L83.1352 65.3697L76.1619 68.9717L75.8924 68.6147C74.2872 65.4099 75.2356 61.2725 78.1251 59.0987C81.3678 56.6592 85.613 56.8893 88.2558 59.3135Z"
        fill="#FFC200"
      />
      <path
        d="M81.3253 59.1262C81.9078 58.9484 82.525 59.2759 82.703 59.8583C82.8811 60.4408 82.5531 61.0574 81.97 61.2356C81.0627 61.5128 80.369 62.034 79.8517 62.827C79.5188 63.3373 78.835 63.4815 78.3244 63.149C77.8138 62.8166 77.6697 62.1334 78.0026 61.6231C78.8027 60.3965 79.9227 59.555 81.3253 59.1262Z"
        fill="#FFDE00"
      />
    </svg>
  );
};

export const LockedLeagueSvg = () => {
  return (
    <svg width="53" height="59" viewBox="0 0 53 59">
      <title>Locked</title>
      <g fill="none" fillRule="evenodd">
        <g fillRule="nonzero">
          <path
            d="M9.021 3.404H43.98c4.98 0 9.02 4.064 9.02 9.076v21.557C53 47.824 41.893 59 28.191 59H24.81C11.107 59 0 47.824 0 34.038V12.481c0-5.013 4.039-9.077 9.021-9.077z"
            fill="#E3E3E3"
          />
          <path
            d="M9.021 3.404H43.98c4.98 0 9.02 4.064 9.02 9.076v14.182c0 12.846-10.35 23.26-23.117 23.26h-6.766C10.35 49.923 0 39.51 0 26.663V12.481c0-5.013 4.039-9.077 9.021-9.077z"
            fill="#E5E5E5"
          />
          <path
            d="M9.021 5.673c-1.868 0-3.383 1.524-3.383 3.404v21.558c0 10.652 8.583 19.288 19.17 19.288h3.383c10.588 0 19.17-8.636 19.17-19.288V9.077c0-1.88-1.514-3.404-3.382-3.404H9.02zm0-5.673H43.98C48.96 0 53 4.064 53 9.077v21.558c0 13.785-11.107 24.961-24.809 24.961H24.81C11.107 55.596 0 44.42 0 30.635V9.077C0 4.064 4.039 0 9.021 0z"
            fill="#EFEFEF"
          />
        </g>
        <g transform="translate(18.014 15.177)" fill="#CFCFCF" opacity=".8">
          <ellipse cx="8.618" cy="8.002" rx="8.348" ry="7.998" />
          <path d="M4.967 11.71c2.016-3.863 5.285-3.864 7.3 0l3.013 5.771c2.016 3.863.116 6.995-4.235 6.995H6.19c-4.355 0-6.251-3.132-4.235-6.995l3.011-5.771z" />
        </g>
      </g>
    </svg>
  );
};

export const BronzeLeagueSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg width="53" height="59" viewBox="0 0 53 59" {...props}>
      <title>Bronze</title>
      <g fill="none">
        <path
          d="M9.021 3.404H43.98c4.98 0 9.02 4.064 9.02 9.076v21.557C53 47.824 41.893 59 28.191 59H24.81C11.107 59 0 47.824 0 34.038V12.481c0-5.013 4.039-9.077 9.021-9.077z"
          fill="#C88E57"
        />
        <path
          d="M9.021 3.404H43.98c4.98 0 9.02 4.064 9.02 9.076v14.182c0 12.846-10.35 23.26-23.117 23.26h-6.766C10.35 49.923 0 39.51 0 26.663V12.481c0-5.013 4.039-9.077 9.021-9.077z"
          fill="#CF9C6D"
        />
        <path
          d="M32.442 3.404H43.98c4.98 0 9.02 4.064 9.02 9.076v5.54L14.505 56.751A24.97 24.97 0 0 1 .073 35.972l32.37-32.568z"
          fill="#D09E70"
        />
        <path
          d="M32.442 3.404H43.98c4.98 0 9.02 4.064 9.02 9.076v5.54L18.916 52.313c-5.694-2.018-9.456-4.127-11.285-6.325-1.828-2.199-3.395-6.496-4.7-12.892L32.442 3.404z"
          fill="#D6AA82"
        />
        <path
          d="M9.021 5.673c-1.868 0-3.383 1.524-3.383 3.404v21.558c0 10.652 8.583 19.288 19.17 19.288h3.383c10.588 0 19.17-8.636 19.17-19.288V9.077c0-1.88-1.514-3.404-3.382-3.404H9.02zm0-5.673H43.98C48.96 0 53 4.064 53 9.077v21.558c0 13.785-11.107 24.961-24.809 24.961H24.81C11.107 55.596 0 44.42 0 30.635V9.077C0 4.064 4.039 0 9.021 0z"
          fill="#E5AE7C"
        />
        <path
          d="M5.638 30.373v.262c0 9.54 6.885 17.463 15.928 19.013l-4.635 4.664C8.598 51.506 2.235 44.37.483 35.56l5.155-5.187zm41.724-6.68V9.077c0-1.88-1.515-3.404-3.383-3.404H30.187L35.825 0h8.154C48.96 0 53 4.064 53 9.077v8.943l-5.638 5.673z"
          fill="#E8BA8F"
        />
        <path
          d="M25.223 16.742l3.282-3.282c2.996-2.996 7.942-2.908 11.047.197 3.105 3.105 3.193 8.05.197 11.047l-8.293 8.293a1.453 1.453 0 0 1-1.066.425l-4.227-.11a.298.298 0 0 0-.219.086.308.308 0 0 0 .008.436l1.82 1.82a.727.727 0 0 1 0 1.027l-1.467 1.467A3.2 3.2 0 0 1 23.38 39l-7.595-1.577-1.577-7.596a3.2 3.2 0 0 1 .853-2.924l6.486-6.486a.727.727 0 0 1 1.028 0l1.81 1.81a.308.308 0 0 0 .436.008.298.298 0 0 0 .087-.219l-.11-4.21c-.01-.398.143-.783.425-1.065z"
          fill="#B07032"
        />
        <path
          d="M32.414 20.95L13.363 40"
          stroke="#9D5D20"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export const FirstPlaceSvg = () => {
  return (
    <svg width="41" height="42" viewBox="0 0 41 42" fill="none">
      <path
        d="M8.31177 18.4663H31.876V38.4086C31.876 39.844 30.4566 40.8481 29.1031 40.3701L20.0939 37.1888L11.0847 40.3701C9.73119 40.8481 8.31177 39.844 8.31177 38.4086V18.4663Z"
        fill="#FFC800"
      />
      <circle
        cx="20.0943"
        cy="20.0941"
        r="14.4004"
        transform="rotate(35.6401 20.0943 20.0941)"
        fill="#FFD900"
      />
      <path
        d="M11.7032 31.7972C18.1667 36.4314 27.1631 34.9486 31.7973 28.4851L8.39111 11.7031C3.75689 18.1666 5.23977 27.163 11.7032 31.7972Z"
        fill="#FEEA66"
      />
      <path
        d="M18.945 24.776C18.945 25.604 19.467 26.108 20.205 26.108C20.925 26.108 21.465 25.604 21.465 24.776V15.182C21.465 14.264 20.925 13.652 20.061 13.652C19.485 13.652 18.999 13.886 18.531 14.21L16.605 15.542C16.173 15.83 15.975 16.226 15.975 16.604C15.975 17.216 16.443 17.666 17.019 17.666C17.271 17.666 17.541 17.594 17.775 17.432L18.909 16.658H18.945V24.776Z"
        fill="#FF9600"
      />
      <circle
        cx="20.0943"
        cy="20.0941"
        r="12.9004"
        transform="rotate(35.6401 20.0943 20.0941)"
        stroke="#FFC800"
        strokeWidth="3"
      />
    </svg>
  );
};

export const SecondPlaceSvg = () => {
  return (
    <svg width="41" height="42" viewBox="0 0 41 42" fill="none">
      <path
        d="M8.31201 18.4663H31.8763V38.4086C31.8763 39.844 30.4569 40.8481 29.1033 40.3701L20.0941 37.1888L11.085 40.3701C9.73144 40.8481 8.31201 39.844 8.31201 38.4086V18.4663Z"
        fill="#AAC1D4"
      />
      <circle
        cx="20.0943"
        cy="20.0941"
        r="14.4004"
        transform="rotate(35.6401 20.0943 20.0941)"
        fill="#C2D1DD"
      />
      <path
        d="M11.7032 31.7972C18.1667 36.4314 27.1631 34.9486 31.7973 28.4851L8.39111 11.7031C3.75689 18.1666 5.23977 27.163 11.7032 31.7972Z"
        fill="#D6E4EF"
      />
      <path
        d="M16.0073 24.92C16.0073 25.55 16.4573 26 17.1773 26H22.7933C23.5313 26 23.9453 25.568 23.9453 24.938C23.9453 24.29 23.5313 23.858 22.7933 23.858H19.3553V23.822L22.5773 20.024C23.3333 19.124 23.8193 18.224 23.8193 17.054C23.8193 15.074 22.3793 13.562 20.0573 13.562C17.8793 13.562 16.5113 14.786 16.2413 16.1C16.2233 16.208 16.2053 16.316 16.2053 16.406C16.2053 17.072 16.6913 17.522 17.3393 17.522C17.8433 17.522 18.2213 17.234 18.4733 16.712C18.7973 16.046 19.2473 15.686 19.9493 15.686C20.8133 15.686 21.2993 16.28 21.2993 17.09C21.2993 17.72 21.0473 18.224 20.5793 18.782L16.7633 23.354C16.2053 24.02 16.0073 24.398 16.0073 24.92Z"
        fill="#849FB5"
      />
      <circle
        cx="20.0946"
        cy="20.0941"
        r="12.9004"
        transform="rotate(35.6401 20.0946 20.0941)"
        stroke="#AAC1D4"
        strokeWidth="3"
      />
    </svg>
  );
};

export const ThirdPlaceSvg = () => {
  return (
    <svg width="41" height="42" viewBox="0 0 41 42" fill="none">
      <path
        d="M8.31152 19.4663H31.8758V38.4086C31.8758 39.844 30.4564 40.8481 29.1029 40.3701L20.0937 37.1888L11.0845 40.3701C9.73095 40.8481 8.31152 39.844 8.31152 38.4086V19.4663Z"
        fill="#D7975D"
      />
      <circle
        cx="20.0941"
        cy="20.0941"
        r="14.4004"
        transform="rotate(35.6401 20.0941 20.0941)"
        fill="#E5AE7C"
      />
      <path
        d="M11.703 31.7972C18.1664 36.4314 27.1628 34.9486 31.7971 28.4851L8.39087 11.7031C3.75665 18.1666 5.23953 27.163 11.703 31.7972Z"
        fill="#F7BE8B"
      />
      <path
        d="M16.4038 24.326C16.9258 25.514 18.2218 26.198 19.9858 26.198C22.2898 26.198 23.9818 24.686 23.9818 22.454C23.9818 20.852 23.1358 19.862 22.3798 19.502V19.466C23.2618 18.89 23.7478 17.99 23.7478 16.946C23.7478 14.984 22.3618 13.562 19.9678 13.562C18.2038 13.562 16.9798 14.372 16.5298 15.398C16.4398 15.614 16.3858 15.83 16.3858 16.028C16.3858 16.676 16.8538 17.144 17.5018 17.144C17.9518 17.144 18.3838 16.892 18.6178 16.424C18.7978 16.046 19.1398 15.686 19.8598 15.686C20.6878 15.686 21.2278 16.262 21.2278 17.126C21.2278 18.062 20.6518 18.638 19.8418 18.638H19.7158C19.0678 18.638 18.6178 19.07 18.6178 19.7C18.6178 20.33 19.0678 20.762 19.7158 20.762H19.8418C20.7238 20.762 21.4618 21.41 21.4618 22.472C21.4618 23.408 20.8858 24.074 19.9498 24.074C19.3198 24.074 18.8518 23.786 18.5638 23.318C18.2758 22.85 17.8618 22.598 17.4118 22.598C16.7098 22.598 16.2778 23.084 16.2778 23.714C16.2778 23.912 16.3138 24.128 16.4038 24.326Z"
        fill="#CD7900"
      />
      <circle
        cx="20.0941"
        cy="20.0941"
        r="12.9004"
        transform="rotate(35.6401 20.0941 20.0941)"
        stroke="#D7975D"
        strokeWidth="3"
      />
    </svg>
  );
};

export const EmptyMedalSvg = ({ size = 35 }: { size?: number }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 19 23" fill="none">
      <path
        d="M1.95703 9.00208H16.7897V21.34C16.7897 22.3484 15.7925 23.0538 14.8417 22.718L9.37335 20.787L3.90498 22.718C2.95415 23.0538 1.95703 22.3484 1.95703 21.34V9.00208Z"
        fill="#AFAFAF"
      />
      <path
        d="M16.7398 14.679C13.8227 18.7474 8.15988 19.6808 4.09144 16.7638C0.022994 13.8468 -0.910409 8.18393 2.00662 4.11548C4.92365 0.0470419 10.5865 -0.886362 14.6549 2.03067C18.7234 4.9477 19.6568 10.6105 16.7398 14.679Z"
        fill="#E5E5E5"
      />
      <path
        d="M15.0457 9.39721C15.0457 12.5301 12.506 15.0699 9.37304 15.0699C6.24013 15.0699 3.7004 12.5301 3.7004 9.39721C3.7004 6.2643 6.24013 3.72457 9.37304 3.72457C12.506 3.72457 15.0457 6.2643 15.0457 9.39721Z"
        stroke="#AFAFAF"
        strokeWidth="1.83928"
      />
      <path
        d="M11.5377 6.47638C11.2524 6.19103 11.2524 5.72839 11.5377 5.44304L12.8351 4.14565C13.1205 3.8603 13.5831 3.8603 13.8685 4.14565L15.1659 5.44304C15.4512 5.72839 15.4512 6.19103 15.1659 6.47638L13.8685 7.77376C13.5831 8.05911 13.1205 8.05911 12.8351 7.77376L11.5377 6.47638Z"
        fill="white"
      />
    </svg>
  );
};

export const ProfileTimeJoinedSvg = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM6.85625 4.57202C6.85625 3.94084 7.36792 3.42917 7.99911 3.42917C8.63029 3.42917 9.14196 3.94084 9.14196 4.57202V8.10544L11.2714 10.2349C11.7177 10.6812 11.7177 11.4048 11.2714 11.8511C10.8251 12.2974 10.1015 12.2974 9.65514 11.8511L7.23078 9.42674C7.20168 9.39764 7.17447 9.36736 7.14917 9.33606C6.96706 9.13361 6.85625 8.86576 6.85625 8.57202V4.57202Z"
        fill="#CDCDCD"
      />
    </svg>
  );
};

export const ProfileFriendsSvg = () => {
  return (
    <svg width="16" height="13" viewBox="0 0 16 13" fill="none">
      <circle cx="3.42988" cy="2.28584" r="2.28584" fill="#CDCDCD" />
      <path
        d="M0 9.14361C0 7.24995 1.53511 5.71484 3.42876 5.71484C5.32242 5.71484 6.85752 7.24995 6.85752 9.14361V12.0449C6.85752 12.3362 6.62135 12.5724 6.33002 12.5724H0.527502C0.236171 12.5724 0 12.3362 0 12.0449V9.14361Z"
        fill="#CDCDCD"
      />
      <circle cx="12.5705" cy="2.28584" r="2.28584" fill="#CDCDCD" />
      <path
        d="M9.14062 9.14361C9.14062 7.24995 10.6757 5.71484 12.5694 5.71484C14.463 5.71484 15.9981 7.24995 15.9981 9.14361V12.0449C15.9981 12.3362 15.762 12.5724 15.4706 12.5724H9.66813C9.3768 12.5724 9.14062 12.3362 9.14062 12.0449V9.14361Z"
        fill="#CDCDCD"
      />
    </svg>
  );
};

export const EditPencilSvg = () => {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.19599 2.4431L10.1997 1.43938C11.24 0.39911 12.9266 0.399112 13.9669 1.43939C15.0071 2.47966 15.0071 4.16628 13.9669 5.20655L12.9632 6.21026L9.19599 2.4431ZM8.0124 3.62669L1.44866 10.1904C0.808195 10.8309 0.471563 13.8719 1.02949 14.4299C1.58741 14.9878 4.5644 14.609 5.21582 13.9576L11.7796 7.39385L8.0124 3.62669Z"
        fill="white"
      />
    </svg>
  );
};

export const SettingsGearSvg = () => {
  return (
    <svg width="20" height="21" viewBox="147 69 20 21">
      <path
        d="M166.69 81.09v-2.68l-2.21-.3a7.69 7.69 0 0 0-1-2.62l1.27-1.68-1.89-1.89-1.58 1.2a7.71 7.71 0 0 0-2.77-1.22l-.23-1.9h-2.68l-.26 1.85a7.71 7.71 0 0 0-2.86 1.2L151 71.91l-1.9 1.89 1.18 1.56a7.69 7.69 0 0 0-1.06 2.77l-2 .28v2.68l2.16.3a7.71 7.71 0 0 0 1.13 2.48l-1.41 1.83 1.9 1.89 1.93-1.46a7.69 7.69 0 0 0 2.34.91l.34 2.46h2.68l.35-2.5a7.69 7.69 0 0 0 2.26-.93l2 1.52 1.89-1.89-1.47-1.95a7.71 7.71 0 0 0 1-2.34l2.37-.32zm-9.84 1.78a3.42 3.42 0 1 1 .01 0h-.01z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
};

export const BoySvg = () => {
  return (
    <svg width="212px" height="212px" viewBox="0 0 212 212" className="w-full">
      <defs>
        <path
          d="M29.5356692,0 L116.588168,0 C132.900267,-2.99648409e-15 146.123837,13.2235695 146.123837,29.5356692 L146.123837,114 L146.123837,114 L0,114 L0,29.5356692 C-1.99765606e-15,13.2235695 13.2235695,6.54919777e-15 29.5356692,0 Z"
          id="path-1"
        />
        <path
          d="M8.22639382,0 C12.7697057,-8.34592848e-16 16.4527876,3.68308197 16.4527876,8.22639382 L16.4527876,18.5588844 C16.4527876,23.1021962 12.7697057,26.7852782 8.22639382,26.7852782 C3.68308197,26.7852782 -4.91139174e-13,23.1021962 -4.89919212e-13,18.5588844 L-4.89919212e-13,8.22639382 C-4.90475607e-13,3.68308197 3.68308197,8.34592848e-16 8.22639382,0 Z"
          id="path-3"
        />
      </defs>
      <g id="boy" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Path-6-Copy-4" transform="translate(67.100000, 127.909091)">
          <g id="Oval-4" transform="translate(10.171954, -4.839442)" />
        </g>
        <g id="Group-13-Copy" transform="translate(16.000000, 4.000000)">
          <path
            d="M89.6097094,25.6493969 C102.273896,25.6493969 112.535612,35.9420134 112.535612,48.6285516 L112.535612,52.0760483 L66.6775991,52.0760483 L66.6775991,48.6285516 C66.6775991,35.9420134 76.9455229,25.6493969 89.6097094,25.6493969 Z"
            id="Path-Copy-32"
            fill="#FF9600"
          />
          <path
            d="M65.1262008,48.189776 C78.6448588,48.189776 89.6066054,37.4014842 89.6066054,24.094888 C89.6066054,10.7882918 78.6448588,0 65.1262008,0 C51.6013216,0 40.6395749,10.7882918 40.6395749,24.094888 C40.6395749,37.4014842 51.6013216,48.189776 65.1262008,48.189776 Z"
            id="Path-Copy-38"
            fill="#FF9600"
            fillRule="nonzero"
          />
          <g id="Rectangle" transform="translate(17.710569, 47.801149)">
            <mask id="mask-2" fill="white">
              <use xlinkHref="#path-1" />
            </mask>
            <use id="Mask" fill="#FFC6B7" xlinkHref="#path-1" />
            <rect
              id="Rectangle-Copy-7"
              fill="#FF9600"
              opacity="0.331519717"
              mask="url(#mask-2)"
              x="-94.0477886"
              y="-39.2513498"
              width="114.256404"
              height="90.9387708"
              rx="17.4882252"
            />
            <rect
              id="Rectangle-Copy-11"
              fill="#FF9600"
              opacity="0.331519717"
              mask="url(#mask-2)"
              x="129.412866"
              y="-39.2513498"
              width="114.256404"
              height="90.9387708"
              rx="17.4882252"
            />
          </g>
          <circle
            id="Oval"
            fill="#FFC6B7"
            cx="167.526364"
            cy="105.123665"
            r="13.0190121"
          />
          <circle
            id="Oval-Copy-3"
            fill="#FFC6B7"
            cx="13.2413555"
            cy="105.123665"
            r="13.0190121"
          />
          <g id="Group-8-Copy-2" transform="translate(50.743883, 62.568983)">
            <g id="Group-7">
              <path
                d="M18.3237487,0 C28.4436756,-1.85900042e-15 36.6474974,8.20382172 36.6474974,18.3237487 L36.6474974,29.4695908 C36.6474974,39.5895178 28.4436756,47.7933395 18.3237487,47.7933395 C8.20382172,47.7933395 1.23933362e-15,39.5895178 0,29.4695908 L0,18.3237487 C2.31338006e-15,8.20382172 8.20382172,1.85900042e-15 18.3237487,0 Z"
                id="Rectangle-130-Copy-42"
                fill="#FFFFFF"
              />
              <path
                d="M23.3828556,10.8815623 C27.9261675,10.8815623 31.6092495,14.5646443 31.6092495,19.1079561 L31.6092495,29.4404467 C31.6092495,33.9837585 27.9261675,37.6668405 23.3828556,37.6668405 C18.8395438,37.6668405 15.1564618,33.9837585 15.1564618,29.4404467 L15.1564618,19.1079561 C15.1564618,14.5646443 18.8395438,10.8815623 23.3828556,10.8815623 Z"
                id="Combined-Shape"
                fill="#3D3D3D"
              />
            </g>
            <g
              id="Group-7-Copy-3"
              transform="translate(61.283852, 24.000000) scale(-1, 1) translate(-61.283852, -24.000000) translate(42.783852, 0.000000)"
            >
              <path
                d="M18.3237487,0 C28.4436756,-1.85900042e-15 36.6474974,8.20382172 36.6474974,18.3237487 L36.6474974,29.4695908 C36.6474974,39.5895178 28.4436756,47.7933395 18.3237487,47.7933395 C8.20382172,47.7933395 1.23933362e-15,39.5895178 0,29.4695908 L0,18.3237487 C2.31338006e-15,8.20382172 8.20382172,1.85900042e-15 18.3237487,0 Z"
                id="Rectangle-130-Copy-42"
                fill="#FFFFFF"
              />
              <g id="Oval-Copy-23" transform="translate(13.990580, 10.881562)">
                <mask id="mask-4" fill="white">
                  <use xlinkHref="#path-3" />
                </mask>
                <use id="Mask" fill="#3D3D3D" xlinkHref="#path-3" />
              </g>
            </g>
          </g>
          <path
            d="M40.2509477,104.930971 C59.6443081,104.829521 76.4848212,109.492508 90.7724871,118.919931"
            id="Path-3"
            stroke="#FFC6B7"
            strokeWidth="8.16117174"
          />
          <path
            d="M74.277641,123.608267 C80.1880525,128.167477 86.098464,128.159207 92.0088755,123.583458"
            id="Path-4"
            stroke="#EE9583"
            strokeWidth="3.88627226"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(83.143258, 125.302470) scale(-1, 1) rotate(-21.000000) translate(-83.143258, -125.302470) "
          />
          <circle
            id="Oval-Copy-20"
            fill="#FFFFFF"
            transform="translate(66.288972, 75.782309) scale(-1, 1) translate(-66.288972, -75.782309) "
            cx="66.2889719"
            cy="75.782309"
            r="6.60666284"
          />
          <path
            d="M90.1895462,118.142677 C94.1602547,118.142677 97.3791499,114.916595 97.3791499,110.937022 C97.3791499,106.957449 90.1895462,97.5454337 90.1895462,97.5454337 C90.1895462,97.5454337 82.9999426,106.957449 82.9999426,110.937022 C82.9999426,114.916595 86.2188378,118.142677 90.1895462,118.142677 Z"
            id="Oval-Copy-19"
            fill="#EE9583"
          />
        </g>
        <rect
          id="Rectangle"
          fill="#2FE3FF"
          x="34"
          y="162"
          width="146"
          height="46"
          rx="6"
        />
        <path
          d="M30.990178,157.896381 L181.777542,157.896381 C189.933591,157.896381 196.545376,164.508166 196.545376,172.664216 L196.545376,173.830098 C196.545376,181.986148 189.933591,188.597932 181.777542,188.597932 L30.990178,188.597932 C22.8341282,188.597932 16.2223435,181.986148 16.2223435,173.830098 L16.2223435,172.664216 C16.2223435,164.508166 22.8341282,157.896381 30.990178,157.896381 Z"
          id="Rectangle"
          fill="#2FE3FF"
        />
        <rect
          id="Rectangle"
          fill="#FFFFFF"
          x="90.0615164"
          y="169.555198"
          width="8.16117174"
          height="31.8674325"
          rx="4.08058587"
        />
        <rect
          id="Rectangle-Copy-142"
          fill="#FFFFFF"
          x="114.933659"
          y="169.555198"
          width="8.16117174"
          height="31.8674325"
          rx="4.08058587"
        />
        <path
          d="M111.816431,84.4538044 C113.012011,85.6494462 114.663727,86.3889719 116.488168,86.3889719 C120.136927,86.3889719 123.094831,83.4310682 123.094831,79.782309 C123.094831,76.1335499 120.136927,73.1756462 116.488168,73.1756462 C112.576677,79.8973775 111.019431,83.6567635 111.816431,84.4538044 Z"
          id="Path"
          fill="#FFFFFF"
        />
      </g>
    </svg>
  );
};

export const WomanSvg = () => {
  return (
    <svg width="212px" height="213px" viewBox="0 0 212 213" className="w-full">
      <defs>
        <path
          d="M139.2064,52.8675998 C149.142593,52.8675998 157.860764,58.082576 162.77316,65.9247771 L56.0452392,65.9247771 C60.9576357,58.082576 69.6758062,52.8675998 79.6119998,52.8675998 L139.2064,52.8675998 Z"
          id="path-1"
        />
      </defs>
      <g
        id="happy"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        transform="translate(0.000000, 0.000000)"
      >
        <g id="Group" transform="translate(16.000000, 7.000000)">
          <path
            d="M52.2287998,0 L83.6999997,0 C112.545169,-5.2987717e-15 135.928799,23.3836302 135.928799,52.2287998 L135.928799,197.160002 L135.928799,197.160002 L52.2287998,197.160002 C23.3836302,197.160002 4.39663649e-13,173.776371 4.36131135e-13,144.931202 L4.36131135e-13,52.2287998 C4.3259862e-13,23.3836302 23.3836302,5.2987717e-15 52.2287998,0 Z"
            id="Rectangle-Copy-10"
            fill="#3D3D3D"
          />
          <path
            d="M128.563199,27.9000002 L141.285599,27.9000002 C162.734572,27.9000002 180.122399,45.2878278 180.122399,66.7368001 L180.122399,158.323202 C180.122399,179.772174 162.734572,197.160002 141.285599,197.160002 L128.563199,197.160002 C107.114227,197.160002 89.7263997,179.772174 89.7263997,158.323202 L89.7263997,66.7368001 C89.7263997,45.2878278 107.114227,27.9000002 128.563199,27.9000002 Z"
            id="Rectangle-Copy-9"
            fill="#3D3D3D"
          />
          <path
            d="M63.6119998,45.8675998 L123.2064,45.8675998 C138.553509,45.8675998 150.994799,58.3088902 150.994799,73.6559997 L150.994799,136.263599 C150.994799,151.610709 138.553509,164.051999 123.2064,164.051999 L63.6119998,164.051999 C48.2648903,164.051999 35.8235999,151.610709 35.8235999,136.263599 L35.8235999,73.6559997 C35.8235999,58.3088902 48.2648903,45.8675998 63.6119998,45.8675998 Z"
            id="Mask-Copy"
            fill="#A56644"
          />
          <path
            d="M90.0611996,112.158 L97.0919996,112.158 C100.420288,112.158 103.1184,114.856111 103.1184,118.1844 C103.1184,121.512688 100.420288,124.2108 97.0919996,124.2108 L90.0611996,124.2108 C86.7329108,124.2108 84.0347997,121.512688 84.0347997,118.1844 C84.0347997,114.856111 86.7329108,112.158 90.0611996,112.158 Z"
            id="Rectangle-Copy-24"
            fill="#87401A"
          />
          <polygon
            id="Triangle-Copy"
            fill="#87401A"
            points="93.4091996 105.462 101.1096 117.8496 85.7087997 117.8496"
          />
          <path
            d="M74.3757982,72.6515997 C83.0940539,72.6515997 90.1615965,79.7191424 90.1615965,88.4373981 L90.1615965,98.0394735 C90.1615965,106.757729 83.0940539,113.825272 74.3757982,113.825272 C65.6575424,113.825272 58.5899998,106.757729 58.5899998,98.0394735 L58.5899998,88.4373981 C58.5899998,79.7191424 65.6575424,72.6515997 74.3757982,72.6515997 Z"
            id="Rectangle-130-Copy-44"
            fill="#FFFFFF"
          />
          <path
            d="M78.3993881,82.0259997 C82.3134237,82.0259997 85.4863765,85.1989525 85.4863765,89.1129881 L85.4863765,98.014366 C85.4863765,101.928402 82.3134237,105.101354 78.3993881,105.101354 C74.4853525,105.101354 71.3123997,101.928402 71.3123997,98.014366 L71.3123997,89.1129881 C71.3123997,85.1989525 74.4853525,82.0259997 78.3993881,82.0259997 Z"
            id="Combined-Shape-Copy"
            fill="#3D3D3D"
          />
          <path
            d="M112.541906,72.6515997 C121.260162,72.6515997 128.327704,79.7191424 128.327704,88.4373981 L128.327704,98.0394735 C128.327704,106.757729 121.260162,113.825272 112.541906,113.825272 C103.82365,113.825272 96.7561075,106.757729 96.7561075,98.0394735 L96.7561075,88.4373981 C96.7561075,79.7191424 103.82365,72.6515997 112.541906,72.6515997 Z"
            id="Rectangle-130-Copy-45"
            fill="#FFFFFF"
            transform="translate(112.541906, 93.238436) scale(-1, 1) translate(-112.541906, -93.238436) "
          />
          <path
            d="M109.522716,82.0259997 C113.436752,82.0259997 116.609704,85.1989525 116.609704,89.1129881 L116.609704,98.014366 C116.609704,101.928402 113.436752,105.101354 109.522716,105.101354 C105.60868,105.101354 102.435728,101.928402 102.435728,98.014366 L102.435728,89.1129881 C102.435728,85.1989525 105.60868,82.0259997 109.522716,82.0259997 Z"
            id="Mask-Copy-2"
            fill="#3D3D3D"
            transform="translate(109.522716, 93.563677) scale(-1, 1) translate(-109.522716, -93.563677) "
          />
          <path
            d="M98.5379948,88.4629695 C99.515256,89.2531525 100.759361,89.7263997 102.114,89.7263997 C105.257383,89.7263997 107.8056,87.1781835 107.8056,84.0347997 C107.8056,80.8914158 105.257383,78.3431997 102.114,78.3431997 C98.8697068,84.3941095 97.6777053,87.7673661 98.5379948,88.4629695 Z"
            id="Path"
            fill="#FFFFFF"
          />
          <circle
            id="Oval-Copy-21"
            fill="#FFFFFF"
            transform="translate(71.982000, 83.365200) scale(-1, 1) translate(-71.982000, -83.365200) "
            cx="71.9819997"
            cy="83.3651997"
            r="5.69159998"
          />
          <path
            d="M87.4149443,140.16935 C78.8686943,140.035925 72.9538943,135.789893 69.6705444,127.44695"
            id="Path-Copy-193"
            stroke="#FFFFFF"
            strokeWidth="17.7604871"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(78.542744, 133.808150) rotate(-6.000000) translate(-78.542744, -133.808150) "
          />
          <path
            d="M82.3607997,115.8408 C66.9147781,109.385219 56.2011781,105.925619 50.2199998,105.462"
            id="Path-10-Copy"
            stroke="#A56644"
            strokeWidth="5.02199998"
          />
        </g>
        <mask id="mask-2" fill="white">
          <use xlinkHref="#path-1" />
        </mask>
        <path
          d="M67.5591998,35.7927999 C78.098781,35.7927999 86.6427997,44.3368186 86.6427997,54.8763998 L86.6427997,71.2815997 C86.6427997,81.821181 78.098781,90.3651997 67.5591998,90.3651997 C57.0196186,90.3651997 48.4755999,81.821181 48.4755999,71.2815997 L48.4755999,54.8763998 C48.4755999,44.3368186 57.0196186,35.7927999 67.5591998,35.7927999 Z"
          id="Rectangle-Copy-23"
          fill="#3D3D3D"
        />
        <path
          d="M91.1999999,171 L127.559999,171 C131.53645,171 134.759999,174.22355 134.759999,178.2 L134.759999,204.160002 L134.759999,204.160002 L84,204.160002 L84,178.2 C84,174.22355 87.2235498,171 91.1999999,171 Z"
          id="Rectangle-Copy-4"
          fill="#FFB100"
        />
      </g>
    </svg>
  );
};
