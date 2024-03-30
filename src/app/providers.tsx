'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';

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
