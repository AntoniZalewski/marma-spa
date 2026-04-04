import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { ELEMENTS } from '../../data';

interface ElementModalProps {
  selectedElement: typeof ELEMENTS[0] | null;
  onClose: () => void;
}

export const ElementModal: React.FC<ElementModalProps> = ({ selectedElement, onClose }) => {
  // Blokowanie scrollowania
  useEffect(() => {
    if (selectedElement) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedElement]);

  if (!selectedElement) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-spa-ink/60 backdrop-blur-sm"
          onClick={onClose}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl max-h-[85vh] bg-spa-ink/95 backdrop-blur-md rounded-[32px] md:rounded-[40px] shadow-2xl overflow-hidden flex flex-col border border-spa-terracotta/20"
        >
          {/* Zamknij */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 md:top-8 md:right-8 z-10 p-3 bg-spa-secondary/20 backdrop-blur-sm shadow-sm rounded-full text-spa-bg hover:bg-spa-terracotta hover:text-white hover:scale-105 transition-all focus:outline-none"
            aria-label="Zamknij"
          >
            <X size={24} />
          </button>

          <div className="overflow-y-auto w-full h-full p-8 md:p-14 custom-scrollbar">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-spa-terracotta/20 flex items-center justify-center text-spa-terracotta">
                <selectedElement.icon size={24} strokeWidth={1.5} />
              </div>
              <span className="text-spa-terracotta font-bold tracking-[0.3em] uppercase text-xs">
                {selectedElement.name}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-serif text-spa-bg mb-10 leading-none">
              {selectedElement.label}
            </h2>

            <div className="space-y-6 text-lg text-spa-bg/80 font-light leading-relaxed">
              {selectedElement.fullDesc?.split('\n').map((paragraph, index) => (
                paragraph.trim() && (
                  <p key={index} className={index === 0 ? "text-xl text-spa-bg/95 font-medium leading-relaxed" : ""}>
                    {paragraph}
                  </p>
                )
              ))}
            </div>
            
            <div className="pt-12 w-full flex justify-center border-t border-spa-terracotta/20 mt-10">
              <button 
                onClick={onClose}
                className="bg-transparent border border-spa-terracotta text-spa-terracotta px-10 py-4.5 rounded-spa-xl font-medium tracking-widest uppercase shadow-sm hover:bg-spa-terracotta hover:text-white transition-all font-mono text-sm"
              >
                Zamknij
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
