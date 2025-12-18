import React from 'react';
import Section from './Section';
import { Quote, Star } from 'lucide-react';

const reviews = [
  {
    name: "Ahmed Khan",
    location: "Karachi",
    comment: "The best hotel experience I've had in Sukkur. The staff was incredibly welcoming, and the room was spotless. Highly recommended for business travelers.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    location: "London, UK",
    comment: "A hidden gem. The blend of modern amenities with local hospitality was perfect. The airport transfer service was seamless.",
    rating: 5
  },
  {
    name: "Usman Ali",
    location: "Lahore",
    comment: "Great location near the township. The food at the restaurant was delicious, specifically the BBQ. Will definitely stay here again.",
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  return (
    <Section className="bg-white dark:bg-dark-900 border-t border-gray-100 dark:border-dark-800">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white">Guest Voices</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">What our valued guests have to say</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review, idx) => (
          <div key={idx} className="bg-gray-50 dark:bg-dark-800 p-8 rounded-xl relative">
            <Quote className="absolute top-6 right-6 text-brand-200 dark:text-dark-700 w-12 h-12" />
            <div className="flex gap-1 mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic mb-6 relative z-10 leading-relaxed">"{review.comment}"</p>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white">{review.name}</h4>
              <span className="text-xs text-brand-500 uppercase font-medium">{review.location}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;