/**
 *
 * @returns {{
 *  title: string;
 *  subtitle: string;
 *  imgUrl: string;
 *  desc?: string;
 *  isPrivate: boolean;
 *  externalUrl?: string;
 * }[]}
 */
const getPortfolioList = () => {
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
};

export default getPortfolioList;
