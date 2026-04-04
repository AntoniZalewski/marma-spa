import React from 'react';

interface FeatureItemProps {
  title: string;
  desc: string;
  icon: React.ElementType;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ title, desc, icon: Icon }) => {
  return (
    <div className="space-y-4">
      <Icon className="text-spa-terracotta" size={32} strokeWidth={1.5} />
      <h5 className="font-semibold text-sm tracking-widest uppercase">{title}</h5>
      <p className="text-sm text-spa-ink/60 leading-relaxed">
        {desc}
      </p>
    </div>
  );
};
