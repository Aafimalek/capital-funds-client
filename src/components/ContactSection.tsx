'use client';

import { useState } from 'react';
import { FadeIn } from './FadeIn';

const contactDetails = [
  {
    title: 'Address',
    value: 'Mumbai, Maharashtra',
    icon: (
      <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: 'Mail Us',
    value: 'info@capitalfunds.com',
    href: 'mailto:info@capitalfunds.com',
    icon: (
      <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    title: 'Telephone',
    value: '+91 8000489090',
    href: 'tel:+918000489090',
    icon: (
      <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: 'Website',
    value: 'www.capitalfunds.in',
    href: 'https://capitalfunds.in',
    icon: (
      <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" x2="22" y1="12" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

const workingHours = [
  { label: 'Monday to Friday', value: '09:00 AM – 06:00 PM' },
  { label: 'Saturday', value: '09:00 AM – 06:00 PM' },
  { label: 'Sunday', value: 'Closed' },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = `Name: ${formData.fullName}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0A%0A${formData.message}`;
    window.location.href = `mailto:info@capitalfunds.com?subject=${encodeURIComponent(formData.subject)}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-16 md:py-24">
      {/* Background Glow for depth */}
      <div className="absolute right-0 top-0 h-[300px] w-[300px] md:h-[500px] md:w-[500px] translate-x-1/2 -translate-y-1/4 rounded-full bg-blue-600/10 blur-[80px] md:blur-[120px]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 md:mb-16 max-w-3xl text-center">
          <FadeIn>
            <h2 className="text-sm font-bold uppercase tracking-widest text-blue-400">
              Contact Us
            </h2>
            <p className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Let's Discuss Your Trading Goals
            </p>
            <p className="mt-4 text-base md:text-lg text-gray-400">
              Reach out to our advisory team for any questions about services, compliance, or onboarding.
            </p>
          </FadeIn>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Info Card */}
          <FadeIn className="h-full">
            <div className="glass-card flex h-full flex-col justify-between rounded-3xl p-8">
              <div>
                <h3 className="text-2xl font-semibold text-white">Get in Touch</h3>
                <p className="mt-2 text-sm text-gray-400">
                  We respond to every enquiry within one business day.
                </p>

                <div className="mt-8 space-y-8">
                  {contactDetails.map((item) => (
                    <div key={item.title} className="flex items-start gap-4 group">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 shadow-lg transition-colors group-hover:bg-blue-500/10 group-hover:border-blue-500/20">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-gray-500">
                          {item.title}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className="text-lg font-medium text-gray-200 transition-colors hover:text-blue-400"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-lg font-medium text-gray-200">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 border-t border-white/10 pt-8">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  <p className="text-base font-semibold text-white">Working Hours</p>
                </div>
                <ul className="mt-4 space-y-2">
                  {workingHours.map((item) => (
                    <li key={item.label} className="flex justify-between text-sm text-gray-400">
                      <span>{item.label}</span>
                      <span className="text-gray-200 font-medium">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

          {/* Form Card */}
          <FadeIn delay={150} className="h-full">
            <div className="glass-card h-full rounded-3xl p-8 shadow-2xl lg:p-10">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="fullName" className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    Full name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-blue-500 focus:bg-white/10 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="text-xs font-medium uppercase tracking-wide text-gray-400">
                      Active email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-blue-500 focus:bg-white/10 focus:ring-1 focus:ring-blue-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-xs font-medium uppercase tracking-wide text-gray-400">
                      Phone number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-blue-500 focus:bg-white/10 focus:ring-1 focus:ring-blue-500 transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-blue-500 focus:bg-white/10 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="Inquiry regarding HNI Package"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-blue-500 focus:bg-white/10 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-xl bg-blue-600 px-6 py-4 text-lg font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-blue-500/50 hover:scale-[1.02]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
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
