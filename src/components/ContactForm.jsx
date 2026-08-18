'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import contactData from '../data/skyreon/contact.json';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneCode: '+91',
    phoneNumber: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section 
      id="contact" 
      className="py-24 bg-[#E3F2FD] text-slate-900 font-sans border-t border-slate-100 relative overflow-hidden scroll-smooth"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Left-Aligned Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-left"
        >
          <p className="text-xs font-bold text-blue-400 uppercase tracking-[0.25em] mb-2">
            {contactData.tagline}
          </p>
          <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900">
            {contactData.heading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Office Details */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {contactData.contactInfo.map((info, idx) => {
              let Icon = MapPin;
              if (info.id === 'phone') Icon = Phone;
              if (info.id === 'email') Icon = Mail;

              return (
                <motion.div 
                  key={info.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-slate-50/60 border border-slate-200/60 flex items-start gap-5 hover:border-slate-300 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-200/70 text-slate-700 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-1">{info.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">{info.value}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Clean Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/70 shadow-sm relative"
          >
            {submitted && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-2xl z-20 flex flex-col items-center justify-center p-8 text-center"
              >
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent Successfully!</h3>
                <p className="text-slate-500 text-sm">Thank you for reaching out. Our team will connect with you shortly.</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-semibold text-slate-700 mb-2">First Name*</label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    required
                    placeholder="Enter first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-slate-800 transition-colors text-slate-800 placeholder:text-slate-400 font-normal"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-semibold text-slate-700 mb-2">Last Name*</label>
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    required
                    placeholder="Enter last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-slate-800 transition-colors text-slate-800 placeholder:text-slate-400 font-normal"
                  />
                </div>
              </div>

              {/* Row 2: E-mail & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-2">E-mail*</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-slate-800 transition-colors text-slate-800 placeholder:text-slate-400 font-normal"
                  />
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-xs font-semibold text-slate-700 mb-2">Phone number*</label>
                  <div className="flex gap-2">
                    <div className="flex items-center gap-1.5 px-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 text-sm font-medium shrink-0">
                      <span>IN</span>
                      <span>+91</span>
                    </div>
                    <input
                      id="phoneNumber"
                      type="tel"
                      name="phoneNumber"
                      required
                      placeholder="9876543210"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-slate-800 transition-colors text-slate-800 placeholder:text-slate-400 font-normal"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-2">Any comments or questions*</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-slate-800 transition-colors text-slate-800 placeholder:text-slate-400 font-normal resize-y"
                />
              </div>

              {/* Updated Blue Button Style */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                type="submit"
                className="inline-flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-semibold px-9 py-3.5 rounded-xl transition-all duration-300 text-sm sm:text-base cursor-pointer shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 tracking-wide"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 text-white" />
              </motion.button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}