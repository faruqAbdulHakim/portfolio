import Image from 'next/image';

const Avatar = ({ src, alt }) => {
  return (
    <div className="relative w-24 h-24 rounded-full overflow-hidden">
      <Image src={src} alt={alt} fill className="object-cover object-center" />
    </div>
  );
};

export default Avatar;
