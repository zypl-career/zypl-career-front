import {
  BadgeSection,
  MoreCardCareerArticles,
  moreDataCareer,
} from '@/entities';
import Link from 'next/link';

export const MoreCardSection = () => {
  return (
    <section className="bg-white">
      <div className="container py-5 lg:pt-14">
        <BadgeSection />
      </div>
      <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-24 px-5 container pb-4 lg:pb-10">
        {moreDataCareer.map((card, index) =>
          card.link ? (
            <Link href={card.link} key={index}>
              <MoreCardCareerArticles
                imageSrc={card.imageSrc}
                imageAlt={card.imageAlt}
                imageHeight={card.imageHeight}
                imageWidth={card.imageWidth}
                title={card.title}
                date={card.date}
                buttonText={card.buttonText}
              />
            </Link>
          ) : (
            <MoreCardCareerArticles
              key={index}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              imageHeight={card.imageHeight}
              imageWidth={card.imageWidth}
              title={card.title}
              date={card.date}
              buttonText={card.buttonText}
            />
          ),
        )}
      </div>
    </section>
  );
};
