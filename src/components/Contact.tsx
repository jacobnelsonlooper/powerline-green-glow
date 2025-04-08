
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would send the form data to your backend here
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Message Sent",
      description: "Thanks for reaching out. We'll contact you soon!",
      duration: 5000,
    });
    
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Phone size={24} className="text-brand-orange" />,
      title: "Phone",
      details: "(555) 123-4567",
    },
    {
      icon: <Mail size={24} className="text-brand-orange" />,
      title: "Email",
      details: "info@powerlinemaintenance.com",
    },
    {
      icon: <MapPin size={24} className="text-brand-orange" />,
      title: "Address",
      details: "123 Lawn Avenue, Greenville, 54321",
    },
    {
      icon: <Clock size={24} className="text-brand-orange" />,
      title: "Hours",
      details: "Mon-Fri: 8am-6pm, Sat: 9am-4pm",
    },
  ];

  return (
    <section id="contact" className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Get In <span className="text-brand-green">Touch</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Contact us for a free consultation and quote for your lawn maintenance needs.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mb-10 lg:mb-0">
            <div className="prose max-w-none">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">{item.icon}</div>
                    <div className="ml-4">
                      <p className="text-lg font-medium text-gray-900">{item.title}</p>
                      <p className="text-gray-600">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-10 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Company Location"
                className="w-full h-64"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50000!2d-74.0059!3d40.7127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQwJzQ1LjciTiA3NMKwMDAnMjEuMiJX!5e0!3m2!1sen!2sus!4v1619107599641!5m2!1sen!2sus"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Your name"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Your phone"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full"
                  placeholder="Describe your lawn maintenance needs"
                />
              </div>
              
              <div>
                <Button 
                  type="submit" 
                  className="w-full bg-brand-green hover:bg-brand-green-light"
                >
                  Submit Request
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
