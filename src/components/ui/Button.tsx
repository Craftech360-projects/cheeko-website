import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';
import clsx from 'clsx';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'disabled';
};

const primaryStyle: CSSProperties = {
  background: 'linear-gradient(180deg, #ff6aa8 0%, #f95c9b 100%)',
  border: '3px solid #24160f',
  boxShadow: '0 8px 0 #24160f, 0 18px 30px rgba(249, 92, 155, 0.28)',
  color: '#24160f'
};

const disabledStyle: CSSProperties = {
  background: '#d6d3d1',
  border: '3px solid #8d867f',
  boxShadow: 'none',
  color: '#57534e'
};

export function Button({ children, className, variant = 'primary', disabled, style, ...props }: ButtonProps) {
  const isDisabled = disabled || variant === 'disabled';
  const visualStyle = variant === 'primary' ? primaryStyle : variant === 'disabled' ? disabledStyle : undefined;

  return (
    <button
      className={clsx(
        'inline-flex min-h-11 items-center justify-center rounded-2xl px-6 py-3 font-display text-sm font-black transition duration-200 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-cheeko-ink disabled:cursor-not-allowed',
        variant === 'primary' && 'hover:-translate-y-0.5 hover:brightness-105 active:translate-y-1',
        variant === 'secondary' && 'bg-cheeko-yellow text-cheeko-ink shadow-cheeko-card hover:-translate-y-0.5 hover:brightness-105 active:translate-y-1',
        variant === 'disabled' && 'grayscale',
        className
      )}
      disabled={isDisabled}
      style={{ ...visualStyle, ...style }}
      {...props}
    >
      {children}
    </button>
  );
}
