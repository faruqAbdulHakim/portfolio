'use client';

// Hooks
import { useEffect, useRef, useState } from 'react';

// Components
import ImagePreviewModal from '@/components/image-preview-modal';
import { Image } from '@nextui-org/react';

type Props = {
  images: string[];
  title: string;
};

export default function ImagesPreview({ images, title }: Props) {
  const [activeImage, setActiveImage] = useState(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imagePreviewContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = imageContainerRef.current;
    const previewContainer = imagePreviewContainerRef.current;

    const activeElement = container?.children[activeImage] as HTMLElement;
    if (activeElement) {
      activeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }

    const previewActiveElement = previewContainer?.children[
      activeImage
    ] as HTMLElement;
    if (previewActiveElement) {
      previewActiveElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [activeImage]);

  return (
    <div className='select-none'>
      <div
        className='w-full aspect-video outline outline-teal-600 rounded-md inline-block whitespace-nowrap transition-all scroll-smooth overflow-hidden'
        ref={imagePreviewContainerRef}
      >
        {images.map((image, index) => (
          <div key={index} className='inline-block w-full h-full aspect-video'>
            <ImagePreviewModal src={image}>
              <Image
                src={image}
                alt={`${title} - ${activeImage + 1}`}
                className='object-cover object-top w-full h-full'
                classNames={{
                  wrapper: 'w-full aspect-video !max-w-none',
                }}
                isBlurred
                radius='none'
              />
            </ImagePreviewModal>
          </div>
        ))}
      </div>
      <div className='mt-6 overflow-x-auto overflow-y-hidden hide-scrollbar'>
        <div
          className='inline-block whitespace-nowrap transition-all scroll-smooth'
          ref={imageContainerRef}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`${title} - ${index + 1}`}
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
