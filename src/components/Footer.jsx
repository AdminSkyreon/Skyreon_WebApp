'use client';
import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Phone, ArrowUp } from 'lucide-react';
import footerData from '@/data/skyreon/footer.json';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const handleSmoothScroll = (e, href) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-200 pt-16 pb-8 border-t border-slate-700/60 relative z-10 overflow-hidden shadow-2xl">
      
      {/* Soft Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-slate-800/50 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 pb-12 border-b border-slate-700/60">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block text-2xl font-black text-white tracking-wider hover:opacity-90 transition-opacity">
              {footerData.brand?.title || "SKYREON"}
              <span className="text-cyan-400"></span>
            </Link>
            <p className="text-slate-300 text-sm max-w-sm leading-relaxed">
              {footerData.brand?.description}
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <a 
                href={footerData.socialLinks?.[0]?.url || "#"} 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.6a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
                </svg>
              </a>

              <a 
                href={footerData.socialLinks?.[1]?.url || "#"} 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              <a 
                href={footerData.socialLinks?.[2]?.url || "#"} 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:pl-6">
            <h3 className="text-white font-bold text-xs tracking-widest uppercase mb-4">
              {footerData.navigationHeading || "Navigation"}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerData.navigationLinks?.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="inline-block text-slate-300 hover:text-cyan-400 hover:translate-x-1.5 transition-all duration-200 cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Support Links */}
          <div>
            <h3 className="text-white font-bold text-xs tracking-widest uppercase mb-4">
              {footerData.supportHeading || "Support"}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerData.supportLinks?.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="inline-block text-slate-300 hover:text-cyan-400 hover:translate-x-1.5 transition-all duration-200 cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h3 className="text-white font-bold text-xs tracking-widest uppercase mb-4">
              {footerData.contactHeading || "Connect"}
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2.5 select-text">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="whitespace-nowrap">{footerData.contactInfo?.location}</span>
              </li>
              <li className="flex items-center gap-2.5 select-text">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="whitespace-nowrap cursor-default">{footerData.contactInfo?.email}</span>
              </li>
              <li className="flex items-center gap-2.5 select-text">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="whitespace-nowrap cursor-default">{footerData.contactInfo?.phone}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} {footerData.copyrightText}</p>
          
          <div className="flex items-center gap-4">
            <p>Built with Love By HKS</p>
            
            {/* Smooth Scroll To Top Button */}
            <button
              onClick={scrollToTop}
              title="Back to top"
              className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all cursor-pointer hover:-translate-y-1 shadow-md"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}