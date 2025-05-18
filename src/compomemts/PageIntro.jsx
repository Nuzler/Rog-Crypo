import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageIntro = ({ onFinish }) => {
  const [step, setStep] = useState(0); // 0: line, 1: split, 2: slide out

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 2000),   // Show split
      setTimeout(() => setStep(2), 2200),   // Trigger slide out
      setTimeout(() => onFinish(), 4500),   // Hide intro
    ];
    return () => timers.forEach(clearTimeout);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        className={`fixed inset-0 z-40 ${step < 2 ? 'bg-green-600' : 'bg-transparent'}`}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Center Vertical Line */}
        {step === 0 && (
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[5px] bg-black"
            initial={{ height: 0 }}
            animate={{ height: '100vh' }}
            transition={{ duration: 2 }}
          />
        )}

        {/* Left Panel */}
        {step >= 1 && (
          <motion.div
            className="absolute top-0 left-0 h-full w-1/2 bg-green-600 z-50"
            initial={{ x: 0 }}
            animate={{ x: step === 2 ? '-100%' : 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />
        )}

        {/* Right Panel */}
        {step >= 1 && (
          <motion.div
            className="absolute top-0 right-0 h-full w-1/2 bg-green-600 z-50"
            initial={{ x: 0 }}
            animate={{ x: step === 2 ? '100%' : 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          /> 
        )}
       {step >= 2 && (
  <motion.div
    className="fixed inset-0 z-40 bg-black flex items-center justify-center"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h1 className="text-5xl font-Audiowide font-extrabold text-[#1CFA1D]">
      R<span className="text-white">OG CRYPTO</span>
    </h1>
  </motion.div>
)}


      </motion.div>
    </AnimatePresence>
  );
};

export default PageIntro;