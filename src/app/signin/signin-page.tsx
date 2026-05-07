'use client';

import { useRouter } from 'next/navigation';
import { SignIn } from '@/components/pages/SignIn';

export function SignInPage() {
  const router = useRouter();

  return (
    <SignIn
      onNavigate={(page) => {
        router.push(page === 'home' ? '/' : `/${page}`);
      }}
    />
  );
}
