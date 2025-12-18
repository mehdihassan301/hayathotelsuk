import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Rooms from '../components/Rooms';
import Amenities from '../components/Amenities';
import Gallery from '../components/Gallery';
import BookingForm from '../components/BookingForm';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="Hotel Hayatt Sukkur | Best Luxury Hotel in Sukkur, Sindh" 
        description="Experience unparalleled luxury at Hotel Hayatt Sukkur. Located near Sukkur Township, offering premium rooms, 24/7 service, and the finest hospitality in Sindh." 
        keywords="luxury hotel sukkur, best hotel in sindh, hotel hayatt sukkur bypass road, sukkur accommodation, premium hotel room sukkur"
      />
      <Hero />
      <About />
      <Rooms />
      <Amenities />
      <Gallery />
      <BookingForm />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;