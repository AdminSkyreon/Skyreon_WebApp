'use client';

import React from 'react';
import { Mail, Phone, MapPin, Headphones, MessageSquare } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SupportPage() {
  const whatsappMessage = encodeURIComponent("Hi Skyreon, I need support regarding your services.");
  const whatsappUrl = `https://wa.me/919318435136?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      <Navbar />

      <main className="pt-32 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-cyan-50 rounded-full text-[#0083b0] mb-4">
            <Headphones className="w-6 h-6" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0a1128] tracking-tight mb-4">
            We're Here to Help
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Have questions about our products, technical documentation, or need assistance with your project? Reach out to the Skyreon support team.
          </p>
        </div>

        {/* Support Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Email Support */}
          <div className="border border-gray-200 rounded-2xl p-8 text-center bg-white shadow-sm hover:border-[#0083b0] transition-all duration-200">
            <div className="w-12 h-12 bg-cyan-50 text-[#0083b0] rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0a1128] mb-2">Email Us</h3>
            <p className="text-gray-600 text-sm mb-4">For general queries and project support.</p>
            <a href="mailto:contact@skyreon.com" className="text-[#0083b0] font-semibold text-sm hover:underline">
              contact@skyreon.com
            </a>
          </div>

          {/* Call Support / WhatsApp */}
          <div className="border border-gray-200 rounded-2xl p-8 text-center bg-white shadow-sm hover:border-[#0083b0] transition-all duration-200">
            <div className="w-12 h-12 bg-cyan-50 text-[#0083b0] rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0a1128] mb-2">Call / WhatsApp</h3>
            <p className="text-gray-600 text-sm mb-4">Mon-Fri from 9:00 am to 6:00 pm.</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[#0083b0] font-semibold text-sm hover:underline">
              +91 93184 35136
            </a>
          </div>

          {/* Office / Location */}
          <div className="border border-gray-200 rounded-2xl p-8 text-center bg-white shadow-sm hover:border-[#0083b0] transition-all duration-200">
            <div className="w-12 h-12 bg-cyan-50 text-[#0083b0] rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0a1128] mb-2">Visit Us</h3>
            <p className="text-gray-600 text-sm mb-4">Our corporate workspace.</p>
            <span className="text-gray-800 font-medium text-sm block">
              K-4, Kalinga Vihar, Bhubaneswar, Odisha
            </span>
          </div>

        </div>

        {/* WhatsApp Assistance Banner */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-2xl font-bold text-[#0a1128]">Need immediate technical assistance?</h4>
            <p className="text-gray-600 text-sm sm:text-base">
              Connect directly with our team on WhatsApp for quick query resolutions and active support.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#25D366] text-white font-medium rounded-xl hover:bg-[#20ba5a] transition-colors whitespace-nowrap shadow-sm flex items-center gap-2"
          >
            <MessageSquare className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>

      </main>

      <Footer />
    </div>
  );
}