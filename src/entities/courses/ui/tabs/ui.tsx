'use client';

import { useCallback, useState } from 'react';
import { CardSection } from '@entities';
import { Badge, cn } from '@/shared';
import { useCourses, useCoursesTag } from '../../services';
import { TagLoading } from './Loading';

export const TabsCourses = () => {
  const [activeTag, setActiveTag] = useState<string[]>([]);
  const coursesTagApi = useCoursesTag();
  const coursesApi = useCourses({ tags: activeTag });

  const toggleTagHandler = useCallback((tag: string) => {
    setActiveTag((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  }, []);

  return (
    <>
      <div className="py-4 bg-white">
        {coursesTagApi.isLoading ? (
          <TagLoading />
        ) : (
          coursesTagApi.data?.map((tag) => (
            <Badge
              key={tag}
              title={tag}
              className={cn({
                'bg-[#9746B3] text-white': activeTag.includes(tag),
              })}
              onClick={() => toggleTagHandler(tag)}
            />
          ))
        )}

        <CardSection
          data={coursesApi.data?.data}
          isLoading={coursesApi.isLoading}
        />
      </div>
    </>
  );
};
