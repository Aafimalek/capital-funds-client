import React from 'react';
import { FadeIn } from './FadeIn';
import { PillBadge } from './PillBadge';
import { TrendingUp, BarChart2, Coins, Layers, Check, ArrowRight, ChevronRight } from 'lucide-react';

const services = [
  {
    title: 'Options Trading',
    description: 'Specialized Call & Put strategies for volatile markets with high precision entry/exit points.',
    icon: <TrendingUp className="w-8 h-8" strokeWidth={2} />,
    features: ['High Accuracy Strategies', 'Real-time Alerts', 'Risk Management'],
    gradient: 'bg-gradient-to-r from-blue-500 to-cyan-400',
    delay: 0,
  },
  {
    title: 'Indices Coverage',
    description: 'Deep-dive analysis of Nifty, BankNifty, and FinNifty trends with comprehensive market insights.',
    icon: <BarChart2 className="w-8 h-8" strokeWidth={2} />,
    features: ['Nifty & BankNifty', 'FinNifty Coverage', 'Trend Analysis'],
    gradient: 'bg-gradient-to-r from-green-500 to-emerald-400',
    delay: 100,
  },
  {
    title: 'Equity & Cash',
    description: 'Intraday picks for high-volume stocks with momentum analysis and technical precision.',
    icon: <Coins className="w-8 h-8" strokeWidth={2} />,
    features: ['Intraday Picks', 'Volume Analysis', 'Technical Signals'],
    gradient: 'bg-gradient-to-r from-purple-500 to-violet-400',
    delay: 200,
  },
  {
    title: 'Futures Strategies',
    description: 'Advanced hedging and directional strategies for futures trading with calculated risk-reward ratios.',
    icon: <Layers className="w-8 h-8" strokeWidth={2} />,
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
              <div tabIndex={0} className="group relative h-full overflow-hidden rounded-2xl">
                {/* Gradient Border Effect */}
                <div className={`absolute -inset-0.5 ${service.gradient} rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500 group-active:opacity-75 group-focus:opacity-75`} />

                {/* Card Content */}
                <div className="relative h-full glass-card rounded-2xl p-6 md:p-8 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.2)] flex flex-col">
                  {/* Icon Container */}
                  <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.gradient} p-0.5 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                    <div className="flex items-center justify-center w-full h-full bg-[#030712]/90 backdrop-blur-xl rounded-2xl text-white">
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
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
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
              <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={2} />
              <div className="absolute inset-0 z-0 bg-gradient-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm font-medium group"
            >
              <span>Have questions?</span>
              <span className="group-hover:underline">Contact us</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
