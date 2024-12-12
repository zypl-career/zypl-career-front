'use client';

import { BadgeSection, MoreCardCareerArticles } from '@entities';
import { useArticles } from '../../../services';
import { LoaderArticles } from './loader';

export const MoreCardSection = () => {
  const { data, isLoading } = useArticles();
  return (
    <section className="bg-white">
      <div className="container py-5 lg:pt-14">
        <BadgeSection />
      </div>
      <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5 container pb-4 lg:pb-10">
        {isLoading ? (
          <>
            <LoaderArticles />
            <LoaderArticles />
            <LoaderArticles />
          </>
        ) : (
          data?.data.map((card, index) => (
            <MoreCardCareerArticles
              id={card.id}
              key={index}
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
      </div>
    </section>
  );
};
