import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export const Header = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Packages', href: '#packages' },
    { name: 'Contact US', href: '#contact' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 glass transition-all">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Link href="#home" className="flex items-center space-x-2">
            <div className="relative h-30 w-64 transition-transform duration-300 hover:scale-105">
              <Image
                src="/logo2.png"
                alt="Capital Funds logo"
                width={256}
                height={64}
                className="h-full w-full object-contain object-left"
                sizes="(max-width: 768px) 200px, 256px"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden md:flex items-center gap-8">
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

        {/* Right: CTA & Contact */}
        <div className="flex items-center gap-4">
            <a
              href="https://wa.me/918000489090"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-blue-brand px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:scale-105 hover:shadow-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Request Demo Call
            </a>
        </div>
      </div>
    </header>
  );
};
