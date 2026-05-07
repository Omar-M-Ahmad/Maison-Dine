import React from 'react';
import { Clock, MapPin, Calendar, ShoppingBag } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card } from '../ui/Card';

export const QuickInfo: React.FC = () => {
  const { t } = useLanguage();

  const infoCards = [
    {
      icon: Clock,
      title: t('openDaily'),
      description: t('openingHours'),
    },
    {
      icon: MapPin,
      title: t('locationTitle'),
      description: t('locationAddress'),
    },
    {
      icon: Calendar,
      title: t('reservations'),
      description: t('reservationsInfo'),
    },
    {
      icon: ShoppingBag,
      title: t('takeaway'),
      description: t('takeawayInfo'),
    },
  ];

  return (
    <section className="py-12 bg-soft-card/30">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Card key={index} variant="default" className="text-center">
                <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold text-foreground mb-1">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
