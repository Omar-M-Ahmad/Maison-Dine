import type { Metadata, Viewport } from 'next';
import '@/styles/index.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Maison Dine | Modern Restaurant Landing Page',
  description:
    'A premium bilingual restaurant landing page with booking, menu preview, reviews, location, and elegant dark/light themes.',
  keywords: [
    'restaurant landing page',
    'restaurant website',
    'bilingual restaurant template',
    'RTL restaurant landing',
    'Next.js restaurant template',
  ],
  openGraph: {
    title: 'Maison Dine | Modern Restaurant Landing Page',
    description:
      'Modern dining, crafted with warmth. Explore the menu, book a table, and enjoy a premium restaurant experience.',
    type: 'website',
    images: [{ url: '/images/og-image.svg', width: 1200, height: 630, alt: 'Maison Dine restaurant landing page' }],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FBF7EF' },
    { media: '(prefers-color-scheme: dark)', color: '#120F0B' },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
