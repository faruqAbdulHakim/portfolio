'use client';

// Hooks
import { useState } from 'react';

// UI Components
import { Button } from '@nextui-org/react';

export default function DownloadResumeButton() {
  const [isPending, setIsPending] = useState(false);

  async function downloadResume() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/common/resume.pdf`
    );
    if (!res.ok) return;
    const blob = await res.blob();
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
