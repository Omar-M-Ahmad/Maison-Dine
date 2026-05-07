import Image from 'next/image';
import React from 'react';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const Location: React.FC = () => {
  const { t } = useLanguage();

  const contactInfo = [
    { icon: MapPin, label: t('address'), value: 'Downtown, Main Street, City 12345' },
    { icon: Phone, label: t('contactPhone'), value: '+1 (555) 123-4567' },
    { icon: Mail, label: t('email'), value: 'hello@maisondine.com' },
    { icon: Clock, label: t('openDaily'), value: t('openingHours') },
  ];

  return (
    <section id="location" className="bg-soft-card/30 py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-12">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {t('location')}
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <Card key={info.label} className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="mb-1 font-semibold text-foreground">{info.label}</p>
                    <p className="text-sm text-muted-foreground">{info.value}</p>
                  </div>
                </Card>
              );
            })}
            <Button variant="outline" size="lg" fullWidth>
              {t('getDirections')}
            </Button>
          </div>

          <Card className="relative min-h-[360px] overflow-hidden p-0">
            <Image
              src="/images/map-card.svg"
              alt="Maison Dine location map preview"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Card>
        </div>
      </div>
    </section>
  );
};
