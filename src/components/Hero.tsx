import React from 'react';
import { PillBadge } from './PillBadge';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-1">
      {/* Background Video with Modern Overlay */}
      <div className="absolute inset-0 h-full w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-60"
        >
          <source src="/stockv.mp4" type="video/mp4" />
          <img
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=2000&q=80"
            alt="Stock market background"
            className="h-full w-full object-cover"
          />
        </video>

        {/* Gradient Mesh Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-[#030712] via-[#030712]/80 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <div className="max-w-5xl space-y-8">

          {/* Pill Badge */}
          <PillBadge text="SEBI Registered Analyst" className="animate-fade-in-up" />

          {/* Main Headline */}
          <h1 className="animate-fade-in-up text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl [text-shadow:0_4px_20px_rgba(0,0,0,0.5)]">
            Master the Market with <br />
            <span className="text-gradient">Intelligent Insights</span>
          </h1>

          {/* Sub-headline */}
          <p className="mx-auto max-w-2xl text-lg text-gray-300 sm:text-2xl opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards]">
            Precision-engineered option strategies and real-time advisory for the modern trader.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col w-full sm:w-auto items-center justify-center gap-4 opacity-0 animate-[fadeInUp_1s_ease-out_0.8s_forwards] sm:flex-row sm:gap-6">
            <a
              href="https://wa.me/918000489090"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-blue-600 px-8 font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)]"
            >
              <span className="mr-2">Request Live Demo</span>
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>

            <Link
              href="#packages"
              className="group relative w-full sm:w-auto inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-blue-600 px-8 font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)]"
            >
              <span className="mr-2">View Packages</span>
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};