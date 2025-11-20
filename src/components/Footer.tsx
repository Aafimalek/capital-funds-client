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
                <div className="flex items-start gap-3 group">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/5 group-hover:border-blue-500/30 transition-colors">
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
                  <a href="mailto:info@capitalfunds.com" className="transition-colors hover:text-blue-400">
                    info@capitalfunds.com
                  </a>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/5 group-hover:border-blue-500/30 transition-colors">
                    <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <a href="tel:+918000489090" className="transition-colors hover:text-blue-400">
                    +91 8000489090
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Quick Links */}
          <FadeIn delay={100}>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-white">
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
            <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-white">
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
                <p className="text-gray-400 text-xs mb-3">Connect with us</p>
                <div className="flex gap-4">
                  <a href="#" className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/5 transition-all hover:bg-blue-600 hover:border-blue-500 hover:text-white">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a href="#" className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/5 transition-all hover:bg-pink-600 hover:border-pink-500 hover:text-white">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                  <a href="#" className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/5 transition-all hover:bg-sky-500 hover:border-sky-400 hover:text-white">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
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
