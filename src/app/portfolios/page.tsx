// Data sources
import { getPortfolioList } from '@/data';

// Types
import type { Metadata } from 'next';

// Components
import AppBreadcrumbs from '@/components/app-breadcrumbs';
import { Suspense } from 'react';
import PortfolioList from '../components/portfolio-list';
import PortfolioListFallback from '../components/portfolio-list-fallback';

// Global
import { CONFIG } from '@/global';

export const metadata: Metadata = {
  title: "Faruq's Portfolios 😄",
  description:
    "Have a look on Faruq's portfolios - a passionate Software Developer interested in both web development and mobile development. Enthusiasm for learning and exploring new technologies drives him to continually expand his skills and knowledge in the ever-evolving field of software development. With a strong foundation in computer science and a keen eye for detail, Faruq is committed to delivering high-quality and user-friendly applications.",
  alternates: {
    canonical: `${CONFIG.LIVE_SITE_URL}/portfolios`,
  },
};

export default function PortfoliosPage() {
  const portfoliosPromise = getPortfolioList();

  return (
    <>
      <header className='py-8 w-11/12 mx-auto max-w-screen-lg'>
        <AppBreadcrumbs />
        <h1 className='font-bold text-3xl mt-4'>Faruq&rsquo;s Portfolios</h1>
        <p className='text-lg mt-1'>Hi, have a look on my portfolios 😄</p>
      </header>
      <main className='pb-16 w-11/12 mx-auto max-w-screen-lg'>
        <Suspense fallback={<PortfolioListFallback />}>
          <PortfolioList portfoliosPromise={portfoliosPromise} />
        </Suspense>
      </main>
    </>
  );
}
