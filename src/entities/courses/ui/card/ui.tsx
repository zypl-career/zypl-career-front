import { FC } from 'react';
import Image from 'next/image';
import { ProgressBar, TCardCoursesProps } from '@/entities';

export const CardCourses: FC<TCardCoursesProps> = ({
  imageSrc,
  imageAlt,
  imageHeight,
  imageWidth,
  title,
}) => {
  return (
    <div className="md:w-[350px] bg-white border border-gray-200 rounded-xl transition-transform transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer my-5">
      <Image
        src={imageSrc}
        alt={imageAlt}
        height={imageHeight}
        width={imageWidth}
        className="rounded-t-xl"
      />
      <div className="md:px-5 px-2">
        <p className="font-bold md:text-xl pt-5">{title}</p>
        <ProgressBar progress={5} />
      </div>
    </div>
  );
};
