import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { RainingPepes } from './components/RainingPepes';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <RainingPepes />
      <Hero />
      <Features />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;