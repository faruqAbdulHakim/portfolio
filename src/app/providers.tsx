'use client';

// Hooks
import { useRouter } from 'next/navigation';

// Providers
import { ThemeProvider } from 'next-themes';

// UI Components
import { NextUIProvider } from '@nextui-org/react';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function Providers({ children }: Props) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <ThemeProvider attribute='class' defaultTheme='light'>
        {children}
      </ThemeProvider>
    </NextUIProvider>
  );
}
