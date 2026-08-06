'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Quote } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import blogData from '@/data/skyreon/resources/blogsData.json';
import { withBasePath } from '@/lib/paths';

export default function ResourceDetailPage() {
  const params = useParams();
  const slug = params.slug;

  const allArticles = [blogData.featuredBlog, ...blogData.allBlogs];
  const blog = allArticles.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-white flex flex-col justify-between">
        <Navbar />
        <div className="text-center py-32">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Article Not Found</h2>
          <p className="text-gray-600 mb-6">The article you are looking for does not exist.</p>
          <Link href="/resources/blog" className="px-6 py-3 bg-[#0083b0] text-white rounded-full font-semibold">
            Back to Blogs
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      <Navbar />

      <main className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Navigation & Category Flex (Fixed overlapping issue) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link 
            href="/resources/blog" 
            className="inline-flex items-center text-sm font-semibold text-gray-600 hover:text-[#0083b0] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to all articles
          </Link>
          
          <span className="px-3.5 py-1.5 bg-cyan-100 text-[#0083b0] text-xs font-bold rounded-full uppercase tracking-wider">
            {blog.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0a1128] tracking-tight mb-6 leading-tight">
          {blog.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 pb-8 border-b border-gray-100 mb-8">
          <span className="flex items-center"><Calendar className="w-4 h-4 mr-2 text-[#0083b0]" /> {blog.date}</span>
          <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-[#0083b0]" /> {blog.readTime}</span>
          <span className="flex items-center"><User className="w-4 h-4 mr-2 text-[#0083b0]" /> {blog.author?.name}</span>
        </div>

        {/* Hero Image (Cards aur Featured dono ke liye automatic kaam karega) */}
        <div className="rounded-3xl overflow-hidden shadow-lg mb-12 h-72 sm:h-96 w-full bg-gray-100">
          <img src={withBasePath(blog.heroImage)} alt={blog.title} className="w-full h-full object-cover" />
        </div>

        {/* Excerpt / Intro */}
        <p className="text-xl text-gray-700 font-medium leading-relaxed mb-10">
          {blog.excerpt}
        </p>

        {/* Dynamic Content Sections */}
        <div className="space-y-10">
          {blog.content?.map((section, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-2xl font-bold text-[#0a1128]">{section.heading}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{section.body}</p>
            </div>
          ))}
        </div>

        {/* Famous Quote Section (Fixed text overlapping with icon by adding pr-12) */}
        {blog.quote && (
          <div className="my-12 p-8 bg-slate-50 border-l-4 border-[#0083b0] rounded-r-2xl shadow-sm relative overflow-hidden">
            <Quote className="w-12 h-12 text-cyan-200/60 absolute bottom-4 right-4 pointer-events-none" />
            <p className="text-lg italic text-gray-800 mb-4 pr-8 relative z-10">
              "{blog.quote.text}"
            </p>
            <div className="relative z-10">
              <h4 className="font-bold text-[#0a1128]">{blog.quote.authorName}</h4>
              <p className="text-xs text-gray-500 uppercase tracking-wider">{blog.quote.authorTitle}</p>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}