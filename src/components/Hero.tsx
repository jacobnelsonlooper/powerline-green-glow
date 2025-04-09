
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-brand-green/10">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 lg:w-full">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Professional</span>
                <span className="block text-brand-green">Lawn Maintenance</span>
                <span className="block text-brand-orange">Services</span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Transform your outdoor space with our expert lawn maintenance services. 
                We deliver quality, reliability, and exceptional results for residential and commercial properties.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div>
                  <Button
                    className="rounded-full shadow px-8 py-6 bg-brand-green hover:bg-brand-green-light text-white"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Started
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button
                    className="rounded-full px-8 py-6 bg-brand-orange hover:bg-brand-orange/90 text-white"
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Our Services
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full bg-brand-orange/20 sm:h-72 md:h-96 lg:w-full lg:h-full">
          <img
            className="h-full w-full object-cover mix-blend-multiply"
            src="/lovable-uploads/66dfa6cb-4c59-44ba-a72a-1aa3aca4624c.png"
            alt="Perfectly striped lawn with landscaped garden beds and trees"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
