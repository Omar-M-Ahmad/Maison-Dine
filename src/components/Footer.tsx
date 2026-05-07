import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/Button';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  const navLinks = [
    { key: 'home', href: '#home' },
    { key: 'menu', href: '#menu' },
    { key: 'about', href: '#about' },
    { key: 'gallery', href: '#gallery' },
    { key: 'reviews', href: '#reviews' },
    { key: 'location', href: '#location' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-heading text-foreground">
              {language === 'en' ? 'Maison Dine' : 'ميزون داين'}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t('footerDescription')}
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Navigation</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t(link.key)}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t('location')}</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Downtown, Main Street</p>
              <p>+1 (555) 123-4567</p>
              <p>hello@maisondine.com</p>
              <p className="mt-4">{t('openingHours')}</p>
            </div>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t('followUs')}</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Maison Dine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
