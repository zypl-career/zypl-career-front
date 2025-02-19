import { FC } from 'react';
import Image from 'next/image';
import { TCardCoursesProps } from '@/entities';
import Link from 'next/link';

export const CardCourses: FC<TCardCoursesProps> = ({ id, image, title }) => {
  return (
    <Link
      href={`/courses/${id}`}
      className="bg-white flex flex-col border border-gray-200 rounded-xl transition-transform transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer"
    >
      <div className="flex-1">
        <Image
          src={image}
          alt={title}
          width={413}
          height={272}
          className="rounded-t-xl object-cover w-full h-[272px]"
        />
        <h1 className="font-bold md:text-xl m-6">{title}</h1>
      </div>
      {/* <div className="m-6">
        <ProgressBar progress={finishedPercentage} />
      </div> */}
    </Link>
  );
};
