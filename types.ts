import React from 'react';

export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  amenities: string[];
}

export interface Amenity {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  category: 'Room' | 'Facility' | 'Dining';
  alt: string;
}