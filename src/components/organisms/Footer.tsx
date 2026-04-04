import React from 'react';
import { Facebook, Instagram, Phone, Mail } from 'lucide-react';
import noweLogoUrl from '../../assets/icons/NoweLogo.svg';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-spa-secondary/50 py-24 px-6 md:px-12" id="kontakt">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
        <div className="flex justify-start items-start">
          <img
            src={noweLogoUrl}
            alt="Marma Spa Logo"
            className="w-48 md:w-56 h-auto opacity-90"
          />
        </div>

        <div className="space-y-6">
          <h4 className="font-semibold tracking-widest uppercase text-xs text-spa-terracotta">Kontakt</h4>
          <div className="space-y-4 text-sm text-spa-ink/70">
            <div className="flex gap-3 items-center">
              <Phone size={18} className="text-spa-terracotta" />
              <p>505 046 090</p>
            </div>
            <div className="flex gap-3 items-center">
              <Mail size={18} className="text-spa-terracotta" />
              <p>kontakt@marmaspa.pl</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="font-semibold tracking-widest uppercase text-xs text-spa-terracotta">Godziny</h4>
          <div className="space-y-2 text-sm text-spa-ink/70">
            <p className="flex justify-between"><span>Pn - Pt:</span> <span>10:00 - 17:00</span></p>
            <p className="flex justify-between"><span>Sobota:</span> <span>Umówione sesje</span></p>
            <p className="flex justify-between"><span>Niedziela:</span> <span>Zamknięte</span></p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-spa-ink/10 text-center text-[10px] tracking-[0.2em] uppercase text-spa-ink/40">
        © 2026 Marma Spa. Wszystkie prawa zastrzeżone. Projekt inspirowany naturą.
      </div>
    </footer>
  );
};
