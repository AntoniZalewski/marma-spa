import React from 'react';

interface ElementCardProps {
  name: string;
  label: string;
  desc: string;
  icon: React.ElementType; // Lucide icon
  onClick?: () => void;
}

export const ElementCard: React.FC<ElementCardProps> = ({ name, label, desc, icon: Icon, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="flex flex-col items-center justify-start text-center p-8 rounded-spa-lg border border-spa-bg/10 hover:bg-spa-bg/5 hover:-translate-y-2 hover:shadow-lg transition-all duration-300 group w-full text-left"
    >
      <Icon className="mb-6 text-spa-terracotta group-hover:scale-110 transition-transform" size={40} strokeWidth={1} />
      <h4 className="text-xl mb-2 font-serif w-full text-center">{name}</h4>
      <span className="text-[10px] tracking-[0.3em] font-bold text-spa-terracotta mb-4 uppercase w-full text-center">{label}</span>
      <p className="text-sm text-spa-bg/60 leading-relaxed w-full text-center">{desc}</p>
    </button>
  );
};
