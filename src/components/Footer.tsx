
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <span className="text-brand-green font-bold text-xl">POWERLINE</span>
              <span className="text-brand-orange font-bold text-xl ml-2">MAINTENANCE</span>
            </div>
            <p className="mt-4 text-gray-300 max-w-md">
              Professional lawn maintenance services for residential and commercial properties. 
              We're dedicated to keeping your outdoor spaces looking their best year-round.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-green">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-green">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-green">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-green">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Services</h3>
            <ul className="mt-4 space-y-2">
              {['Lawn Mowing', 'Lawn Fertilization', 'Tree & Shrub Care', 'Irrigation Services', 'Garden Bed Maintenance', 'Seasonal Cleanup'].map((item, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-300 hover:text-brand-orange">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {[
                { name: 'Home', href: '#' },
                { name: 'About', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'Contact', href: '#contact' }
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-gray-300 hover:text-brand-orange">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {currentYear} Powerline Maintenance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
