
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  // Use any to bypass Framer Motion type mismatch in this environment
  const MSpan = motion.span as any;
  const MH1 = motion.h1 as any;
  const MP = motion.p as any;
  const MDiv = motion.div as any;

  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Hotel Hayatt Sukkur Luxury View" 
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <MSpan 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block py-1 px-3 mb-6 border border-white/30 rounded-full text-white/90 text-sm tracking-[0.2em] uppercase backdrop-blur-sm"
        >
          Welcome to Sukkur
        </MSpan>
        
        <MH1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight"
        >
          Hotel Hayatt
        </MH1>
        
        <MP 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-2xl text-gray-200 font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Experience the pinnacle of luxury and comfort in the heart of Sindh.
        </MP>
        
        <MDiv 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <a 
            href="#reservation" 
            className="px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm uppercase tracking-widest rounded-sm transition-all shadow-lg hover:shadow-brand-500/30"
          >
            Book Your Stay
          </a>
          <a 
            href="#about" 
            className="px-8 py-4 bg-transparent border border-white hover:bg-white hover:text-gray-900 text-white font-semibold text-sm uppercase tracking-widest rounded-sm transition-all"
          >
            Explore Hotel
          </a>
        </MDiv>
      </div>

      {/* Scroll Down Indicator */}
      <MDiv 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={32} className="opacity-70" />
      </MDiv>
    </section>
  );
};

export default Hero;
