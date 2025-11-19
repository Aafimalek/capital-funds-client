import React from 'react';
import { FadeIn } from './FadeIn';

const services = [
  {
    title: "Options Trading",
    description: "Specialized Call & Put strategies for volatile markets. High precision entry/exit.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white">
        <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z" clipRule="evenodd" />
      </svg>
    ),
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Indices Coverage",
    description: "Deep dive analysis of Nifty, BankNifty, and FinNifty trends.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white">
        <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.035-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c-1.035 0-1.875.84-1.875 1.875v9.375c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V10.5c0-1.035-.84-1.875-1.875-1.875h-.75ZM3 13.125c-1.035 0-1.875.84-1.875 1.875v4.875c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875v-4.875c0-1.035-.84-1.875-1.875-1.875h-.75Z" />
      </svg>
    ),
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Equity & Cash",
    description: "Intraday picks for high-volume stocks with momentum analysis.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white">
        <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v.756a49.106 49.106 0 0 1 9.152 1 .75.75 0 0 1-.152 1.485h-1.918c2.479 1.402 4.168 4.042 4.168 7.109v6h1.125a.75.75 0 0 1 0 1.5h-21a.75.75 0 0 1 0-1.5h1.125v-6c0-3.067 1.689-5.707 4.168-7.109H4.25a.75.75 0 0 1-.152-1.485 49.105 49.105 0 0 1 9.152-1V3a.75.75 0 0 1 .75-.75Zm4.878 13.5H7.122v-6c0-2.048 1.171-3.847 2.932-4.714.733.361 1.486.66 2.253.896 1.035-.322 2.07-.73 3.086-1.219 1.297.77 2.107 2.16 2.485 3.712V15.75Z" clipRule="evenodd" />
      </svg>
    ),
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Futures Strategies",
    description: "Advanced hedging and derivative strategies for HNIs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white">
        <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
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
