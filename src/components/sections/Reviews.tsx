import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card } from '../ui/Card';

export const Reviews: React.FC = () => {
  const { t } = useLanguage();

  const reviews = [
    {
      guest: t('guest1'),
      review: t('review1'),
      rating: 5,
    },
    {
      guest: t('guest2'),
      review: t('review2'),
      rating: 5,
    },
    {
      guest: t('guest3'),
      review: t('review3'),
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-soft-card/30">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('reviewsTitle')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} variant="default" className="space-y-4">
              <div className="flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed">"{review.review}"</p>
              <div className="pt-2">
                <p className="font-semibold text-foreground">{review.guest}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
