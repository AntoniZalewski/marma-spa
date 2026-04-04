import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  align = 'center',
  className = ''
}) => {
  return (
    <div className={`mb-20 ${align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left'} ${className}`}>
      {subtitle && (
        <span className="text-spa-terracotta font-bold tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-4 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">{title}</h2>
      {align === 'center' && <div className="w-24 h-1 bg-spa-terracotta mx-auto rounded-full" />}
    </div>
  );
};
