 'use client';
 
 import { useState } from 'react';
 import { FadeIn } from './FadeIn';
 
 const contactDetails = [
   {
    title: 'Address',
    value: 'Mumbai, Maharashtra',
    icon: (
      <svg className="h-6 w-6 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11.25c.621 0 1.125-.504 1.125-1.125S12.621 9 12 9s-1.125.504-1.125 1.125S11.379 11.25 12 11.25Zm0 9.75c-3.375-3.375-5.625-6.75-5.625-9.375a5.625 5.625 0 0 1 11.25 0c0 2.625-2.25 6-5.625 9.375Z" />
      </svg>
    ),
   },
   {
    title: 'Mail Us',
    value: 'info@capitalfunds.com',
    href: 'mailto:info@capitalfunds.com',
    icon: (
      <svg className="h-6 w-6 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z" />
      </svg>
    ),
   },
   {
    title: 'Telephone',
    value: '+91 8000489090',
    href: 'tel:+918000489090',
    icon: (
      <svg className="h-6 w-6 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 5.25A3.75 3.75 0 0 1 6 1.5h1.5a2.25 2.25 0 0 1 2.25 2.25v2.25a2.25 2.25 0 0 1-2.25 2.25H6.75a11.25 11.25 0 0 0 9 9h.75a2.25 2.25 0 0 1 2.25 2.25V18A3.75 3.75 0 0 1 15.75 14.25 14.25 14.25 0 0 1 2.25 5.25Z" />
      </svg>
    ),
   },
   {
    title: 'Website',
    value: 'www.capitalfunds.in',
    href: 'https://capitalfunds.in',
    icon: (
      <svg className="h-6 w-6 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.5c3.728 0 6.75 3.022 6.75 6.75m0 0A6.75 6.75 0 0 1 12 18m6.75-6.75H12M12 11.25c-3.728 0-6.75-3.022-6.75-6.75M12 11.25c-3.728 0-6.75 3.022-6.75 6.75" />
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
     <section id="contact" className="bg-white py-24">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
         <div className="mx-auto mb-12 max-w-3xl text-center">
           <FadeIn>
             <h2 className="text-base font-semibold uppercase tracking-wide text-blue-brand">
               Contact Us
             </h2>
             <p className="mt-2 text-3xl font-extrabold text-gray-900">
               Let's Discuss Your Trading Goals
             </p>
             <p className="mt-4 text-lg text-gray-600">
               Reach out to our advisory team for any questions about services, compliance, or onboarding.
             </p>
           </FadeIn>
         </div>
 
         <div className="grid gap-8 md:grid-cols-2">
           <FadeIn className="rounded-3xl border border-gray-100 bg-light-brand/60 p-8 shadow-sm">
             <h3 className="text-xl font-semibold text-gray-900">Get in Touch</h3>
             <p className="mt-2 text-sm text-gray-500">
               We respond to every enquiry within one business day.
             </p>
 
             <div className="mt-8 space-y-6">
               {contactDetails.map((item) => (
                 <div key={item.title} className="flex items-start gap-4">
                   <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow">
                     {item.icon}
                   </div>
                   <div>
                     <p className="text-sm font-semibold text-gray-500 uppercase">
                       {item.title}
                     </p>
                     {item.href ? (
                       <a
                         href={item.href}
                         target={item.href.startsWith('http') ? '_blank' : undefined}
                         rel="noopener noreferrer"
                         className="text-lg font-semibold text-gray-900 transition-colors hover:text-blue-brand"
                       >
                         {item.value}
                       </a>
                     ) : (
                       <p className="text-lg font-semibold text-gray-900">{item.value}</p>
                     )}
                   </div>
                 </div>
               ))}
             </div>
 
             <div className="mt-10 border-t border-gray-200 pt-6">
               <div className="flex items-center gap-3">
                 <svg className="h-5 w-5 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l2.5 1.5m6.5-1.5a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                 </svg>
                 <p className="text-base font-semibold text-gray-900">Working Hours</p>
               </div>
               <ul className="mt-4 space-y-2">
                 {workingHours.map((item) => (
                   <li key={item.label} className="flex justify-between text-sm text-gray-600">
                     <span className="font-semibold text-gray-800">{item.label}</span>
                     <span>{item.value}</span>
                   </li>
                 ))}
               </ul>
             </div>
           </FadeIn>
 
           <FadeIn delay={150} className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl">
             <form className="space-y-5" onSubmit={handleSubmit}>
               <div>
                 <label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                   Full name*
                 </label>
                 <input
                   id="fullName"
                   name="fullName"
                   type="text"
                   required
                   value={formData.fullName}
                   onChange={handleChange}
                   className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 shadow-sm outline-none focus:border-blue-brand focus:bg-white focus:ring-2 focus:ring-blue-100"
                 />
               </div>
 
               <div className="grid gap-5 md:grid-cols-2">
                 <div>
                   <label htmlFor="email" className="text-sm font-medium text-gray-700">
                     Active email*
                   </label>
                   <input
                     id="email"
                     name="email"
                     type="email"
                     required
                     value={formData.email}
                     onChange={handleChange}
                     className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 shadow-sm outline-none focus:border-blue-brand focus:bg-white focus:ring-2 focus:ring-blue-100"
                   />
                 </div>
                 <div>
                   <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                     Phone number*
                   </label>
                   <input
                     id="phone"
                     name="phone"
                     type="tel"
                     required
                     value={formData.phone}
                     onChange={handleChange}
                     className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 shadow-sm outline-none focus:border-blue-brand focus:bg-white focus:ring-2 focus:ring-blue-100"
                   />
                 </div>
               </div>
 
               <div>
                 <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                   Subject*
                 </label>
                 <input
                   id="subject"
                   name="subject"
                   type="text"
                   required
                   value={formData.subject}
                   onChange={handleChange}
                   className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 shadow-sm outline-none focus:border-blue-brand focus:bg-white focus:ring-2 focus:ring-blue-100"
                 />
               </div>
 
               <div>
                 <label htmlFor="message" className="text-sm font-medium text-gray-700">
                   Message*
                 </label>
                 <textarea
                   id="message"
                   name="message"
                   required
                   rows={4}
                   value={formData.message}
                   onChange={handleChange}
                   className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 shadow-sm outline-none focus:border-blue-brand focus:bg-white focus:ring-2 focus:ring-blue-100"
                 />
               </div>
 
               <button
                 type="submit"
                 className="w-full rounded-2xl bg-blue-brand px-6 py-3 text-lg font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-navy focus:outline-none focus:ring-2 focus:ring-blue-200"
               >
                 Submit Request
               </button>
             </form>
           </FadeIn>
         </div>
       </div>
     </section>
   );
 };
