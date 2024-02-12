import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata = {
  title: "Hi, I'm Faruq 👋",
  description: 'Faruq Portfolio Website',
  authors: [{ name: 'Faruq Abdul Hakim' }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
