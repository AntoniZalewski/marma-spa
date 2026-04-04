import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { RITUALS } from '../../data';
import { Button } from '../atoms/Button';

interface RitualModalProps {
  selectedRitual: (typeof RITUALS[0] & { notes?: string[] }) | null;
  onClose: () => void;
  onNavigate?: (ritual: typeof RITUALS[0]) => void;
}

export const RitualModal: React.FC<RitualModalProps> = ({ selectedRitual, onClose, onNavigate }) => {
  const [hasScrolledModal, setHasScrolledModal] = useState(false);
  const modalScrollRef = useRef<HTMLDivElement>(null);

  const handleModalScroll = () => {
    if (modalScrollRef.current) {
      if (modalScrollRef.current.scrollTop > 20) {
        setHasScrolledModal(true);
      }
    }
  };

  useEffect(() => {
    if (selectedRitual) {
      document.body.style.overflow = 'hidden';
      setHasScrolledModal(false);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedRitual]);

  // Obliczanie logiki nawigacji po tablicy rytuałów
  const currentIndex = selectedRitual ? RITUALS.findIndex(r => r.id === selectedRitual.id) : -1;
  const hasNext = currentIndex >= 0 && currentIndex < RITUALS.length - 1;
  const hasPrev = currentIndex > 0;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasNext && onNavigate) onNavigate(RITUALS[currentIndex + 1]);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasPrev && onNavigate) onNavigate(RITUALS[currentIndex - 1]);
  };

  return (
    <AnimatePresence>
      {selectedRitual && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-spa-ink/40 backdrop-blur-md cursor-pointer"
          />

          <button 
            onClick={onClose}
            className="absolute top-8 right-8 p-4 bg-spa-bg shadow-2xl text-spa-terracotta hover:bg-spa-terracotta hover:text-spa-bg rounded-full transition-all z-[60] hidden md:block border border-spa-terracotta/20"
          >
            <X size={28} strokeWidth={2.5} />
          </button>

          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-3 bg-spa-bg shadow-2xl text-spa-terracotta rounded-full md:hidden z-[60] border border-spa-terracotta/20"
          >
            <X size={24} strokeWidth={2.5} />
          </button>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl bg-spa-bg rounded-spa-xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] z-50 origin-center"
          >
            <div className="w-full md:w-1/2 h-48 md:h-auto relative overflow-hidden bg-spa-secondary/20 shrink-0">
              <img 
                src={selectedRitual.image} 
                alt={selectedRitual.title}
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="w-full md:w-1/2 flex flex-col min-h-0 max-h-full relative bg-spa-bg">
              {/* Wrapper do pozycjonowania fixed strzałki i maski nad obszarem scrolla */}
              <div className="relative flex-1 min-h-0 flex flex-col">
                <div 
                  ref={modalScrollRef}
                  onScroll={handleModalScroll}
                  className="p-6 pb-20 md:p-16 overflow-y-auto flex-1 scroll-indicator-mask group/modal-scroll"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    <span className="text-spa-terracotta font-bold tracking-[0.3em] uppercase text-xs">Rytuał</span>
                    <h2 className="text-3xl md:text-5xl mt-2 mb-6 font-serif">
                    {selectedRitual.title}
                  </h2>
                  
                  <div className="flex gap-8 mb-10">
                    <div className="space-y-1">
                      <p className="text-[10px] tracking-widest uppercase font-bold text-spa-ink/40">Czas trwania</p>
                      <p className="text-lg font-medium">{selectedRitual.duration}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] tracking-widest uppercase font-bold text-spa-ink/40">Inwestycja</p>
                      <p className="text-lg font-medium">{selectedRitual.price}</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-spa-ink/80 leading-relaxed text-base">
                    {selectedRitual.fullDesc.split('\n\n').map((para, i) => (
                      <p key={i} className="whitespace-pre-line">{para}</p>
                    ))}
                  </div>

                  {selectedRitual.notes && selectedRitual.notes.length > 0 && (
                    <div className="mt-6 space-y-2 border-t border-spa-secondary pt-5">
                      {selectedRitual.notes.map((note, i) => (
                        <div key={i} className="flex gap-3 text-sm text-spa-ink/60 leading-relaxed">
                          <span className="text-spa-terracotta shrink-0 mt-0.5">•</span>
                          <span>{note}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Animowana strzałka nawigacyjna, na stałe przypięta nad scrollowanym obszarem póki user nie przescrolluje */}
              <AnimatePresence>
                {!hasScrolledModal && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 text-spa-terracotta animate-bounce z-20 pointer-events-none md:hidden bg-spa-bg/90 backdrop-blur-sm rounded-full p-2 shadow-sm border border-spa-terracotta/10"
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="p-6 md:px-16 md:pb-16 border-t border-spa-ink/10 flex flex-col sm:flex-row gap-4 bg-spa-bg items-stretch sm:items-center">
                
                {/* Zintegrowana Nawigacja Przewijania Oferty (Mobile/Desktop) */}
                {onNavigate && (
                  <div className="flex justify-center gap-4 sm:mr-auto shrink-0 mb-4 sm:mb-0">
                    <button 
                      onClick={handlePrev}
                      disabled={!hasPrev}
                      className={`p-4 rounded-full border shadow-sm flex items-center justify-center transition-all duration-300 ${
                        hasPrev 
                          ? 'border-spa-terracotta/30 text-spa-terracotta hover:bg-spa-terracotta hover:text-white' 
                          : 'border-spa-ink/10 text-spa-ink/20 cursor-not-allowed bg-spa-ink/5 shadow-none'
                      }`}
                    >
                      <ChevronLeft size={24} />
                    </button>
                    
                    <button 
                      onClick={handleNext}
                      disabled={!hasNext}
                      className={`p-4 rounded-full border shadow-sm flex items-center justify-center transition-all duration-300 ${
                        hasNext 
                          ? 'border-spa-terracotta/30 text-spa-terracotta hover:bg-spa-terracotta hover:text-white' 
                          : 'border-spa-ink/10 text-spa-ink/20 cursor-not-allowed bg-spa-ink/5 shadow-none'
                      }`}
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
                )}

                <Button className="flex-1 rounded-spa-lg py-4 shadow-lg hover:scale-[1.02] active:scale-[0.98]">
                  Zarezerwuj teraz
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
