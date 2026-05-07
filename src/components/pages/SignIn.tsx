import Image from 'next/image';
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

interface SignInProps {
  onNavigate?: (page: 'home' | 'signup') => void;
}

export const SignIn: React.FC<SignInProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Sign in functionality would be implemented here');
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="grid min-h-screen lg:grid-cols-2">
        <section className="flex items-center justify-center px-5 py-10 sm:px-6 lg:p-12">
          <div className="w-full max-w-md space-y-8">
            <button
              type="button"
              onClick={() => onNavigate?.('home')}
              className="font-heading text-2xl font-bold text-foreground transition-colors hover:text-primary"
            >
              {language === 'en' ? 'Maison Dine' : 'ميزون داين'}
            </button>

            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {t('welcomeBack')}
              </h1>
              <p className="leading-relaxed text-muted-foreground">{t('signInSubtitle')}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label={t('emailAddress')}
                type="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <div className="relative">
                <Input
                  label={t('password')}
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  className="absolute end-4 top-[42px] text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>

              <button type="button" className="text-sm font-medium text-primary hover:underline">
                {t('forgotPassword')}
              </button>

              <Button type="submit" size="lg" fullWidth>
                {t('signIn')}
              </Button>

              <Button type="button" variant="outline" size="lg" fullWidth>
                {t('signInWithGoogle')}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                {t('noAccount')}{' '}
                <button
                  type="button"
                  onClick={() => onNavigate?.('signup')}
                  className="font-medium text-primary hover:underline"
                >
                  {t('signUp')}
                </button>
              </p>
            </form>
          </div>
        </section>

        <section className="relative hidden overflow-hidden border-s border-border bg-card lg:block">
          <Image
            src="/images/auth-ambience.svg"
            alt="Maison Dine reservation experience"
            fill
            priority
            sizes="50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/20 to-transparent" />
          <div className="absolute bottom-12 start-12 max-w-md space-y-4">
            <h2 className="font-heading text-4xl font-bold text-foreground">
              {language === 'en' ? 'Maison Dine' : 'ميزون داين'}
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">{t('heroSubheadline')}</p>
          </div>
        </section>
      </div>
    </main>
  );
};
