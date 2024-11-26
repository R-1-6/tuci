import React from 'react';

const images = [
  { src: 'https://i.ibb.co/LZGmGZP/g3.jpg', alt: 'Pink Pepe' },
  { src: 'https://i.ibb.co/T8pcCT7/g1.jpg', alt: 'Pink Pepe' },
  { src: 'https://i.ibb.co/0KNnWZz/g2.jpg', alt: 'Pink Pepe' }
];

export function Gallery() {
  return (
    <div className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-pink-500">Pink Pepe Gallery</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <img 
              key={index}
              src={image.src}
              alt={image.alt}
              className="rounded-xl hover:transform hover:scale-105 transition-all"
            />
          ))}
        </div>
      </div>
    </div>
  );
}