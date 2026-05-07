import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {t('heroHeadline')}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                {t('heroSubheadline')}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
                {t('bookTable')}
              </Button>
              <Button size="lg" variant="outline" onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}>
                {t('exploreMenu')}
              </Button>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary">{t('dinner')}</Badge>
              <Badge variant="secondary">{t('brunch')}</Badge>
              <Badge variant="secondary">{t('desserts')}</Badge>
              <Badge variant="secondary">{t('drinks')}</Badge>
            </div>

            <p className="text-sm text-muted-foreground">
              {t('trustLine')}
            </p>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-accent/20 rounded-[2rem] overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center space-y-2">
                  <div className="text-6xl">🍽️</div>
                  <p className="text-sm">Premium Food Image</p>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <Card className="absolute top-8 -start-4 lg:start-0 w-40 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
              </div>
              <p className="text-2xl font-bold mt-2">4.9</p>
              <p className="text-xs text-muted-foreground">{t('rating')}</p>
            </Card>

            <Card className="absolute bottom-8 -end-4 lg:end-0 w-44 shadow-lg bg-primary text-primary-foreground">
              <p className="text-sm font-medium">{t('chefSpecial')}</p>
              <p className="text-xs opacity-90 mt-1">Today's selection</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
