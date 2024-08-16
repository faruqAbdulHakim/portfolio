import AppBreadcrumbs from '@/components/app-breadcrumbs';
import { getExperienceList } from '@/data';
import { CONFIG } from '@/global';
import { Metadata } from 'next';
import { Suspense } from 'react';
import ExperiencesDetail from './components/experiences-detail';
import ExperiencesDetailFallback from './components/experiences-detail-fallback';

export const metadata: Metadata = {
  title: "Faruq's experiences 😄",
  description:
    "Have a look on Faruq's experiences - a passionate Software Developer interested in both web development and mobile development. Enthusiasm for learning and exploring new technologies drives him to continually expand his skills and knowledge in the ever-evolving field of software development. With a strong foundation in computer science and a keen eye for detail, Faruq is committed to delivering high-quality and user-friendly applications.",
  alternates: {
    canonical: `${CONFIG.LIVE_SITE_URL}/experiences`,
  },
};

export default function ExperiencesPage() {
  const experiencesPromise = getExperienceList();

  return (
    <>
      <header className='py-8 w-11/12 mx-auto max-w-screen-lg'>
        <AppBreadcrumbs />
        <h1 className='font-bold text-3xl mt-4'>Faruq&rsquo;s Experiences</h1>
        <p className='text-lg mt-1'>
          Hi, have a look on my professional experiences 😄
        </p>
      </header>
      <main className='pb-16 w-11/12 mx-auto max-w-screen-lg'>
        <Suspense fallback={<ExperiencesDetailFallback />}>
          <ExperiencesDetail experiencesPromise={experiencesPromise} />
        </Suspense>
      </main>
    </>
  );
}
