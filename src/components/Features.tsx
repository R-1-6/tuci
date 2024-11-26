import React from 'react';
import { Rocket, TrendingUp, Shield } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Moon Mission Ready',
    description: 'Strapped in and ready for the ultimate moonshot with the pinkest pepe in crypto.'
  },
  {
    icon: TrendingUp,
    title: 'Growing Community',
    description: 'Join thousands of pink pepe enthusiasts in our rapidly expanding ecosystem.'
  },
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'Contract audited and liquidity locked for your peace of mind.'
  }
];

export function Features() {
  return (
    <div 
      className="relative py-20 px-4"
      style={{
        backgroundImage: 'url(https://i.ibb.co/jbPDXXN/IMG-1825.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            Why Choose Pink Pepe?
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-pink-500/20 hover:border-pink-500/40 transform hover:-translate-y-1 transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-pink-300">{feature.title}</h3>
              <p className="text-pink-100/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}