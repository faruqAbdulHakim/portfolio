import { Skeleton } from '@nextui-org/react';

export default function ExperiencesDetailFallback() {
  return (
    <div>
      <ol className='pl-2'>
        <li className='pl-8 py-4 border-l-4 h-46 relative'>
          <Skeleton className='text-lg w-72 h-6 rounded-xl' />
          <Skeleton className='text-lg w-40 h-3 rounded-lg mt-2' />
          <Skeleton className='text-lg w-32 h-3 rounded-lg mt-2' />
          <div className='mt-4 ml-4'>
            <div className='flex gap-2 flex-wrap max-w-[600px]'>
              <Skeleton className='text-lg w-12 h-3 rounded-lg mt-2' />
              <Skeleton className='text-lg w-24 h-3 rounded-lg mt-2' />
              <Skeleton className='text-lg w-16 h-3 rounded-lg mt-2' />
              <Skeleton className='text-lg w-14 h-3 rounded-lg mt-2' />
              <Skeleton className='text-lg w-28 h-3 rounded-lg mt-2' />
              <Skeleton className='text-lg w-4 h-3 rounded-lg mt-2' />
              <Skeleton className='text-lg w-12 h-3 rounded-lg mt-2' />
              <Skeleton className='text-lg w-24 h-3 rounded-lg mt-2' />
              <Skeleton className='text-lg w-16 h-3 rounded-lg mt-2' />
              <Skeleton className='text-lg w-14 h-3 rounded-lg mt-2' />
              <Skeleton className='text-lg w-28 h-3 rounded-lg mt-2' />
              <Skeleton className='text-lg w-4 h-3 rounded-lg mt-2' />
              <Skeleton className='text-lg w-12 h-3 rounded-lg mt-2' />
              <Skeleton className='text-lg w-24 h-3 rounded-lg mt-2' />
              <Skeleton className='text-lg w-16 h-3 rounded-lg mt-2' />
              <Skeleton className='text-lg w-14 h-3 rounded-lg mt-2' />
              <Skeleton className='text-lg w-28 h-3 rounded-lg mt-2' />
              <Skeleton className='text-lg w-4 h-3 rounded-lg mt-2' />
              <Skeleton className='text-lg w-12 h-3 rounded-lg mt-2' />
            </div>
          </div>
          <div className='absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 h-5 w-5 bg-background border-4'></div>
        </li>
      </ol>
    </div>
  );
}
