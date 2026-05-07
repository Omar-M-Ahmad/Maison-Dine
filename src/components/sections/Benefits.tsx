import React from 'react';
import { Leaf, ChefHat, Sparkles, Calendar } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card } from '../ui/Card';

export const Benefits: React.FC = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Leaf,
      title: t('benefit1'),
      description: t('benefit1Desc'),
    },
    {
      icon: ChefHat,
      title: t('benefit2'),
      description: t('benefit2Desc'),
    },
    {
      icon: Sparkles,
      title: t('benefit3'),
      description: t('benefit3Desc'),
    },
    {
      icon: Calendar,
      title: t('benefit4'),
      description: t('benefit4Desc'),
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-soft-card/30">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('whyChooseUs')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} variant="default" className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
