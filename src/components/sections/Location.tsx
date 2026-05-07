import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export const Location: React.FC = () => {
  const { t } = useLanguage();

  const contactInfo = [
    { icon: MapPin, label: t('address'), value: 'Downtown, Main Street, City 12345' },
    { icon: Phone, label: t('contactPhone'), value: '+1 (555) 123-4567' },
    { icon: Mail, label: t('email'), value: 'hello@maisondine.com' },
    { icon: Clock, label: t('openDaily'), value: t('openingHours') },
  ];

  return (
    <section id="location" className="py-16 lg:py-24 bg-soft-card/30">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('location')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} variant="default" className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">{info.label}</p>
                    <p className="text-sm text-muted-foreground">{info.value}</p>
                  </div>
                </Card>
              );
            })}
            <Button variant="outline" size="lg" fullWidth>
              {t('getDirections')}
            </Button>
          </div>

          {/* Map Placeholder */}
          <Card variant="default" className="aspect-[4/3] flex items-center justify-center">
            <div className="text-center space-y-2">
              <MapPin className="w-16 h-16 mx-auto text-primary" />
              <p className="text-muted-foreground">Map Placeholder</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
