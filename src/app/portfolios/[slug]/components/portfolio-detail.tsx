import MarkdownPreviewer from '@/components/markdown-previewer';
import { Portfolio } from '@/types';
import { Button, Chip } from '@nextui-org/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { LuCode2, LuGlobe } from 'react-icons/lu';
import ImagesPreview from './images-preview';

type Props = {
  portfolioPromise: Promise<Portfolio | null>;
};

export default async function PortfolioDetail({ portfolioPromise }: Props) {
  const portfolio = await portfolioPromise;

  if (!portfolio) {
    redirect('/not-found');
  }

  const images = [
    ...(portfolio.thumbnail ? [portfolio.thumbnail] : []),
    ...portfolio.images,
  ];

  return (
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
          <h2 className='font-bold text-4xl'>{portfolio.title}</h2>
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
                  as={Link}
                  href={portfolio['url.source_code']}
                  target='_blank'
                  variant='flat'
                  radius='full'
                  startContent={<LuCode2 />}
                >
                  Source Code
                </Button>
              )}
              {portfolio['url.preview'] && (
                <Button
                  as={Link}
                  href={portfolio['url.preview']}
                  target='_blank'
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
  );
}
