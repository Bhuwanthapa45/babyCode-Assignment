"use client";
import { useState } from "react";
import { Home, BookOpen, Users, Phone } from "lucide-react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: <Home size={22} /> },
    {
      id: "courses",
      label: "Courses",
      icon: <BookOpen size={22} />,
      dropdown: ["IELTS", "PTE", "TOEFL"],
    },
    { id: "stories", label: "Stories", icon: <Users size={22} /> },
    { id: "shop", label: "Shop", icon: <Phone size={22} /> },
    { id: "feedback", label: "Feedback", icon: <Phone size={22} /> },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex justify-between items-center px-8 py-3 bg-gray-50 border-b border-gray-200 relative z-50">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white font-bold">
            BC
          </div>
          <span className="text-xl font-bold text-gray-800">Baby Code</span>
        </div>

        {/* Links */}
        <div className="bg-gray-200 rounded-lg px-4 py-2">
          <ul className="flex space-x-6 text-sm font-medium text-gray-700 relative">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="relative group cursor-pointer px-3 py-2 hover:text-gray-900 transition-colors"
              >
                {item.label}

                {/* Dropdown (only for items with dropdown) */}
                {item.dropdown && (
                  <ul className="absolute left-0 top-full mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {item.dropdown.map((option, idx) => (
                      <li
                        key={idx}
                        className="px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 cursor-pointer"
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center space-x-4">
          <button className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Login
          </button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-900 transition">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-gray-50 border-b border-gray-200 flex justify-between items-center px-4 py-2 shadow-sm z-50">
        {/* Logo / Name */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-800 rounded-md flex items-center justify-center text-white font-bold text-xs">
            BC
          </div>
          <span className="text-base font-bold text-gray-800">Baby Code</span>
        </div>

        {/* Sign In button */}
        {/* Sign In button */}
<button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition">
  Sign In
</button>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-t md:hidden">
        <ul className="flex justify-around items-center py-2">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex flex-col items-center cursor-pointer ${
                active === item.id ? "text-blue-600" : "text-gray-500"
              }`}
            >
              {item.icon}
              <span className="text-xs">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}