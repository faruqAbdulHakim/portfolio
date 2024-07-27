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
import { LuEye } from 'react-icons/lu';

type Props = {
  children: React.ReactNode;
  src: string;
};

export default function ImagePreviewModal({ children, src }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        size='3xl'
        classNames={{ wrapper: 'px-4 py-16' }}
      >
        <ModalContent>
          <ModalHeader />
          <ModalBody>
            <Image
              src={src}
              alt='Preview Image'
              sizes='100vw'
              className='w-full h-full'
            />
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </div>
  );
}
