'use client';

import { useState, useEffect } from 'react';
import Button from './ui/Button';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-[32px] overflow-hidden max-w-5xl w-full flex flex-col md:flex-row shadow-2xl relative animate-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 z-50 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>

        {/* Left Side: Image */}
        <div className="hidden md:block md:w-[45%] relative">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
            alt="Office" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1e6ef2]/10 mix-blend-multiply"></div>
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 p-8 md:p-12 overflow-y-auto max-h-[90vh]">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">Enquire Now</h2>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1">
              <input 
                type="text" 
                placeholder="Enter Name" 
                className="w-full border-b border-gray-200 py-3 focus:border-[#1e6ef2] outline-none transition-colors text-lg"
              />
            </div>

            <div className="space-y-1">
              <input 
                type="email" 
                placeholder="Enter Email" 
                className="w-full border-b border-gray-200 py-3 focus:border-[#1e6ef2] outline-none transition-colors text-lg"
              />
            </div>

            <div className="flex gap-4 border-b border-gray-200 py-3">
              <div className="flex items-center gap-2 pr-4 border-r border-gray-200">
                <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-5 h-auto" />
                <span className="font-medium text-gray-700">+91</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="m6 9 6 6 6-6"/></svg>
              </div>
              <input 
                type="tel" 
                placeholder="Enter Phone Number" 
                className="flex-1 outline-none transition-colors text-lg"
              />
            </div>

            <div className="space-y-1">
              <input 
                type="text" 
                placeholder="Enter company name" 
                className="w-full border-b border-gray-200 py-3 focus:border-[#1e6ef2] outline-none transition-colors text-lg"
              />
            </div>

            <div className="relative">
              <select className="w-full border-b border-gray-200 py-3 focus:border-[#1e6ef2] outline-none transition-colors text-lg appearance-none bg-transparent text-gray-400">
                <option value="">Select Domain</option>
                <option value="ds">Data Science</option>
                <option value="ai">AI & ML</option>
                <option value="pm">Product Management</option>
              </select>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"><path d="m6 9 6 6 6-6"/></svg>
            </div>

            <div className="space-y-1">
              <input 
                type="number" 
                placeholder="Enter No. of candidates" 
                className="w-full border-b border-gray-200 py-3 focus:border-[#1e6ef2] outline-none transition-colors text-lg"
              />
            </div>

            <div className="relative">
              <select className="w-full border-b border-gray-200 py-3 focus:border-[#1e6ef2] outline-none transition-colors text-lg appearance-none bg-transparent text-gray-400">
                <option value="">Select Mode of Delivery *</option>
                <option value="online">Online Live</option>
                <option value="in-person">In-Person</option>
                <option value="blended">Blended</option>
              </select>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"><path d="m6 9 6 6 6-6"/></svg>
            </div>

            <div className="pt-6">
              <Button size="lg" className="w-full bg-[#1e6ef2] hover:bg-[#1a5ed9] py-4 text-xl font-bold rounded-xl shadow-xl">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
