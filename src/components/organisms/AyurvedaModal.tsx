import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface AyurvedaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AyurvedaModal: React.FC<AyurvedaModalProps> = ({ isOpen, onClose }) => {
  // Blokowanie scrollowania pod spodem
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

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
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-spa-bg rounded-[32px] md:rounded-[40px] shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Przycisk zamknięcia */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 md:top-8 md:right-8 z-10 p-3 bg-spa-bg/80 backdrop-blur-sm shadow-sm rounded-full text-spa-ink hover:bg-white hover:scale-105 transition-all outline-none focus:ring-2 focus:ring-spa-terracotta"
            aria-label="Zamknij"
          >
            <X size={24} />
          </button>

          <div className="overflow-y-auto w-full h-full p-8 md:p-14 custom-scrollbar">
            <span className="text-spa-terracotta font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Edukacja</span>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif leading-tight text-spa-ink mb-10">
              Czym jest masaż ajurwedyjski Abhayanga?
            </h2>

            <div className="space-y-8 text-lg text-spa-ink/80 font-light leading-relaxed">
              <p>
                Istnieje metoda dbania o siebie, która nie używa skalpela, drogich kremów i wypełniaczy, lecz systematyczności, ciepłego oleju i uważnych dłoni. To Abhyanga – starożytny rytuał, który przetrwał pięć tysiącleci nie jako modny trend, ale jako podstawa ludzkiego dobrostanu.
              </p>

              <p className="font-medium text-spa-ink">
                Już w fundamencie Ajurwedy, tekście Charaka Samhita, czytamy:
              </p>
              
              <div className="pl-6 border-l-2 border-spa-terracotta/40 italic font-quote text-2xl md:text-3xl text-spa-ink/90 my-8 py-2">
                „Ciało osoby, która regularnie stosuje masaż olejowy, nie zostaje dotknięte urazami ani ciężką pracą. Struktura fizyczna takiej osoby staje się silna, elastyczna i pełna wdzięku”.
              </div>

              <p>
                To nie jest zwykły zabieg kosmetyczny. To proces Snehana, co w sanskrycie oznacza zarówno „olejowanie”, jak i „miłość”. Masując ciało, dosłownie nasycamy je miłością, rozpuszczając napięcia, które współczesny świat zamraża w naszych mięśniach.
              </p>

              <p className="font-medium text-spa-ink">
                Starożytny mędrzec Vagbhata w dziele Ashtanga Hridaya dodaje:
              </p>

              <div className="pl-6 border-l-2 border-spa-terracotta/40 italic font-quote text-2xl md:text-3xl text-spa-ink/90 my-8 py-2">
                „Abhyanga powinna być praktykowana codziennie. Odsuwa starość, usuwa zmęczenie i równoważy Vata (system nerwowy). Poprawia wzrok, odżywia ciało, zapewnia długowieczność i głęboki sen”.
              </div>

              <p>
                Kiedy wybierasz masaż ajurwedyjski, stajesz w długiej linii pokoleń, które wiedziały, że prawdziwe zdrowie nie polega na walce z objawami, lecz na pielęgnowaniu witalnej esencji życia – Ojas. To powrót do korzeni, gdzie piękno jest jedynie naturalnym skutkiem ubocznym głębokiego ukojenia i wewnętrznej harmonii.
              </p>

              <div className="mt-12 mb-8 h-px w-full bg-spa-secondary/30" />

              <h3 className="text-2xl md:text-3xl font-serif text-spa-ink mb-6">
                Przekładając język sanskrytu na współczesne potrzeby, regularna Abhyanga przynosi:
              </h3>

              <div className="space-y-6">
                {[
                  {
                    title: 'Głębokie ukojenie układu nerwowego (Vata Shamana)',
                    desc: 'Olej działa jak izolacja dla „przegrzanych” nerwów. Pomaga wyciszyć gonitwę myśli, lęk i chroniczny stres, przywracając wewnętrzną ciszę.'
                  },
                  {
                    title: 'Naturalny lifting i detoks (Twak Dridhatva)',
                    desc: 'Zamiast wypełniaczy, masaż stymuluje krążenie i drenaż limfatyczny. Skóra staje się jędrna, a toksyny są usuwane z głębszych tkanek, co daje efekt „blasku od środka”.'
                  },
                  {
                    title: 'Regeneracja stawów i mięśni (Mamsa Asthi Poshana)',
                    desc: 'Ciepły olej smaruje stawy niczym naturalny lubrykant, zwiększając ich ruchomość i chroniąc przed sztywnością, która często przychodzi z wiekiem.'
                  },
                  {
                    title: 'Naprawa jakości snu (Nidrakara)',
                    desc: 'Masaż (szczególnie stóp i głowy) sygnalizuje ciału przejście w tryb głębokiego odpoczynku, co pozwala na szybsze zasypianie i bardziej regenerujący sen.'
                  },
                  {
                    title: 'Wzmocnienie odporności (Vyadhikshamatva)',
                    desc: 'Regularne namaszczanie stymuluje produkcję przeciwciał i wzmacnia barierę ochronną organizmu, czyniąc nas bardziej odpornymi na infekcje i zmęczenie.'
                  },
                  {
                    title: 'Poprawa wzroku i jasność umysłu (Drishti Prasadana)',
                    desc: 'Według tekstów ajurwedyjskich, punkty na stopach są bezpośrednio połączone z oczami. Masaż usuwa napięcie z twarzy i poprawia koncentrację.'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-2 md:gap-4 p-5 bg-spa-secondary/10 rounded-2xl border border-spa-secondary/20 hover:bg-spa-secondary/20 transition-colors">
                    <span className="text-spa-terracotta font-bold text-xl md:text-2xl font-serif shrink-0">{index + 1}.</span>
                    <div>
                      <strong className="text-spa-ink block text-xl mb-2 font-serif">{item.title}</strong>
                      <span className="text-spa-ink/70 leading-relaxed block">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-8 w-full flex justify-center">
                <button 
                  onClick={onClose}
                  className="bg-spa-terracotta text-spa-bg px-10 py-4.5 rounded-spa-xl font-medium tracking-widest uppercase shadow-md hover:brightness-90 transition-all font-mono text-sm"
                >
                  Zamknij
                </button>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
