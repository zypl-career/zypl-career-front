import { MoreCardCareerArticles, TArticleData, useArticles } from '@/entities';
import { FC } from 'react';

export const MoreCardSectionFraud: FC<{ data?: TArticleData }> = ({ data }) => {
  const { data: moreData } = useArticles({
    hashtags: data?.hashtags,
    limit: '3',
  });
  const filteredData = moreData?.data.filter((card) => card.id !== data?.id);

  return (
    <div className="bg-white">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 pb-4 lg:pb-10 gap-5">
        {filteredData?.length ? (
          filteredData.map((card, index) => (
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
        ) : (
          <h1 className="text-center col-span-full text-3xl font-bold">
            Пока нет статьей по теме 🔍
          </h1>
        )}
      </div>
    </div>
  );
};
