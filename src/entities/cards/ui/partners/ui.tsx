import Image from 'next/image';

export const PartnersCard = ({ imageSrc, altText, text }) => {
  return (
    <div className="flex items-center bg-white lg:w-[413px] lg:p-[32px] lg:gap-[24px] rounded-lg">
      <Image src={imageSrc} alt={altText} height={100} width={100} />
      <p className="text-gray-600 font-bold">{text}</p>
    </div>
  );
};
