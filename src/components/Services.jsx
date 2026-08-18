'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Data ko JSON file se import kar rahe hain
import servicesDataJSON from '../data/skyreon/services.json';
import { withBasePath } from '@/lib/paths';

export default function Services() {
  const [isPaused, setIsPaused] = useState(false);
  
  const scrollerRef = useRef(null);
  const requestRef = useRef();
  const xPos = useRef(0);
  const speed = 1.3;

  const sectionTitle = servicesDataJSON.sectionTitle || "Get to know our services.";
  const servicesData = servicesDataJSON.items || [];

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
      className="py-16 bg-[#E3F2FD] text-slate-900 font-sans border-t border-slate-100 relative overflow-hidden"
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

            return (
              <div
                key={cardUniqueId}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="flex-shrink-0 self-start w-[260px] sm:w-[310px] rounded-[20px] relative overflow-hidden transition-all duration-300 flex flex-col justify-between p-5 sm:p-6 border border-slate-200/80 bg-[#f5f5f7] text-slate-900 shadow-sm hover:shadow-md group"
              >
                {/* Text Content */}
                <div className="text-center max-w-lg mx-auto z-10 pt-1">
                  {/* Bada aur Highlighted Solid Blue Tag */}
                  <span className="text-[11px] sm:text-[12px] font-bold tracking-wider uppercase mb-2.5 px-4 py-1.5 rounded-full bg-[#0071e3] text-white inline-block shadow-sm">
                    {item.tag}
                  </span>
                  
                  <h3 className="text-lg sm:text-xl font-semibold tracking-tight mb-1.5 text-slate-900">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs font-normal mb-3 text-slate-600 line-clamp-2">
                    {item.subtitle}
                  </p>

                  {/* Centered Subtle Button directly under text */}
                  <div className="flex justify-center mb-4">
                    <Link 
                      href={`/services/${item.id}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-600 border border-blue-200/60 text-[11px] font-semibold hover:bg-blue-100 hover:text-blue-700 transition shadow-sm focus:outline-none focus:ring-0"
                    >
                      Get to know more <ArrowRight className="w-2.5 h-2.5" />
                    </Link>
                  </div>
                </div>

                {/* Card Image Visual */}
                <div className="relative z-10 w-full h-[120px] sm:h-[140px] rounded-lg overflow-hidden shadow-sm transition-all duration-300 group-hover:scale-[1.01]">
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