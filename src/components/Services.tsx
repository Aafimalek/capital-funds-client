import React from 'react';
import { FadeIn } from './FadeIn';

const services = [
  {
    title: "Options Trading",
    description: "Specialized strategies for Call & Put options to maximize returns in volatile markets. We provide precise entry and exit points.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
      </svg>
    ),
    features: ["Call/Put Strategies", "Risk Management", "Weekly Expiry Specials"],
    color: "bg-blue-brand",
  },
  {
    title: "Indices Coverage",
    description: "Comprehensive tracking and analysis of major Indian market indices. Stay ahead of the market trends with our expert insights.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    features: ["Nifty", "BankNifty", "FinNifty", "Sensex"],
    color: "bg-navy",
  },
  {
    title: "Equity & Cash",
    description: "Intraday recommendations for high-volume stocks. Perfect for traders looking for quick daily gains in the cash market.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    features: ["Intraday Picks", "High Volume Stocks", "Momentum Trading"],
    color: "bg-gold",
  },
  {
    title: "Futures Strategies",
    description: "Advanced derivative strategies for experienced traders. Leverage market movements with our calculated futures recommendations.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    features: ["Stock Futures", "Index Futures", "Hedging Strategies"],
    color: "bg-purple-600",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <FadeIn>
            <h2 className="text-base font-semibold uppercase tracking-wide text-blue-brand">
              Our Expertise
            </h2>
            <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-white sm:text-4xl">
              Services Tailored for Every Trader
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
              From beginner-friendly options to advanced futures strategies, we cover the entire spectrum of the Indian Stock Market.
            </p>
          </FadeIn>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 100} className="h-full">
              <div
                className="group flex h-full flex-col overflow-hidden rounded-2xl glass-card shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className={`${service.color} flex h-24 items-center justify-center transition-colors group-hover:opacity-90`}>
                  {service.icon}
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="mb-6 text-gray-400">
                      {service.description}
                    </p>
                    <ul className="mb-6 space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-300">
                          <svg className="mr-2 h-4 w-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href="https://wa.me/918000489090"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-lg border border-transparent bg-blue-brand px-4 py-2 text-sm font-medium text-white shadow-sm shadow-blue-500/30 transition-all hover:scale-105 hover:shadow-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
