
import React, { useState } from 'react';
import Section from './Section';
import { X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "/images/gallery_1.jpg",
  "/images/gallery_2.jpg",
  "/images/gallery_3.jpg",
  "/images/gallery_4.jpg",
  "/images/gallery_5.jpg",
  "/images/gallery_6.jpg",
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Use any to bypass Framer Motion type mismatch in this environment
  const MotionDiv = motion.div as any;
  const MotionImg = motion.img as any;

  return (
    <Section id="gallery" className="bg-gray-900 text-white" darkBg>
      <div className="text-center mb-16">
        <span className="text-brand-400 font-bold tracking-widest uppercase text-sm">Visual Tour</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-3">Gallery</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div 
            key={index} 
            className="group relative h-64 overflow-hidden rounded-lg cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <img 
              src={src} 
              alt={`Gallery image ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <ZoomIn className="text-white w-10 h-10" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <MotionDiv 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-brand-500 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <MotionImg 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage} 
              alt="Full view" 
              className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
              onClick={(e: React.MouseEvent) => e.stopPropagation()} // Prevent closing when clicking image
            />
          </MotionDiv>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Gallery;
