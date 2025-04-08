
import React from 'react';
import { Scissors, Sprout, Tree, CloudRain, Shovel, Calendar } from 'lucide-react';

const servicesList = [
  {
    title: "Lawn Mowing",
    description: "Regular mowing to keep your lawn healthy, neat, and at the ideal height for your grass type.",
    icon: <Scissors className="h-10 w-10 text-brand-orange" />
  },
  {
    title: "Lawn Fertilization",
    description: "Custom fertilization schedules to nourish your lawn and promote thick, healthy grass growth.",
    icon: <Sprout className="h-10 w-10 text-brand-orange" />
  },
  {
    title: "Tree & Shrub Care",
    description: "Professional pruning, shaping, and maintenance of trees and shrubs to enhance your landscape.",
    icon: <Tree className="h-10 w-10 text-brand-orange" />
  },
  {
    title: "Irrigation Services",
    description: "Installation, repair, and maintenance of irrigation systems for efficient lawn watering.",
    icon: <CloudRain className="h-10 w-10 text-brand-orange" />
  },
  {
    title: "Garden Bed Maintenance",
    description: "Weeding, mulching, and plant care to keep your garden beds looking beautiful year-round.",
    icon: <Shovel className="h-10 w-10 text-brand-orange" />
  },
  {
    title: "Seasonal Cleanup",
    description: "Spring and fall cleanup services including leaf removal, dethatching, and winter preparation.",
    icon: <Calendar className="h-10 w-10 text-brand-orange" />
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span className="text-brand-green">Our</span> Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            We provide comprehensive lawn care solutions to keep your outdoor spaces pristine.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="mb-4 p-2 inline-block rounded-full bg-brand-orange/10">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
