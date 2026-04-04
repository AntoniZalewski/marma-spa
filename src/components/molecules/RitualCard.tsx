import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface RitualCardProps {
  id: string;
  title: string;
  shortDesc: string;
  image: string;
  onClick: () => void;
}

export const RitualCard: React.FC<RitualCardProps> = ({ id, title, shortDesc, image, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className="relative group cursor-pointer rounded-spa-lg overflow-hidden ritual-card-shadow h-[500px] transition-all bg-spa-bg"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-spa-ink/90 via-spa-ink/30 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
      <div className="absolute bottom-0 left-0 right-0 p-8 text-spa-bg">
        <h3 className="text-2xl mb-2 tracking-wide font-serif">{title}</h3>
        <p className="text-sm text-spa-bg/80 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
          {shortDesc}
        </p>
        <div className="mt-4 flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-spa-bg/80">
          <span>Szczegóły</span>
          <ArrowRight size={14} />
        </div>
      </div>
    </motion.div>
  );
};
