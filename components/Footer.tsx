import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-4">
             <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-500 rounded-sm flex items-center justify-center text-white font-serif font-bold text-lg">
                    H
                </div>
                <span className="text-xl font-serif font-bold tracking-tight">HAYATT</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience the finest hospitality in Sukkur. Where luxury meets tradition, ensuring your stay is nothing short of exceptional.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="about" className="hover:text-brand-500 transition-colors">About Us</a></li>
              <li><a href="rooms" className="hover:text-brand-500 transition-colors">Rooms & Suites</a></li>
              <li><a href="amenities" className="hover:text-brand-500 transition-colors">Amenities</a></li>
              <li><a href="gallery" className="hover:text-brand-500 transition-colors">Gallery</a></li>
              <li><a href="contact" className="hover:text-brand-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif">Contact Us</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Bypass Road, Near Township</li>
              <li>Sukkur, Sindh, Pakistan</li>
              <li>+92-334-294-2444</li>
              <li>hayattsuk@gmail.com</li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/p/Hotel-Hayatt-Sukkur-100088487592732/" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-500 transition-colors text-white">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/hotel.hayatt/" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-500 transition-colors text-white">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Hotel Hayatt Sukkur. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
