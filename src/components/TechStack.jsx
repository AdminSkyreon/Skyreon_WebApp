'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// JSON Data Import
import techDataJSON from '../data/skyreon/techStack.json';
import { withBasePath } from '@/lib/paths';

export default function TechStack() {
  const category = techDataJSON.category || "Technical Capabilities";
  const sectionTitle = techDataJSON.sectionTitle || "The Architecture.";
  const techSpotlights = techDataJSON.items || [];

  return (
    <section id="tech-stack" className="py-16 sm:py-20 bg-[#E3F2FD] text-slate-900 font-sans border-t border-slate-200/60 relative overflow-hidden select-none">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-slate-200/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header Section with Smooth Fade-in & Slide-up Animation */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs font-semibold text-blue-500 uppercase tracking-[0.2em] mb-2">{category}</p>
            <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900">
              {sectionTitle}
            </h2>
          </motion.div>
        </div>

        {/* Static 3x2 Grid Layout with Compact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
          {techSpotlights.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-slate-200/80 rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Very Compact Image Header */}
              <div className="relative overflow-hidden h-28 bg-slate-100">
                <img 
                  src={withBasePath(item.image)} 
                  alt={item.title}
                  draggable="false"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                />
              </div>

              {/* Compact Card Content */}
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900 tracking-tight leading-snug mb-1">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed font-normal mb-3 line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-2.5 border-t border-slate-100 mt-auto flex items-center justify-start">
                  <Link 
                    href={`/tech/${item.id}`}
                    className="inline-flex items-center justify-center gap-1 px-3 py-1 rounded-full bg-blue-500 hover:bg-blue-600 text-white text-[10px] font-semibold transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
                  >
                    Explore Architecture <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}