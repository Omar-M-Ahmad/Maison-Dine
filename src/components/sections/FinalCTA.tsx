import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/Button';

export const FinalCTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            {t('finalCtaTitle')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('finalCtaSubtitle')}
          </p>
          <Button
            size="lg"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('bookTable')}
          </Button>
        </div>
      </div>
    </section>
  );
};
