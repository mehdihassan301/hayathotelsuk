
import React, { useState } from 'react';
import Section from '../components/Section';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryImages = [
  { src: "/images/gallery_lobby_1.jpg", category: "Lobby" },
  { src: "/images/gallery_exterior_1.jpg", category: "Exterior" },
  { src: "/images/gallery_rooms_1.jpg", category: "Rooms" },
  { src: "/images/gallery_restaurant_1.jpg", category: "Restaurant" },
  { src: "/images/gallery_rooms_2.jpg", category: "Rooms" },
  { src: "/images/gallery_amenities_1.jpg", category: "Amenities" },
  { src: "/images/gallery_rooms_3.jpg", category: "Rooms" },
  { src: "/images/gallery_rooms_4.jpg", category: "Rooms" },
  { src: "/images/gallery_lobby_2.jpg", category: "Lobby" },
];

const categories = ["All", "Rooms", "Lobby", "Restaurant", "Amenities", "Exterior"];

const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  // Use any to bypass Framer Motion type mismatch in this environment
  const MotionDiv = motion.div as any;
  const MotionImg = motion.img as any;

  return (
    <>
      <SEO 
        title="Photo Gallery | Visual Tour of Hotel Hayatt Sukkur" 
        description="Take a visual tour of Hotel Hayatt Sukkur. Browse high-resolution photos of our luxury rooms, elegant lobby, restaurant, and facilities."
        keywords="hotel hayatt sukkur photos, sukkur hotel gallery, luxury room photos sukkur, hotel interior sukkur"
      />
      <PageHero 
        title="Gallery" 
        subtitle="A Visual Journey Through Luxury"
        image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      <Section className="bg-white dark:bg-dark-900">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat 
                  ? 'bg-brand-500 text-white shadow-md' 
                  : 'bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <MotionDiv 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence>
            {filteredImages.map((img, index) => (
              <MotionDiv 
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                key={index} 
                className="group relative h-64 overflow-hidden rounded-lg cursor-pointer shadow-md"
                onClick={() => setSelectedImage(img.src)}
              >
                <img 
                  src={img.src} 
                  alt={`${img.category} Image`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn className="text-white w-10 h-10" />
                </div>
                <div className="absolute bottom-4 left-4 bg-black/60 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                   {img.category}
                </div>
              </MotionDiv>
            ))}
          </AnimatePresence>
        </MotionDiv>
      </Section>

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
              onClick={(e: React.MouseEvent) => e.stopPropagation()} 
            />
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryPage;
