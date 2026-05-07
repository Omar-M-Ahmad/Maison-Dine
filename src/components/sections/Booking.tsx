import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Card } from '../ui/Card';

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
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {t('bookingTitle')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('confirmationNote')}
              </p>
            </div>

            <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 rounded-[2rem] flex items-center justify-center text-8xl">
              🍷
            </div>
          </div>

          {/* Right Content - Form */}
          <Card variant="default" className="p-8">
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

              <div className="grid grid-cols-2 gap-4">
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
                min="1"
                required
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              />

              <div>
                <label className="block text-sm mb-2 text-foreground">{t('message')}</label>
                <textarea
                  className="w-full px-4 py-3 rounded-[1.5rem] bg-input-background border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-ring text-foreground placeholder:text-muted-foreground resize-none"
                  rows={3}
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
