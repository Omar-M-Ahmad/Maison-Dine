import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

interface SignInProps {
  onNavigate?: (page: 'home' | 'signup') => void;
}

export const SignIn: React.FC<SignInProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Sign in functionality would be implemented here');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left - Form */}
        <div className="flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md space-y-8">
            {/* Logo */}
            <button
              onClick={() => onNavigate?.('home')}
              className="text-2xl font-bold font-heading text-foreground"
            >
              {language === 'en' ? 'Maison Dine' : 'ميزون داين'}
            </button>

            {/* Title */}
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                {t('welcomeBack')}
              </h1>
              <p className="text-muted-foreground">
                {t('signInSubtitle')}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label={t('emailAddress')}
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <div className="relative">
                <Input
                  label={t('password')}
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute end-4 top-[42px] text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="text-sm text-primary hover:underline"
                >
                  {t('forgotPassword')}
                </button>
              </div>

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
                  className="text-primary hover:underline font-medium"
                >
                  {t('signUp')}
                </button>
              </p>
            </form>
          </div>
        </div>

        {/* Right - Image */}
        <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 p-12">
          <div className="text-center space-y-6">
            <div className="text-9xl">🍽️</div>
            <h2 className="text-4xl font-bold font-heading text-foreground">
              {language === 'en' ? 'Maison Dine' : 'ميزون داين'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-md">
              {t('heroSubheadline')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
