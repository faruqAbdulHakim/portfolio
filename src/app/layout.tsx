// Types
import type { Metadata } from 'next';

// Vercel Features
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

// Providers
import Providers from './providers';

// Components
import ThemeSwitcher from './components/theme-switcher';

// Global
import { CONFIG } from '@/global';

// Theme
import { fonts } from '@/theme';

// Static
import './globals.css';

export const metadata: Metadata = {
  title: "Hi, I'm Faruq 👋",
  description:
    'Faruq Portfolio Website. Meet Faruq - a passionate Software Developer with a Bachelor of Information Systems degree from Universitas Jember, Indonesia.',
  authors: [{ name: 'Faruq Abdul Hakim' }],
  metadataBase: new URL(CONFIG.LIVE_SITE_URL),
  keywords: [
    'faruq abdul hakim',
    'indonesia',
    'portfolio',
    'software developer',
    'frontend dev',
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'Faruq Portfolio Website',
    url: CONFIG.LIVE_SITE_URL,
  },
  alternates: {
    canonical: CONFIG.LIVE_SITE_URL,
  },
};

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en' className='transition-all'>
      <body className={fonts.manrope.className}>
        <Providers>
          {children}
          <div className='fixed bottom-8 left-6 z-50'>
            <ThemeSwitcher />
          </div>
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
