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

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    investmentAmount: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleToggle = (value: string) => {
    setFormData((prev) => ({ ...prev, isTrading: value }));
  };

  const validateForm = () => {
    const newErrors = {
      firstName: formData.firstName ? '' : 'First name is required.',
      lastName: formData.lastName ? '' : 'Last name is required.',
      phone: '',
      email: '',
      investmentAmount: formData.investmentAmount ? '' : 'Please select an investment amount.',
    };

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    } else if (!formData.email) {
      newErrors.email = 'Email is required.';
    }

    // Phone validation
    const numericPhone = formData.phone.replace(/\D/g, '');
    const phoneRegex = /^(\+?\d{1,4}[\s-]?)?\(?\d{1,4}?\)?[\s-]?\d{1,4}[\s-]?\d{1,9}$/;
    if (!phoneRegex.test(formData.phone) || numericPhone.length < 10) {
      newErrors.phone = 'Please enter a valid phone number with at least 10 digits.';
    }

    setErrors(newErrors);

    // Check if there are any errors
    return Object.values(newErrors).every(error => error === '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const message = encodeURIComponent(`New Demo Request:
Name: ${formData.firstName} ${formData.lastName}
Phone: ${formData.phone}
Email: ${formData.email}
Currently Trading: ${formData.isTrading === 'yes' ? 'Yes' : 'No'}
Investment Amount: ${formData.investmentAmount}`);
    window.open(`https://wa.me/917574067294?text=${message}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Decorative Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] md:h-[500px] md:w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[80px] md:blur-[120px] animate-pulse-glow" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text Content */}
          <FadeIn>
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
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
                      <img
                        key={i}
                        src={`/avatars/trader-${i}.png`}
                        alt={`Trader ${i}`}
                        className="h-10 w-10 rounded-full border-2 border-black bg-gray-800 object-cover"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-300">Join 5k+ Traders</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Glass Form */}
          <FadeIn delay={200}>
            <div className="glass-card relative rounded-3xl p-6 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-xs font-medium uppercase tracking-wide text-gray-400">First Name</label>
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      autoComplete="given-name"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full rounded-xl border px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:bg-white/10 focus:outline-none transition-all ${errors.firstName ? 'border-red-500 bg-red-500/10' : 'border-white/10 bg-white/5'
                        }`}
                      placeholder="John"
                    />
                    {errors.firstName && <p className="text-xs text-red-400 mt-1">{errors.firstName}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-xs font-medium uppercase tracking-wide text-gray-400">Last Name</label>
                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      autoComplete="family-name"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full rounded-xl border px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:bg-white/10 focus:outline-none transition-all ${errors.lastName ? 'border-red-500 bg-red-500/10' : 'border-white/10 bg-white/5'
                        }`}
                      placeholder="Doe"
                    />
                    {errors.lastName && <p className="text-xs text-red-400 mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-medium uppercase tracking-wide text-gray-400">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full rounded-xl border px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:bg-white/10 focus:outline-none transition-all ${errors.phone ? 'border-red-500 bg-red-500/10' : 'border-white/10 bg-white/5'
                      }`}
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                </div>

                <div className="space-y-2">
                  <span className="block text-xs font-medium uppercase tracking-wide text-gray-400">Current Status</span>
                  <div className="flex rounded-xl bg-white/5 p-1 border border-white/10">
                    <button
                      type="button"
                      onClick={() => handleToggle('yes')}
                      className={`flex-1 rounded-lg py-2 text-sm font-medium transition-all ${formData.isTrading === 'yes' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'
                        }`}
                    >
                      Trading
                    </button>
                    <button
                      type="button"
                      onClick={() => handleToggle('no')}
                      className={`flex-1 rounded-lg py-2 text-sm font-medium transition-all ${formData.isTrading === 'no' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'
                        }`}
                    >
                      New
                    </button>
                  </div>
                  {/* isTrading is not required, but we can add validation if needed */}
                </div>

                <div className="space-y-2">
                  <label htmlFor="investmentAmount" className="text-xs font-medium uppercase tracking-wide text-gray-400">Capital</label>
                  <div className="relative">
                    <select
                      id="investmentAmount"
                      name="investmentAmount"
                      required
                      value={formData.investmentAmount}
                      onChange={handleChange}
                      className={`w-full rounded-xl border px-4 py-3 text-white focus:border-blue-500 focus:bg-black focus:outline-none transition-all appearance-none ${errors.investmentAmount ? 'border-red-500 bg-red-500/10' : 'border-white/10 bg-white/5'
                        }`}
                    >
                      <option value="" disabled className="text-gray-500">Select Investment Amount</option>
                      <option value="&lt;50k" className="bg-gray-900">Below ₹50,000</option>
                      <option value="50k-1L" className="bg-gray-900">₹50,000 - ₹1 Lakh</option>
                      <option value="1L-3L" className="bg-gray-900">₹1 Lakh - ₹3 Lakhs</option>
                      <option value="&gt;5L" className="bg-gray-900">Above ₹5 Lakhs</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </div>
                  {errors.investmentAmount && <p className="text-xs text-red-400 mt-1">{errors.investmentAmount}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-medium uppercase tracking-wide text-gray-400">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full rounded-xl border px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:bg-white/10 focus:outline-none transition-all ${errors.email ? 'border-red-500 bg-red-500/10' : 'border-white/10 bg-white/5'
                      }`}
                    placeholder="example@email.com"
                  />
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
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
