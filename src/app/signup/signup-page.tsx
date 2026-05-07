'use client';

import { useRouter } from 'next/navigation';
import { SignUp } from '@/components/pages/SignUp';

export function SignUpPage() {
  const router = useRouter();

  return (
    <SignUp
      onNavigate={(page) => {
        router.push(page === 'home' ? '/' : `/${page}`);
      }}
    />
  );
}
