import Image from 'next/image';

export const PartnersCard = ({ imageSrc, altText, text }) => {
  return (
    <div
      className={`partner-card ${text ? 'flex-row' : 'flex-col'} flex items-center justify-center bg-white m-2 lg:m-3 py-12 lg:py-[32px] rounded-lg shadow-md`}
    >
      {text ? (
        <div className="flex items-center gap-5 px-5">
          <Image src={imageSrc} alt={altText} className="partner-image" />
          <p className="partner-text text-lg font-semibold text-gray-700 mr-4">
            {text}
          </p>
        </div>
      ) : (
        <Image src={imageSrc} alt={altText} className="partner-image my-auto" />
      )}
    </div>
  );
};
