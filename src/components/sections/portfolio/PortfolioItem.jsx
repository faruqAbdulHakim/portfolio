import Image from 'next/image';
import Link from 'next/link';
import { RiExternalLinkFill } from 'react-icons/ri';

/**
 *
 * @param {{
 *  porto: {
 *    title: string;
 *    subtitle: string;
 *    imgUrl: string;
 *    desc: string;
 *    isPrivate: boolean;
 *    externalUrl?: string;
 *  }
 * }} param0
 * @returns
 */
const PortfolioItem = ({ porto }) => {
  const { title, subtitle, isPrivate, imgUrl, externalUrl } = porto;

  return (
    <div className="space-y-3 relative group">
      <div className="relative aspect-video rounded-xl overflow-hidden shadow-md saturate-150">
        {isPrivate ? (
          <div className="h-full w-full grid place-content-center p-4 text-sm bg-light-gray">
            This project is private
          </div>
        ) : (
          <Image
            src={imgUrl}
            alt={title}
            title={title}
            fill
            className="object-cover object-[top_center]"
          />
        )}
      </div>
      <div>
        <p className="font-semibold text-base line-clamp-1">{title}</p>
        <p className="font-regular text-sm leading-normal">{subtitle}</p>
      </div>
      {externalUrl && (
        <Link
          href={externalUrl}
          target="_blank"
          rel="noreferrer"
          title="Open portfolio"
          className="sm:opacity-20 sm:group-hover:opacity-100 transition-all absolute top-0 right-0 bg-dark-gray text-white w-8 h-8 p-2 rounded-full"
        >
          <RiExternalLinkFill className="w-full h-full" />
        </Link>
      )}
    </div>
  );
};

export default PortfolioItem;
