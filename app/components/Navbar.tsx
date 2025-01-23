'use client';
import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change when scrolled 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`px-12 py-5 flex justify-between items-center fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white bg-opacity-[70%] text-black shadow-md' : 'bg-transparent text-white'
      }`}
    >
      <div className="text-xl font-bold">ellion</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-between items-center gap-8 text-md">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>WORK</li>
        <li>CONTACT</li>
      </ul>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex justify-center items-center transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMenuOpen(false)} // Close menu when clicked outside
      >
        <ul className="text-white text-2xl flex flex-col gap-8">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>WORK</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
