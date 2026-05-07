import Image from 'next/image';
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';

export const Booking: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t('confirmationNote'));
  };

  return (
    <section id="booking" className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1fr]">
          <div className="space-y-6">
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                {t('bookingTitle')}
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                {t('confirmationNote')}
              </p>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl shadow-black/10">
              <Image
                src="/images/booking-wine.svg"
                alt="Reserve a table at Maison Dine"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>

          <Card className="p-5 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label={t('name')}
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />

              <Input
                label={t('phone')}
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input
                  label={t('date')}
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
                <Input
                  label={t('time')}
                  type="time"
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                />
              </div>

              <Input
                label={t('guests')}
                type="number"
                required
                min="1"
                max="20"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              />

              <div className="w-full">
                <label className="mb-2 block text-sm text-foreground">{t('message')}</label>
                <textarea
                  className="min-h-28 w-full rounded-[1.5rem] border-2 border-transparent bg-input-background px-4 py-3 text-foreground transition-all duration-200 placeholder:text-muted-foreground focus:border-transparent focus:outline-none focus:ring-2 focus:ring-ring"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Button type="submit" size="lg" fullWidth>
                {t('reserveTable')}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
