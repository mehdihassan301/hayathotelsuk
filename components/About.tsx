import React from 'react';
import Section from './Section';
import { MapPin, Star, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-white dark:bg-dark-900">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-brand-500 mb-2">
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <span className="text-gray-500 dark:text-gray-400 text-sm ml-2 font-medium uppercase tracking-widest">Premium 3-Star Hotel</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white leading-tight">
            A Sanctuary of <br />
            <span className="text-brand-500">Elegance & Calm</span>
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            Located conveniently on Bypass Road, near Sukkur Township, Hotel Hayatt Sukkur stands as a beacon of hospitality in the historic city of Sukkur. We blend modern luxury with traditional Sindhi hospitality to create an unforgettable experience.
          </p>
          
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Whether you are visiting for business or leisure, our prime location offers easy access to the Sukkur Airport and major attractions like the Lansdowne Bridge and Sadhu Bela.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-6">
            <div className="flex items-start gap-3">
              <div className="p-3 bg-brand-50 dark:bg-dark-800 rounded-lg text-brand-600">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">Prime Location</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Easy airport & city access</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-3 bg-brand-50 dark:bg-dark-800 rounded-lg text-brand-600">
                <Award size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">Top Rated</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Best in class service</p>
              </div>
            </div>
          </div>
        </div>

        {/* Images Composition */}
        <div className="relative h-[500px] hidden md:block">
          <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-lg overflow-hidden shadow-2xl z-10">
            <img 
              src="/images/about_lobby.jpg" 
              alt="Hotel Lobby" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-lg overflow-hidden shadow-2xl z-20 border-8 border-white dark:border-dark-900">
            <img 
              src="/images/about_room_detail.jpg" 
              alt="Room Detail" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-dots-pattern opacity-20"></div>
        </div>
      </div>
    </Section>
  );
};

export default About;