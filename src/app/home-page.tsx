'use client';

import { useRouter } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { QuickInfo } from '@/components/sections/QuickInfo';
import { FeaturedDishes } from '@/components/sections/FeaturedDishes';
import { MenuPreview } from '@/components/sections/MenuPreview';
import { About } from '@/components/sections/About';
import { Benefits } from '@/components/sections/Benefits';
import { Gallery } from '@/components/sections/Gallery';
import { Reviews } from '@/components/sections/Reviews';
import { Booking } from '@/components/sections/Booking';
import { Location } from '@/components/sections/Location';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';

type PageTarget = 'home' | 'signin' | 'signup';

export function HomePage() {
  const router = useRouter();

  const handleNavigate = (page: PageTarget) => {
    if (page === 'home') {
      router.push('/');
      return;
    }

    router.push(`/${page}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={handleNavigate} />
      <main>
        <Hero />
        <QuickInfo />
        <FeaturedDishes />
        <MenuPreview />
        <About />
        <Benefits />
        <Gallery />
        <Reviews />
        <Booking />
        <Location />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
