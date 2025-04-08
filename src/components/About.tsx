
import React from 'react';
import { Check } from 'lucide-react';

const About = () => {
  const benefits = [
    "Licensed and insured professionals",
    "Eco-friendly lawn care practices",
    "Custom maintenance plans",
    "Modern equipment and techniques",
    "Consistent, reliable service",
    "Free consultations and estimates"
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About <span className="text-brand-orange">Powerline</span> <span className="text-brand-green">Maintenance</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Since 2010, Powerline Maintenance has been providing exceptional lawn care and landscaping services to residential and commercial clients. 
              Our team of skilled professionals is dedicated to transforming and maintaining beautiful outdoor spaces that enhance your property.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              We combine horticultural expertise with customer-focused service to deliver results that exceed expectations. 
              Our commitment to quality, reliability, and sustainability sets us apart in the lawn maintenance industry.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-brand-green mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-brand-orange" />
                    </div>
                    <p className="ml-3 text-base text-gray-700">{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                className="w-full h-auto"
                src="https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?q=80&w=2070&auto=format&fit=crop"
                alt="Lawn maintenance team working"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/30 to-transparent mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
