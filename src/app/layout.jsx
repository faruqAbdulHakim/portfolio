import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { Manrope } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import ThemeSwitcher from './components/theme-switcher';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata = {
  title: "Hi, I'm Faruq 👋",
  description: 'Faruq Portfolio Website',
  authors: [{ name: 'Faruq Abdul Hakim' }],
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='transition-all'>
      <body className={manrope.className}>
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
