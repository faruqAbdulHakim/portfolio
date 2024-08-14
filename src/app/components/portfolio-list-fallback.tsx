import { Card, Skeleton } from '@nextui-org/react';

export default function PortfolioListFallback() {
  return (
    <ul className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6'>
      {[1, 2, 3].map((it) => (
        <li key={it} className='max-w-96'>
          <Card className='w-full' radius='lg'>
            <Skeleton className='rounded-xl'>
              <div className='h-36 rounded-xl bg-default-300'></div>
            </Skeleton>
            <div className='space-y-3 p-4'>
              <Skeleton className='w-3/5 rounded-lg'>
                <div className='h-3 w-3/5 rounded-lg bg-default-200'></div>
              </Skeleton>
              <Skeleton className='w-4/5 rounded-lg'>
                <div className='h-3 w-4/5 rounded-lg bg-default-200'></div>
              </Skeleton>
            </div>
          </Card>
        </li>
      ))}
    </ul>
  );
}
