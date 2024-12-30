import { FC } from 'react';
import { CardCourses } from '@entities';
import { LoaderCourses } from './loader';
import { TCourseCardProps } from './types';

export const CardSection: FC<TCourseCardProps> = ({ data, isLoading }) => {
  return (
    <div className="bg-white">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 pb-4 lg:my-10 gap-5">
        {isLoading ? (
          <>
            <LoaderCourses />
            <LoaderCourses />
            <LoaderCourses />
          </>
        ) : (
          data?.map((card, index) => <CardCourses key={index} {...card} />)
        )}
      </div>
    </div>
  );
};
