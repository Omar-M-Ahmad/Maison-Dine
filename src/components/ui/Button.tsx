import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', fullWidth = false, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-[1.5rem] transition-all duration-200',
          'disabled:opacity-50 disabled:pointer-events-none',
          {
            'bg-primary text-primary-foreground hover:opacity-90': variant === 'primary',
            'bg-secondary text-secondary-foreground hover:bg-muted': variant === 'secondary',
            'bg-transparent hover:bg-secondary': variant === 'ghost',
            'border-2 border-border hover:bg-secondary': variant === 'outline',
            'px-6 py-2.5 text-sm': size === 'sm',
            'px-8 py-3.5 text-base': size === 'md',
            'px-10 py-4 text-lg': size === 'lg',
            'w-full': fullWidth,
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
