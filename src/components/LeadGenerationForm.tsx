'use client';

import React, { useState } from 'react';
import { FadeIn } from './FadeIn';

export const LeadGenerationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    isTrading: 'no',
    investmentAmount: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggle = (value: string) => {
    setFormData((prev) => ({ ...prev, isTrading: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `New Demo Request:%0A
Name: ${formData.firstName} ${formData.lastName}%0A
Phone: ${formData.phone}%0A
Email: ${formData.email}%0A
Currently Trading: ${formData.isTrading === 'yes' ? 'Yes' : 'No'}%0A
Investment Amount: ${formData.investmentAmount}`;
    window.open(`https://wa.me/918000489090?text=${message}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden py-24">
      {/* Decorative Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[120px] animate-pulse-glow" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text Content */}
          <FadeIn>
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Ready to Elevate <br />
                <span className="text-gradient">Your Portfolio?</span>
              </h2>
              <p className="mt-6 text-lg text-gray-400">
                Join 5,000+ traders who have transformed their strategy with our insights. Get a free personalized demo call today.
              </p>
              
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-10 w-10 rounded-full border-2 border-black bg-gray-800" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-300">Join 5k+ Traders</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Glass Form */}
          <FadeIn delay={200}>
            <div className="glass-card relative rounded-3xl p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-wide text-gray-400">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:bg-white/10 focus:outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-wide text-gray-400">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:bg-white/10 focus:outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase tracking-wide text-gray-400">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:bg-white/10 focus:outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase tracking-wide text-gray-400">Current Status</label>
                  <div className="flex rounded-xl bg-white/5 p-1 border border-white/10">
                    <button
                      type="button"
                      onClick={() => handleToggle('yes')}
                      className={`flex-1 rounded-lg py-2 text-sm font-medium transition-all ${
                        formData.isTrading === 'yes' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      Trading
                    </button>
                    <button
                      type="button"
                      onClick={() => handleToggle('no')}
                      className={`flex-1 rounded-lg py-2 text-sm font-medium transition-all ${
                        formData.isTrading === 'no' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      New
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase tracking-wide text-gray-400">Capital</label>
                  <div className="relative">
                    <select
                      name="investmentAmount"
                      required
                      value={formData.investmentAmount}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-blue-500 focus:bg-black focus:outline-none transition-all appearance-none"
                    >
                      <option value="" disabled className="text-gray-500">Select Investment Amount</option>
                      <option value="<50k" className="bg-gray-900">Below ₹50,000</option>
                      <option value="50k-1L" className="bg-gray-900">₹50,000 - ₹1 Lakh</option>
                      <option value="1L-3L" className="bg-gray-900">₹1 Lakh - ₹3 Lakhs</option>
                      <option value=">5L" className="bg-gray-900">Above ₹5 Lakhs</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </div>
                </div>

                  <button
                    type="submit"
                    className="group relative w-full overflow-hidden rounded-xl bg-blue-600 px-6 py-4 text-lg font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-blue-500/50 hover:scale-[1.02]"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Get Free Consultation
                      <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 z-0 bg-linear-to-r from-cyan-500 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
