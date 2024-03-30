'use client';

import { Button } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { PiMoonStarsBold, PiSunBold } from 'react-icons/pi';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      isIconOnly
      variant='shadow'
      onPress={() => {
        if (theme === 'dark') {
          setTheme('light');
        } else {
          setTheme('dark');
        }
      }}
      size='lg'
      radius='full'
      className='bg-slate-100 text-warning dark:bg-warning dark:text-white transition'
    >
      {theme === 'dark' ? (
        <PiMoonStarsBold className='w-20 h-20 p-3' />
      ) : (
        <PiSunBold className='w-20 h-20 p-3' />
      )}
    </Button>
  );
}
