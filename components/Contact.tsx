import React from 'react';
import Section from './Section';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-gray-50 dark:bg-dark-800">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <span className="text-brand-500 font-bold tracking-widest uppercase text-sm">Get in Touch</span>
            <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mt-3 mb-6">We'd Love to Hear From You</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Have a question about your booking, our facilities, or local attractions? Our dedicated concierge team is available 24/7 to assist you.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-white dark:bg-dark-900 p-3 shadow-md rounded-full text-brand-500">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-lg">Location</h4>
                <p className="text-gray-600 dark:text-gray-400">Bypass Road, near Sukkur Township,<br />Sukkur, Sindh, Pakistan</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white dark:bg-dark-900 p-3 shadow-md rounded-full text-brand-500">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-lg">Phone</h4>
                <a href="tel:+923342942444" className="text-gray-600 dark:text-gray-400 hover:text-brand-500 transition-colors">
                  +92-334-294-2444
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white dark:bg-dark-900 p-3 shadow-md rounded-full text-brand-500">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-lg">Email</h4>
                <a href="mailto:hayattsuk@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-brand-500 transition-colors">
                  hayattsuk@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="h-[400px] lg:h-auto w-full bg-gray-200 rounded-xl overflow-hidden shadow-lg border-4 border-white dark:border-dark-900">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0233418175458!2d68.8110784096669!3d27.716565576077887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3935d574ea5c9ff5%3A0x62ef6654b872ad4c!2sHotel%20Hayatt%20Sukkur!5e0!3m2!1sen!2s!4v1766060693665!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen={true} 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hotel Hayatt Sukkur Location"
          ></iframe>
        </div>
      </div>
    </Section>
  );
};

export default Contact;