'use client';

import React, { useState } from 'react';
import { Plus, X, HelpCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import faqsData from '@/data/skyreon/resources/faqsData.json';

export default function FaqsPage() {
  const [openIndex, setOpenIndex] = useState(null); // Ab shuruat me sabhi questions band rahenge

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      <Navbar />

      <main className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-cyan-50 rounded-full text-[#0083b0] mb-4">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0a1128] tracking-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Everything you need to know about Skyreon's software services, enterprise data security, engagement models, and development processes.
          </p>
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-4">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden shadow-sm ${
                  isOpen ? 'border-[#0083b0] bg-gray-50/50' : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none cursor-pointer"
                >
                  <span className="text-lg sm:text-xl font-bold text-[#0a1128]">
                    {faq.question}
                  </span>
                  <span className={`p-2 rounded-full transition-transform duration-200 ${isOpen ? 'text-gray-700' : 'text-gray-500'}`}>
                    {isOpen ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed text-base border-t border-gray-100/60 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </main>

      <Footer />
    </div>
  );
}