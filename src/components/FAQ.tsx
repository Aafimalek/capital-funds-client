'use client';

import React, { useState } from 'react';

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
    <section id="faq" className="bg-gray-50 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-blue-brand">
            Common Questions
          </h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Everything you need to know about our services and how we help you trade better.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-gray-200 border-t border-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => toggleAccordion(index)}
                className="flex w-full items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <span className="ml-6 flex items-center">
                  {openIndex === index ? (
                    <svg className="h-6 w-6 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </button>
              <div
                className={`mt-4 overflow-hidden text-base text-gray-500 transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
