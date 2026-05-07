import '@/styles/index.css';
import type { Metadata, Viewport } from 'next';
import { Providers } from './providers';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: {
    default: "Maison Dine | Premium Restaurant Landing Page",
    template: "%s | Maison Dine",
  },
  description:
    "A premium bilingual restaurant landing page built with Next.js, Tailwind CSS, dark mode, and responsive UX.",
  openGraph: {
    title: "Maison Dine | Premium Restaurant Landing Page",
    description:
      "A modern restaurant experience with elegant design, booking flow, menu sections, and premium visuals.",
    url: "/",
    siteName: "Maison Dine",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maison Dine Restaurant Landing Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maison Dine | Premium Restaurant Landing Page",
    description:
      "A premium restaurant landing page template built with Next.js.",
    images: ["/og-image.png"],
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
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body suppressHydrationWarning className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
