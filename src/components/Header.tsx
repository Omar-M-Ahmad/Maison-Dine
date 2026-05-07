import React, { useEffect, useState } from 'react';
import { Globe, Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/contexts/LanguageContext';
import { useMounted } from '@/hooks/use-mounted';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface HeaderProps {
  onNavigate?: (page: 'home' | 'signin' | 'signup') => void;
}

const navLinks = [
  { key: 'home', href: '#home' },
  { key: 'menu', href: '#menu' },
  { key: 'about', href: '#about' },
  { key: 'gallery', href: '#gallery' },
  { key: 'reviews', href: '#reviews' },
  { key: 'location', href: '#location' },
];

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const mounted = useMounted();
  const { resolvedTheme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'border-b border-border bg-background/82 shadow-sm backdrop-blur-xl'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => onNavigate?.('home')}
            className="font-heading text-2xl font-bold tracking-tight text-foreground transition-colors hover:text-primary"
          >
            {language === 'en' ? 'Maison Dine' : 'ميزون داين'}
          </button>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.key}
                type="button"
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-foreground/80 transition-colors hover:text-primary"
              >
                {t(link.key)}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="inline-flex items-center gap-2 rounded-full px-3 py-2 transition-colors hover:bg-secondary"
              aria-label="Toggle language"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">{language === 'en' ? 'AR' : 'EN'}</span>
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-secondary"
              aria-label="Toggle theme"
            >
              {!mounted ? (
                <span className="h-5 w-5 rounded-full border border-border" aria-hidden="true" />
              ) : resolvedTheme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            <button
              type="button"
              onClick={() => onNavigate?.('signin')}
              className="hidden px-4 py-2 text-sm text-foreground/80 transition-colors hover:text-primary lg:inline-flex"
            >
              {t('signIn')}
            </button>

            <Button className="hidden lg:inline-flex" onClick={() => scrollToSection('#booking')}>
              {t('bookTable')}
            </Button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((value) => !value)}
              className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-secondary lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-border bg-background/96 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-[1280px] flex-col gap-2 px-6 py-6">
            {navLinks.map((link) => (
              <button
                key={link.key}
                type="button"
                onClick={() => scrollToSection(link.href)}
                className="rounded-2xl px-3 py-3 text-start text-base text-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                {t(link.key)}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onNavigate?.('signin');
              }}
              className="rounded-2xl px-3 py-3 text-start text-base text-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              {t('signIn')}
            </button>
            <Button
              fullWidth
              className="mt-3"
              onClick={() => scrollToSection('#booking')}
            >
              {t('bookTable')}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
