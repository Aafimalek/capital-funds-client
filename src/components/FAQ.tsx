'use client';

import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { PillBadge } from './PillBadge';

const faqs = [
  {
    question: "Why is Capital Funds Trusted?",
    answer: "Capital Funds is a SEBI Registered Research Analyst firm, ensuring that all our advice complies with strict regulatory standards. We prioritize transparency, risk management, and ethical practices to build long-lasting relationships with our traders."
  },
  {
    question: "What Markets Does Capital Funds Cover?",
    answer: "We provide comprehensive coverage of the Indian stock market, including Nifty, BankNifty, FinNifty, Sensex, and individual high-volume stocks. Our strategies cover Equity Cash, Intraday, Options (Call/Put), and Futures derivatives."
  },
  {
    question: "How Does Capital Funds Ensure Quality?",
    answer: "Our team of experienced analysts uses a combination of technical and fundamental analysis to identify high-probability trades. We don't believe in 'sure shots' but in calculated risks. Every recommendation comes with a predefined Target and Stop Loss to manage your capital effectively."
  },
  {
    question: "What Makes Your Analysts Unique?",
    answer: "Our analysts bring years of real-world trading experience to the table. Unlike automated bots, we understand market sentiment and psychology. We provide 24/7 support and hand-holding, helping you not just trade, but learn and grow as a disciplined investor."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-16 md:py-24 bg-gradient-5">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
          <FadeIn>
            <PillBadge text="Common Questions" />
            <p className="mt-6 text-3xl font-bold text-white sm:text-4xl">
              Frequently Asked <span className="text-gradient">Questions</span>
            </p>
            <p className="mt-4 text-base md:text-lg text-gray-400">
              Everything you need to know about our services and how we help you trade better.
            </p>
          </FadeIn>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div 
                className={`glass-card overflow-hidden rounded-2xl border transition-all duration-300 ${
                  openIndex === index ? 'border-blue-500/50 bg-blue-900/10' : 'border-white/5 hover:border-white/10'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none"
                >
                  <span className={`text-lg font-medium transition-colors ${
                    openIndex === index ? 'text-blue-300' : 'text-gray-200'
                  }`}>
                    {faq.question}
                  </span>
                  <span className="ml-6 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10">
                    <svg 
                      className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180 text-blue-400' : ''
                      }`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-base text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
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
