
import React from 'react';
import Section from './Section';
import { Room } from '../types';
import { Check } from 'lucide-react';
// Fixed: Explicitly import Link from react-router-dom
import { Link } from 'react-router-dom';

const rooms: Room[] = [
  {
    id: 'standard',
    name: 'Standard Room',
    description: 'A cozy and functional room providing essential comfort with modern design for solo travelers or professionals.',
    price: 11000,
    amenities: [
      'Free Wi-Fi', 
      'Nestle Bottled Water', 
      'Complimentary Breakfast', 
      'Daily Housekeeping', 
      'Iron Pressing', 
      '24-hour Security'
    ],
    image: '/images/room_standard.jpg'
  },
  {
    id: 'deluxe',
    name: 'Deluxe King Room',
    description: 'Spacious and elegantly furnished, offering a perfect blend of comfort and style with premium bedding.',
    price: 14000,
    amenities: [
      'Free Wi-Fi', 
      'Breakfast [Buffet]', 
      'Nestle Bottled Water', 
      'Cleaning & Ironing', 
      'Airport Transfer', 
      'Front Desk [24-hour]'
    ],
    image: '/images/room_deluxe.jpg'
  },
  {
    id: 'twin',
    name: 'Twin Sharing Room',
    description: 'Perfect for colleagues or friends, featuring two plush twin beds and a dedicated workspace.',
    price: 11000,
    amenities: [
      'Free Wi-Fi', 
      'Nestle Bottled Water', 
      'Complimentary Breakfast', 
      'Daily Housekeeping', 
      'Iron Pressing', 
      'On-site Car Park'
    ],
    image: '/images/room_twin.jpg'
  }
];

const Rooms: React.FC = () => {
  return (
    <Section id="rooms" className="bg-gray-50 dark:bg-dark-800">
      <div className="text-center mb-16">
        <span className="text-brand-500 font-bold tracking-widest uppercase text-sm">Accommodation</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mt-3">Rooms & Suites</h2>
        <div className="w-20 h-1 bg-brand-500 mx-auto mt-6"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room) => (
          <div key={room.id} className="group bg-white dark:bg-dark-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 dark:border-dark-700">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={room.image} 
                alt={room.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-dark-800/90 backdrop-blur text-gray-900 dark:text-white px-3 py-1 rounded-sm font-bold text-sm shadow-sm">
                PKR {room.price.toLocaleString()} <span className="text-xs font-normal text-gray-500 dark:text-gray-400">/ night</span>
              </div>
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-2">{room.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow leading-relaxed">{room.description}</p>
              
              <div className="space-y-4">
                <div className="border-t border-gray-100 dark:border-dark-700 pt-4">
                  <div className="text-[9px] uppercase tracking-widest font-bold text-brand-500 mb-3">Room Amenities</div>
                  <div className="grid grid-cols-2 gap-2">
                    {room.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[10px] uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
                        <Check size={12} className="text-brand-500 shrink-0" />
                        <span className="truncate">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link to="/contact" state={{ selectedRoom: room.name }} className="block w-full text-center py-3 border border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white transition-colors rounded-sm font-semibold uppercase text-xs tracking-wider">
                  Reserve Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/rooms" className="text-brand-600 dark:text-brand-400 font-bold uppercase tracking-widest text-sm border-b-2 border-brand-500 pb-1 hover:text-brand-700 transition-colors">
          Explore All Accommodations
        </Link>
      </div>
    </Section>
  );
};

export default Rooms;
