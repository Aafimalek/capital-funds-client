import React from 'react';
import { FadeIn } from './FadeIn';
import { PillBadge } from './PillBadge';

const services = [
  {
    title: 'Options Trading',
    description: 'Specialized Call & Put strategies for volatile markets with high precision entry/exit points.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    features: ['High Accuracy Strategies', 'Real-time Alerts', 'Risk Management'],
    gradient: 'bg-gradient-to-r from-blue-500 to-cyan-400',
    delay: 0,
  },
  {
    title: 'Indices Coverage',
    description: 'Deep-dive analysis of Nifty, BankNifty, and FinNifty trends with comprehensive market insights.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    features: ['Nifty & BankNifty', 'FinNifty Coverage', 'Trend Analysis'],
    gradient: 'bg-gradient-to-r from-green-500 to-emerald-400',
    delay: 100,
  },
  {
    title: 'Equity & Cash',
    description: 'Intraday picks for high-volume stocks with momentum analysis and technical precision.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    features: ['Intraday Picks', 'Volume Analysis', 'Technical Signals'],
    gradient: 'bg-gradient-to-r from-purple-500 to-violet-400',
    delay: 200,
  },
  {
    title: 'Futures Strategies',
    description: 'Advanced hedging and directional strategies for futures trading with calculated risk-reward ratios.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    features: ['Hedging Strategies', 'Risk-Reward Analysis', 'Position Sizing'],
    gradient: 'bg-gradient-to-r from-red-500 to-orange-400',
    delay: 300,
  },
];

export const Services = () => {
  return (
    <section id="services" className="relative py-16 md:py-24 overflow-hidden bg-gradient-3">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
          <PillBadge text="Our Services" />

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl mt-6">
            Trading Solutions{' '}
            <span className="text-gradient block mt-2">Designed for Impact</span>
          </h2>

          <p className="mt-6 text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            From high-frequency options strategies to long-term wealth creation, we provide the intelligence you need to stay ahead.
          </p>
        </FadeIn>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={service.delay}>
              <div className="group relative h-full overflow-hidden rounded-2xl">
                {/* Gradient Border Effect */}
                <div className={`absolute -inset-0.5 ${service.gradient} rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500 group-active:opacity-75`} />

                {/* Card Content */}
                <div className="relative h-full glass-card rounded-2xl p-6 md:p-8 transition-all duration-300 group-hover:scale-[1.02] flex flex-col">
                  {/* Icon Container */}
                  <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="flex items-center justify-center w-full h-full bg-[#030712] rounded-2xl text-white">
                      {service.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed grow">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2.5 pt-4 border-t border-white/10">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm group/item">
                        <div className={`flex items-center justify-center w-5 h-5 rounded-full ${service.gradient} shrink-0 group-hover/item:scale-110 transition-transform duration-200`}>
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-300 group-hover/item:text-white transition-colors duration-200">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Indicator */}
                  
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <FadeIn delay={400} className="mt-12 md:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <a
              href="#packages"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/50 hover:scale-105"
            >
              <span className="relative z-10">View All Packages</span>
              <svg className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div className="absolute inset-0 z-0 bg-gradient-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm font-medium group"
            >
              <span>Have questions?</span>
              <span className="group-hover:underline">Contact us</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
