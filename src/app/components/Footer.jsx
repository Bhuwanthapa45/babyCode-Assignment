
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800">
      {/* Top banner section */}
      <div className="bg-black text-white py-6">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 11-2 0 1 1 0 012 0zm0 4a1 1 0 11-2 0 1 1 0 012 0zm0 4a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium">100% SECURE</p>
              <p className="text-sm font-medium">CHECKOUT</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9-9.5L12 4 3 9.5 12 19z" />
            </svg>
            <div>
              <p className="text-sm font-medium">SHIPPING TO OVER 70</p>
              <p className="text-sm font-medium">COUNTRIES</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 00-7-7m0 0a7 7 0 00-7 7m7-7v18" />
            </svg>
            <div>
              <p className="text-sm font-medium">OUTSTANDING</p>
              <p className="text-sm font-medium">SUPPORT</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo column */}
          <div className="flex flex-col">
            <div className="mb-6">
              <div className="text-2xl font-bold">LaMetric</div>
            </div>
          </div>

          {/* Social media column */}
          <div>
            <h3 className="text-sm font-semibold mb-6">Find us in social media</h3>
            <div className="flex space-x-4">
              <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.847.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849v.084c0 3.204-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.265.058-1.645.07-4.849.07v0h-.084c-3.204 0-3.584-.012-4.849-.07-3.259-.149-4.771-1.691-4.919-4.919-.057-1.265-.069-1.645-.069-4.849v-.084c0-3.204.012-3.584.069-4.849.149-3.225 1.664-4.771 4.919-4.919 1.265-.058 1.645-.07 4.849-.07h.084zm0-2.163c-3.259 0-3.667.012-4.919.07-3.252.149-4.771 1.691-4.919 4.919-.058 1.265-.07 1.645-.07 4.849v.084c0 3.204.012 3.584.07 4.849.149 3.225 1.664 4.771 4.919 4.919 1.265.058 1.645.07 4.849.07h.084c3.204 0 3.584-.012 4.849-.07 3.259-.149 4.771-1.691 4.919-4.919.058-1.265.07-1.645.07-4.849v-.084c0-3.204-.012-3.584-.07-4.849-.149-3.225-1.664-4.771-4.919-4.919-1.265-.058-1.645-.07-4.849-.07h-.084zm0 5.838c-3.405 0-6.162 2.757-6.162 6.162s2.757 6.162 6.162 6.162 6.162-2.757 6.162-6.162-2.757-6.162-6.162-6.162zm0 10.162c-2.135 0-3.976-1.258-4.803-3.005-1.432 1.344-2.398 3.272-2.398 5.453 0 3.584 2.914 6.498 6.498 6.498 3.584 0 6.498-2.914 6.498-6.498 0-2.181-.966-4.109-2.398-5.453-.827 1.747-2.668 3.005-4.803 3.005zm0-12.162c-3.584 0-6.498 2.914-6.498 6.498 0 .836.156 1.632.444 2.373.322-.357.677-.684 1.065-0.975 0.146-0.109 0.297-0.208 0.453-0.298 0.372-0.225 0.785-0.393 1.225-0.494 0.277-0.067 0.558-0.109 0.844-0.124 0.357-0.02 0.714-0.02 1.071 0 0.357 0.02 0.714 0.02 1.071 0 0.286 0.015 0.567 0.057 0.844 0.124 0.44 0.101 0.853 0.269 1.225 0.494 0.156 0.09 0.307 0.189 0.453 0.298 0.388 0.291 0.743 0.618 1.065 0.975 0.288-0.741 0.444-1.537 0.444-2.373 0-3.584-2.914-6.498-6.498-6.498z"/>
                </svg>
              </button>
              <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.991 4.388 10.954 10.125 11.854v-8.384H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.978.923-1.978 1.846v2.23h3.364v3.47h-3.364v8.384C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 00-5.356-5.356 10.003 10.003 0 00-6.913 6.913 10 10 0 005.356 5.356 10.003 10.003 0 006.913-6.913 10 10 0 00-5.356-5.356zM10.003 20.007a10 10 0 0010-10 10 10 0 00-10-10 10 10 0 00-10 10 10 10 0 0010 10z"/>
                  <path d="M10 10.007a4 4 0 110-8 4 4 0 010 8z"/>
                </svg>
              </button>
              <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.55v-5.857c0-1.39-.501-2.352-1.677-2.352-1.177 0-1.677.962-1.677 2.352v5.857h-3.55v-12h3.55v1.714c.626-.964 1.677-1.714 3.155-1.714 1.478 0 2.529.75 3.155 1.714v-1.714h3.55v12zm-14.084 0h-3.55v-12h3.55v12z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Community column */}
          <div>
            <h3 className="text-sm font-semibold mb-6">COMMUNITY</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-gray-600 transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm hover:text-gray-600 transition-colors">Community</a></li>
              <li><a href="#" className="text-sm hover:text-gray-600 transition-colors">Ideas</a></li>
              <li><a href="#" className="text-sm hover:text-gray-600 transition-colors">Developers</a></li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-sm font-semibold mb-6">COMPANY</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-gray-600 transition-colors">About us</a></li>
              <li><a href="#" className="text-sm hover:text-gray-600 transition-colors">Team</a></li>
              <li><a href="#" className="text-sm hover:text-gray-600 transition-colors">Where to Buy</a></li>
              <li><a href="#" className="text-sm hover:text-gray-600 transition-colors">Resellers</a></li>
              <li><a href="#" className="text-sm hover:text-gray-600 transition-colors">Influencers</a></li>
              <li><a href="#" className="text-sm hover:text-gray-600 transition-colors">Affiliates</a></li>
              <li><a href="#" className="text-sm hover:text-gray-600 transition-colors">Media</a></li>
              <li><a href="#" className="text-sm hover:text-gray-600 transition-colors">Contacts & Imprint</a></li>
            </ul>
          </div>

          {/* Useful Links column */}
          <div>
            <h3 className="text-sm font-semibold mb-6">USEFUL LINKS</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-gray-600 transition-colors">Warranty</a></li>
              <li><a href="#" className="text-sm hover:text-gray-600 transition-colors">Product Declarations</a></li>
              <li><a href="#" className="text-sm hover:text-gray-600 transition-colors">Terms of Use</a></li>
              <li><a href="#" className="text-sm hover:text-gray-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:text-gray-600 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-sm hover:text-gray-600 transition-colors">Cookie Settings</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom copyright section */}
      <div className="border-t border-gray-200 py-6">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
          <p className="text-xs text-center text-gray-500">
            © {new Date().getFullYear()} LaMetric. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
