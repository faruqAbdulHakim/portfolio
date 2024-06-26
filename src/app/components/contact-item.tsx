// Types
import type { Contact } from '@/types';

// UI Components
import { Button, Link } from '@nextui-org/react';

type Props = Readonly<{
  contact: Contact;
}>;

export default function ContactItem({ contact }: Props) {
  const { name, content, contentLink, Icon } = contact;

  return (
    <li className='flex flex-col sm:flex-row justify-between sm:items-center gap-2'>
      <div className='flex flex-row items-center gap-2 sm:gap-4'>
        <Button
          tabIndex={-1}
          variant='flat'
          isIconOnly
          aria-hidden='true'
          className='w-14 h-14 p-4'
        >
          <Icon className='w-full h-full' />
        </Button>
        <div className='flex flex-col'>
          <p className='font-semibold text-base'>{name}</p>
          {contentLink && (
            <Link href={contentLink} target='_blank' className='text-sm'>
              {content}
            </Link>
          )}
          {!contentLink && <p className='text-sm leading-snug'>{content}</p>}
        </div>
      </div>
    </li>
  );
}
