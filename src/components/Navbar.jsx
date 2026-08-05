'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import navData from '@/data/skyreon/navbarServices.json';
import productsNavData from '@/data/skyreon/navbarProducts.json';
import navbarResources from '@/data/skyreon/navbarResources.json';
import globalData from '@/data/skyreon/global.json';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  // WhatsApp Handler
  const handleChatConnect = () => {
    const phoneNumber = globalData.whatsappNumber || "919318435136";
    const message = encodeURIComponent(globalData.defaultMessage || "Hi Skyreon Team");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo  */}
          <div className="flex-shrink-0 relative w-60 sm:w-72 h-16 overflow-hidden flex items-center">
            <Link href="/" className="absolute inset-0 flex items-center focus:outline-none focus:ring-0">
              {globalData.logoUrl && (
                <img 
                  src={globalData.logoUrl} 
                  alt={globalData.companyName || "Skyreon"} 
                  className="w-72 sm:w-84 h-auto max-none object-contain mix-blend-multiply -ml-3 -mt-3"
                />
              )}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            
            {/* Services Dropdown */}
            <div 
              className="static py-4"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button 
                className="flex items-center text-gray-700 hover:text-[#0083b0] font-medium text-base transition-colors focus:outline-none focus:ring-0 cursor-pointer"
              >
                Services <ChevronDown className={`ml-1.5 w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute top-20 left-0 right-0 w-full bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200 py-8 px-6 lg:px-16 max-h-[calc(100vh-5rem)] overflow-y-auto grid grid-cols-1 md:grid-cols-3 gap-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {navData.servicesMenu.map((service, index) => (
                    <Link
                      key={index}
                      href={`/services/${service.slug}`}
                      onClick={() => setDropdownOpen(false)}
                      className="group flex items-start justify-between p-3.5 rounded-xl hover:bg-cyan-50/60 transition-all border border-transparent hover:border-cyan-100 focus:outline-none focus:ring-0"
                    >
                      <span className="text-sm font-semibold text-gray-800 group-hover:text-[#0083b0] transition-colors pr-2">
                        {service.title}
                      </span>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#0083b0] group-hover:translate-x-1 transition-all flex-shrink-0 mt-0.5" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Products Dropdown (Converted to Compact Resource Style Dropdown) */}
            <div 
              className="relative py-4"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button 
                className="flex items-center text-gray-700 hover:text-[#0083b0] font-medium text-base transition-colors focus:outline-none focus:ring-0 cursor-pointer"
              >
                Products <ChevronDown className={`ml-1.5 w-4 h-4 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {productsDropdownOpen && (
                <div className="absolute top-full left-0 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {productsNavData.map((product, index) => (
                    <Link
                      key={index}
                      href={`/products/${product.slug}`}
                      onClick={() => setProductsDropdownOpen(false)}
                      className="flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#0083b0] hover:bg-cyan-50/60 transition-colors"
                    >
                      <span>{product.title}</span>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Dropdown (Compact Small Dropdown) */}
            <div 
              className="relative py-4"
              onMouseEnter={() => setResourcesDropdownOpen(true)}
              onMouseLeave={() => setResourcesDropdownOpen(false)}
            >
              <button 
                className="flex items-center text-gray-700 hover:text-[#0083b0] font-medium text-base transition-colors focus:outline-none focus:ring-0 cursor-pointer"
              >
                Resources <ChevronDown className={`ml-1.5 w-4 h-4 transition-transform duration-200 ${resourcesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {resourcesDropdownOpen && (
                <div className="absolute top-full left-0 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {navbarResources.map((resource, index) => (
                    <Link
                      key={index}
                      href={`/resources/${resource.slug}`}
                      onClick={() => setResourcesDropdownOpen(false)}
                      className="flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#0083b0] hover:bg-cyan-50/60 transition-colors"
                    >
                      <span>{resource.title}</span>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/#about" className="text-gray-700 hover:text-[#0083b0] font-medium text-base transition-colors focus:outline-none focus:ring-0">
              About Us
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-[#0083b0] font-medium text-base transition-colors focus:outline-none focus:ring-0">
              Contact Us
            </Link>
          </div>

          {/* Talk to Expert Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={handleChatConnect}
              className="bg-[#0a1128] hover:bg-[#0083b0] text-white px-6 py-3 rounded-full font-medium text-sm transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer flex items-center gap-2 focus:outline-none focus:ring-0"
            >
              Talk to Expert <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-0"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3 max-h-[80vh] overflow-y-auto shadow-xl">
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between py-3 px-3 text-base font-semibold text-gray-800 hover:bg-gray-50 rounded-lg focus:outline-none focus:ring-0"
            >
              <span>Services</span>
              <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {mobileServicesOpen && (
              <div className="pl-4 space-y-1 mt-1 border-l-2 border-cyan-500 ml-3">
                {navData.servicesMenu.map((service, index) => (
                  <Link
                    key={index}
                    href={`/services/${service.slug}`}
                    onClick={() => {
                      setIsOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    className="flex items-center justify-between py-2.5 px-3 text-sm text-gray-600 hover:text-[#0083b0] hover:bg-gray-50 rounded-lg focus:outline-none focus:ring-0"
                  >
                    <span>{service.title}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Products Dropdown */}
          <div>
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="w-full flex items-center justify-between py-3 px-3 text-base font-semibold text-gray-800 hover:bg-gray-50 rounded-lg focus:outline-none focus:ring-0"
            >
              <span>Products</span>
              <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180' : ''}`} />
            </button>

            {mobileProductsOpen && (
              <div className="pl-4 space-y-1 mt-1 border-l-2 border-cyan-500 ml-3">
                {productsNavData.map((product, index) => (
                  <Link
                    key={index}
                    href={`/products/${product.slug}`}
                    onClick={() => {
                      setIsOpen(false);
                      setMobileProductsOpen(false);
                    }}
                    className="flex items-center justify-between py-2.5 px-3 text-sm text-gray-600 hover:text-[#0083b0] hover:bg-gray-50 rounded-lg focus:outline-none focus:ring-0"
                  >
                    <span>{product.title}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Resources Dropdown */}
          <div>
            <button
              onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
              className="w-full flex items-center justify-between py-3 px-3 text-base font-semibold text-gray-800 hover:bg-gray-50 rounded-lg focus:outline-none focus:ring-0"
            >
              <span>Resources</span>
              <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
            </button>

            {mobileResourcesOpen && (
              <div className="pl-4 space-y-1 mt-1 border-l-2 border-cyan-500 ml-3">
                {navbarResources.map((resource, index) => (
                  <Link
                    key={index}
                    href={`/resources/${resource.slug}`}
                    onClick={() => {
                      setIsOpen(false);
                      setMobileResourcesOpen(false);
                    }}
                    className="flex items-center justify-between py-2.5 px-3 text-sm text-gray-600 hover:text-[#0083b0] hover:bg-gray-50 rounded-lg focus:outline-none focus:ring-0"
                  >
                    <span>{resource.title}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/#about"
            onClick={() => setIsOpen(false)}
            className="block py-3 px-3 text-base font-semibold text-gray-800 hover:bg-gray-50 rounded-lg focus:outline-none focus:ring-0"
          >
            About Us
          </Link>
          <Link
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className="block py-3 px-3 text-base font-semibold text-gray-800 hover:bg-gray-50 rounded-lg focus:outline-none focus:ring-0"
          >
            Contact Us
          </Link>

          <div className="pt-4">
            <button
              onClick={() => { setIsOpen(false); handleChatConnect(); }}
              className="w-full text-center bg-[#0a1128] hover:bg-[#0083b0] text-white py-3 rounded-xl font-medium text-base shadow-md transition-colors cursor-pointer focus:outline-none focus:ring-0"
            >
              Talk to Expert
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}