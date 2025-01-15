'use client';

import { CardSection } from '@entities';
import { TagsFilter } from '@ui';
import { useTagFilter } from '@hooks';
import { useCourses, useCoursesTag } from '../../services';

export const TabsCourses = () => {
  const { activeTag, toggleTagHandler } = useTagFilter();
  const coursesTagApi = useCoursesTag();
  const coursesApi = useCourses({ tags: activeTag });

  return (
    <div className="py-4 bg-white">
      <TagsFilter
        api={coursesTagApi}
        selectedTag={activeTag}
        onSelectTag={toggleTagHandler}
      />
      <CardSection
        data={coursesApi.data?.data}
        isLoading={coursesApi.isLoading}
      />
    </div>
  );
};
