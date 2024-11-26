import React from 'react';

export function AnimatedTitle() {
  return (
    <div className="relative">
      <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-glow">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 animate-gradient-x">
          Pink Pepe Coin
        </span>
      </h1>
      <div className="absolute -inset-1 blur-lg bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 opacity-30 animate-pulse"></div>
    </div>
  );
}