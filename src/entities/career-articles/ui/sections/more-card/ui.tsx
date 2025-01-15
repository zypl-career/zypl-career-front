'use client';

import { Articles, CardArticle } from '@ui';

export const MoreCardSection = () => {
  return (
    <Articles
      params={{ sections: ['Career Articles'] }}
      className="bg-white"
      fallbackClassName="container"
    >
      {(data) => (
        <div className="grid grid-rows-1 gap-10 lg:grid-cols-3 md:grid-cols-2 container">
          {data?.map((card) => (
            <CardArticle
              key={card.id}
              href={`/career-articles/${card.id}`}
              imageSrc={card.image}
              title={card.title}
              date={card.createdAt}
            />
          ))}
        </div>
      )}
    </Articles>
  );
};
