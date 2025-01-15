'use client';

import { FC } from 'react';
import { LoaderArticles, MoreCardCareerArticles } from '@entities';
import { useTagFilter } from '@hooks';
import { TagsFilter } from '@ui';
import { useEducationCenter, useEducationCenterTags } from './services';

export const EducationCenter: FC = () => {
  const { activeTag, toggleTagHandler } = useTagFilter({ once: true });
  const educationCenterApi = useEducationCenter({ city: activeTag });
  const educationCenterTagApi = useEducationCenterTags();

  return (
    <section className="container">
      <TagsFilter
        api={educationCenterTagApi}
        selectedTag={activeTag}
        onSelectTag={toggleTagHandler}
      />
      <main className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5 container pb-4 lg:pb-10">
        {educationCenterApi.isLoading ? (
          <>
            <LoaderArticles />
            <LoaderArticles />
            <LoaderArticles />
          </>
        ) : (
          educationCenterApi.data?.data.map((card) => (
            <MoreCardCareerArticles
              id={card.id}
              key={card.id}
              imageSrc={card.image}
              imageAlt={card.title}
              imageHeight={300}
              imageWidth={420}
              title={card.title}
              date={card.createdAt}
              buttonText="Подробнее"
            />
          ))
        )}
      </main>
    </section>
  );
};
