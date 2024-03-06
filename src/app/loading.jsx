import { Spinner } from '@nextui-org/react';

export default function Loading() {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <Spinner
        label='Loading...'
        classNames={{
          wrapper: 'w-20 h-20',
        }}
      />
    </div>
  );
}
