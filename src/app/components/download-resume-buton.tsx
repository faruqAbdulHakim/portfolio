'use client';

import { getResumeFile } from '@/data';
import { Button } from '@nextui-org/react';
import { useState } from 'react';

export default function DownloadResumeButton() {
  const [isPending, setIsPending] = useState(false);

  async function downloadResume() {
    const buffer = await getResumeFile();
    const blob = new Blob([buffer]);
    // const res = await fetch(fileUrl);
    // if (!res.ok) return;
    // const blob = await res.blob();
    console.log(blob, buffer);
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Resume Faruq Abdul Hakim.pdf');
    link.click();
  }

  return (
    <Button
      variant='shadow'
      color='primary'
      isLoading={isPending}
      onClick={async () => {
        if (isPending) return;
        setIsPending(true);
        await new Promise((res) => setTimeout(() => res('delay'), 1000));
        await downloadResume();
        setIsPending(false);
      }}
    >
      Download Resume
    </Button>
  );
}
