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
    'Meet Faruq Abdul Hakim - a passionate Software Developer interested in both web development and mobile development. Enthusiasm for learning and exploring new technologies drives him to continually expand his skills and knowledge in the ever-evolving field of software development. With a strong foundation in computer science and a keen eye for detail, Faruq is committed to delivering high-quality and user-friendly applications.',
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
    <html lang='en' className='transition-all' suppressHydrationWarning>
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
