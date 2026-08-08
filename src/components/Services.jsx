'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Data ko JSON file se import kar rahe hain
import servicesDataJSON from '../data/skyreon/services.json';
import { withBasePath } from '@/lib/paths';

export default function Services() {
  const [activeCardId, setActiveCardId] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  
  const scrollerRef = useRef(null);
  const requestRef = useRef();
  const xPos = useRef(0);
  const speed = 1.8;

  const sectionTitle = servicesDataJSON.sectionTitle || "Get to know our services.";
  const servicesData = servicesDataJSON.items || [];

  const toggleCard = (id, e) => {
    if (e) e.stopPropagation();
    
    setActiveCardId(prevId => {
      const newId = prevId === id ? null : id;
      setIsPaused(newId !== null);
      return newId;
    });
  };

  const duplicatedServices = [...servicesData, ...servicesData];

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

  return (
    <section 
      id="services" 
      className="py-16 bg-[#AEE2FF] text-slate-900 font-sans border-t border-slate-100 relative overflow-hidden"
      onClick={() => {
        if (!activeCardId) setIsPaused(false);
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 mb-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-[0.2em] mb-2">Capabilities</p>
            <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900">
              {sectionTitle}
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Moving Marquee Container */}
      <div className="relative w-full overflow-hidden flex py-4">
        <div
          ref={scrollerRef}
          className="flex gap-4 py-2 flex-nowrap items-start w-max select-none will-change-transform"
        >
          {duplicatedServices.map((item, idx) => {
            const cardUniqueId = `${item.id}-${idx}`;
            const isActive = activeCardId === cardUniqueId;

            return (
              <div
                key={cardUniqueId}
                onMouseEnter={() => {
                  if (!activeCardId) setIsPaused(true);
                }}
                onMouseLeave={() => {
                  if (!activeCardId) setIsPaused(false);
                }}
                onClick={(e) => toggleCard(cardUniqueId, e)}
                className="flex-shrink-0 self-start w-[260px] sm:w-[310px] rounded-[20px] cursor-pointer relative overflow-hidden transition-all duration-300 flex flex-col justify-between p-5 sm:p-6 border border-slate-200/80 bg-[#f5f5f7] text-slate-900 shadow-sm hover:shadow-md group"
              >
                {/* Text Content */}
                <div className="text-center max-w-lg mx-auto z-10 pt-1">
                  <span className="text-[9px] font-semibold tracking-widest uppercase opacity-60 mb-1 block text-blue-500">
                    {item.tag}
                  </span>
                  
                  <h3 className="text-lg sm:text-xl font-semibold tracking-tight mb-1.5 text-slate-900">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs opacity-80 font-normal mb-3 text-slate-600 line-clamp-2">
                    {item.subtitle}
                  </p>

                  <div className="flex items-center justify-center gap-2">
                    <Link 
                      href={`/services/${item.id}`}
                      onClick={(e) => e.stopPropagation()}
                      className="px-3.5 py-1.5 rounded-full bg-[#0071e3] text-white text-[11px] font-medium hover:bg-[#0077ed] transition shadow-sm flex items-center gap-1 focus:outline-none focus:ring-0"
                    >
                      Get to know more <ArrowRight className="w-2.5 h-2.5" />
                    </Link>
                    <button 
                      type="button"
                      onClick={(e) => toggleCard(cardUniqueId, e)}
                      className="w-6 h-6 rounded-full border border-slate-300 bg-white/80 backdrop-blur-md flex items-center justify-center text-[11px] font-medium hover:bg-white transition text-slate-800 shadow-sm focus:outline-none focus:ring-0 focus:border-slate-300"
                    >
                      {isActive ? <Minus className="w-2.5 h-2.5" /> : <Plus className="w-2.5 h-2.5" />}
                    </button>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-3 text-[11px] text-slate-700 leading-relaxed bg-white/95 backdrop-blur-md p-3 rounded-xl border border-slate-200/60 shadow-sm text-left"
                      >
                        {item.expandedText}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Card Image Visual */}
                <div className="relative z-10 mt-4 w-full h-[120px] sm:h-[140px] rounded-lg overflow-hidden shadow-sm transition-all duration-300 group-hover:scale-[1.01]">
                  <img 
                    src={withBasePath(item.image)} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}