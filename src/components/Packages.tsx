import React from 'react';
import { FadeIn } from './FadeIn';

const packages = [
  {
    name: "Basic Package",
    price: "₹12,583",
    period: "+ GST / Month",
    features: [
      "NIFTY, BankNifty, Sensex, FinNifty, Midcap Nifty, Option Trades",
      "Get 1-3 Tips Per Day",
      "BTST/STBT Trades",
      "Expiry Special Trades",
      "Stock Option Trades",
      "Proper Entry, Stop Loss",
      "Two Targets (1st & 2nd)",
      "Profit 5k-15k (Per Positive Tip)"
    ],
    isPopular: false,
    buttonText: "Choose Basic",
    color: "border-blue-200",
    headerColor: "bg-light-brand"
  },
  {
    name: "HNI Package",
    price: "₹32,500",
    period: "+ GST / 3 Months",
    features: [
      "NIFTY, BankNifty, Sensex, FinNifty, Midcap Nifty, Option Trades",
      "Get 2-4 Tips Per Day",
      "Expiry Special Strategy",
      "BTST/STBT Trades",
      "Short Term Stock Option Positional",
      "Proper Hedging (Capital > 5 Lakh)",
      "Profit 10k-30k (Per Positive Tip)",
      "Executive Support via WhatsApp & Calls",
      "Live Market News Coverage"
    ],
    isPopular: true,
    buttonText: "Choose HNI",
    color: "border-blue-brand",
    headerColor: "bg-blue-brand text-white"
  },
  {
    name: "Pay Per Trade",
    price: "₹1,51,000",
    period: "+ GST / 1 Year",
    features: [
      "NIFTY, BankNifty, Sensex, FinNifty, Midcap Nifty, Option Trades",
      "Get 1-3 Tips Per Day",
      "BTST/STBT Trades",
      "Expiry Special Trades",
      "Stock Option Trades",
      "Proper Entry, Stop Loss",
      "Three Targets (1st, 2nd & 3rd)",
      "Profit 5k-15k (Per Positive Tip)",
      "Live Market News Coverage"
    ],
    isPopular: false,
    buttonText: "Choose Yearly",
    color: "border-purple-200",
    headerColor: "bg-purple-50"
  }
];

export const Packages = () => {
  return (
    <section id="packages" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <FadeIn>
            <h2 className="text-base font-semibold uppercase tracking-wide text-blue-brand">
              Pricing Plans
            </h2>
            <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-white sm:text-4xl">
              Affordable Packages for Every Trader
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
              Choose the plan that best fits your trading style and capital. Transparency is our priority.
            </p>
          </FadeIn>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3 lg:gap-8">
          {packages.map((pkg, index) => (
            <FadeIn key={pkg.name} delay={index * 150} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-2xl border-2 glass-card shadow-lg transition-all hover:shadow-2xl hover:shadow-blue-500/30 ${pkg.color} ${
                  pkg.isPopular ? 'scale-105 ring-2 ring-gold' : ''
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-blue-brand to-cyan-500 py-1 text-center text-sm font-medium text-white shadow-md">
                    Most Popular
                  </div>
                )}

                <div className={`rounded-t-xl p-8 ${pkg.headerColor}`}>
                  <h3 className="text-xl font-semibold text-white">
                    {pkg.name}
                  </h3>
                  <p className="mt-4 flex items-baseline text-white">
                    <span className="text-4xl font-extrabold tracking-tight">{pkg.price}</span>
                    <span className={`ml-1 text-xl font-medium ${pkg.isPopular ? 'text-blue-100' : 'text-gray-300'}`}>
                      {pkg.period}
                    </span>
                  </p>
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <ul className="flex-1 space-y-4">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-base text-gray-300">
                          {feature}
                        </p>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <a
                      href={`https://wa.me/918000489090?text=I'm interested in the ${pkg.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full rounded-lg border border-transparent px-6 py-4 text-center text-lg font-medium leading-6 shadow-lg transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        pkg.isPopular
                          ? 'bg-blue-brand text-white hover:shadow-blue-500/50 focus:ring-blue-500'
                          : 'bg-blue-500 text-white hover:bg-blue-brand hover:shadow-blue-500/50 focus:ring-blue-500'
                      }`}
                    >
                      {pkg.buttonText}
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
