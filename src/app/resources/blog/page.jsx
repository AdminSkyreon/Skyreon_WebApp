'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import blogData from '@/data/skyreon/resources/blogsData.json';

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Cloud', 'SEO', 'Development',];

  const featuredBlog = blogData.featuredBlog;
  const blogsList = blogData.allBlogs;

  const filteredBlogs = blogsList.filter((blog) => {
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      <Navbar />

      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0a1128] tracking-tight mb-4">
            Skyreon Blog
          </h1>
          <p className="text-lg text-gray-600">
            Practical strategies and honest insights to help your business work better for you.
          </p>

          {/* Search Bar */}
          <div className="mt-8 relative max-w-xl mx-auto">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <Search className="w-5 h-5" />
            </span>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-full shadow-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0083b0]"
            />
          </div>
        </div>

        {/* Featured Blog ( Unique Content) */}
        {!searchQuery && selectedCategory === 'All' && featuredBlog && (
          <div className="mb-16 bg-gray-50 border border-gray-100 rounded-3xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-72 lg:h-96 w-full bg-gray-200">
              <img src={featuredBlog.heroImage} alt={featuredBlog.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8 lg:p-12">
              <span className="inline-block px-3 py-1 bg-cyan-100 text-[#0083b0] text-xs font-bold rounded-full uppercase tracking-wider mb-4">
                Featured Insight
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-snug">
                {featuredBlog.title}
              </h2>
              <p className="text-gray-600 mb-6 line-clamp-3">{featuredBlog.excerpt}</p>
              <Link href={`/resources/blog/${featuredBlog.slug}`} className="inline-flex items-center text-[#0083b0] font-semibold hover:underline">
                Read Article <ArrowRight className="ml-1.5 w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

        {/* Categories Tabs */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-[#0a1128] mb-6">Browse All Topics</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 bg-gray-50 p-2 rounded-2xl max-w-4xl mx-auto border border-gray-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  selectedCategory === cat ? 'bg-[#0083b0] text-white shadow-md' : 'text-gray-600 hover:bg-gray-200/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <div key={blog.id} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <img src={blog.heroImage} alt={blog.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-semibold text-[#0083b0] rounded-full">
                    {blog.category}
                  </span>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 hover:text-[#0083b0] transition-colors">
                    <Link href={`/resources/blog/${blog.slug}`}>{blog.title}</Link>
                  </h4>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">{blog.excerpt}</p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-0 border-t border-gray-50 flex items-center justify-between mt-auto">
                <span className="text-xs text-gray-500 pt-4">{blog.date}</span>
                <Link href={`/resources/blog/${blog.slug}`} className="inline-flex items-center text-sm font-semibold text-[#0083b0] hover:underline pt-4">
                  Read <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>

      <Footer />
    </div>
  );
}