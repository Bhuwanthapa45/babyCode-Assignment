"use client";

import Link from "next/link";
import { useState } from "react";
import AuthNavbar from "../components/Authnavbar";


export default function SignInPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  return (
    <div className="min-h-screen bg-[#FAFDEF] flex flex-col">
      {/* Navbar always on top */}
      <AuthNavbar />

      {/* Centered Sign In Form */}
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-md bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>

          <form className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#1E3B4B] text-white py-2 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
            >
              Sign In
            </button>
          </form>

          {/* Link to Sign Up */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-black font-medium hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}