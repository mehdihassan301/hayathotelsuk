import React from 'react';
import Section from './Section';
import { Wifi, Utensils, Car, Clock, Shirt, Coffee, Plane, ShieldCheck } from 'lucide-react';

const amenitiesList = [
  { icon: Clock, title: "24-Hour Front Desk", desc: "Always here to assist you" },
  { icon: Wifi, title: "High-Speed Wi-Fi", desc: "Seamless connectivity throughout" },
  { icon: Plane, title: "Airport Transfer", desc: "Hassle-free pick & drop" },
  { icon: Utensils, title: "In-House Restaurant", desc: "Local & continental delicacies" },
  { icon: Coffee, title: "Room Service", desc: "Dining in comfort" },
  { icon: Shirt, title: "Laundry Service", desc: "Same-day cleaning available" },
  { icon: Utensils, title: "BBQ Facility", desc: "Outdoor dining experience" }, // Reusing Utensils for BBQ
  { icon: Car, title: "Car Rental", desc: "Explore Sukkur with ease" },
];

const Amenities: React.FC = () => {
  return (
    <Section id="amenities" className="bg-white dark:bg-dark-900">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <span className="text-brand-500 font-bold tracking-widest uppercase text-sm">Our Facilities</span>
          <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mt-3 mb-6">Designed for Your Comfort</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            At Hotel Hayatt Sukkur, we understand that true luxury lies in the details. We've curated a comprehensive suite of amenities to ensure your stay is as effortless as it is memorable.
          </p>
          <a href="#contact" className="inline-flex items-center text-brand-600 hover:text-brand-700 font-semibold border-b-2 border-brand-500 pb-1">
            Contact for special requests
          </a>
        </div>

        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-10">
          {amenitiesList.map((item, index) => (
            <div key={index} className="flex gap-4 items-start group">
              <div className="w-12 h-12 rounded-full bg-brand-50 dark:bg-dark-800 flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300 shrink-0">
                <item.icon size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-brand-500 transition-colors">{item.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Amenities;