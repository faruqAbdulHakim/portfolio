// UI Components
import { Button } from '@nextui-org/react';

// Components
import Image from 'next/image';
import Link from 'next/link';
import ContactList from './components/contact-list';
import DownloadResumeButton from './components/download-resume-buton';
import ExperienceList from './components/experience-list';
import PortfolioList from './components/portfolio-list';
import SkillList from './components/skill-list';

export default async function HomePage() {
  return (
    <>
      <header className='w-11/12 mx-auto max-w-screen-lg py-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between'>
        <div className='flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left sm:gap-6'>
          <div className='relative w-24 h-24 rounded-full overflow-hidden'>
            <Image src='/avatar.jpg' alt='avatar' fill sizes='30vw' priority />
          </div>
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
            My name is Faruq Abdul Hakim, usually called Faruq. Received
            Bachelor of Computer Science degree from the University of Jember in
            2024. I have a high interest in the software development field,
            especially in Web Development and Android Development.
          </p>
          <p className='mt-2'>
            As Frontend Web Developer, I&lsquo;m familiar with various popular
            frontend technologies, such as HTML5, CSS3, Modern JavaScript,
            React.js, Tailwind CSS, etc. I also do some small tasks from my
            freelancer job, like converting the provided design into a
            responsive site or doing HTML email for company marketing purposes.
          </p>
          <p className='mt-2'>
            I love to explore new things. Since I have Frontend Web development
            experience, I learned a few technologies for the Backend development
            side using Express.js as the main framework. Furthermore, I also
            explore Android Development using Kotlin, XML layouts, Jetpack
            Compose, and so on.
          </p>
        </section>
        <section className='mt-6'>
          <h2 className='font-bold text-2xl mb-4'>Skills</h2>
          <SkillList />
        </section>
        <section className='mt-8'>
          <h2 className='font-bold text-2xl mb-4'>Experience</h2>
          <ExperienceList />
        </section>
        <section className='mt-8'>
          <h2 className='font-bold text-2xl mb-4'>Portfolios</h2>
          <PortfolioList limit={6} />
          <div className='flex justify-end items-center'>
            <Button
              as={Link}
              href='/portfolios'
              variant='flat'
              className='text-right mt-4'
            >
              See more portfolios &gt;
            </Button>
          </div>
        </section>
        <section className='mt-4'>
          <h2 className='font-bold text-2xl mb-4'>Contact</h2>
          <ContactList />
        </section>
      </main>
    </>
  );
}
