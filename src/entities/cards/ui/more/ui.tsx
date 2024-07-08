import Image from 'next/image';
import { Button } from '@/shared';
import { TMoreCardProps } from '.';

export const MoreCard: React.FC<TMoreCardProps> = ({
  imageSrc,
  imageAlt,
  imageHeight,
  imageWidth,
  title,
  date,
  buttonText,
}) => {
  return (
    <div className="md:w-[413px] bg-white border border-gray-100 rounded-md">
      <Image
        src={imageSrc}
        alt={imageAlt}
        height={imageHeight}
        width={imageWidth}
      />
      <div className="md:px-5 px-2">
        <p className="font-bold md:text-xl pt-5">{title}</p>
        <div className="flex items-center justify-between">
          <p className="text-gray-600 text-sm">{date}</p>
          <Button variant="outlineCard">{buttonText}</Button>
        </div>
      </div>
    </div>
  );
};
