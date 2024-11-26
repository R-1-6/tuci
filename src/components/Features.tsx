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
    <div className="py-20 px-4 bg-gradient-to-b from-pink-900/20 to-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-pink-500">Why Choose Pink Pepe?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-pink-900/20 p-6 rounded-xl backdrop-blur-sm hover:transform hover:-translate-y-1 transition-all">
              <feature.icon className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-pink-100/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}