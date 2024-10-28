'use client';

import { CardCourses } from '@/entities';
import { useCourses } from '@/entities/courses/services';

export const CardSection = () => {
  const { data } = useCourses();
  return (
    <div className="bg-white">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 pb-4 lg:pb-10 gap-5 ">
        {data?.data.map((card, index) => (
          <CardCourses
            key={index}
            {...card}
          />
        ))}
      </div>
    </div>
  );
};
