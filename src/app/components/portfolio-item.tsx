// Types
import { Portfolio } from '@/types';

// UI Components
import { Button } from '@nextui-org/react';

// Components
import Image from 'next/image';

type Props = Readonly<{
  portfolio: Portfolio;
}>;

export default function PortfolioItem({ portfolio }: Props) {
  const { title, subtitle, previewUrl, isPrivate } = portfolio;

  return (
    <li>
      <Button
        variant='light'
        className='group block w-full h-max p-0 whitespace-break-spaces'
        data-hover='false'
        aria-label={title}
      >
        <div className='aspect-video relative rounded-xl overflow-hidden grid place-content-center bg-primary-50'>
          {previewUrl ? (
            <Image
              src={previewUrl}
              alt={title}
              fill
              sizes='(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw'
              className='group-hover:scale-105 transition-all dark:brightness-75 dark:hover:brightness-100 object-top object-cover'
            />
          ) : isPrivate ? (
            <p>This project is private</p>
          ) : (
            <p>No preview available</p>
          )}
        </div>
        <div className='px-2 py-1'>
          <h3 className='font-bold text-lg text-left'>{title}</h3>
          <p className='mt-1 text-left'>{subtitle}</p>
        </div>
      </Button>
    </li>
  );
}
