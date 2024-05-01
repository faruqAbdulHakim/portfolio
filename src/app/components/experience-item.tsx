// Types
import type { Experience } from '@/types';

// UI Components
import { Button } from '@nextui-org/react';

// Icons
import { PiBriefcase } from 'react-icons/pi';

type Props = Readonly<{
  experience: Experience;
}>;

export default function ExperienceItem({ experience }: Props) {
  const { position, location, type } = experience;

  return (
    <li className='flex flex-col sm:flex-row justify-between sm:items-center gap-2'>
      <div className='flex flex-row items-center gap-2 sm:gap-4'>
        <Button
          variant='flat'
          isIconOnly
          aria-hidden='true'
          className='w-14 h-14 p-4'
        >
          <PiBriefcase className='w-full h-full' />
        </Button>
        <div className='flex flex-col'>
          <p className='font-semibold text-base'>{position}</p>
          <p className='text-sm leading-snug flex gap-1'>
            <span>{location}</span>
            {location && type && <>·</>}
            {type && <span>{type}</span>}
          </p>
        </div>
      </div>
    </li>
  );
}
