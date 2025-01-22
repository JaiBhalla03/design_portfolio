'use client'
import React, { useEffect, useState } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
      <ul className="flex justify-between items-center gap-8 text-md">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>WORK</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
}

export default Navbar;
