import { useState } from 'react';
import { FiHome, FiUser, FiLogIn, FiUserPlus, FiSearch, FiCompass } from 'react-icons/fi';

const FuturisticNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white shadow-lg shadow-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              FUTUREX
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a
                href="#"
                className="hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300 hover:bg-purple-900/30"
              >
                <FiHome className="mr-2" /> Home
              </a>
              <a
                href="#"
                className="hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300 hover:bg-purple-900/30"
              >
                <FiCompass className="mr-2" /> About
              </a>
              <a
                href="#"
                className="hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300 hover:bg-purple-900/30"
              >
                <FiUser className="mr-2" /> Posts
              </a>

              {/* Search Box */}
              <form onSubmit={handleSearch} className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-800/50 border border-gray-700 text-white rounded-full py-1 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-40 sm:w-64 transition-all duration-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>
            </div>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-transparent border border-purple-500 text-purple-300 hover:bg-purple-900/30 hover:text-white transition-all duration-300 flex items-center">
                <FiLogIn className="mr-2" /> Login
              </button>
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/30 flex items-center">
                <FiUserPlus className="mr-2" /> Sign Up
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-900/95 backdrop-blur-sm`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="hover:bg-purple-900/30 text-white block px-3 py-2 rounded-md text-base font-medium flex items-center"
          >
            <FiHome className="mr-2" /> Home
          </a>
          <a
            href="#"
            className="hover:bg-purple-900/30 text-white block px-3 py-2 rounded-md text-base font-medium flex items-center"
          >
            <FiCompass className="mr-2" /> About
          </a>
          <a
            href="#"
            className="hover:bg-purple-900/30 text-white block px-3 py-2 rounded-md text-base font-medium flex items-center"
          >
            <FiUser className="mr-2" /> Posts
          </a>
          <form onSubmit={handleSearch} className="px-2 py-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-800/50 border border-gray-700 text-white rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>
          <div className="pt-2 pb-3 border-t border-gray-700 space-y-2">
            <button className="w-full px-4 py-2 rounded-full text-base font-medium bg-transparent border border-purple-500 text-purple-300 hover:bg-purple-900/30 hover:text-white transition-all duration-300 flex items-center justify-center">
              <FiLogIn className="mr-2" /> Login
            </button>
            <button className="w-full px-4 py-2 rounded-full text-base font-medium bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/30 flex items-center justify-center">
              <FiUserPlus className="mr-2" /> Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default FuturisticNavbar;