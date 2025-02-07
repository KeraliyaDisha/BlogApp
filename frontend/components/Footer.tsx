"use client";

import { Facebook, Twitter, Instagram, Github, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark:bg-gray-700 border-t border-gray-600">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        {/* Top Section with Unique Logo and Description */}
        <div className="flex flex-col items-center mb-8 text-center">
          <div className="flex items-center space-x-3 mb-4">
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
          <p className="text-gray-300 max-w-md text-center">
            Share your stories with the world. Join our community of writers, 
            readers, and storytellers.
          </p>
        </div>

        {/* Social Links and Copyright */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-gray-100 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-100 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-100 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-100 transition-colors duration-200">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-100 transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-300 text-sm">
              © {currentYear} BlogShare. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}