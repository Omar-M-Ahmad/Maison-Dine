import Image from 'next/image';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Gallery: React.FC = () => {
  const { t } = useLanguage();

  const images = [
    { src: '/images/gallery-plate.svg', label: t('freshPlates'), className: 'md:row-span-2' },
    { src: '/images/gallery-interior.svg', label: t('cozyNights'), className: '' },
    { src: '/images/gallery-drinks.svg', label: t('craftedDrinks'), className: '' },
    { src: '/images/gallery-dessert.svg', label: t('sweetEndings'), className: 'md:col-span-2' },
  ];

  return (
    <section id="gallery" className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-12">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {t('galleryTitle')}
          </h2>
        </div>

        <div className="grid auto-rows-[260px] grid-cols-1 gap-5 md:grid-cols-3 lg:auto-rows-[300px]">
          {images.map((image) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-lg shadow-black/5 ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.label}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              <span className="absolute bottom-5 start-5 rounded-full bg-white/12 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                {image.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
