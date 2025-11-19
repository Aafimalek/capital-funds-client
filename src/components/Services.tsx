import React from 'react';
import { FadeIn } from './FadeIn';

const services = [
  {
    title: "Options Trading",
    description: "Specialized Call & Put strategies for volatile markets. High precision entry/exit.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-white">
        <path d="M3 3v18h18"/>
        <path d="m19 9-5 5-4-4-3 3"/>
      </svg>
    ),
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Indices Coverage",
    description: "Deep dive analysis of Nifty, BankNifty, and FinNifty trends.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-white">
        <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Equity & Cash",
    description: "Intraday picks for high-volume stocks with momentum analysis.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-white">
        <path d="M12 2v20"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Futures Strategies",
    description: "Advanced hedging and derivative strategies for HNIs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-white">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    color: "from-purple-500 to-pink-500",
  },
];

export const Services = () => {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="absolute right-0 bottom-1/4 h-[500px] w-[500px] rounded-full bg-cyan-600/10 blur-[120px]" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <FadeIn>
            <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-300 backdrop-blur-sm">
              Our Services
            </span>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Trading Solutions <br />
              <span className="text-gradient">Designed for Impact</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
              From high-frequency options strategies to long-term wealth creation, we provide the intelligence you need to stay ahead.
            </p>
          </FadeIn>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-rows-2 h-auto lg:h-[600px]">
          {/* Bento Grid Item 1: Options (Large) */}
          <div className="md:col-span-2 md:row-span-2">
            <FadeIn className="h-full">
              <div className="glass-card group relative h-full overflow-hidden rounded-[2.5rem] p-8 md:p-12 transition-all hover:border-blue-500/30">
                <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/25">
                      {services[0].icon}
                    </div>
                    <h3 className="mb-4 text-3xl font-bold text-white">{services[0].title}</h3>
                    <p className="text-lg text-gray-400 max-w-md leading-relaxed">{services[0].description}</p>
                  </div>
                  <div className="mt-8">
                    <div className="flex items-center gap-2 text-sm font-medium text-blue-300">
                      <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                      High Accuracy Strategies
                    </div>
                  </div>
                </div>
                {/* Decorative Chart Line */}
                <div className="absolute bottom-0 right-0 w-2/3 opacity-20">
                  <svg viewBox="0 0 200 100" fill="none" className="w-full text-blue-500">
                    <path d="M0 80 C 40 80, 60 20, 100 20 C 140 20, 160 90, 200 50" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path d="M0 80 C 40 80, 60 20, 100 20 C 140 20, 160 90, 200 50 V 100 H 0 Z" fill="currentColor" fillOpacity="0.2" />
                  </svg>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Bento Grid Item 2: Indices */}
          <div className="md:col-span-1 md:row-span-1">
            <FadeIn delay={100} className="h-full">
              <div className="glass-card group relative h-full overflow-hidden rounded-[2.5rem] p-8 transition-all hover:border-cyan-500/30">
                <div className="relative z-10">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/25">
                    {services[1].icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">{services[1].title}</h3>
                  <p className="text-sm text-gray-400">{services[1].description}</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Bento Grid Item 3: Equity */}
          <div className="md:col-span-1 md:row-span-1">
            <FadeIn delay={200} className="h-full">
              <div className="glass-card group relative h-full overflow-hidden rounded-[2.5rem] p-8 transition-all hover:border-orange-500/30">
                <div className="relative z-10">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-orange-500 to-red-500 shadow-lg shadow-orange-500/25">
                    {services[2].icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">{services[2].title}</h3>
                  <p className="text-sm text-gray-400">{services[2].description}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Futures Card (Full Width on Mobile, Span on Desktop) */}
        <div className="mt-6 grid md:grid-cols-3">
           <div className="md:col-span-3">
             <FadeIn delay={300}>
               <div className="glass-card group relative overflow-hidden rounded-[2.5rem] p-8 md:px-12 md:py-10 transition-all hover:border-purple-500/30 flex flex-col md:flex-row items-center gap-8">
                 <div className="shrink-0 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/25">
                   {services[3].icon}
                 </div>
                 <div className="flex-1 text-center md:text-left">
                   <h3 className="mb-2 text-2xl font-bold text-white">{services[3].title}</h3>
                   <p className="text-gray-400">{services[3].description}</p>
                 </div>
                 <a href="https://wa.me/918000489090" className="group/btn relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white/10 px-8 py-3 font-medium text-white transition-all hover:bg-white/20">
                    <span>Get Started</span>
                    <svg className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                 </a>
               </div>
             </FadeIn>
           </div>
        </div>
      </div>
    </section>
  );
};
