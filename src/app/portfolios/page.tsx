// Types
import type { Metadata } from 'next';

// UI Components
import { Button } from '@nextui-org/react';

// Components
import Link from 'next/link';
import PortfolioList from '../components/portfolio-list';

// Icons
import { GoHome } from 'react-icons/go';

// Global
import { CONFIG } from '@/global';

export const metadata: Metadata = {
  title: "Faruq's Portfolios 😄",
  description:
    "Have a look on Faruq's portfolios - a passionate Software Developer interested in both web development and mobile development. Enthusiasm for learning and exploring new technologies drives him to continually expand his skills and knowledge in the ever-evolving field of software development. With a strong foundation in computer science and a keen eye for detail, Faruq is committed to delivering high-quality and user-friendly applications.",
  alternates: {
    canonical: CONFIG.LIVE_SITE_URL + 'portfolios',
  },
};

export default async function PortfoliosPage() {
  return (
    <>
      <header className='py-8 w-11/12 mx-auto max-w-screen-lg'>
        <Button startContent={<GoHome />} variant='flat' as={Link} href='/'>
          Go to Homepage
        </Button>
        <h1 className='font-bold text-3xl mt-4'>Faruq&rsquo;s portfolios</h1>
        <p className='text-lg mt-1'>Hi, have a look on my portfolios 😄</p>
      </header>
      <main className='pb-16 w-11/12 mx-auto max-w-screen-lg'>
        <PortfolioList />
      </main>
    </>
  );
}
