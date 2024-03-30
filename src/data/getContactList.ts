import { IconType } from 'react-icons';
import {
  PiEnvelopeLight,
  PiLinkedinLogoLight,
  PiGithubLogoLight,
} from 'react-icons/pi';

export type Contact = {
  name: string;
  content: string;
  contentLink: string;
  Icon: IconType;
};

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
