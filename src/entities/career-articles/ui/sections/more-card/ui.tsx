import {
  BadgeSection,
  MoreCardCareerArticles,
  moreDataCareer,
} from '@/entities';
import Link from 'next/link';

export const MoreCardSection = () => {
  return (
    <div className="bg-white">
      <div className="lg:mx-24 px-5 py-5 lg:pt-14">
        <BadgeSection />
      </div>
      <div className="grid grid-rows-1 md:grid-cols-3 px-5 md:mx-20 pb-4 lg:pb-10">
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
    </div>
  );
};
