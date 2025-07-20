import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
}

export default function ParticleSystem({ count = 50 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 8,
      duration: Math.random() * 4 + 6,
    }));
    setParticles(newParticles);
  }, [count]);

  return (
    <div className="particle-container">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          style={{
            left: particle.x,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [window.innerHeight + 50, -100],
            x: [particle.x, particle.x + (Math.random() - 0.5) * 200],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}