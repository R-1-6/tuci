import React, { useEffect, useState } from 'react';

interface Pepe {
  id: number;
  x: number;
  rotation: number;
  delay: number;
  duration: number;
  scale: number;
}

export function RainingPepes() {
  const [pepes, setPepes] = useState<Pepe[]>([]);

  useEffect(() => {
    const createPepe = (id: number): Pepe => ({
      id,
      x: Math.random() * 100,
      rotation: Math.random() * 360,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 10,
      scale: 0.3 + Math.random() * 0.3,
    });

    // Create initial pepes
    setPepes(Array.from({ length: 15 }, (_, i) => createPepe(i)));

    // Add new pepes periodically
    const interval = setInterval(() => {
      setPepes(prev => [...prev.slice(-14), createPepe(Date.now())]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pepes.map(pepe => (
        <div
          key={pepe.id}
          style={{
            position: 'absolute',
            left: `${pepe.x}%`,
            top: '-50px',
            opacity: 0.3,
            transform: `scale(${pepe.scale})`,
            willChange: 'transform',
            animation: `fall ${pepe.duration}s linear ${pepe.delay}s infinite`
          }}
        >
          <img
            src="https://i.postimg.cc/PJV39sjn/Untitled-design.png"
            alt="Pepe"
            className="w-12 h-12"
            style={{
              animation: `spin ${pepe.duration * 0.7}s linear infinite`
            }}
          />
        </div>
      ))}
    </div>
  );
}