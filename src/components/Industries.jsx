'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import industriesData from '../data/skyreon/industries.json';
import { withBasePath } from '@/lib/paths';

export default function Industries() {
  const [isPaused, setIsPaused] = useState(false);
  
  const scrollerRef = useRef(null);
  const requestRef = useRef();
  const xPos = useRef(0);
  const speed = 1.8;

  const items = industriesData.items || [];
  const duplicatedItems = [...items, ...items];

  // Continuous auto-move marquee animation
  const animate = useCallback(() => {
    if (!scrollerRef.current || isPaused) {
      requestRef.current = requestAnimationFrame(animate);
      return;
    }

    const containerWidth = scrollerRef.current.scrollWidth / 2;
    xPos.current -= speed;

    if (xPos.current <= -containerWidth) {
      xPos.current = 0;
    }

    scrollerRef.current.style.transform = `translateX(${xPos.current}px)`;
    requestRef.current = requestAnimationFrame(animate);
  }, [isPaused]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animate]);

  const scrollLeftManual = () => {
    if (scrollerRef.current) {
      const cardWidth = 280 + 16; // card width + gap
      xPos.current += cardWidth;
      if (xPos.current > 0) xPos.current = 0;
      scrollerRef.current.style.transform = `translateX(${xPos.current}px)`;
    }
  };

  const scrollRightManual = () => {
    if (scrollerRef.current) {
      const cardWidth = 280 + 16;
      const containerWidth = scrollerRef.current.scrollWidth / 2;
      xPos.current -= cardWidth;
      if (Math.abs(xPos.current) >= containerWidth) {
        xPos.current = 0;
      }
      scrollerRef.current.style.transform = `translateX(${xPos.current}px)`;
    }
  };

  return (
    <section 
      id="industries" 
      className="py-16 bg-[#AEE2FF] text-slate-900 font-sans border-t border-slate-100 relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 mb-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-[0.25em] mb-2">
              {industriesData.tagline || "INDUSTRIES & SECTORS"}
            </p>
            <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900">
              {industriesData.sectionTitle || "Enterprise Industries."}
            </h2>
          </motion.div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button 
              onClick={scrollLeftManual}
              aria-label="Previous Industries"
              className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-900 hover:text-white hover:border-slate-900 text-slate-700 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollRightManual}
              aria-label="Next Industries"
              className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-900 hover:text-white hover:border-slate-900 text-slate-700 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Moving Marquee Container */}
      <div className="relative w-full overflow-hidden flex py-4">
        <div 
          ref={scrollerRef}
          className="flex gap-4 py-2 flex-nowrap items-start w-max select-none will-change-transform"
        >
          {duplicatedItems.map((item, idx) => {
            const cardUniqueKey = `${item.id}-${idx}`;
            const isDark = item.type === 'brand-blue' || item.type === 'dark-navy';

            return (
              <div
                key={cardUniqueKey}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
                // card size
                className={`flex-shrink-0 self-start w-[240px] sm:w-[280px] h-[350px] rounded-2xl relative overflow-hidden flex flex-col justify-between p-5 transition-all duration-300 group shadow-sm hover:shadow-xl cursor-pointer
                  ${item.type === 'brand-blue' ? 'bg-[#0062ac]' : ''}
                  ${item.type === 'dark-navy' ? 'bg-[#0c1322]' : ''}
                  ${item.type === 'light-grey' ? 'bg-[#f3f4f6]' : ''}
                  ${item.type === 'outline-white' || !item.type ? 'bg-white border border-slate-200' : ''}
                `}
              >
                {/* Background Image Overlay */}
                {item.image && (
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img 
                      src={withBasePath(item.image)} 
                      alt={item.title} 
                      className="w-full h-full object-cover mix-blend-overlay opacity-30 group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-black/60 to-transparent' : 'bg-gradient-to-t from-white/70 to-transparent'}`} />
                  </div>
                )}

                {/* Top Category Header */}
                <div className="relative z-10">
                  <span className={`text-[10px] font-bold tracking-[0.2em] uppercase block
                    ${isDark ? 'text-slate-200/90' : 'text-slate-500'}
                  `}>
                    {item.category}
                  </span>
                </div>

                {/* Middle Content */}
                <div className="relative z-10 my-auto">
                  <h3 className={`text-base sm:text-lg font-semibold leading-[1.25] tracking-tight mb-2
                    ${isDark ? 'text-white' : 'text-slate-900'}
                  `}>
                    {item.title}
                  </h3>
                  
                  <p className={`text-[11px] leading-relaxed font-normal line-clamp-3
                    ${isDark ? 'text-slate-100/90' : 'text-slate-600'}
                  `}>
                    {item.description}
                  </p>
                </div>

                {/* Bottom EXPAND Link routing to dynamic detail page */}
                <Link href={`/industries/${item.id}`} className="relative z-10 block">
                  <div className={`pt-3 flex items-center justify-between text-[11px] font-bold tracking-wider uppercase border-t transition-colors
                    ${isDark ? 'border-white/15 text-white' : 'border-slate-200 text-slate-900'}
                  `}>
                    <span>EXPAND</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </Link>

                {/* Hover Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-20" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}