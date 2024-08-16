import { Skeleton } from '@nextui-org/react';

export default function ExperienceListFallback() {
  return (
    <ul className='space-y-6'>
      {[1, 2, 3].map((it) => (
        <li
          key={it}
          className='flex flex-col sm:flex-row justify-between sm:items-center gap-2'
        >
          <div className='w-full flex flex-row items-center gap-2 sm:gap-4'>
            <Skeleton className='w-14 h-14 p-4 rounded-xl' />
            <div className='flex flex-col flex-1 space-y-2'>
              <Skeleton className='h-5 w-5/6 max-w-64 rounded-lg bg-default-200' />
              <Skeleton className='h-3 w-2/3 max-w-40 rounded-lg bg-default-200' />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
