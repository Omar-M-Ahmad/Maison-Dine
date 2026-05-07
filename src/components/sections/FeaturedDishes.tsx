import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export const FeaturedDishes: React.FC = () => {
  const { t } = useLanguage();

  const dishes = [
    {
      name: t('dish1'),
      description: t('dish1Desc'),
      price: '$24',
      badge: t('popular'),
      emoji: '🍝',
    },
    {
      name: t('dish2'),
      description: t('dish2Desc'),
      price: '$38',
      badge: t('chefChoice'),
      emoji: '🥩',
    },
    {
      name: t('dish3'),
      description: t('dish3Desc'),
      price: '$32',
      badge: t('popular'),
      emoji: '🐟',
    },
    {
      name: t('dish4'),
      description: t('dish4Desc'),
      price: '$14',
      badge: t('chefChoice'),
      emoji: '🍰',
    },
  ];

  return (
    <section id="featured" className="py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('featuredTitle')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 rounded-[1.25rem] mb-4 flex items-center justify-center text-6xl">
                {dish.emoji}
              </div>

              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-foreground">{dish.name}</h3>
                  <Badge variant="accent" className="text-xs">{dish.badge}</Badge>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2">{dish.description}</p>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xl font-bold text-primary">{dish.price}</span>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
