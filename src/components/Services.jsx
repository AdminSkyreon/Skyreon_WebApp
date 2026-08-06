'use client';
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Plus, Minus } from 'lucide-react';

// Data ko JSON file se import kar rahe hain
import servicesDataJSON from '../data/skyreon/services.json';

export default function Services() {
  const [activeCardId, setActiveCardId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  // JSON se sections aur array extract kar rahe hain
  const sectionTitle = servicesDataJSON.sectionTitle || "Get to know our services.";
  const servicesData = servicesDataJSON.items || [];

  // Left Arrow Button Click Handler
  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstElementChild?.offsetWidth || 400;
      scrollRef.current.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' });
    }
  };

  // Right Arrow Button Click Handler
  const scrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstElementChild?.offsetWidth || 400;
      scrollRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const cardWidth = clientWidth / 2;
      const newIndex = Math.round(scrollLeft / (cardWidth > 0 ? cardWidth : 300));
      setCurrentIndex(Math.min(newIndex, servicesData.length - 1));
    }
  };

  const toggleCard = (id) => {
    setActiveCardId(activeCardId === id ? null : id);
  };

  const scrollToDot = (index) => {
    setCurrentIndex(index);
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.clientWidth;
      const scrollAmount = index * (containerWidth / 2);
      scrollRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="py-24 bg-white text-slate-900 font-sans border-t border-slate-100 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
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

          {/* Working Navigation Arrow Buttons */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 relative z-20"
          >
            <button 
              type="button"
              onClick={scrollLeft}
              aria-label="Previous Slide"
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-100 text-slate-800 flex items-center justify-center transition active:scale-95 shadow-sm cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 pointer-events-none" />
            </button>
            
            <button 
              type="button"
              onClick={scrollRight}
              aria-label="Next Slide"
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-100 text-slate-800 flex items-center justify-center transition active:scale-95 shadow-sm cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 pointer-events-none" />
            </button>
          </motion.div>
        </div>

        {/* Dynamic Cards Carousel */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-6 relative z-10"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {servicesData.map((item, idx) => {
            const isActive = activeCardId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onClick={() => toggleCard(item.id)}
                className="snap-start flex-shrink-0 w-full md:w-[calc(50%-12px)] min-h-[580px] rounded-[32px] cursor-pointer relative overflow-hidden transition-all duration-500 flex flex-col justify-between p-8 sm:p-12 border border-slate-200/80 bg-[#f5f5f7] text-slate-900 shadow-sm hover:shadow-xl group"
              >
                {/* Text Content */}
                <div className="text-center max-w-lg mx-auto z-10 pt-2">
                  <span className="text-[11px] font-semibold tracking-widest uppercase opacity-60 mb-2 block text-blue-500">
                    {item.tag}
                  </span>
                  
                  <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2 text-slate-900">
                    {item.title}
                  </h3>
                  
                  <p className="text-base sm:text-lg opacity-80 font-normal mb-6 text-slate-600">
                    {item.subtitle}
                  </p>

                  <div className="flex items-center justify-center gap-3">
                    <button className="px-5 py-2 rounded-full bg-[#0071e3] text-white text-xs font-medium hover:bg-[#0077ed] transition shadow-sm">
                      Learn more
                    </button>
                    <button className="w-8 h-8 rounded-full border border-slate-300 bg-white/80 backdrop-blur-md flex items-center justify-center text-xs font-medium hover:bg-white transition text-slate-800 shadow-sm">
                      {isActive ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mt-6 text-sm text-slate-700 leading-relaxed bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-slate-200/60 shadow-sm"
                      >
                        {item.expandedText}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Card Image Visual */}
                <div className="relative z-10 mt-8 w-full h-[240px] sm:h-[280px] rounded-2xl overflow-hidden shadow-md transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {servicesData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToDot(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'w-8 bg-slate-900' : 'w-2 bg-slate-300'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}