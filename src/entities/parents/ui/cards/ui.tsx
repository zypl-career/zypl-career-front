'use client';

import { useArticles } from '@ui';
import { LoaderArticles, MoreCardIndustries } from '@entities';

export const CardSectionParents = () => {
  const parentArticleApi = useArticles({ type: 'parent' });
  return (
    <div className="grid grid-rows-1 lg:grid-cols-3 md:grid-cols-2 pb-4 lg:pb-10 gap-14">
      {parentArticleApi.isLoading ? (
        <>
          <LoaderArticles />
          <LoaderArticles />
          <LoaderArticles />
        </>
      ) : (
        parentArticleApi.data?.data.map((card, index) => (
          <MoreCardIndustries
            id={index}
            key={index}
            imageSrc={card.image}
            imageAlt={card.title}
            imageHeight={300}
            imageWidth={420}
            title={card.title}
            buttonText="Подробнее"
          />
        ))
      )}
    </div>
  );
};
