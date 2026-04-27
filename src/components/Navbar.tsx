'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from './ui/Button';

interface NavbarProps {
  onEnquireClick?: () => void;
}

export default function Navbar({ onEnquireClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ['stats', 'clients', 'edge', 'cat', 'how-it-works', 'faqs', 'testimonials'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
      if (window.scrollY < 100) setActiveSection('Home');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#', id: 'Home' },
    { name: 'Stats', href: '#stats', id: 'stats' },
    { name: 'Clients', href: '#clients', id: 'clients' },
    { name: 'Accredian Edge', href: '#edge', id: 'edge' },
    { name: 'CAT', href: '#cat', id: 'cat' },
    { name: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
    { name: 'FAQs', href: '#faqs', id: 'faqs' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-2' : 'bg-white py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="text-2xl font-black text-[#1e6ef2] leading-none tracking-tighter">accredian</span>
          <span className="text-[8px] font-medium text-gray-400 uppercase tracking-[0.2em] leading-none mt-1">credentials that matter</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-bold transition-all duration-300 relative py-1 ${activeSection === link.id ? 'text-[#1e6ef2]' : 'text-gray-700 hover:text-[#1e6ef2]'}`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1e6ef2] rounded-full"></span>
              )}
            </a>
          ))}

        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-gray-600 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute top-full left-0 right-0 p-6 shadow-2xl flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-lg font-bold py-2 px-4 rounded-xl transition-colors ${activeSection === link.id ? 'bg-blue-50 text-[#1e6ef2]' : 'text-gray-700 hover:bg-gray-50'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
