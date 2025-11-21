'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Packages', href: '#packages' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 z-[60] w-full border-b border-white/10 glass transition-all bg-[#030712]/80 backdrop-blur-md">
      <div className="container relative mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Link href="#home" className="flex items-center space-x-2" onClick={handleLinkClick}>
            <div className="relative h-25 w-40 sm:w-56 transition-transform duration-300 hover:scale-105">
              <Image
                src="/logo2.png"
                alt="Capital Funds logo"
                fill
                className="object-contain object-left"
                sizes="(max-width: 768px) 200px, 256px"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Center: Navigation (Desktop) */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-blue-brand"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: CTA & Contact (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/919510997124"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-blue-brand px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:scale-105 hover:shadow-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Request Demo Call
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 w-full border-b border-white/10 bg-[#030712]/95 backdrop-blur-xl transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-[500px] opacity-100 shadow-2xl' : 'max-h-0 opacity-0'
          }`}
      >
        <nav className="flex flex-col p-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-lg font-medium text-gray-300 transition-colors hover:text-blue-brand px-4 py-3 rounded-lg hover:bg-white/5 active:bg-white/10"
              onClick={handleLinkClick}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 mt-2 border-t border-white/10">
            <a
              href="https://wa.me/919510997124"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center rounded-full bg-blue-brand px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition-all active:scale-95 hover:bg-blue-600"
              onClick={handleLinkClick}
            >
              Request Demo Call
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
