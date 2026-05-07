import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { useLanguage } from '../../contexts/LanguageContext';

export const Gallery: React.FC = () => {
  const { t } = useLanguage();

  const images = [
    { emoji: '🍽️', label: t('freshPlates'), aspect: 'tall' },
    { emoji: '🕯️', label: t('cozyNights'), aspect: 'square' },
    { emoji: '🍸', label: t('craftedDrinks'), aspect: 'wide' },
    { emoji: '🍮', label: t('sweetEndings'), aspect: 'square' },
    { emoji: '🥗', label: t('freshPlates'), aspect: 'tall' },
    { emoji: '🍷', label: t('craftedDrinks'), aspect: 'square' },
  ];

  return (
    <section id="gallery" className="py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('galleryTitle')}
          </h2>
        </div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="1.5rem">
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative rounded-[1.5rem] overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 group cursor-pointer ${
                  image.aspect === 'tall' ? 'aspect-[3/4]' :
                  image.aspect === 'wide' ? 'aspect-[16/9]' :
                  'aspect-square'
                }`}
              >
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  {image.emoji}
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-medium">{image.label}</span>
                </div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
};
