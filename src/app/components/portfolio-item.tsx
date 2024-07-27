// Types
import { Portfolio } from '@/types';

// UI Components
import { Button, Image } from '@nextui-org/react';

// Components
import NextImage from 'next/image';
import Link from 'next/link';

type Props = Readonly<{
  portfolio: Portfolio;
}>;

export default function PortfolioItem({ portfolio }: Props) {
  return (
    <li className='max-w-96'>
      <Button
        variant='light'
        as={Link}
        href={`/portfolios/${portfolio.slug}`}
        className='group block w-full h-max p-0 whitespace-break-spaces hover:bg-content2 outline outline-content2'
        data-hover='false'
        aria-label={portfolio.title}
      >
        {portfolio.thumbnail ? (
          <Image
            as={NextImage}
            src={portfolio.thumbnail}
            alt={portfolio.title}
            fill
            sizes='(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw'
            className='rounded-xl object-cover object-top'
            classNames={{
              wrapper:
                'w-full aspect-video grid place-content-start outline outline-content2 !max-w-none',
            }}
          />
        ) : (
          <div className='aspect-video rounded-xl overflow-hidden grid place-content-center bg-primary-50'>
            <p>No preview available</p>
          </div>
        )}
        <div className='px-2 pt-2 pb-4'>
          <h3 className='font-bold text-lg text-left'>{portfolio.title}</h3>
          <p className='mt-1 text-left'>{portfolio.tags.join(', ')}</p>
        </div>
      </Button>
    </li>
  );
}
