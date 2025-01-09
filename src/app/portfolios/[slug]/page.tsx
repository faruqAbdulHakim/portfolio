import AppBreadcrumbs from '@/components/app-breadcrumbs';
import { getPortfolioDetail } from '@/data';
import { CONFIG } from '@/global';
import { Metadata, ResolvingMetadata } from 'next';
import { Suspense } from 'react';
import PortfolioDetail from './components/portfolio-detail';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;
  const portfolio = await getPortfolioDetail(slug);

  if (!portfolio) return {};

  const ogImages = [
    ...(portfolio.thumbnail ? [portfolio.thumbnail] : []),
    ...portfolio.images,
    ...((await parent).openGraph?.images || []),
  ];

  return {
    title: `Faruq's Portfolios 😄 | ${portfolio.title}`,
    description: `Faruq's portfolio - ${portfolio.title} - ${portfolio.description}`,
    alternates: {
      canonical: `${CONFIG.LIVE_SITE_URL}/portfolios/${portfolio.slug}`,
    },
    openGraph: {
      images: ogImages,
    },
  };
}

export default async function PortfolioDetailPage(props: Props) {
  const params = await props.params;
  const portfolioPromise = getPortfolioDetail(params.slug);

  return (
    <>
      <header className='py-8 w-11/12 mx-auto max-w-screen-lg'>
        <AppBreadcrumbs />
        <h1 className='font-bold text-3xl mt-4'>Faruq&rsquo;s Portfolio</h1>
      </header>
      <Suspense fallback={<p>Loading...</p>}>
        <PortfolioDetail portfolioPromise={portfolioPromise} />
      </Suspense>
    </>
  );
}
