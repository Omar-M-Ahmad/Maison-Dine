import React from 'react';
import { Award, Leaf, Users } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Award, label: t('yearsExperience') },
    { icon: Leaf, label: t('seasonalDishes') },
    { icon: Users, label: t('happyGuests') },
  ];

  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-primary/20 rounded-[2rem] flex items-center justify-center text-8xl">
              👨‍🍳
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {t('about')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('aboutStory')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <p className="text-sm font-medium text-foreground">{stat.label}</p>
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
