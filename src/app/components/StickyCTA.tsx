import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show sticky bar after scrolling past 300px
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 pointer-events-none flex justify-center"
        >
          <div className="pointer-events-auto bg-white/95 backdrop-blur-md shadow-[0_-8px_30px_-15px_rgba(0,0,0,0.2)] border border-gray-200/50 rounded-2xl md:rounded-full px-5 py-4 md:py-3 md:px-6 flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full max-w-4xl">
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-gray-900 font-bold text-base md:text-lg tracking-tight">
                Získej vstupenku k neomezeným příjmům a svobodě.
              </h4>
              <p className="text-gray-500 text-sm hidden md:block mt-0.5">
                Bez stresu. Stačí udělat první krok.
              </p>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-auto bg-[#E30A1A] hover:bg-[#c90816] text-white font-bold py-3.5 px-6 md:px-8 rounded-xl md:rounded-full transition-colors flex items-center justify-center gap-2 shadow-lg shadow-red-500/25 whitespace-nowrap"
            >
              Chci zjistit, jak na to
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};