import React, { useState } from 'react';
import Section from './Section';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    roomType: 'deluxe',
    guests: '1',
    specialRequests: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your reservation request! We will contact you shortly to confirm.');
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
          <form onSubmit={handleSubmit} className="space-y-6">
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
                  <option value="standard">Standard Room</option>
                  <option value="deluxe">Deluxe Room</option>
                  <option value="twin">Executive Twin Room</option>
                  <option value="family">Semi Deluxe Room</option>
                  <option value="suite">Triple Bed Room</option>
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

            <button 
              type="submit"
              className="w-full py-4 bg-gray-900 dark:bg-brand-500 hover:bg-brand-600 text-white font-bold uppercase tracking-widest text-sm rounded-sm transition-all shadow-lg hover:shadow-xl mt-4"
            >
              Confirm Reservation
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default BookingForm;
