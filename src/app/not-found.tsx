import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { GoHome } from 'react-icons/go';

export default function NotFoundPage() {
  return (
    <>
      <main className='py-8 sm:py-16 w-11/12 mx-auto max-w-screen-lg'>
        <h1 className='text-2xl'>The content is currently unavailable :(</h1>
        <Button as={Link} href='/' startContent={<GoHome />} className='mt-4'>
          Go Home
        </Button>
      </main>
    </>
  );
}
