import React, { useState } from 'react';
import Section from './Section';

const BookingForm: React.FC = () => {
  const initialState = {
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    roomType: 'deluxe',
    guests: '1',
    specialRequests: ''
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const constructWhatsAppMessage = () => {
    const text = `Hello Hotel Hayatt Sukkur, I would like to make a reservation:
*Name:* ${formData.name || 'N/A'}
*Phone:* ${formData.phone || 'N/A'}
*Email:* ${formData.email || 'N/A'}
*Room Type:* ${formData.roomType}
*Check In:* ${formData.checkIn || 'N/A'}
*Check Out:* ${formData.checkOut || 'N/A'}
*Guests:* ${formData.guests}
*Special Requests:* ${formData.specialRequests || 'None'}`;

    return `https://wa.me/923342942444?text=${encodeURIComponent(text)}`;
  };

  const handleWhatsAppClick = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(constructWhatsAppMessage(), '_blank');
    setFormData(initialState); // Clear form after action
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `New Reservation Request: ${formData.name}`;
    const body = `Reservation Details for Hotel Hayatt Sukkur:
------------------------------------------
Guest Name: ${formData.name || 'N/A'}
Phone: ${formData.phone || 'N/A'}
Email: ${formData.email || 'N/A'}
Room Category: ${formData.roomType}
Check-In Date: ${formData.checkIn || 'N/A'}
Check-Out Date: ${formData.checkOut || 'N/A'}
Number of Guests: ${formData.guests}
Special Requests: ${formData.specialRequests || 'None'}
------------------------------------------
Please reply to this email to confirm availability.`;

    window.location.href = `mailto:hayattsuk@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Clear form for next use
    setFormData(initialState);
    alert('Your email client has been opened to send the reservation details. Form cleared.');
  };

  return (
    <Section id="reservation" className="bg-brand-50 dark:bg-dark-800">
      <div className="max-w-4xl mx-auto bg-white dark:bg-dark-900 rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Decorative Side */}
        <div className="md:w-1/3 bg-brand-600 p-8 text-white flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Book Your Stay</h3>
            <p className="text-brand-100 text-sm leading-relaxed">
              Secure your accommodation at Hotel Hayatt Sukkur today. Best rates guaranteed when booking directly.
            </p>
          </div>
          <div className="hidden md:block">
             <div className="text-brand-200 text-xs uppercase tracking-widest mb-1">For Assistance</div>
             <div className="text-xl font-bold">+92-334-294-2444</div>
          </div>
        </div>

        {/* Form Side */}
        <div className="md:w-2/3 p-8 lg:p-12">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider font-bold text-gray-500 dark:text-gray-400">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full bg-gray-50 dark:bg-dark-800 border-b-2 border-gray-200 dark:border-dark-700 focus:border-brand-500 outline-none py-2 px-1 text-gray-900 dark:text-white transition-colors"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider font-bold text-gray-500 dark:text-gray-400">Phone</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  className="w-full bg-gray-50 dark:bg-dark-800 border-b-2 border-gray-200 dark:border-dark-700 focus:border-brand-500 outline-none py-2 px-1 text-gray-900 dark:text-white transition-colors"
                  placeholder="+92 334 2942444"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider font-bold text-gray-500 dark:text-gray-400">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full bg-gray-50 dark:bg-dark-800 border-b-2 border-gray-200 dark:border-dark-700 focus:border-brand-500 outline-none py-2 px-1 text-gray-900 dark:text-white transition-colors"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider font-bold text-gray-500 dark:text-gray-400">Check In</label>
                <input 
                  type="date" 
                  name="checkIn"
                  required
                  className="w-full bg-gray-50 dark:bg-dark-800 border-b-2 border-gray-200 dark:border-dark-700 focus:border-brand-500 outline-none py-2 px-1 text-gray-900 dark:text-white transition-colors"
                  value={formData.checkIn}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider font-bold text-gray-500 dark:text-gray-400">Check Out</label>
                <input 
                  type="date" 
                  name="checkOut"
                  required
                  className="w-full bg-gray-50 dark:bg-dark-800 border-b-2 border-gray-200 dark:border-dark-700 focus:border-brand-500 outline-none py-2 px-1 text-gray-900 dark:text-white transition-colors"
                  value={formData.checkOut}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider font-bold text-gray-500 dark:text-gray-400">Room Type</label>
                <select 
                  name="roomType"
                  className="w-full bg-gray-50 dark:bg-dark-800 border-b-2 border-gray-200 dark:border-dark-700 focus:border-brand-500 outline-none py-2 px-1 text-gray-900 dark:text-white transition-colors"
                  value={formData.roomType}
                  onChange={handleChange}
                >
                  <option value="Standard Room">Standard Room</option>
                  <option value="Deluxe King Room">Deluxe King Room</option>
                  <option value="Executive Twin Room">Executive Twin Room</option>
                  <option value="Semi Deluxe Room">Semi Deluxe Room</option>
                  <option value="Triple Bed Room">Triple Bed Room</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider font-bold text-gray-500 dark:text-gray-400">Guests</label>
                <select 
                  name="guests"
                  className="w-full bg-gray-50 dark:bg-dark-800 border-b-2 border-gray-200 dark:border-dark-700 focus:border-brand-500 outline-none py-2 px-1 text-gray-900 dark:text-white transition-colors"
                  value={formData.guests}
                  onChange={handleChange}
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4+ People</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider font-bold text-gray-500 dark:text-gray-400">Special Requests</label>
              <textarea 
                name="specialRequests"
                rows={3}
                className="w-full bg-gray-50 dark:bg-dark-800 border-b-2 border-gray-200 dark:border-dark-700 focus:border-brand-500 outline-none py-2 px-1 text-gray-900 dark:text-white transition-colors resize-none"
                placeholder="Airport pickup, dietary requirements, etc."
                value={formData.specialRequests}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <button 
                type="button"
                onClick={handleSubmit}
                className="w-full py-4 bg-gray-900 dark:bg-brand-500 hover:bg-brand-600 text-white font-bold uppercase tracking-widest text-sm rounded-sm transition-all shadow-lg hover:shadow-xl"
              >
                Book via Website
              </button>
              <button 
                type="button"
                onClick={handleWhatsAppClick}
                className="w-full py-4 bg-[#25D366] hover:bg-[#1ebd5e] text-white font-bold uppercase tracking-widest text-sm rounded-sm transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                Book via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default BookingForm;
