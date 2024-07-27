// Data sources
import { getPortfolioDetail } from '@/data';

// Components
import AppBreadcrumbs from '@/components/app-breadcrumbs';
import MarkdownPreviewer from '@/components/markdown-previewer';
import { Button, Chip } from '@nextui-org/react';
import ImagesPreview from './components/images-preview';

// Global
import { CONFIG } from '@/global';

// Next
import { Metadata, ResolvingMetadata } from 'next';
import { redirect } from 'next/navigation';

// Icons
import { LuCode2, LuGlobe } from 'react-icons/lu';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const portfolio = await getPortfolioDetail(params.slug);

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

export default async function PortfolioDetailPage({ params }: Props) {
  const portfolio = await getPortfolioDetail(params.slug);

  if (!portfolio) {
    redirect('/not-found');
  }

  const images = [
    ...(portfolio.thumbnail ? [portfolio.thumbnail] : []),
    ...portfolio.images,
  ];

  return (
    <>
      <header className='py-8 w-11/12 mx-auto max-w-screen-lg'>
        <AppBreadcrumbs />
        <h1 className='font-bold text-3xl mt-4'>Faruq&rsquo;s Portfolio</h1>
      </header>
      <main className='pb-16 w-11/12 mx-auto max-w-screen-lg flex flex-col lg:flex-row gap-12'>
        <div className='flex-1 w-full max-w-[500px] mx-auto'>
          {images.length > 0 ? (
            <ImagesPreview images={images} title={portfolio.title} />
          ) : (
            <div className='aspect-video rounded-xl overflow-hidden grid place-content-center bg-primary-50 outline outline-content2'>
              <p>Preview unavailable</p>
            </div>
          )}
        </div>

        <div className='flex-1 flex flex-col gap-8'>
          <div className='flex flex-col gap-4 border-b pb-4'>
            <div className='flex flex-wrap gap-2 select-none'>
              {portfolio.tags.map((tag) => (
                <Chip
                  key={tag}
                  variant='light'
                  className='transition-all hover:bg-content3'
                >
                  {tag}
                </Chip>
              ))}
            </div>
            {portfolio['url.preview'] || portfolio['url.source_code'] ? (
              <div className='flex gap-4'>
                {portfolio['url.source_code'] && (
                  <Button
                    variant='flat'
                    radius='full'
                    startContent={<LuCode2 />}
                  >
                    Source Code
                  </Button>
                )}
                {portfolio['url.preview'] && (
                  <Button
                    variant='flat'
                    radius='full'
                    startContent={<LuGlobe />}
                  >
                    Preview
                  </Button>
                )}
              </div>
            ) : null}
          </div>
          <article>
            <MarkdownPreviewer content={portfolio.content} />
          </article>
        </div>
      </main>
      ;
    </>
  );
}
