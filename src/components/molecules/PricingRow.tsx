import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PricingRowProps {
  name: string;
  time: string;
  price: string;
  onClick: () => void;
}

export const PricingRow: React.FC<PricingRowProps> = ({ name, time, price, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full text-left flex flex-col sm:flex-row sm:items-center justify-between p-8 bg-spa-bg/95 border border-white/30 rounded-spa-lg shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:border-spa-terracotta/40 transition-all cursor-pointer group"
    >
      <div className="space-y-1">
        <h4 className="text-lg font-medium group-hover:text-spa-terracotta transition-colors">{name}</h4>
        <p className="text-sm text-spa-ink/40">{time}</p>
      </div>
      <div className="flex items-center gap-4 mt-4 sm:mt-0">
        <div className="text-2xl font-serif text-spa-terracotta">{price}</div>
        <div className="w-8 h-8 rounded-full border border-spa-terracotta/30 flex items-center justify-center text-spa-terracotta opacity-0 group-hover:opacity-100 group-hover:bg-spa-terracotta/10 transition-all">
          <ArrowRight size={14} />
        </div>
      </div>
    </button>
  );
};
