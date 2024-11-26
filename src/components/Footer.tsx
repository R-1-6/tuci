import React from 'react';
import { Twitter, MessageCircle, Globe2 } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: '#' },
  { icon: MessageCircle, href: '#' },
  { icon: Globe2, href: '#' }
];

export function Footer() {
  return (
    <footer className="bg-pink-900/20 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href}
              className="text-pink-500 hover:text-pink-400 transition-colors"
            >
              <link.icon className="w-8 h-8" />
            </a>
          ))}
        </div>
        <p className="text-center text-pink-200/60">
          © 2024 Pink Pepe Coin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}