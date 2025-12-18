import React, { useState, useEffect } from 'react';
import Section from '../components/Section';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const ContactPage: React.FC = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    roomType: 'deluxe',
    message: ''
  });

  useEffect(() => {
    // If navigated from Rooms page with a selection
    if (location.state && (location.state as any).selectedRoom) {
       // Simple match to value
       const roomName = (location.state as any).selectedRoom.toLowerCase();
       let type = 'deluxe';
       if (roomName.includes('standard')) type = 'standard';
       if (roomName.includes('twin')) type = 'twin';
       if (roomName.includes('suite') && !roomName.includes('family')) type = 'suite';
       if (roomName.includes('family')) type = 'family';
       
       setFormData(prev => ({ ...prev, roomType: type }));
    }
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message/reservation request! We will contact you shortly.');
  };

  return (
    <>
      <SEO 
        title="Contact & Reservations | Book Your Stay at Hotel Hayatt Sukkur" 
        description="Get in touch with Hotel Hayatt Sukkur for room bookings and inquiries. Call us at +92-334-294-2444 or visit us on Bypass Road near Sukkur Township."
        keywords="contact hotel hayatt sukkur, sukkur hotel booking number, hotel location sukkur, book hotel sukkur online"
      />
      <PageHero 
        title="Contact Us" 
        subtitle="We're Here to Assist You 24/7"
        image="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      <Section className="bg-gray-50 dark:bg-dark-800">
        <div className="grid lg:grid-cols-2 gap-12">
           {/* Contact Form */}
           <div className="bg-white dark:bg-dark-900 p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6">Make a Reservation or Send an Inquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Your Name</label>
                   <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full p-3 bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-sm focus:border-brand-500 outline-none transition-colors" placeholder="Full Name" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Email</label>
                       <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full p-3 bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-sm focus:border-brand-500 outline-none transition-colors" placeholder="email@address.com" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Phone</label>
                       <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full p-3 bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-sm focus:border-brand-500 outline-none transition-colors" placeholder="+92..." />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Check In</label>
                       <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} className="w-full p-3 bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-sm focus:border-brand-500 outline-none transition-colors text-gray-600 dark:text-gray-300" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Check Out</label>
                       <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} className="w-full p-3 bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-sm focus:border-brand-500 outline-none transition-colors text-gray-600 dark:text-gray-300" />
                    </div>
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Interested Room</label>
                   <select name="roomType" value={formData.roomType} onChange={handleChange} className="w-full p-3 bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-sm focus:border-brand-500 outline-none transition-colors text-gray-600 dark:text-gray-300">
                      <option value="standard">Standard Room</option>
                      <option value="deluxe">Deluxe King Room</option>
                      <option value="twin">Executive Twin Room</option>
                      <option value="family">Family Suite</option>
                      <option value="suite">Hayatt Royal Suite</option>
                   </select>
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Message / Special Requests</label>
                   <textarea name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full p-3 bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-sm focus:border-brand-500 outline-none transition-colors" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-brand-500 hover:bg-brand-600 text-white font-bold uppercase tracking-widest rounded-sm transition-all shadow-lg">Submit Request</button>
              </form>
           </div>

           {/* Contact Info & Map */}
           <div className="space-y-8">
              <div className="grid gap-6">
                <div className="flex items-start gap-4 p-6 bg-white dark:bg-dark-900 rounded-xl shadow-sm">
                   <div className="p-3 bg-brand-50 dark:bg-dark-800 text-brand-500 rounded-full"><MapPin size={24} /></div>
                   <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">Visit Us</h4>
                      <p className="text-gray-600 dark:text-gray-400">Bypass Road, near Sukkur Township,<br />Sukkur, Sindh, Pakistan</p>
                   </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-white dark:bg-dark-900 rounded-xl shadow-sm">
                   <div className="p-3 bg-brand-50 dark:bg-dark-800 text-brand-500 rounded-full"><Phone size={24} /></div>
                   <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">Call Us</h4>
                      <a href="tel:+923342942444" className="text-gray-600 dark:text-gray-400 hover:text-brand-500 transition-colors">+92-334-294-2444</a>
                   </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-white dark:bg-dark-900 rounded-xl shadow-sm">
                   <div className="p-3 bg-brand-50 dark:bg-dark-800 text-brand-500 rounded-full"><Mail size={24} /></div>
                   <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">Email Us</h4>
                      <a href="mailto:hayattsuk@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-brand-500 transition-colors">hayattsuk@gmail.com</a>
                   </div>
                </div>
              </div>

              {/* Map */}
              <div className="h-[300px] w-full bg-gray-200 rounded-xl overflow-hidden shadow-lg border-4 border-white dark:border-dark-900">
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
        </div>
      </Section>
    </>
  );
};

export default ContactPage;