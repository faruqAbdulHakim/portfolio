import Image from 'next/image';

/**
 *
 * @param {{
 *  porto: {
 *    title: string;
 *    subtitle: string;
 *    imgUrl: string;
 *    desc: string;
 *    externalUrl?: string;
 *  }
 * }} param0
 * @returns
 */
const PortfolioItem = ({ porto }) => {
  const { title, subtitle, imgUrl } = porto;

  return (
    <div className="space-y-3">
      <div className="relative aspect-video rounded-xl overflow-hidden shadow-md saturate-150">
        <Image
          src={imgUrl}
          alt={title}
          title={title}
          fill
          className="object-cover object-[top_center]"
        />
      </div>
      <div>
        <p className="font-semibold text-base line-clamp-1">{title}</p>
        <p className="font-regular text-sm leading-normal">{subtitle}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
