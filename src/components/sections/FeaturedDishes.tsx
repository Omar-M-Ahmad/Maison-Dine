import Image from 'next/image';
import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export const FeaturedDishes: React.FC = () => {
  const { t } = useLanguage();

  const dishes = [
    {
      name: t('dish1'),
      description: t('dish1Desc'),
      price: '$24',
      badge: t('popular'),
      image: '/images/dish-pasta.svg',
    },
    {
      name: t('dish2'),
      description: t('dish2Desc'),
      price: '$38',
      badge: t('chefChoice'),
      image: '/images/dish-steak.svg',
    },
    {
      name: t('dish3'),
      description: t('dish3Desc'),
      price: '$32',
      badge: t('popular'),
      image: '/images/dish-salmon.svg',
    },
    {
      name: t('dish4'),
      description: t('dish4Desc'),
      price: '$14',
      badge: t('chefChoice'),
      image: '/images/dish-dessert.svg',
    },
  ];

  return (
    <section id="featured" className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-12">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {t('featuredTitle')}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {dishes.map((dish) => (
            <Card key={dish.name} className="group overflow-hidden p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-secondary">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="space-y-3 px-1 pb-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold leading-tight text-foreground">{dish.name}</h3>
                  <Badge variant="accent" className="shrink-0 text-xs">
                    {dish.badge}
                  </Badge>
                </div>

                <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {dish.description}
                </p>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xl font-bold text-primary">{dish.price}</span>
                  <div className="flex gap-0.5 text-accent">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
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
