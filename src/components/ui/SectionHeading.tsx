import type { ReactNode } from 'react';
import clsx from 'clsx';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  className?: string;
};

export function SectionHeading({ eyebrow, title, children, className }: SectionHeadingProps) {
  return (
    <div className={clsx('mx-auto max-w-3xl text-center', className)}>
      {eyebrow ? <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-cheeko-orange">{eyebrow}</p> : null}
      <h2 className="mt-2 font-display text-4xl font-black leading-[0.95] text-cheeko-ink sm:text-5xl md:text-6xl">{title}</h2>
      {children ? <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-cheeko-brown sm:text-lg">{children}</p> : null}
    </div>
  );
}
