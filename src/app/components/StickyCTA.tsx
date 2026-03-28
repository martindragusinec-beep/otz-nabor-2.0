import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { CTAButton } from './CTAButton';

export const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isPermanentlyClosed, setIsPermanentlyClosed] = useState(false);

  // Check localStorage on mount
  useEffect(() => {
    const closed = localStorage.getItem('stickyCTAClosed');
    if (closed === 'true') {
      setIsPermanentlyClosed(true);
    }
  }, []);

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

  useEffect(() => {
    // Detect when footer is visible
    const footer = document.querySelector('footer');
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  const handleClose = () => {
    setIsPermanentlyClosed(true);
    localStorage.setItem('stickyCTAClosed', 'true');
  };

  const scrollToForm = () => {
    const leadBanner = document.getElementById('lead-banner-form');
    if (leadBanner) {
      leadBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && !isFooterVisible && !isPermanentlyClosed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none"
        >
          <div className="relative pointer-events-auto w-full">
            {/* Close button - floating above the bar */}
            <button
              onClick={handleClose}
              className="absolute -top-10 right-6 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-900 transition-all shadow-lg hover:shadow-xl group"
              aria-label="Zavřít"
              title="Zavřít navždy"
            >
              <X className="w-5 h-5 text-white" strokeWidth={2} />
            </button>

            <div className="bg-[#111928] shadow-[0_-8px_30px_-15px_rgba(0,0,0,0.4)] border-t border-white/10 px-6 py-4 flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full">
              <div className="flex-1 text-center md:text-left max-w-[1280px] mx-auto w-full flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <div className="flex-1">
                  <h4 className="text-white font-bold text-base md:text-lg tracking-tight">
                    Získej vstupenku k neomezeným příjmům a svobodě.
                  </h4>
                  <p className="text-gray-400 text-sm hidden md:block mt-0.5">
                    Bez stresu. Stačí udělat první krok.
                  </p>
                </div>
                
                <CTAButton onClick={scrollToForm} className="w-full md:w-auto">
                  Chci zjistit, jak na to
                </CTAButton>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};