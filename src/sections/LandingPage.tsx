'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Clients from '@/components/Clients';
import AccredianEdge from '@/components/AccredianEdge';
import DomainExpertise from '@/components/DomainExpertise';
import CourseSegmentation from '@/components/CourseSegmentation';
import CATFramework from '@/components/CATFramework';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQs from '@/components/FAQs';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import EnquiryModal from '@/components/EnquiryModal';

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onEnquireClick={openModal} />
      <main>
        <Hero onEnquireClick={openModal} />
        <Stats />
        <Clients />
        <AccredianEdge />
        <DomainExpertise />
        <CourseSegmentation />
        <CATFramework />
        <HowItWorks />
        <Testimonials />
        <FAQs onEnquireClick={openModal} />
        <CTA onEnquireClick={openModal} />
      </main>
      <Footer onEnquireClick={openModal} />
      
      <EnquiryModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
