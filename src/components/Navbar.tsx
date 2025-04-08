
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-brand-green font-bold text-2xl">
                POWERLINE
              </span>
              <span className="text-brand-orange font-bold text-2xl ml-2">
                MAINTENANCE
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#services" className="text-gray-700 hover:text-brand-green px-3 py-2 font-medium">
              Services
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-brand-green px-3 py-2 font-medium">
              Testimonials
            </a>
            <a href="#about" className="text-gray-700 hover:text-brand-green px-3 py-2 font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-brand-green px-3 py-2 font-medium">
              Contact
            </a>
            <Button 
              className="bg-brand-orange hover:bg-brand-orange/90 ml-4" 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get a Quote
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a 
              href="#services" 
              className="text-gray-700 hover:text-brand-green block px-3 py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-brand-green block px-3 py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-brand-green block px-3 py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-brand-green block px-3 py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="px-3 py-2">
              <Button 
                className="w-full bg-brand-orange hover:bg-brand-orange/90" 
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
