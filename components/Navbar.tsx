'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT US' },
    { href: '/services', label: 'SERVICES' },
    { href: '/venue', label: 'VENUE' },
    { href: '/packages', label: 'PACKAGES' },
    { href: '/gallery', label: 'GALLERY' },
    { href: '/contact', label: 'CONTACT US' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="Bellagio Logo"
            width={200}
            height={80}
            className="h-16 md:h-20 w-auto"
            priority
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-yellow-500 hover:text-yellow-400 transition-all duration-300 font-semibold text-sm relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
          <Link
            href="/book"
            className="bg-yellow-500 text-black px-6 py-2 rounded-md hover:bg-yellow-400 transition-all duration-300 font-semibold text-sm transform hover:scale-105"
          >
            BOOK NOW
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-yellow-500 text-3xl font-bold focus:outline-none transition-transform duration-300"
          aria-label="Toggle menu"
          style={{
            transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
          }}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{
          visibility: isOpen ? 'visible' : 'hidden',
        }}
      >
        <div className="bg-black/95 backdrop-blur-sm border-t border-yellow-500/30 px-4 py-4 space-y-2 animate-slideDown">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-yellow-500 hover:text-yellow-400 hover:bg-yellow-500/10 px-4 py-3 rounded-md transition-all duration-300 font-semibold text-sm transform hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="block bg-yellow-500 text-black px-4 py-3 rounded-md hover:bg-yellow-400 transition-all duration-300 font-semibold text-sm text-center transform hover:scale-105 mt-4"
            onClick={() => setIsOpen(false)}
          >
            BOOK NOW
          </Link>
        </div>
      </div>
    </nav>
  );
}
