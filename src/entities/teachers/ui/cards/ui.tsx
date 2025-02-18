import { Articles, CardArticle } from '@ui';

export const CardSectionTeachers = () => {
  return (
    <Articles params={{ sections: ['Articles for Teachers and Practitioners'] }}>
      {(data) =>
        <div className="grid grid-rows-1 lg:grid-cols-3 md:grid-cols-2 pb-4 lg:pb-10 gap-14">
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
      }
    </Articles>
  );
};
