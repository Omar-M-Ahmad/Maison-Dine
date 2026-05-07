import Image from 'next/image';
import React from 'react';
import { Award, Leaf, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Award, label: t('yearsExperience') },
    { icon: Leaf, label: t('seasonalDishes') },
    { icon: Users, label: t('happyGuests') },
  ];

  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl shadow-black/10">
              <Image
                src="/images/restaurant-interior.svg"
                alt="Warm Maison Dine restaurant interior"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="order-1 space-y-8 lg:order-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                {t('about')}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t('aboutStory')}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="rounded-[1.5rem] border border-border bg-card p-5 text-center">
                    <Icon className="mx-auto mb-3 h-8 w-8 text-primary" />
                    <p className="text-sm font-medium leading-relaxed text-foreground">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
