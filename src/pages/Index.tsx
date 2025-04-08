
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Log to check if the page is loading correctly
    console.log('Index page loaded');
    // Check if image exists
    const img = new Image();
    img.src = '/lovable-uploads/66dfa6cb-4c59-44ba-a72a-1aa3aca4624c.png';
    img.onload = () => console.log('Hero image loaded successfully');
    img.onerror = () => console.error('Failed to load hero image');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
