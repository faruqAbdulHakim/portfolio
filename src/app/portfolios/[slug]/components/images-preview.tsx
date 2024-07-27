'use client';

// Hooks
import { useEffect, useRef, useState } from 'react';

// Components
import ImagePreviewModal from '@/components/image-preview-modal';
import { Image } from '@nextui-org/react';
import NextImage from 'next/image';

type Props = {
  images: string[];
  title: string;
};

export default function ImagesPreview({ images, title }: Props) {
  const [activeImage, setActiveImage] = useState(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = imageContainerRef.current;
    const activeElement = container?.children[activeImage] as HTMLElement;

    if (activeElement) {
      activeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [activeImage]);

  return (
    <div className='select-none'>
      <ImagePreviewModal src={images[activeImage]}>
        <Image
          as={NextImage}
          fill
          src={images[activeImage]}
          alt={`${title} - ${activeImage + 1}`}
          sizes='(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 35vw'
          className='object-cover object-top'
          classNames={{
            wrapper: 'w-full aspect-video outline outline-teal-600 !max-w-none',
          }}
          isBlurred
        />
      </ImagePreviewModal>
      <div className='mt-6 overflow-x-auto overflow-y-hidden hide-scrollbar'>
        <div
          className='inline-block whitespace-nowrap transition-all scroll-smooth'
          ref={imageContainerRef}
        >
          {images.map((image, index) => (
            <Image
              as={NextImage}
              fill
              key={index}
              src={image}
              alt={`${title} - ${index + 1}`}
              sizes='(max-width: 640px) 40vw, (max-width: 1024px) 25vw, 20vw'
              className='w-full h-full object-cover object-top inline-block rounded-none'
              classNames={{
                wrapper: `h-24 aspect-video inline-block border-2 ml-2 first:ml-0 transition-all overflow-hidden cursor-pointer rounded-lg !max-w-none ${
                  activeImage === index
                    ? 'border-teal-600'
                    : 'border-content1 brightness-75 hover:brightness-100'
                }`,
              }}
              onClick={() => setActiveImage(index)}
              isBlurred
            />
          ))}
        </div>
      </div>
    </div>
  );
}
