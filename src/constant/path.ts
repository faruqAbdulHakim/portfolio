import { GoHome } from 'react-icons/go';

export const PATH = [
  {
    path: /^\/$/,
    icon: GoHome,
    label: 'Home',
    href: '/',
  },
  {
    path: /^\/experiences\/?$/,
    label: 'Experiences',
  },
  {
    path: /^\/portfolios\/?$/,
    label: 'Portfolios',
    href: '/portfolios',
  },
  {
    path: /^\/portfolios\/[\w-]+$/,
    label: 'Portfolio Detail',
  },
];
