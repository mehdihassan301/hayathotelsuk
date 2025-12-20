
import React, { useState } from 'react';
import Section from '../components/Section';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Wifi, Utensils, Car, Clock, Shirt, Coffee, Plane, 
  ShieldCheck, Wind, Key, Smartphone, Sparkles, 
  CheckCircle, Shield, Droplets, Thermometer, Box
} from 'lucide-react';
// Fixed: Ensure standard import for Link from react-router-dom
import { Link } from 'react-router-dom';

const amenityGroups = [
  {
    category: "Internet & Connectivity",
    items: [
      { icon: Wifi, title: "Free Wi-Fi in all rooms!", desc: "Seamless high-speed internet access." },
      { icon: Smartphone, title: "Internet access", desc: "Available throughout public and private areas." },
    ]
  },
  {
    category: "Dining & Refreshments",
    items: [
      { icon: Utensils, title: "Breakfast [Buffet]", desc: "A wide variety of local and continental dishes." },
      { icon: Coffee, title: "Free Breakfast", desc: "Complimentary morning meal for all guests." },
      { icon: Droplets, title: "Nestle Bottled Water", desc: "Complimentary premium water in every room." },
      { icon: Utensils, title: "BBQ Facility", desc: "Special outdoor dining arrangements upon request." },
    ]
  },
  {
    category: "Cleanliness & Safety",
    items: [
      { icon: ShieldCheck, title: "Free face masks", desc: "Health kits available for all guests." },
      { icon: Sparkles, title: "Hand sanitizer", desc: "Dispensing stations at all entry points." },
      { icon: CheckCircle, title: "Daily housekeeping", desc: "Meticulous room cleaning every morning." },
      { icon: Droplets, title: "Cleaning products", desc: "Eco-friendly and medical-grade sanitizers." },
    ]
  },
  {
    category: "Service & Convenience",
    items: [
      { icon: Smartphone, title: "Contactless check-in/out", desc: "Fast, digital process via your smartphone." },
      { icon: Shirt, title: "Laundry & Iron Pressing", desc: "Professional same-day clothing care." },
      { icon: Clock, title: "Front desk [24-hour]", desc: "Concierge service available round the clock." },
      { icon: Clock, title: "Check-in [24-hour]", desc: "Flexible arrival times for your convenience." },
    ]
  },
  {
    category: "Access & Security",
    items: [
      { icon: Key, title: "Keyless access", desc: "Modern digital entry for enhanced security." },
      { icon: Shield, title: "Security [24-hour]", desc: "On-site guards and 24/7 CCTV surveillance." },
      { icon: CheckCircle, title: "Check-in/out [private]", desc: "Discreet and personalized arrival experience." },
    ]
  },
  {
    category: "Comfort & In-Room",
    items: [
      { icon: Wind, title: "Air conditioning", desc: "Individual split units for perfect climate control." },
      { icon: Thermometer, title: "Individual AC control", desc: "Set your room temperature exactly how you like it." },
      { icon: Box, title: "Refrigerator", desc: "Mini-fridge stocked with refreshments." },
    ]
  },
  {
    category: "Travel & Parking",
    items: [
      { icon: Plane, title: "Airport transfer", desc: "Reliable shuttle service to Sukkur Airport." },
      { icon: Car, title: "Car park [on-site]", desc: "Spacious and secure parking for all guests." },
    ]
  }
];

const AmenityCard: React.FC<{ item: any }> = ({ item }) => {
  const [isActive, setIsActive] = useState(false);

  // Use any to bypass Framer Motion type mismatch in this environment
  const MotionDiv = motion.div as any;

  return (
    <div 
      onClick={() => setIsActive(!isActive)}
      className={`bg-white dark:bg-dark-900 p-6 rounded-xl shadow-sm border transition-all cursor-pointer select-none ${
        isActive 
          ? 'border-brand-500 shadow-md ring-1 ring-brand-500/20' 
          : 'border-transparent hover:border-brand-500/30'
      }`}
    >
      <MotionDiv 
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 ${
          isActive 
            ? 'bg-brand-500 text-white' 
            : 'bg-brand-50 dark:bg-dark-800 text-brand-500 hover:bg-brand-500 hover:text-white'
        }`}
      >
        <item.icon size={24} />
      </MotionDiv>
      <h3 className={`text-md font-bold mb-2 leading-tight transition-colors ${
        isActive ? 'text-brand-600 dark:text-brand-400' : 'text-gray-900 dark:text-white'
      }`}>
        {item.title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{item.desc}</p>
    </div>
  );
};

const AmenitiesPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Premium Hotel Amenities | Wi-Fi, Breakfast & BBQ at Hotel Hayatt" 
        description="Discover the wide range of amenities at Hotel Hayatt Sukkur: 24h Front Desk, high-speed Wi-Fi, BBQ facilities, laundry, and secure on-site parking."
        keywords="hotel amenities sukkur, free wifi sukkur hotel, hotel with bbq sukkur, airport transfer sukkur, hotel parking sukkur"
      />
      <PageHero 
        title="Amenities & Services" 
        subtitle="Every Detail Crafted for Your Perfection"
        image="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      <Section className="bg-gray-50 dark:bg-dark-800">
        <div className="space-y-16">
          {amenityGroups.map((group, groupIdx) => (
            <div key={groupIdx}>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white whitespace-nowrap">{group.category}</h2>
                <div className="h-[1px] w-full bg-gray-200 dark:bg-dark-700"></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {group.items.map((item, index) => (
                  <AmenityCard key={index} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white dark:bg-dark-900 text-center">
         <div className="max-w-3xl mx-auto py-12 px-6 rounded-2xl bg-brand-50 dark:bg-dark-800">
            <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-6">Experience the Hyatt Quality</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">From keyless entry to our famous buffet breakfast, we've integrated every modern convenience into your stay in Sukkur.</p>
            <Link to="/contact" className="inline-block px-10 py-4 bg-brand-500 hover:bg-brand-600 text-white font-bold uppercase tracking-widest text-sm rounded-sm transition-all shadow-lg hover:shadow-xl">
               Book Your Stay Now
            </Link>
         </div>
      </Section>
    </>
  );
};

export default AmenitiesPage;
