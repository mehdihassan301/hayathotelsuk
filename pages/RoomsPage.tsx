
import React from 'react';
import Section from '../components/Section';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { Check } from 'lucide-react';
// Fixed: Explicitly import Link from react-router-dom
import { Link } from 'react-router-dom';
import { Room } from '../types';

const roomsData: Room[] = [
  {
    id: 'standard',
    name: 'Standard Room',
    description: 'Our most popular choice for solo travelers and business guests. A clean, modern space that prioritizes comfort and essential high-quality facilities.',
    price: 11000,
    amenities: [
      'Free Wi-Fi (all rooms)', 
      'Nestle Bottled Water', 
      'Complimentary Breakfast', 
      'Daily Housekeeping', 
      'Iron Pressing Service', 
      'Keyless Access',
      'On-site Car Park'
    ],
    image: '/images/room_standard.jpg'
  },
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    description: 'Spacious and elegantly furnished, offering a perfect blend of comfort and style. Features a premium king-size bed and upgraded service access.',
    price: 14000,
    amenities: [
      'Free Wi-Fi (all rooms)', 
      'Breakfast [Buffet]', 
      'Nestle Bottled Water', 
      'Iron Pressing Service', 
      'Refrigerator', 
      'Front Desk [24-hour]',
      'Private Check-in'
    ],
    image: '/images/room_deluxe.jpg'
  },
  {
    id: 'twin',
    name: 'Twin Sharing Room',
    description: 'Designed for friends or colleagues traveling together, featuring two plush twin beds and a dedicated workspace for productive stays.',
    price: 11000,
    amenities: [
      'Free Wi-Fi (all rooms)', 
      'Nestle Bottled Water', 
      'Complimentary Breakfast', 
      'Daily Housekeeping', 
      'Iron Pressing Service', 
      'Cleaning Products',
      'Contactless Check-in'
    ],
    image: '/images/room_twin.jpg'
  },
  {
    id: 'semi-deluxe',
    name: 'Semi Deluxe Room',
    description: 'The perfect home away from home for families. Extra space with multiple beds and kid-friendly atmosphere near Sukkur Township.',
    price: 11000,
    amenities: [
      'Free Wi-Fi (all rooms)', 
      'Complimentary Breakfast', 
      'Nestle Bottled Water', 
      'Daily Housekeeping', 
      'Iron Pressing Service', 
      '24-hour Security',
      'Hand Sanitizer'
    ],
    image: '/images/room_family.jpg'
  },
  {
    id: 'triple',
    name: 'Triple Bed Room',
    description: 'A premium large room catering to families or groups. Features three comfortable beds and expansive space for relaxation.',
    price: 12000,
    amenities: [
      'Free Wi-Fi (all rooms)', 
      'Breakfast [Buffet]', 
      'Nestle Bottled Water', 
      'Iron Pressing Service', 
      'Refrigerator', 
      'Airport Transfer',
      'Individual AC'
    ],
    image: '/images/room_suite.jpg'
  }
];

const RoomsPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Luxury Rooms & Suites | Hotel Hayatt Sukkur Accommodation" 
        description="Book your perfect stay at Hotel Hayatt Sukkur. Explore our Standard, Deluxe, and Family rooms equipped with AC, Wi-Fi, and premium amenities at best prices."
        keywords="hotel rooms sukkur, deluxe room sukkur, family suite sukkur, luxury accommodation price sukkur, hotel hayatt sukkur booking"
      />
      <PageHero 
        title="Rooms & Suites" 
        subtitle="Your Private Sanctuary in Sukkur"
        image="https://images.unsplash.com/photo-1590490360182-f33efe29a79d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      <Section className="bg-gray-50 dark:bg-dark-800">
        <div className="space-y-12">
          {roomsData.map((room) => (
            <div key={room.id} className="bg-white dark:bg-dark-900 rounded-xl overflow-hidden shadow-lg flex flex-col lg:flex-row border border-gray-100 dark:border-dark-700">
               <div className="lg:w-2/5 relative h-64 lg:h-auto overflow-hidden">
                 <img src={room.image} alt={room.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                 <div className="absolute top-4 left-4 bg-brand-500 text-white px-3 py-1 text-sm font-bold shadow-md rounded-sm">
                    PKR {room.price.toLocaleString()} / night
                 </div>
               </div>
               <div className="p-8 lg:p-10 lg:w-3/5 flex flex-col justify-center">
                  <h3 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">{room.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                     {room.description}
                  </p>
                  
                  {/* Amenities Section - No Capacity Shown */}
                  <div className="mb-8">
                     <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-500 mb-4 flex items-center gap-2">
                        <span className="w-8 h-[1px] bg-brand-500"></span>
                        Premium Amenities
                     </div>
                     <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6">
                        {room.amenities.map((amenity, idx) => (
                           <div key={idx} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                              <div className="w-5 h-5 rounded-full bg-brand-50 dark:bg-dark-800 flex items-center justify-center text-brand-500 shrink-0">
                                 <Check size={12} strokeWidth={3} />
                              </div>
                              <span className="truncate">{amenity}</span>
                           </div>
                        ))}
                     </div>
                  </div>
                  
                  <div className="mt-auto">
                     <Link 
                        to="/contact" 
                        state={{ selectedRoom: room.name }} 
                        className="inline-block w-full md:w-auto px-10 py-4 bg-gray-900 dark:bg-brand-500 hover:bg-brand-600 text-white font-bold uppercase tracking-widest text-xs rounded-sm transition-all shadow-lg hover:shadow-xl text-center"
                     >
                        Reserve Room
                     </Link>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </Section>
      
      <div className="bg-brand-600 py-16 px-4 text-center">
         <h2 className="text-3xl font-serif font-bold text-white mb-4">Need Help Choosing?</h2>
         <p className="text-brand-100 mb-8 max-w-2xl mx-auto">Call our 24-hour front desk for assistance with your reservation or special requests.</p>
         <a href="tel:+923342942444" className="inline-block px-10 py-4 bg-white text-brand-600 font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-gray-100 transition-colors shadow-xl">
            Call +92-334-294-2444
         </a>
      </div>
    </>
  );
};

export default RoomsPage;
