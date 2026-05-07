import Image from 'next/image';
import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(circle at 20% 10%, color-mix(in srgb, var(--primary) 18%, transparent), transparent 32%), radial-gradient(circle at 80% 30%, color-mix(in srgb, var(--accent) 18%, transparent), transparent 28%)',
        }}
      />

      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-8">
            <div className="space-y-5">
              <Badge variant="secondary" className="border border-border bg-card/70 backdrop-blur">
                {t('trustLine')}
              </Badge>
              <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-7xl">
                {t('heroHeadline')}
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                {t('heroSubheadline')}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Button size="lg" onClick={() => scrollTo('#booking')}>
                {t('bookTable')}
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo('#menu')}>
                {t('exploreMenu')}
              </Button>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary">{t('dinner')}</Badge>
              <Badge variant="secondary">{t('brunch')}</Badge>
              <Badge variant="secondary">{t('desserts')}</Badge>
              <Badge variant="secondary">{t('drinks')}</Badge>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] lg:mx-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] border border-border bg-card shadow-2xl shadow-black/20">
              <Image
                src="/images/hero-dish.svg"
                alt="Maison Dine signature dinner plate"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 520px"
                className="object-cover"
              />
            </div>

            <Card className="absolute -start-3 top-8 w-44 shadow-xl backdrop-blur md:-start-8">
              <div className="flex items-center gap-1 text-accent">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-2 text-3xl font-bold text-foreground">4.9</p>
              <p className="text-xs text-muted-foreground">{t('rating')}</p>
            </Card>

            <Card className="absolute -end-3 bottom-8 w-48 bg-primary text-primary-foreground shadow-xl md:-end-8">
              <p className="text-sm font-semibold">{t('chefSpecial')}</p>
              <p className="mt-1 text-xs opacity-90">{t('todaySelection')}</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
