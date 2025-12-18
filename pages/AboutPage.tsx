import React from 'react';
import Section from '../components/Section';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { Target, Heart, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="About Hotel Hayatt Sukkur | Our Story & Premium Hospitality" 
        description="Learn about Hotel Hayatt Sukkur's mission to redefine luxury in Sukkur. Discover our 3-star distinction and commitment to traditional Sindhi hospitality."
        keywords="about hotel hayatt sukkur, sukkur hotel history, 3 star hotel sukkur, luxury hospitality sukkur"
      />
      <PageHero 
        title="About Us" 
        subtitle="A Legacy of Hospitality in the Heart of Sindh"
        image="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      <Section className="bg-white dark:bg-dark-900">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-brand-500 font-bold tracking-widest uppercase text-sm">Our Story</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mt-4 mb-6">
            Redefining Luxury in Sukkur
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            Established with a vision to bring world-class hospitality to the historic city of Sukkur, Hotel Hayatt stands as a testament to elegance and comfort. Our strategic location on Bypass Road, adjacent to the vibrant Sukkur Township, places guests at the intersection of business and leisure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
           <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/images/about_reception.jpg" 
                alt="Hotel Reception" 
                className="w-full h-full object-cover"
              />
           </div>
           <div className="space-y-8">
              <div className="flex gap-4">
                 <div className="p-3 bg-brand-50 dark:bg-dark-800 text-brand-500 rounded-full h-fit">
                    <Target size={24} />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Our Mission</h3>
                    <p className="text-gray-600 dark:text-gray-400">To provide an unparalleled guest experience by blending traditional Sindhi hospitality with modern luxuries, ensuring every guest feels at home.</p>
                 </div>
              </div>
              <div className="flex gap-4">
                 <div className="p-3 bg-brand-50 dark:bg-dark-800 text-brand-500 rounded-full h-fit">
                    <Heart size={24} />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Our Values</h3>
                    <p className="text-gray-600 dark:text-gray-400">Integrity, Excellence, and Care. We believe in serving our guests with the utmost respect and dedication to detail.</p>
                 </div>
              </div>
              <div className="flex gap-4">
                 <div className="p-3 bg-brand-50 dark:bg-dark-800 text-brand-500 rounded-full h-fit">
                    <Award size={24} />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">3-Star Distinction</h3>
                    <p className="text-gray-600 dark:text-gray-400">Proudly rated as a premium 3-star establishment, we offer amenities that rival top-tier luxury hotels at exceptional value.</p>
                 </div>
              </div>
           </div>
        </div>
      </Section>
    </>
  );
};

export default AboutPage;