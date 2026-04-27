'use client';

import { useState } from 'react';
import Section from './ui/Section';
import Button from './ui/Button';

export default function FAQs({ onEnquireClick }: { onEnquireClick?: () => void }) {
  const [activeTab, setActiveTab] = useState('About the Course');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const tabs = ['About the Course', 'About the Delivery', 'Miscellaneous'];
  
  const faqsByTab: Record<string, { q: string, a: string }[]> = {
    'About the Course': [
      { q: "What types of corporate training programs does Accredian offer?", a: "Accredian offers specialized programs in Data Science, AI, Product Management, and Leadership, tailored specifically for enterprise digital transformation." },
      { q: "What domain specializations are available?", a: "We specialize in Gen-AI, Fintech, Digital Enterprise, Operations Excellence, and Product Innovation Hubs." }
    ],
    'About the Delivery': [
      { q: "How are the sessions delivered?", a: "We offer online live, in-person, and blended learning models to suit your organization's schedule." },
      { q: "Is there a dedicated LMS provided?", a: "Yes, every partner gets access to our state-of-the-art LMS for seamless tracking and learning." }
    ],
    'Miscellaneous': [
      { q: "What is the typical batch size?", a: "We recommend batch sizes of 15-30 for optimal interaction, but can scale based on needs." },
      { q: "Do you provide certification?", a: "Yes, all successful participants receive industry-recognized credentials from Accredian." }
    ]
  };

  return (
    <Section id="faqs" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-20">
          Frequently Asked <span className="text-[#1e6ef2]">Questions</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column: Tabs */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setOpenIndex(0);
                }}
                className={`px-8 py-4 rounded-xl text-left font-bold transition-all duration-300 shadow-sm border ${activeTab === tab ? 'bg-white text-[#1e6ef2] border-[#1e6ef2] shadow-xl translate-x-2' : 'bg-white text-gray-500 border-gray-100 hover:border-gray-300'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:w-2/3 space-y-6">
            {faqsByTab[activeTab].map((faq, index) => (
              <div key={index} className="border-b border-gray-100">
                <button
                  className="w-full py-6 flex items-center justify-between text-left group"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-xl font-bold text-[#1a1a1a] group-hover:text-[#1e6ef2] transition-colors">{faq.q}</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-[#1e6ef2]' : 'text-gray-400'}`}
                  >
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <Button 
            size="lg" 
            onClick={onEnquireClick}
            className="bg-[#1e6ef2] hover:bg-[#1a5ed9] px-12 py-4 text-xl font-bold rounded-xl shadow-lg transition-transform hover:scale-105"
          >
            Enquire Now
          </Button>
        </div>
      </div>
    </Section>
  );
}
