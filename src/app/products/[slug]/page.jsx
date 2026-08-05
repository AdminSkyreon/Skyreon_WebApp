'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Products JSON imports
import bizskyAppData from '@/data/skyreon/products/bizsky-app.json';
import migrationToolData from '@/data/skyreon/products/migration-tool.json';
import dashboardData from '@/data/skyreon/products/dashboard.json';

const fadeIn = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

// Products map for dynamic routing
const productsMap = {
  'bizsky-app': bizskyAppData,
  'migration-tool': migrationToolData,
  'dashboard': dashboardData,
};

export default function ProductDetailPage() {
  const params = useParams();
  const { slug } = params;

  if (slug && !productsMap[slug]) {
    return notFound();
  }

  const data = productsMap[slug] || bizskyAppData;

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                {data?.title}
              </h1>
              <p className="text-lg text-slate-700 leading-relaxed">
                {data?.heroDescription}
              </p>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.02, rotateY: 3, rotateX: -3 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-5 perspective-1000"
            >
              <div className="rounded-xl overflow-hidden border border-slate-200/80 shadow-lg bg-slate-50 p-2">
                <img 
                  src={data?.heroImage} 
                  alt={data?.title}
                  className="rounded-lg w-full h-[320px] object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Intro Paragraphs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {data?.introParagraphs?.map((para, idx) => (
            <motion.p 
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="text-lg text-slate-700 leading-relaxed"
            >
              {para}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Bullet Points Section */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-8 bg-blue-700 rounded-sm"></div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                {data?.bulletPointsHeading}
              </h2>
            </div>
            
            <ul className="list-disc pl-6 space-y-3 text-lg text-slate-700">
              {data?.bulletPoints?.map((point, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="leading-relaxed"
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="flex items-start gap-6"
          >
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-white shadow-md">
              <Search className="w-6 h-6" />
            </div>
            <p className="text-xl sm:text-2xl font-normal text-slate-900 leading-relaxed italic">
              {data?.quoteText}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bottom Paragraphs */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {data?.bottomParagraphs?.map((para, idx) => (
            <motion.p 
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="text-lg text-slate-700 leading-relaxed"
            >
              {para}
            </motion.p>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}