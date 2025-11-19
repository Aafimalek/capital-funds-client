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
    // Prepare message for WhatsApp
    const message = `New Demo Request:%0A
Name: ${formData.firstName} ${formData.lastName}%0A
Phone: ${formData.phone}%0A
Email: ${formData.email}%0A
Currently Trading: ${formData.isTrading === 'yes' ? 'Yes' : 'No'}%0A
Investment Amount: ${formData.investmentAmount}`;

    // Redirect to WhatsApp
    window.open(`https://wa.me/918000489090?text=${message}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-blue-brand py-24 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Request a Live Demo Call Now
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Get personalized insights and start your profitable trading journey today.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="mx-auto mt-12 max-w-xl rounded-2xl bg-white p-8 shadow-2xl sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-brand focus:outline-none focus:ring-blue-brand"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-brand focus:outline-none focus:ring-blue-brand"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-brand focus:outline-none focus:ring-blue-brand"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-brand focus:outline-none focus:ring-blue-brand"
                  />
                </div>
              </div>

              {/* Interactive Questions */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Are you currently trading?
                  </label>
                  <div className="mt-2 flex gap-4">
                    <button
                      type="button"
                      onClick={() => handleToggle('yes')}
                      className={`flex-1 rounded-md border py-2 text-sm font-medium transition-colors ${
                        formData.isTrading === 'yes'
                          ? 'bg-blue-brand text-white border-blue-brand'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      onClick={() => handleToggle('no')}
                      className={`flex-1 rounded-md border py-2 text-sm font-medium transition-colors ${
                        formData.isTrading === 'no'
                          ? 'bg-blue-brand text-white border-blue-brand'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="investmentAmount" className="block text-sm font-medium text-gray-700">
                    Investment Amount
                  </label>
                  <select
                    name="investmentAmount"
                    id="investmentAmount"
                    required
                    value={formData.investmentAmount}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-blue-brand focus:outline-none focus:ring-blue-brand"
                  >
                    <option value="" disabled>Select an amount</option>
                    <option value="<50k">Below ₹50,000</option>
                    <option value="50k-1L">₹50,000 - ₹1 Lakh</option>
                    <option value="1L-3L">₹1 Lakh - ₹3 Lakhs</option>
                    <option value="3L-5L">₹3 Lakhs - ₹5 Lakhs</option>
                    <option value=">5L">Above ₹5 Lakhs</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-navy px-4 py-3 text-base font-semibold text-white shadow-sm transition-transform hover:scale-[1.02] hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Submit Request
              </button>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
