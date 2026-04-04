import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, Mail, Clock, MapPin } from 'lucide-react';

const PHONE = '+48123456789';
const PHONE_DISPLAY = '+48 123 456 789';
const EMAIL = 'marmaspa@gmail.com';

interface BookingModalProps {
  item: { name: string; time: string; price: string; desc: string } | null;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ item, onClose }) => {
  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    if (item) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [item]);

  return (
    <AnimatePresence>
      {item && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-spa-ink/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed inset-0 z-[101] flex items-center justify-center px-4 py-8 pointer-events-none"
          >
            <div className="relative w-full max-w-lg bg-spa-bg rounded-[2rem] shadow-[0_32px_80px_rgba(0,0,0,0.25)] pointer-events-auto overflow-hidden">

              {/* Top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-spa-terracotta via-[#D1B394] to-spa-olive" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full text-spa-ink/40 hover:text-spa-terracotta hover:bg-spa-secondary/60 transition-all"
                aria-label="Zamknij"
              >
                <X size={20} />
              </button>

              <div className="p-8 pt-6 space-y-6">

                {/* Header */}
                <div>
                  <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-spa-terracotta mb-2">Rezerwacja</p>
                  <h3 className="text-2xl md:text-3xl font-serif text-spa-ink leading-snug pr-8">{item.name}</h3>
                  <div className="flex items-center gap-4 mt-3 text-sm text-spa-ink/50">
                    <span className="flex items-center gap-1.5"><Clock size={14} />{item.time}</span>
                    <span className="text-spa-terracotta font-serif text-lg font-medium">{item.price}</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-spa-secondary" />

                {/* Description */}
                <p className="text-spa-ink/70 text-sm leading-relaxed">{item.desc}</p>

                {/* Divider */}
                <div className="h-px bg-spa-secondary" />

                {/* Booking instructions */}
                <div className="space-y-3">
                  <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-spa-olive">Jak zarezerwować</p>
                  <p className="text-sm text-spa-ink/80 leading-relaxed">
                    Zadzwoń lub napisz do <strong className="text-spa-ink">Dosi</strong> i umów się na wybrany termin.
                    Po potwierdzeniu rezerwacji otrzymasz adres gabinetu.
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <MapPin size={14} className="text-spa-terracotta shrink-0" />
                    <p className="text-xs text-spa-ink/50 italic">Adres zostanie przesłany po potwierdzeniu rezerwacji</p>
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-spa-secondary/40 rounded-[1.25rem] p-5 space-y-3">
                  <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-spa-olive">Kontakt</p>

                  <a href={`tel:${PHONE}`} className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-full bg-spa-terracotta/10 flex items-center justify-center group-hover:bg-spa-terracotta/20 transition-colors">
                      <Phone size={15} className="text-spa-terracotta" />
                    </div>
                    <div>
                      <p className="text-[10px] text-spa-ink/40 uppercase tracking-widest">Telefon</p>
                      <p className="text-sm font-medium text-spa-ink group-hover:text-spa-terracotta transition-colors">{PHONE_DISPLAY}</p>
                    </div>
                  </a>

                  <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-full bg-spa-terracotta/10 flex items-center justify-center group-hover:bg-spa-terracotta/20 transition-colors">
                      <Mail size={15} className="text-spa-terracotta" />
                    </div>
                    <div>
                      <p className="text-[10px] text-spa-ink/40 uppercase tracking-widest">Email</p>
                      <p className="text-sm font-medium text-spa-ink group-hover:text-spa-terracotta transition-colors">{EMAIL}</p>
                    </div>
                  </a>
                </div>

                {/* CTA buttons — widoczne tylko na mobile */}
                <div className="flex gap-3 pt-1 md:hidden">
                  <a
                    href={`tel:${PHONE}`}
                    className="flex-1 text-center py-3 px-4 bg-spa-terracotta text-spa-bg text-sm font-bold tracking-[0.15em] uppercase rounded-[1rem] hover:brightness-110 transition-all"
                  >
                    Zadzwoń
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex-1 text-center py-3 px-4 border border-spa-terracotta text-spa-terracotta text-sm font-bold tracking-[0.15em] uppercase rounded-[1rem] hover:bg-spa-terracotta/10 transition-all"
                  >
                    Napisz
                  </a>
                </div>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
