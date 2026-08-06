'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Sparkles, ShieldCheck, Compass, Eye, Target, CheckCircle2 } from 'lucide-react';
import aboutData from '@/data/skyreon/about.json';
import { withBasePath } from '@/lib/paths';

const iconMap = {
  1: Sparkles,
  2: ShieldCheck,
  3: Compass,
  4: Eye,
  5: Target,
};

export default function AboutUs() {
  const items = aboutData?.items || [];
  const [activeId, setActiveId] = useState(items[0]?.id || 1);

  const activeItem = items.find((item) => item.id === activeId) || items[0] || {};
  const IconComponent = iconMap[activeItem.id] || Sparkles;

  return (
    <section 
      id="about" 
      className="py-24 bg-white text-slate-900 font-sans scroll-mt-20 border-t border-slate-100 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-left">
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs font-bold text-blue-400 uppercase tracking-[0.25em] mb-3"
          >
            {aboutData?.sectionTitle || 'GET TO KNOW ABOUT SKYREON'}
          </motion.p>

          <motion.h2 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] max-w-4xl"
          >
            Architecting the Digital <br />
            Innovation
          </motion.h2>
        </div>

        {/* Main Clean Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation Menu (Clean Title Case) */}
          <div className="lg:col-span-4 bg-slate-50/70 p-4 sm:p-5 rounded-3xl border border-slate-200/80 shadow-xs space-y-1.5">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest px-3 pt-2 pb-3">
              Explore Skyreon
            </p>
            
            {items.map((item) => {
              const isActive = activeId === item.id;
              // Automatically convert tags like "WHO WE ARE" into "Who We Are"
              const formattedTag = item.tag
                .toLowerCase()
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`w-full text-left px-4 py-3.5 rounded-xl text-sm sm:text-base flex items-center justify-between transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? 'bg-white text-slate-900 shadow-sm border-l-4 border-cyan-600 font-semibold translate-x-1' 
                      : 'text-slate-600 hover:bg-slate-200/40 hover:text-slate-900 border-l-4 border-transparent font-medium'
                  }`}
                >
                  <span className="tracking-normal">{formattedTag}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${isActive ? 'text-cyan-600 translate-x-0.5' : 'text-slate-300'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Detailed Content Panel */}
          <div className="lg:col-span-8 bg-slate-50/40 p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm min-h-[440px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id || 'default'}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  
                  {/* Content Details */}
                  <div className="md:col-span-7 space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center border border-cyan-100 shadow-xs">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                      {activeItem.title}
                    </h3>
                    
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {activeItem.subtitle}
                    </p>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {activeItem.expandedText}
                    </p>

                    {/* Bullet Points from JSON */}
                    {activeItem.points && activeItem.points.length > 0 && (
                      <div className="space-y-2 pt-1">
                        {activeItem.points.map((point, index) => (
                          <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Image Display */}
                  <div className="md:col-span-5">
                    <div className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white">
                      <img 
                        src={withBasePath(activeItem.image || '/skyreon/about/about1.png')} 
                        alt={activeItem.title || 'About Skyreon'} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = "/skyreon/about/about1.png";
                        }}
                      />
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}