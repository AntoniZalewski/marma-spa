import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', children, ...props }, ref) => {
    
    let baseStyles = "inline-flex items-center justify-center font-medium tracking-widest uppercase transition-all ";
    
    if (variant === 'primary') {
      baseStyles += "bg-spa-terracotta text-spa-bg shadow-2xl hover:brightness-90 ";
    } else if (variant === 'secondary') {
      baseStyles += "bg-spa-secondary text-spa-ink shadow-lg hover:brightness-90 ";
    } else if (variant === 'outline') {
      baseStyles += "border border-spa-terracotta text-spa-terracotta hover:bg-spa-terracotta hover:text-spa-bg ";
    }

    if (size === 'sm') {
      baseStyles += "px-6 py-3 text-xs rounded-spa-md ";
    } else if (size === 'md') {
      baseStyles += "px-8 py-4 text-xs rounded-spa-lg ";
    } else if (size === 'lg') {
      baseStyles += "px-10 py-5 text-sm rounded-spa-xl ";
    }

    return (
      <button ref={ref} className={`${baseStyles} ${className}`} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
