'use client';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

// JSON Data Import
import techDataJSON from '../data/skyreon/techStack.json';
import { withBasePath } from '@/lib/paths';

export default function TechStack() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Extract variables from JSON
  const category = techDataJSON.category || "Technical Capabilities";
  const sectionTitle = techDataJSON.sectionTitle || "The Architecture.";
  const techSpotlights = techDataJSON.items || [];

  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstElementChild?.offsetWidth || 400;
      scrollRef.current.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstElementChild?.offsetWidth || 400;
      scrollRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const cardWidth = clientWidth / 1.5;
      const newIndex = Math.round(scrollLeft / (cardWidth > 0 ? cardWidth : 400));
      setCurrentIndex(Math.min(newIndex, techSpotlights.length - 1));
    }
  };

  const scrollToDot = (index) => {
    setCurrentIndex(index);
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: index * (containerWidth * 0.7),
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="tech-stack" className="py-16 sm:py-24 bg-[#fbfbfd] text-slate-900 font-sans border-t border-slate-200/60 relative overflow-hidden select-none">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-slate-200/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-[0.2em] mb-2">{category}</p>
            <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900">
              {sectionTitle}
            </h2>
          </motion.div>

          {/* Navigation Controls */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-3 relative z-20"
          >
            <button 
              type="button"
              onClick={scrollLeft}
              aria-label="Previous Slide"
              className="w-10 h-10 rounded-full border border-slate-200/80 bg-white hover:bg-slate-100 text-slate-800 flex items-center justify-center transition active:scale-95 shadow-sm cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 pointer-events-none" />
            </button>
            
            <button 
              type="button"
              onClick={scrollRight}
              aria-label="Next Slide"
              className="w-10 h-10 rounded-full border border-slate-200/80 bg-white hover:bg-slate-100 text-slate-800 flex items-center justify-center transition active:scale-95 shadow-sm cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 pointer-events-none" />
            </button>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-6 relative z-10"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {techSpotlights.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="snap-start shrink-0 w-full md:w-[780px] lg:w-[850px] bg-white border border-slate-200/80 rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 grid grid-cols-1 md:grid-cols-12 min-h-fit md:min-h-[380px] group"
            >
              
              {/* Left Side Image */}
              <div className="md:col-span-5 relative overflow-hidden h-[200px] md:h-full bg-slate-100">
                <img 
                  src={withBasePath(item.image)} 
                  alt={item.title}
                  draggable="false"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                />
              </div>

              {/* Right Side Text */}
              <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-xl sm:text-3xl font-semibold text-slate-900 tracking-tight leading-snug mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-6">
                    {item.subtitle}
                  </p>
                </div>

                {/* Bottom Action Line */}
                <div className="pt-4 border-t border-slate-100 mt-auto flex items-center justify-start">
                  <Link 
                    href={`/tech/${item.id}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-blue-500 hover:bg-blue-400 text-white text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md shadow-red-500/20 active:scale-95 cursor-pointer"
                  >
                    Explore Architecture <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {techSpotlights.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToDot(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx ? 'w-8 bg-slate-900' : 'w-2 bg-slate-300'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}