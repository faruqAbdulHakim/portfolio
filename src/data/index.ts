// Icons
import {
  PiEnvelopeLight,
  PiGithubLogoLight,
  PiLinkedinLogoLight,
} from 'react-icons/pi';

// Types
import type { Contact, Experience, Portfolio } from '@/types';

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
      position: 'Frontend React.js/Next.js Developer',
      location: 'PT Andalan Solusi Cemerlang',
      type: 'Contract',
      startDate: new Date('2024-03'),
    },
    {
      position: 'Freelance Developer',
      location: 'Upwork',
      type: 'Freelance',
      startDate: new Date('2022-11'),
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
      previewUrl: '/porto-html-email.png',
    },
    {
      title: 'HTML Email Signature',
      subtitle: 'Figma, HTML, CSS',
      previewUrl: '/porto-html-signature.png',
    },
    {
      title: 'Slicing UI',
      subtitle: 'HTML, CSS, JS, API',
      previewUrl: '/porto-slicing-ui.png',
      externalUrl: 'https://faruqabdulhakim.github.io/slicing-ui/',
    },
    {
      title: 'Human Resource App',
      subtitle: 'Android, Kotlin, Jetpack Compose, MVVM',
      isPrivate: true,
    },
    {
      title: 'Pemro.id',
      subtitle: 'Next.js, GSAP, TailwindCSS',
      previewUrl: '/porto-pemro.png',
    },
    {
      title: 'Dana Indo Agri',
      subtitle: 'Next.js, Supabase, TailwindCSS',
      previewUrl: '/porto-danaindoagri.png',
    },
  ];
}
