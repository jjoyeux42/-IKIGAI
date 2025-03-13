import React from "react";
import Link from "next/link";
import { StarSvg } from "./Svgs";

type ActiveTab = "Apprendre" | "Profile" | "Leaderboards" | null;

export const LeftBar = ({ selectedTab }: { selectedTab: ActiveTab }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 flex h-16 flex-row justify-around border-t-2 border-gray-200 bg-white md:top-0 md:h-screen md:w-24 md:flex-col md:justify-start md:border-r-2 md:border-t-0 lg:w-64">
      {/* Logo - uniquement visible sur les écrans moyens et grands */}
      <div className="hidden items-center justify-center border-b-2 border-gray-200 px-5 py-8 pt-7 md:flex lg:justify-start">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#3AD278]">
          <span className="text-white text-lg font-bold">I</span>
        </div>
        <div className="ml-1 hidden text-4xl font-bold tracking-tight text-[#3AD278] lg:block">
          ikigai
        </div>
      </div>
      
      {/* Élément "Apprendre" */}
      <Link
        href="/learn"
        className={`flex items-center justify-center py-3 md:px-5 md:py-5 lg:justify-start ${
          selectedTab === "Apprendre"
            ? "text-[#3AD278]"
            : "text-gray-400 hover:text-gray-500"
        }`}
      >
        <svg
          className="h-[32px] w-[32px] md:h-[40px] md:w-[40px]"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.66663 35V30"
            stroke="currentColor"
            strokeWidth="3.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 35V25"
            stroke="currentColor"
            strokeWidth="3.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M33.3334 35V15"
            stroke="currentColor"
            strokeWidth="3.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.66663 20L19.5 7.16669C19.6422 7.02464 19.8105 6.91262 19.9955 6.83752C20.1806 6.76241 20.3789 6.72577 20.5793 6.73014C20.7797 6.7345 20.9761 6.77979 21.1573 6.86287C21.3385 6.94595 21.5011 7.06516 21.6366 7.21335L33.3333 20"
            stroke="currentColor"
            strokeWidth="3.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="ml-3 text-lg font-bold hidden lg:inline">Apprendre</span>
      </Link>

      {/* Élément "Leaderboards" */}
      <Link
        href="/leaderboard"
        className={`flex items-center justify-center py-3 md:px-5 md:py-5 lg:justify-start ${
          selectedTab === "Leaderboards"
            ? "text-[#3AD278]"
            : "text-gray-400 hover:text-gray-500"
        }`}
      >
        <svg
          className="h-[32px] w-[32px] md:h-[40px] md:w-[40px]"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.3333 21.6667C13.3333 22.5507 13.6845 23.3986 14.3096 24.0237C14.9348 24.6488 15.7826 25 16.6666 25C17.5507 25 18.3985 24.6488 19.0236 24.0237C19.6488 23.3986 20 22.5507 20 21.6667C20 20.7826 19.6488 19.9348 19.0236 19.3097C18.3985 18.6845 17.5507 18.3333 16.6666 18.3333C15.7826 18.3333 14.9348 18.6845 14.3096 19.3097C13.6845 19.9348 13.3333 20.7826 13.3333 21.6667Z"
            stroke="currentColor"
            strokeWidth="3.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.66669 31.6667V13.3333L13.3334 6.66666H26.6667L33.3334 13.3333V31.6667C33.3334 32.5507 32.9822 33.3986 32.357 34.0237C31.7319 34.6488 30.8841 35 30 35H10C9.11598 35 8.26812 34.6488 7.64299 34.0237C7.01788 33.3986 6.66669 32.5507 6.66669 31.6667Z"
            stroke="currentColor"
            strokeWidth="3.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.6667 25V35"
            stroke="currentColor"
            strokeWidth="3.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.3333 25H27.5C28.163 25 28.7989 24.7366 29.2678 24.2678C29.7366 23.7989 30 23.163 30 22.5C30 21.837 29.7366 21.2011 29.2678 20.7322C28.7989 20.2634 28.163 20 27.5 20H23.3333V35"
            stroke="currentColor"
            strokeWidth="3.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="ml-3 text-lg font-bold hidden lg:inline">Classements</span>
      </Link>

      {/* Élément "Profile" */}
      <Link
        href="/profile"
        className={`flex items-center justify-center py-3 md:px-5 md:py-5 lg:justify-start ${
          selectedTab === "Profile"
            ? "text-[#3AD278]"
            : "text-gray-400 hover:text-gray-500"
        }`}
      >
        <svg
          className="h-[32px] w-[32px] md:h-[40px] md:w-[40px]"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33.3333 35V31.6667C33.3333 29.8986 32.631 28.2029 31.3807 26.9526C30.1305 25.7024 28.4348 25 26.6667 25H13.3333C11.5652 25 9.86952 25.7024 8.61928 26.9526C7.36904 28.2029 6.66666 29.8986 6.66666 31.6667V35"
            stroke="currentColor"
            strokeWidth="3.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.9999 18.3333C23.6818 18.3333 26.6666 15.3486 26.6666 11.6667C26.6666 7.98477 23.6818 5 19.9999 5C16.318 5 13.3333 7.98477 13.3333 11.6667C13.3333 15.3486 16.318 18.3333 19.9999 18.3333Z"
            stroke="currentColor"
            strokeWidth="3.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="ml-3 text-lg font-bold hidden lg:inline">Profil</span>
      </Link>

      {/* Badge XP - uniquement visible sur les écrans moyens et grands */}
      <div className="hidden mt-auto mb-6 mx-auto md:flex items-center justify-center">
        <div className="flex items-center justify-center bg-[#fff4db] rounded-lg px-3 py-2">
          <StarSvg className="h-6 w-6 text-[#ff9600] mr-2" />
          <span className="text-[#ff9600] font-bold">0 XP</span>
        </div>
      </div>
    </div>
  );
};