import { FC } from 'react';
import { TMoreCardProps } from '@/entities';
import Image from 'next/image';

export const CardCourses: FC<TMoreCardProps> = ({
  imageSrc,
  imageAlt,
  imageHeight,
  imageWidth,
  title,
}) => {
  return (
    <div className="md:w-[416px] bg-white border border-gray-200 rounded-xl transition-transform transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer my-5">
      <Image
        src={imageSrc}
        alt={imageAlt}
        height={imageHeight}
        width={imageWidth}
      />
      <div className="md:px-5  px-2">
        <p className="font-bold md:text-xl pt-5">{title}</p>
        <div className="flex items-center justify-between pt-10 pb-4">
        </div>
      </div>
    </div>
  );
};
