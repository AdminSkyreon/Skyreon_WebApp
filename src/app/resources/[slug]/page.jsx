'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const fadeIn = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ResourceDetailPage() {
  const params = useParams();
  const { slug } = params;

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white border-b border-slate-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight capitalize"
          >
            {slug} Page
          </motion.h1>
          <motion.p 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed"
          >
            Welcome to the {slug} section of Skyreon.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-slate-600 text-lg">
            This is the dedicated page for <span className="font-semibold text-slate-900">{slug}</span>. You can customize this content as per your requirement.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}