'use client';
import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

// Component Imports
import Services from '@/components/Services';
import TechStack from '@/components/TechStack';
import Industries from '@/components/Industries';
import AboutUs from '@/components/AboutUs';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

// JSON Imports
import globalData from '@/data/skyreon/global.json';
import heroData from '@/data/skyreon/hero.json';

export default function HomeClient() {
  const handleChatConnect = () => {
    const phoneNumber = globalData.whatsappNumber || "919318435136";
    const message = encodeURIComponent(globalData.defaultMessage || "Hi Skyreon Team");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-blue-50/50 to-white text-slate-900 font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden relative">
      
      {/* Swimming & Floating Background Motion Blobs */}
      <motion.div 
        animate={{
          x: [0, 80, -60, 0],
          y: [0, -70, 50, 0],
          scale: [1, 1.25, 0.9, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-[38rem] h-[38rem] bg-cyan-400/35 rounded-full blur-[110px] pointer-events-none z-0" 
      />

      <motion.div 
        animate={{
          x: [0, -90, 70, 0],
          y: [0, 80, -60, 0],
          scale: [1, 0.85, 1.3, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/3 right-10 w-[42rem] h-[42rem] bg-blue-500/30 rounded-full blur-[130px] pointer-events-none z-0" 
      />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-center">
          
          <div className="lg:col-span-7 text-left flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex px-3.5 py-1.5 text-xs font-bold tracking-wider text-cyan-800 uppercase bg-cyan-100/90 rounded-full border border-cyan-300 mb-4 shadow-sm">
                {heroData.badgeTag}
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]"
            >
              {heroData.headingMain}{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-700">
                {heroData.headingHighlight}
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-slate-600 max-w-xl font-medium leading-relaxed"
            >
              {heroData.subtitle}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 flex flex-wrap gap-4"
            >
              <a 
                href="#services" 
                className="px-8 py-3.5 rounded-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-sm transition-all active:scale-95 shadow-lg shadow-cyan-600/25"
              >
                {heroData.primaryCta}
              </a>
              <a 
                href="#tech-stack" 
                className="px-8 py-3.5 rounded-full bg-white/80 backdrop-blur-md hover:bg-slate-100 text-slate-800 border border-slate-300 font-bold text-sm transition-all active:scale-95 shadow-sm inline-flex items-center justify-center"
              >
                {heroData.secondaryCta}
              </a>
            </motion.div>

            {/* Bottom Left Stretchy Arrow with gap */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-6 flex justify-start"
            >
              <a 
                href="#services" 
                className="p-2 rounded-full bg-cyan-50 hover:bg-cyan-100 text-cyan-600 border border-cyan-200 transition-all shadow-sm flex items-center justify-center"
                aria-label="Scroll to next section"
              >
                <motion.div
                  animate={{ y: [0, 8, 0], scaleY: [1, 1.25, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </a>
            </motion.div>
          </div>

          {/* Right Column Bot */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mb-4 bg-white/90 backdrop-blur-md border border-slate-200 p-5 rounded-2xl rounded-bl-none shadow-xl max-w-xs text-left relative z-20"
            >
              <p className="text-xs text-cyan-700 font-bold mb-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> {heroData.agentTitle}
              </p>
              <p className="text-sm font-medium text-slate-700">
                {heroData.agentDialogue}
              </p>
              <button 
                onClick={handleChatConnect}
                className="mt-3 px-4 py-2 rounded-xl bg-slate-900 hover:bg-cyan-600 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
              >
                {heroData.agentCta} <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative w-64 h-72 flex items-center justify-center cursor-pointer"
              onClick={handleChatConnect}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-cyan-400/20 to-transparent blur-2xl scale-90" />
              <svg viewBox="0 0 200 250" className="w-full h-full drop-shadow-xl">
                <ellipse cx="100" cy="230" rx="42" ry="8" fill="#cbd5e1" opacity="0.8"/>
                <motion.path 
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  d="M85,180 L115,180 L100,210 Z" 
                  fill="url(#lightCyanGrad)" 
                />
                <rect x="65" y="90" width="70" height="85" rx="20" fill="#0f172a" stroke="#334155" strokeWidth="3" />
                <circle cx="100" cy="130" r="22" fill="#020617" stroke="#06b6d4" strokeWidth="2" />
                <path d="M90,130 Q100,140 110,130" stroke="#06b6d4" strokeWidth="3" fill="none" className="animate-pulse" />
                <motion.path 
                  animate={{ rotate: [0, -25, 0] }}
                  style={{ transformOrigin: "65px 105px" }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  d="M65,105 L40,85 C35,80 25,90 32,97 L53,118 Z" 
                  fill="#334155" 
                />
                <motion.path 
                  animate={{ rotate: [0, 15, 0] }}
                  style={{ transformOrigin: "135px 105px" }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                  d="M135,105 L160,125 C165,130 175,120 168,113 L147,92 Z" 
                  fill="#334155" 
                />
                <rect x="90" y="75" width="20" height="20" rx="5" fill="#475569" />
                <rect x="60" y="30" width="80" height="50" rx="15" fill="#1e293b" stroke="#334155" strokeWidth="3" />
                <rect x="70" y="42" width="60" height="20" rx="8" fill="#020617" />
                <motion.circle animate={{ scaleX: [1, 0.1, 1] }} transition={{ repeat: Infinity, duration: 4, repeatDelay: 3 }} cx="85" cy="52" r="5" fill="#06b6d4" />
                <motion.circle animate={{ scaleX: [1, 0.1, 1] }} transition={{ repeat: Infinity, duration: 4, repeatDelay: 3 }} cx="115" cy="52" r="5" fill="#06b6d4" />
                <path d="M100,30 L100,12" stroke="#475569" strokeWidth="3" />
                <circle cx="100" cy="10" r="4" fill="#06b6d4" className="animate-ping" />
                <defs>
                  <linearGradient id="lightCyanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Services Component */}
      <Services />

      {/* Tech Stack Component */}
      <TechStack />

      {/* Industries Component */}
      <Industries />

      {/* About Us Component */}
      <AboutUs />

      {/* Contact Section */}
      <ContactForm />

      {/* Footer Section */}
      <Footer />

    </div>
  );
}