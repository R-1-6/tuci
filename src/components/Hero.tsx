import React from 'react';

export function Hero() {
  return (
    <div 
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url(https://i.ibb.co/F3n2k7w/4f27f9f7-4dcf-49b1-ad15-b954c27a7aa9.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 text-pink-500">
          Pink Pepe Coin
        </h1>
        <p className="text-2xl md:text-3xl mb-8 text-pink-200">
          $TUCI - The Pinkest Meme Coin in the Galaxy
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#" className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-bold transition-all">
            Buy Now
          </a>
          <a href="#" className="border-2 border-pink-500 hover:bg-pink-500/20 text-white px-8 py-3 rounded-full font-bold transition-all">
            Chart
          </a>
        </div>
      </div>
    </div>
  );
}