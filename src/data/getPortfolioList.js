/**
 *
 * @returns {{
 *  title: string;
 *  subtitle: string;
 *  imgUrl: string;
 *  desc: string;
 *  externalUrl?: string;
 * }[]}
 */
const getPortfolioList = () => {
  return [
    {
      title: 'HTML Email Development',
      subtitle: 'HTML, CSS',
      imgUrl: '/porto-html-email.png',
      desc: '',
    },
    {
      title: 'Email Signature Design and Development',
      subtitle: 'Figma, HTML, CSS',
      imgUrl: '/porto-html-signature.png',
      desc: '',
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
