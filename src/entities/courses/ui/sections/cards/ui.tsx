'use client';

import { CardCourses } from '@/entities';
import { useCourses } from '@/entities/courses/services';
import { LoaderCourses } from './loader';

export const CardSection = () => {
  const { data, isLoading } = useCourses();
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
          data?.data.map((card, index) => <CardCourses key={index} {...card} />)
        )}
      </div>
    </div>
  );
};
