import {
  PiEnvelopeLight,
  PiLinkedinLogoLight,
  PiGithubLogoLight,
} from 'react-icons/pi';

/**
 *
 * @returns {{name: string, content: string, contentLink: string, Icon: import('react-icons').IconType}[]}
 */
const getContactList = () => {
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
};

export default getContactList;
