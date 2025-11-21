import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { FadeIn } from './FadeIn';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#020611] text-gray-300 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[1000px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 py-12 md:py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand & Address */}
          <div className="space-y-6">
            <FadeIn>
              <div className="relative h-30 w-56 transition-opacity hover:opacity-80">
                <Image
                  src="/logo2.png"
                  alt="Capital Funds logo"
                  fill
                  className="object-contain object-left"
                  sizes="256px"
                  priority={false}
                />
              </div>
              <div className="space-y-4 text-sm mt-6">
                <div className="flex items-center gap-3 group">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/5 group-hover:border-blue-500/30 transition-colors">
                    <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <p className="text-gray-400 leading-relaxed">Mumbai, Maharashtra, India</p>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/5 group-hover:border-blue-500/30 transition-colors">
                    <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <a href="mailto:capitalfund202@gmail.com" className="transition-colors hover:text-blue-400">
                    capitalfund202@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/5 group-hover:border-blue-500/30 transition-colors">
                    <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <a href="tel:+919510997124" className="transition-colors hover:text-blue-400">
                    +91 9510997124
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Quick Links */}
          <FadeIn delay={100}>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {['Home', 'About', 'Services', 'Packages', 'Contact', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="group flex items-center text-gray-400 transition-colors hover:text-blue-400"
                  >
                    <span className="h-px w-0 bg-blue-500 transition-all group-hover:w-4 mr-0 group-hover:mr-2"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Services */}
          <FadeIn delay={200}>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">
              Our Services
            </h3>
            <ul className="space-y-3 text-sm">
              {['Options Trading', 'Indices Coverage', 'Equity Cash', 'Futures Strategies'].map((item) => (
                <li key={item}>
                  <Link href="#services" className="group flex items-center text-gray-400 transition-colors hover:text-blue-400">
                    <span className="h-px w-0 bg-blue-500 transition-all group-hover:w-4 mr-0 group-hover:mr-2"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Compliance & Social */}
          <FadeIn delay={300}>

            <div className="space-y-6 text-sm">

              <div>
                <p className="text-gray-400 text-xs mb-3 uppercase tracking-wider font-semibold">Connect with us</p>
                <div className="flex gap-4">
                  <a href="https://instagram.com/capitalfundanalysis" className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/5 transition-all hover:bg-[#E4405F] hover:border-[#E4405F] hover:text-white hover:-translate-y-1">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Warning & Copyright */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="rounded-2xl bg-red-500/5 border border-red-500/10 p-4 mb-8 text-center">
            <p className="text-sm text-red-300/90">
              <span className="font-bold uppercase text-red-400 block mb-1 text-xs tracking-wider">Standard Warning</span>
              Investment in securities market are subject to market risks. Read all the related documents carefully before investing.
            </p>
          </div>
          <p className="text-center text-xs text-gray-500">
            &copy; {currentYear} Capital Funds. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
