import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBookNow = () => {
    const roomsSection = document.getElementById('rooms');
    if (roomsSection) {
      roomsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full shadow-lg bg-white/90 backdrop-blur-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <span className="text-lg font-light text-gray-600">Hotel</span>
              <span className="ml-6 font-serif text-2xl font-bold tracking-wide text-blue-600">DEWORA</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-baseline ml-10 space-x-8">
              <a
                href="#"
                className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-blue-600"
              >
                Home
              </a>
              <a
                href="#gallery"
                className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-blue-600"
              >
                Gallery
              </a>
              <a
                href="#rooms"
                className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-blue-600"
              >
                Rooms
              </a>
              <a
                href="#about"
                className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-blue-600"
              >
                About Us
              </a>
              <a
                href="#contact"
                className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-blue-600"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Book Now Button */}
          <div className="hidden md:block">
            <button 
              onClick={handleBookNow}
              className="px-6 py-2 font-semibold text-gray-800 transition-colors duration-300 rounded-lg shadow-md bg-cyan-400 hover:bg-cyan-500 hover:shadow-lg"
            >
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 text-gray-700 rounded-md hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 shadow-lg sm:px-3 bg-white/95 backdrop-blur-md">
            <a
              href="#home"
              className="block px-3 py-2 text-base font-medium text-gray-700 transition-colors duration-300 hover:text-blue-600"
            >
              Home
            </a>
            <a
              href="#gallery"
              className="block px-3 py-2 text-base font-medium text-gray-700 transition-colors duration-300 hover:text-blue-600"
            >
              Gallery
            </a>
            <a
              href="#rooms"
              className="block px-3 py-2 text-base font-medium text-gray-700 transition-colors duration-300 hover:text-blue-600"
            >
              Rooms
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-base font-medium text-gray-700 transition-colors duration-300 hover:text-blue-600"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-base font-medium text-gray-700 transition-colors duration-300 hover:text-blue-600"
            >
              Contact
            </a>
            <div className="px-3 py-2">
              <button 
                onClick={handleBookNow}
                className="w-full px-6 py-2 font-semibold text-gray-800 transition-colors duration-300 rounded-lg shadow-md bg-cyan-400 hover:bg-cyan-500 hover:shadow-lg"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;