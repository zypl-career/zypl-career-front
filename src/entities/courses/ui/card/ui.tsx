import { FC } from 'react';
import Image from 'next/image';
import { ProgressBar, TCardCoursesProps } from '@/entities';
import Link from 'next/link';

export const CardCourses: FC<TCardCoursesProps> = ({
  id,
  image,
  title,
  finishedPercentage,
}) => {
  return (
    <Link
      href={`/courses/${id}`}
      className="bg-white border border-gray-200 rounded-xl transition-transform transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer my-5"
    >
      <Image
        src={image}
        alt={title}
        width={413}
        height={277}
        className="rounded-t-xl !w-full"
      />
      <div className="md:px-5 px-2">
        <p className="font-bold md:text-xl pt-5">{title}</p>
        <ProgressBar progress={finishedPercentage} />
      </div>
    </Link>
  );
};
