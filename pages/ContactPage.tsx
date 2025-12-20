import React, { useState, useEffect } from 'react';
import Section from '../components/Section';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { MapPin, Phone, Mail } from 'lucide-react';
// Fixed: Explicitly import useLocation from react-router-dom
import { useLocation } from 'react-router-dom';

const ContactPage: React.FC = () => {
  const location = useLocation();
  
  const initialState = {
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    roomType: 'Deluxe King Room',
    message: ''
  };

  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    // If navigated from Rooms page with a selection
    if (location.state && (location.state as any).selectedRoom) {
       setFormData(prev => ({ ...prev, roomType: (location.state as any).selectedRoom }));
    }
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const constructWhatsAppMessage = () => {
    const text = `Hello Hotel Hayatt Sukkur, I'm interested in a reservation:
*Name:* ${formData.name || 'N/A'}
*Phone:* ${formData.phone || 'N/A'}
*Email:* ${formData.email || 'N/A'}
*Room Type:* ${formData.roomType}
*Check In:* ${formData.checkIn || 'N/A'}
*Check Out:* ${formData.checkOut || 'N/A'}
*Message:* ${formData.message || 'No additional message'}`;

    return `https://wa.me/923342942444?text=${encodeURIComponent(text)}`;
  };

  const handleWhatsAppClick = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(constructWhatsAppMessage(), '_blank');
    setFormData(initialState); // Clear form after action
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Inquiry/Reservation from ${formData.name}`;
    const body = `Inquiry Details for Hotel Hayatt Sukkur:
------------------------------------------
Guest Name: ${formData.name || 'N/A'}
Phone: ${formData.phone || 'N/A'}
Email: ${formData.email || 'N/A'}
Interested Room: ${formData.roomType}
Check-In Date: ${formData.checkIn || 'N/A'}
Check-Out Date: ${formData.checkOut || 'N/A'}
Message/Requests: ${formData.message || 'None'}
------------------------------------------
Submitted via Website Contact Form.`;

    window.location.href = `mailto:hayattsuk@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Clear form for next use
    setFormData(initialState);
    alert('Your reservation inquiry has been prepared for email. Form cleared.');
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
              <form className="space-y-6">
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
                      <option value="Standard Room">Standard Room</option>
                      <option value="Deluxe King Room">Deluxe King Room</option>
                      <option value="Executive Twin Room">Executive Twin Room</option>
                      <option value="Semi Deluxe Room">Semi Deluxe Room</option>
                      <option value="Triple Bed Room">Triple Bed Room</option>
                   </select>
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Message / Special Requests</label>
                   <textarea name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full p-3 bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-sm focus:border-brand-500 outline-none transition-colors" placeholder="How can we help you?"></textarea>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <button 
                    type="button"
                    onClick={handleSubmit}
                    className="w-full py-4 bg-brand-500 hover:bg-brand-600 text-white font-bold uppercase tracking-widest rounded-sm transition-all shadow-lg"
                  >
                    Send Email
                  </button>
                  <button 
                    type="button"
                    onClick={handleWhatsAppClick}
                    className="w-full py-4 bg-[#25D366] hover:bg-[#1ebd5e] text-white font-bold uppercase tracking-widest rounded-sm transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                    WhatsApp Reservation
                  </button>
                </div>
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
