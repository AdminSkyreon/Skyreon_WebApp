'use client';
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import industriesData from '../data/skyreon/industries.json';

export default function Industries() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useRef(null);
  const items = industriesData.items || [];

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const totalScroll = scrollWidth - clientWidth;
      const progress = totalScroll > 0 ? (scrollLeft / totalScroll) * 100 : 0;
      setScrollProgress(progress);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstElementChild?.offsetWidth || 320;
      scrollRef.current.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstElementChild?.offsetWidth || 320;
      scrollRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
    }
  };

  return (
    <section id="industries" className="py-24 bg-white text-slate-900 font-sans border-t border-slate-100 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-[0.25em] mb-2">
              {industriesData.tagline || "INDUSTRIES & SECTORS"}
            </p>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900">
              {industriesData.sectionTitle || "Enterprise Industries."}
            </h2>
          </motion.div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button 
              onClick={scrollLeft}
              aria-label="Previous Industries"
              className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-900 hover:text-white hover:border-slate-900 text-slate-700 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollRight}
              aria-label="Next Industries"
              className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-900 hover:text-white hover:border-slate-900 text-slate-700 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-6 relative z-10"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((item, idx) => {
            const isDark = item.type === 'brand-blue' || item.type === 'dark-navy';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className={`snap-start flex-shrink-0 w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] h-[510px] rounded-xl relative overflow-hidden flex flex-col justify-between p-8 transition-all duration-500 group shadow-sm hover:shadow-xl
                  ${item.type === 'brand-blue' ? 'bg-[#0062ac]' : ''}
                  ${item.type === 'dark-navy' ? 'bg-[#0c1322]' : ''}
                  ${item.type === 'light-grey' ? 'bg-[#f3f4f6]' : ''}
                  ${item.type === 'outline-white' ? 'bg-white border border-slate-200' : ''}
                `}
              >
                {/* Background Image Overlay */}
                {item.image && (
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover mix-blend-overlay opacity-30 group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-black/60 to-transparent' : 'bg-gradient-to-t from-white/70 to-transparent'}`} />
                  </div>
                )}

                {/* Top Category Header */}
                <div className="relative z-10">
                  <span className={`text-[11px] font-bold tracking-[0.2em] uppercase block
                    ${isDark ? 'text-slate-200/90' : 'text-slate-500'}
                  `}>
                    {item.category}
                  </span>
                </div>

                {/* Middle Content */}
                <div className="relative z-10 my-auto">
                  <h3 className={`text-2xl sm:text-[26px] font-semibold leading-[1.25] tracking-tight mb-4
                    ${isDark ? 'text-white' : 'text-slate-900'}
                  `}>
                    {item.title}
                  </h3>
                  
                  <p className={`text-xs sm:text-sm leading-relaxed font-normal line-clamp-4
                    ${isDark ? 'text-slate-100/90' : 'text-slate-600'}
                  `}>
                    {item.description}
                  </p>
                </div>

                {/* Bottom EXPAND Link routing to dynamic detail page */}
                <Link href={`/industries/${item.id}`} className="relative z-10 block">
                  <div className={`pt-4 flex items-center gap-2 text-xs font-bold tracking-wider uppercase border-t transition-colors cursor-pointer
                    ${isDark ? 'border-white/15 text-white' : 'border-slate-200 text-slate-900'}
                  `}>
                    <span>EXPAND</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </Link>

                {/* Hover Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-20" />
              </motion.div>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 h-1 rounded-full mt-4 overflow-hidden relative">
          <div 
            className="bg-slate-900 h-full transition-all duration-300 rounded-full"
            style={{ width: `${Math.max(12, scrollProgress)}%` }}
          />
        </div>

      </div>
    </section>
  );
}