// Data sources
import { getExperienceList, getPortfolioList } from '@/data';

// UI Components
import { Button } from '@nextui-org/react';

// Components
import ImagePreviewModal from '@/components/image-preview-modal';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import ContactList from './components/contact-list';
import DownloadResumeButton from './components/download-resume-buton';
import ExperienceList from './components/experience-list';
import ExperienceListFallback from './components/experience-list-fallback';
import PortfolioList from './components/portfolio-list';
import PortfolioListFallback from './components/portfolio-list-fallback';
import SkillList from './components/skill-list';

export default function HomePage() {
  const experiencesPromise = getExperienceList();
  const portfoliosPromise = getPortfolioList({ limit: 3 });

  return (
    <>
      <header className='w-11/12 mx-auto max-w-screen-lg py-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between'>
        <div className='flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left sm:gap-6'>
          <ImagePreviewModal src='/avatar.jpg'>
            <div className='relative w-24 h-24 rounded-full overflow-hidden'>
              <Image
                src='/avatar.jpg'
                alt='avatar'
                fill
                sizes='30vw'
                priority
              />
            </div>
          </ImagePreviewModal>
          <div>
            <h1 className='font-bold text-2xl'>Faruq Abdul Hakim</h1>
            <p>East Java, Indonesia</p>
          </div>
        </div>
        <DownloadResumeButton />
      </header>

      <main className='mt-4 pb-16 w-11/12 mx-auto max-w-screen-lg'>
        <section>
          <h2 className='font-bold text-2xl'>Introduction</h2>
          <p className='mt-4'>
            My name is Faruq Abdul Hakim, usually called Faruq. I received my
            Bachelor of Computer Science degree from the University of Jember in
            2024. I have a high interest in the software development field,
            especially in Web Development and Android Development.
          </p>
          <p className='mt-2'>
            Proficient in top-notch web technologies like React.js and Next.js
            with type-safe approach by utilising Typescript. As well as backend
            frameworks such as Express.js and Nest.js. Also familiar with Kotlin
            and Jetpack Compose for Android Development.
          </p>
          <p className='mt-2'>
            Eager to explore new things, especially related to software
            development topics.
          </p>
        </section>
        <section className='mt-6'>
          <h2 className='font-bold text-2xl mb-4'>Skills</h2>
          <SkillList />
        </section>
        <section className='mt-8'>
          <h2 className='font-bold text-2xl mb-4'>Experiences</h2>
          <Suspense fallback={<ExperienceListFallback />}>
            <ExperienceList experiencesPromise={experiencesPromise} />
            <div className='flex justify-center items-center'>
              <Button
                as={Link}
                href='/experiences'
                variant='flat'
                className='text-right mt-4'
              >
                See in details &gt;
              </Button>
            </div>
          </Suspense>
        </section>
        <section className='mt-8'>
          <h2 className='font-bold text-2xl mb-4'>Portfolios</h2>
          <Suspense fallback={<PortfolioListFallback />}>
            <PortfolioList portfoliosPromise={portfoliosPromise} />
            <div className='flex justify-center items-center'>
              <Button
                as={Link}
                href='/portfolios'
                variant='flat'
                className='text-right mt-4'
              >
                See more &gt;
              </Button>
            </div>
          </Suspense>
        </section>
        <section className='mt-4'>
          <h2 className='font-bold text-2xl mb-4'>Contact</h2>
          <ContactList />
        </section>
      </main>
    </>
  );
}
