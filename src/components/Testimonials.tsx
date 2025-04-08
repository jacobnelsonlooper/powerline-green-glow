
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    content: "Powerline Maintenance has been taking care of our lawn for over 2 years now. The team is always punctual, professional, and our yard has never looked better!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3"
  },
  {
    name: "Michael Rodriguez",
    role: "Business Owner",
    content: "As a business owner, curb appeal matters. Powerline handles all our commercial properties, and they're consistent, reliable, and detail-oriented. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3"
  },
  {
    name: "Lisa Thompson",
    role: "Property Manager",
    content: "Managing multiple properties is challenging, but Powerline Maintenance makes the landscaping part effortless. Their team adapts to our needs and exceeds expectations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our <span className="text-brand-green">Clients</span> Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Don't just take our word for it - hear from our satisfied customers.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col h-full"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="h-12 w-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <h4 className="text-lg font-medium text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-orange text-brand-orange" />
                ))}
              </div>
              <p className="text-gray-600 flex-grow italic">&ldquo;{testimonial.content}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
