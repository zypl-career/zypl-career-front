import { FC } from 'react';
import { BlurImage, Button } from '@ui';
import { TMoreCardProps } from '@entities';
import { getDMY } from '@/shared/utils/date';
import Link from 'next/link';

export const MoreCardCareerArticles: FC<TMoreCardProps> = ({
  id,
  imageSrc,
  imageAlt,
  imageHeight,
  imageWidth,
  title,
  date,
  buttonText,
}) => {
  return (
    <Link
      href={`/career-articles/${id}`}
      className="bg-white border border-gray-100 shadow-lg rounded-xl transition-transform transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer my-5 flex flex-col"
    >
      <div className="flex flex-col flex-1">
        <BlurImage
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          sizes="100vw"
          className="w-full h-[300px] object-cover rounded-t-xl"
          isSkeleton
        />
        <h1 className="md:px-5 px-2 font-bold md:text-xl pt-5">{title}</h1>
      </div>
      <div className="md:px-5 px-2">
        <div className="flex items-center justify-between pt-10 pb-4">
          <p className="text-gray-600 text-sm">{getDMY(date)}</p>
          <Button variant="outlineCard">{buttonText}</Button>
        </div>
      </div>
    </Link>
  );
};
