'use client';

// Providers
import { ThemeProvider } from 'next-themes';

// UI Components
import { NextUIProvider } from '@nextui-org/react';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function Providers({ children }: Props) {
  return (
    <NextUIProvider>
      <ThemeProvider attribute='class' defaultTheme='light'>
        {children}
      </ThemeProvider>
    </NextUIProvider>
  );
}
