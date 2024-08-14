'use client';

// Hooks
import { useTheme } from 'next-themes';

// UI Components
import { Button } from '@nextui-org/react';

// Icons
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
      className='bg-content2 text-warning dark:bg-warning dark:text-white transition'
      aria-label='theme switcher'
    >
      {theme === 'dark' ? (
        <PiSunBold className='w-20 h-20 p-3' />
      ) : (
        <PiMoonStarsBold className='w-20 h-20 p-3' />
      )}
    </Button>
  );
}
