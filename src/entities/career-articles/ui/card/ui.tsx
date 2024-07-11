import { FC } from 'react';
import { Button } from '@/shared';
import { TMoreCardProps } from '@/entities';
import Image from 'next/image';

export const MoreCardCareerArticles: FC<TMoreCardProps> = ({
  imageSrc,
  imageAlt,
  imageHeight,
  imageWidth,
  title,
  date,
  buttonText,
}) => {
  return (
    <div className="md:w-[416px] bg-white border border-gray-100 shadow-lg rounded-xl my-2">
      <Image
        src={imageSrc}
        alt={imageAlt}
        height={imageHeight}
        width={imageWidth}
      />
      <div className="md:px-5  px-2">
        <p className="font-bold md:text-xl pt-5">{title}</p>
        <div className="flex items-center justify-between pt-10 pb-4">
          <p className="text-gray-600 text-sm">{date}</p>
          <Button variant="outlineCard">{buttonText}</Button>
        </div>
      </div>
    </div>
  );
};
