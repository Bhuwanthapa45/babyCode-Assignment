"use client";
import { useState } from "react";
import { Home, BookOpen, Users, Phone } from "lucide-react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: <Home size={22} /> },
    { id: "courses", label: "Courses", icon: <BookOpen size={22} /> },
    { id: "stories", label: "Stories", icon: <Users size={22} /> },
    { id: "shop", label: "Shop", icon: <Phone size={22} /> },
     { id: "feedback", label: "Feedback", icon: <Phone size={22} /> },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex justify-between items-center px-8 py-4 bg-gradient-to-r from-blue-100 to-blue-200 text-white shadow-lg">
        {/* Logo */}
        <div className="text-2xl font-bold">Baby Code</div>

        {/* Links */}
        <ul className="flex gap-8">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="cursor-pointer hover:text-blue-200 transition-colors"
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="bg-white text-blue-600 px-4 py-2 rounded-full shadow hover:bg-blue-100 transition">
          Join Now
        </button>
      </nav>

      {/* Mobile Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-t md:hidden">
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