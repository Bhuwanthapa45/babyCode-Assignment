"use client";
import Link from "next/link";

export default function AuthNavbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white px-6 py-3 flex items-center justify-between shadow-sm">
      {/* Logo / Brand */}
      <div className="flex items-center space-x-2">
        <img src="/logobc.png" alt="BC Logo" className="w-8 h-8" />
        <span className="text-lg font-bold text-[#1E3B4B]">Baby Code</span>
      </div>

      {/* Home link */}
      <Link
        href="/"
        className="text-sm font-medium text-gray-700 hover:text-gray-900 transition"
      >
        ← Back to Home
      </Link>
    </nav>
  );
}