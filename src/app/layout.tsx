import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cheeko | A playful AI companion for kids',
  description: 'Cheeko is a playful AI companion for kids, without handing them a phone.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}
