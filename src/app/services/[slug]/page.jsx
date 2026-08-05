'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import websiteDesignData from '@/data/skyreon/services/website-design-development.json';
import erpConsultingData from '@/data/skyreon/services/erp-consulting-implementation.json';
import infrastructureData from '@/data/skyreon/services/infrastructure-management-services.json';
import digitalMarketingData from '@/data/skyreon/services/digital-marketing.json';
import seoData from '@/data/skyreon/services/search-engine-optimization.json';
import aiAutomationData from '@/data/skyreon/services/artificial-intelligence-automation.json';
import itConsultingData from '@/data/skyreon/services/it-consulting.json';
import ecommerceData from '@/data/skyreon/services/e-commerce-development.json';
import mobileAppData from '@/data/skyreon/services/mobile-application-development.json';
import productEngineeringData from '@/data/skyreon/services/software-product-engineering.json';
import devopsData from '@/data/skyreon/services/devops-services.json';
import socialMediaData from '@/data/skyreon/services/social-media-management.json';
import cmsData from '@/data/skyreon/services/content-management-solution.json';
import biData from '@/data/skyreon/services/business-intelligence-analytics.json';
import resourceAugmentationData from '@/data/skyreon/services/resource-augmentation.json';
import cloudSolutionsData from '@/data/skyreon/services/cloud-solutions.json';
import databaseServicesData from '@/data/skyreon/services/database-services.json';
import brandingServicesData from '@/data/skyreon/services/branding-creative-services.json';
import uiUxDesignData from '@/data/skyreon/services/ui-ux-design.json';
import qaTestingData from '@/data/skyreon/services/quality-assurance-testing.json';

const fadeIn = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

// Sabhi valid slugs ka centralized map (hyphen, spelling variations aur alternative formats ke liye)
const serviceMap = {
  'website-design-development': websiteDesignData,
  'erp-consulting-implementation': erpConsultingData,
  'infrastructure-management-services': infrastructureData,
  'digital-marketing': digitalMarketingData,
  'search-engine-optimization': seoData,
  'artificial-intelligence-automation': aiAutomationData,
  'it-consulting': itConsultingData,
  'e-commerce-development': ecommerceData,
  'ecommerce-development': ecommerceData,
  'mobile-application-development': mobileAppData,
  'mobile-app-development': mobileAppData,
  'software-product-engineering': productEngineeringData,
  'product-engineering': productEngineeringData,
  'devops-services': devopsData,
  'devops': devopsData,
  'deveops-services': devopsData,
  'social-media-management': socialMediaData,
  'social-media': socialMediaData,
  'social-media-mamangement': socialMediaData,
  'content-management-solution': cmsData,
  'content-management-solutions': cmsData,
  'content-management': cmsData,
  'cms-development': cmsData,
  'business-intelligence-analytics': biData,
  'business-intelligence': biData,
  'business-intelligence-and-analytics': biData,
  'bi-analytics': biData,
  'resource-augmentation': resourceAugmentationData,
  'it-staff-augmentation': resourceAugmentationData,
  'staff-augmentation': resourceAugmentationData,
  'resource-augmentation-services': resourceAugmentationData,
  'cloud-solutions': cloudSolutionsData,
  'cloud-computing': cloudSolutionsData,
  'cloud-services': cloudSolutionsData,
  'database-services': databaseServicesData,
  'database-management': databaseServicesData,
  'database-administration': databaseServicesData,
  'branding-creative-services': brandingServicesData,
  'branding-and-creative-services': brandingServicesData,
  'branding-services': brandingServicesData,
  'creative-services': brandingServicesData,
  'ui-ux-design': uiUxDesignData,
  'ui-ux': uiUxDesignData,
  'user-interface-user-experience': uiUxDesignData,
  'ui-ux-services': uiUxDesignData,
  'quality-assurance-testing': qaTestingData,
  'quality-assurance': qaTestingData,
  'software-testing': qaTestingData,
  'qa-testing': qaTestingData,
};

export default function ServiceDetailPage() {
  const params = useParams();
  const { slug } = params;

  // Agar slug map mein nahi milta, toh 404 return karein
  if (slug && !serviceMap[slug]) {
    return notFound();
  }

  const data = serviceMap[slug] || websiteDesignData;

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      <Navbar />

      {/* Hero Section with Image & Smooth Animation */}
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
            
            {/* 3D Interactive Hover Image Container */}
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

      {/* Clean Quote Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="flex items-start gap-6"
          >
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 text-white shadow-md">
              <Search className="w-6 h-6" />
            </div>
            <p className="text-xl sm:text-2xl font-normal text-slate-900 leading-relaxed italic">
              {data?.quoteText}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bottom Paragraphs for Depth */}
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