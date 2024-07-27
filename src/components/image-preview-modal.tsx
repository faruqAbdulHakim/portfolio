'use client';

import {
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import { useCallback, useRef } from 'react';
import { LuEye } from 'react-icons/lu';
import QuickPinchZoom, { make3dTransformValue } from 'react-quick-pinch-zoom';

type Props = {
  children: React.ReactNode;
  src: string;
};

export default function ImagePreviewModal({ children, src }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const imgRef = useRef<HTMLImageElement | null>(null);
  const onUpdate = useCallback(
    ({ x, y, scale }: { x: number; y: number; scale: number }) => {
      const { current: img } = imgRef;

      if (img) {
        const value = make3dTransformValue({ x, y, scale });
        img.style.setProperty('transform', value);
      }
    },
    []
  );

  return (
    <div className='relative group'>
      <div className='group-hover:brightness-75 transition-all'>{children}</div>
      <div
        className='absolute inset-0 z-10 w-full h-full opacity-0 group-hover:opacity-100 grid place-content-center cursor-pointer transition-all'
        onClick={onOpen}
      >
        <div className='flex gap-2 items-center text-white text-sm'>
          <LuEye color='white' size='20px' />
          <p>Preview</p>
        </div>
      </div>
      <Modal
        backdrop='blur'
        isOpen={isOpen}
        onClose={onClose}
        placement='center'
        scrollBehavior='outside'
        size='5xl'
        classNames={{ wrapper: 'px-4 py-16', body: 'p-2' }}
      >
        <ModalContent>
          <ModalHeader />
          <ModalBody>
            <QuickPinchZoom
              minZoom={0.1}
              onUpdate={onUpdate}
              doubleTapToggleZoom
              shouldInterceptWheel={() => false}
            >
              <Image
                ref={imgRef}
                src={src}
                alt='Preview Image'
                sizes='100vw'
                className='w-full h-full'
              />
            </QuickPinchZoom>
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </div>
  );
}
