import React from 'react';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 h-full w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source
            src="/stockv.mp4"
            type="video/mp4"
          />
          {/* Fallback image if video doesn't load */}
          <img
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=2000&q=80"
            alt="Stock market background"
            className="h-full w-full object-cover"
          />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-blue-brand/85 to-navy/90" />
        {/* Glow effects */}
        <div className="absolute -top-24 -right-16 h-96 w-96 rounded-full bg-gold/10 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-brand/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_transparent_45%)]" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-8">
          {/* Main Headline */}
          <h1 className="animate-fade-in-up text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Intelligent Stock Advisory for{' '}
            <span className="bg-gradient-to-r from-blue-400 to-gold bg-clip-text text-transparent">
              Option Traders
            </span>
            .
          </h1>

          {/* Sub-headline */}
          <p className="mx-auto max-w-2xl text-xl text-gray-300 sm:text-2xl opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards]">
            SEBI Research Analyst Approved. Get real-time, actionable insights for
            Nifty, BankNifty, and more.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 opacity-0 animate-[fadeInUp_1s_ease-out_1s_forwards] sm:flex-row sm:gap-6">
            <a
              href="https://wa.me/918000489090"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-blue-brand px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-navy focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              <span className="mr-2">Request Live Demo</span>
              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
              <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>

            <Link
              href="#packages"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              View Packages
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="#about" aria-label="Scroll down">
          <svg
            className="h-10 w-10 text-white/50 transition-colors hover:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};
