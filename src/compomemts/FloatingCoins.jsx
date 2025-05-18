import React from 'react';
import { motion } from 'framer-motion';
import coinImg from '../assets/coin1.png'; 

const generateRandom = (min, max) => Math.random() * (max - min) + min;

const FloatingCoins = ({ count = 10 }) => {
  const coins = Array.from({ length: count });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {coins.map((_, i) => {
        const size = generateRandom(50, 100);
        const duration = generateRandom(8, 20);
        const left = generateRandom(0, 100);
        const delay = generateRandom(0, 5);
        const yEnd = generateRandom(-800, -1200);

        return (
          <motion.img
            key={i}
            src={coinImg}
            alt="coin"
            initial={{ y: 800 }}
            animate={{ y: yEnd }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: 'linear',
            }}
            style={{
              position: 'absolute',
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              opacity: 1,
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingCoins;