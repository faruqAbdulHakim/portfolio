// Icons
import {
  PiEnvelopeLight,
  PiGithubLogoLight,
  PiLinkedinLogoLight,
} from 'react-icons/pi';

// Types
import type { Contact, Experience, Portfolio, Skill } from '@/types';

export function getContactList(): Contact[] {
  return [
    {
      name: 'Email',
      content: 'faruqabdulhakim2001@gmail.com',
      contentLink: 'mailto:faruqabdulhakim2001@gmail.com',
      Icon: PiEnvelopeLight,
    },
    {
      name: 'LinkedIn',
      content: 'linkedin.com/in/faruq-abdul-hakim',
      contentLink: 'https://www.linkedin.com/in/faruq-abdul-hakim/',
      Icon: PiLinkedinLogoLight,
    },
    {
      name: 'GitHub',
      content: 'github.com/faruqAbdulHakim',
      contentLink: 'https://github.com/faruqAbdulHakim',
      Icon: PiGithubLogoLight,
    },
  ];
}

export function getExperienceList(): Experience[] {
  return [
    {
      position: 'Freelance Developer',
      location: 'Upwork',
      type: 'Freelance',
      startDate: new Date('2022-11'),
      endDate: new Date(),
    },
    {
      position: 'Mobile Development Cohort',
      location: 'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka',
      startDate: new Date('2023-02'),
      endDate: new Date('2023-07'),
    },
    {
      position: 'Programming Laboratory Assistant',
      location: 'University of Jember',
      type: 'Contract',
      startDate: new Date('2021-07'),
      endDate: new Date('2023-06'),
    },
  ];
}

export function getPortfolioList(): Portfolio[] {
  return [
    {
      title: 'HTML Email Newsletter',
      subtitle: 'InDesign, Adobe XD, HTML, CSS',
      imgUrl: '/porto-html-email.png',
      desc: '',
    },
    {
      title: 'HTML Email Signature',
      subtitle: 'Figma, HTML, CSS',
      imgUrl: '/porto-html-signature.png',
      desc: '',
    },
    {
      title: 'Slicing UI',
      subtitle: 'HTML, CSS, JS, API',
      imgUrl: '/porto-slicing-ui.png',
      desc: '',
      externalUrl: 'https://faruqabdulhakim.github.io/slicing-ui/',
    },
    {
      title: 'Human Resource App',
      subtitle: 'Android, Kotlin, Jetpack Compose, MVVM',
      desc: '',
      isPrivate: true,
    },
    {
      title: 'Pemro.id',
      subtitle: 'Next.js, GSAP, TailwindCSS',
      imgUrl: '/porto-pemro.png',
      desc: '',
    },
    {
      title: 'Dana Indo Agri',
      subtitle: 'Next.js, Supabase, TailwindCSS',
      imgUrl: '/porto-danaindoagri.png',
      desc: '',
    },
  ];
}

export function getSkillList(): Skill[] {
  return [
    'Figma',
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Next',
    'Node.js',
    'Express',
    'Postgre SQL',
    'Android',
    'Kotlin',
    'Jetpack Compose',
    'HTML Email',
    'etc',
  ];
}
