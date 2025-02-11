"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { NavbarType } from "@/types";
import { getNavbar } from "@/lib/sanity/queries/navbarQuery";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [Navbar, setNavbar] = useState<NavbarType | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchNavbar(){
      const data = await getNavbar();
      if(data) setNavbar(data);
    }
    fetchNavbar();
  }, []);

  return (
    <nav className="border-b border-gray-200 dark:bg-gray-700 m-3 rounded-md">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-1 pr-3.5 pl-3.5">
      <div className="flex items-center space-x-2">
            <div className="relative">
              <svg
                viewBox="0 0 40 40"
                className="w-10 h-10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background circle */}
                <circle cx="20" cy="20" r="20" fill="#374151"/>
                
                {/* Abstract book/document shapes */}
                <path
                  d="M12 12C12 10.8954 12.8954 10 14 10H26C27.1046 10 28 10.8954 28 12V28C28 29.1046 27.1046 30 26 30H14C12.8954 30 12 29.1046 12 28V12Z"
                  fill="#9CA3AF"
                />
                
                {/* Decorative lines representing text */}
                <path
                  d="M16 16H24"
                  stroke="#4B5563"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M16 20H24"
                  stroke="#4B5563"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                
                {/* Share/connect symbol */}
                <path
                  d="M20 15L24 19L20 23"
                  stroke="#E5E7EB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                                <circle cx="16" cy="19" r="1.5" fill="#E5E7EB"/>
                <circle cx="24" cy="19" r="1.5" fill="#E5E7EB"/>
                
                {/* Outer decorative ring */}
                <circle
                  cx="20"
                  cy="20"
                  r="18"
                  stroke="#6B7280"
                  strokeWidth="1"
                  strokeDasharray="4 2"
                />
              </svg>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
              BlogShare
            </span>
          </div>
        <div className="hidden md:flex items-center space-x-3">
          {Navbar?.menuItems.map((item) => (
            <a
              key={item.title}
              href={item.link}
              className="py-2 px-3 text-gray-300 text-[15px] font-medium hover:text-gray-700 dark:hover:text-gray-400"
            >
              {item.title}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => router.push("/signin")}
            className="text-sm font-medium px-4 py-1.5 rounded-md text-[#ECEBDE]  bg-[#5C7285] transition hover:bg-[#7E99A3]"
          >
            Sign In
          </button>

          <div className="relative">
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center text-sm bg-gray-400 rounded-full dark:focus:ring-gray-600"
            >
              <Image
                src="/account.png" 
                alt="Profile Icon"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full object-cover"
              />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-700 rounded-lg shadow-lg z-50">
                <ul className="py-2">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-800 dark:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 focus:ring-2 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center p-4 space-y-2 bg-gray-100 dark:bg-gray-800">
            {Navbar?.menuItems.map((item) => (
              <li key={item.title}>
                <a
                  href={item.link}
                  className="block py-2 text-gray-300 text-sm font-medium hover:text-gray-900 dark:hover:text-gray-200"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
