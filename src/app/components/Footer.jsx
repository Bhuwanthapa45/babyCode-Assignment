import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800">
      {/* Top banner section */}
      <div className="bg-[#1E3B4B] text-white py-6">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 11-2 0 1 1 0 012 0zm0 4a1 1 0 11-2 0 1 1 0 012 0zm0 4a1 1 0 11-2 0 1 1 0 012 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium">PERSONAL</p>
              <p className="text-sm font-medium">GUIDENCE</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9-9.5L12 4 3 9.5 12 19z"
              />
            </svg>
            <div>
              <p className="text-sm font-medium">1000+ STUDENTS</p>
              <p className="text-sm font-medium">ENROLLED</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11a7 7 0 00-7-7m0 0a7 7 0 00-7 7m7-7v18"
              />
            </svg>
            <div>
              <p className="text-sm font-medium">OUTSTANDING</p>
              <p className="text-sm font-medium">ALUMN NETWROK</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo column */}
          <div className="flex flex-col">
            <div className="mb-6 flex">
              <img className="w-[5vh]" src="./logobc.png" alt="BC LOGO" />
              <div className="text-2xl font-bold">BabyCode</div>
            </div>
          </div>

          {/* Social media column */}
          <div>
            <h3 className="text-sm font-semibold mb-6">
              Find us on social media
            </h3>
            <div className="flex space-x-4">
              {/* Facebook */}
              <Link
                href="https://www.facebook.com/yourpage"
                target="_blank"
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors text-[#1877F2]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M22.675 0h-21.35C.597 0 0 .597 0 
            1.325v21.351C0 23.403.597 24 1.325 
            24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 
            1.894-4.788 4.659-4.788 1.325 0 2.464.099 
            2.795.143v3.24l-1.918.001c-1.504 
            0-1.796.715-1.796 1.764v2.313h3.587l-.467 
            3.622h-3.12V24h6.116C23.403 24 24 
            23.403 24 22.676V1.325C24 .597 23.403 
            0 22.675 0z"
                  />
                </svg>
              </Link>

              {/* Instagram */}
              <Link
                href="https://www.instagram.com/yourpage"
                target="_blank"
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors text-[#E1306C]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 
            4.85.07 1.366.062 2.633.342 3.608 
            1.317.975.975 1.255 2.242 1.317 
            3.608.058 1.266.069 1.646.069 
            4.842s-.011 3.576-.069 4.842c-.062 
            1.366-.342 2.633-1.317 3.608-.975.975-2.242 
            1.255-3.608 1.317-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.342-3.608-1.317-.975-.975-1.255-2.242-1.317-3.608C2.175 
            15.576 2.163 15.196 2.163 
            12s.012-3.576.07-4.842c.062-1.366.342-2.633 
            1.317-3.608.975-.975 2.242-1.255 
            3.608-1.317C8.416 2.175 8.796 2.163 
            12 2.163zm0 3.675a6.162 6.162 
            0 1 0 0 12.324 6.162 6.162 
            0 0 0 0-12.324zm0 10.162a4 
            4 0 1 1 0-8 4 4 0 0 1 
            0 8zm6.406-11.845a1.44 1.44 
            0 1 0 0 2.881 1.44 1.44 
            0 0 0 0-2.881z"
                  />
                </svg>
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/in/yourpage"
                target="_blank"
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors text-[#0077B5]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M22.225 0H1.771C.792 0 
            0 .774 0 1.729v20.542C0 
            23.227.792 24 1.771 
            24h20.451C23.2 24 24 
            23.227 24 22.271V1.729C24 
            .774 23.2 0 22.225 
            0zM7.082 20.452H3.56V9h3.522v11.452zM5.321 
            7.577a2.037 2.037 
            0 1 1 0-4.074 2.037 
            2.037 0 0 1 0 4.074zM20.452 
            20.452h-3.521v-5.569c0-1.327-.027-3.037-1.85-3.037-1.851 
            0-2.136 1.445-2.136 2.939v5.667h-3.522V9h3.379v1.561h.048c.471-.888 
            1.623-1.85 3.341-1.85 3.571 
            0 4.229 2.353 4.229 
            5.417v6.324z"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Community column */}
          <div>
            <h3 className="text-sm font-semibold mb-6">COMMUNITY</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-gray-600 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-gray-600 transition-colors"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-gray-600 transition-colors"
                >
                  Ideas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-gray-600 transition-colors"
                >
                  Developers
                </a>
              </li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-sm font-semibold mb-6">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-gray-600 transition-colors"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-gray-600 transition-colors"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-gray-600 transition-colors"
                >
                  How To Enroll?
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-gray-600 transition-colors"
                >
                  Students Enrolled
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-gray-600 transition-colors"
                >
                  Alumni
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-gray-600 transition-colors"
                >
                  Affiliates
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-gray-600 transition-colors"
                >
                  Media
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-gray-600 transition-colors"
                >
                  Contacts & Imprint
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links column */}
          <div>
            <h3 className="text-sm font-semibold mb-6">USEFUL LINKS</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-gray-600 transition-colors"
                >
                  Collabration Inquires
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-gray-600 transition-colors"
                >
                  Careers at BabyCode
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-gray-600 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-gray-600 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-gray-600 transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-gray-600 transition-colors"
                >
                  Cookie Settings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom copyright section */}
      <div className="border-t border-gray-200 py-6">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
          <p className="text-xs text-center text-gray-500">
            © {new Date().getFullYear()} BabyCode. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
