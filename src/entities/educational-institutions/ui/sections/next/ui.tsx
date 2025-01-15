'use client';

import { NextEducational } from '@entities';
import { Articles } from '@ui';

export const NextSections = () => {
  return (
    <Articles
      params={{ sections: ['Universities and Colleges'] }}
      fallbackClassName="container pb-56"
      className="container pb-56"
      withoutTags
    >
      {(data) =>
        data?.map((card) => (
          <NextEducational
            key={card.id}
            title={card.title}
            href={`/career-articles/${card.id}`}
          />
        ))
      }
    </Articles>
  );
};
