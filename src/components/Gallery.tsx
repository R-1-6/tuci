import React from 'react';

const images = [
  { src: 'https://i.ibb.co/LZGmGZP/g3.jpg', alt: 'Pink Pepe' },
  { src: 'https://i.ibb.co/T8pcCT7/g1.jpg', alt: 'Pink Pepe' },
  { src: 'https://i.ibb.co/0KNnWZz/g2.jpg', alt: 'Pink Pepe' },
  { src: 'https://i.ibb.co/8cQhFbx/IMG-1841.jpg', alt: 'Pink Pepe' },
  { src: 'https://i.ibb.co/PQLfKPJ/IMG-1839.jpg', alt: 'Pink Pepe' },
  { src: 'https://i.ibb.co/7Qh7XWz/IMG-1838.jpg', alt: 'Pink Pepe' },
  { src: 'https://i.ibb.co/Ct1Zg6G/IMG-1836.jpg', alt: 'Pink Pepe' },
  { src: 'https://i.ibb.co/JyWtSnS/IMG-1832.jpg', alt: 'Pink Pepe' }
];

export function Gallery() {
  return (
    <div className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            Pink Pepe Gallery
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl bg-pink-900/20"
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}