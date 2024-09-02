import { MoreCardIndustries, moreDataIndustries } from '@/entities';
import Link from 'next/link';

export const CardSectionIndustries = () => {
  return (
    <section>
      <p className="lg:px-24 py-5 px-3">
        Выберите интересующую вас отрасль, чтобы просмотреть ее профиль.
      </p>
      <div className="grid grid-rows-1 lg:grid-cols-3 md:grid-cols-2 px-5 lg:mx-20 md:mx-20 pb-4 lg:pb-10">
        {moreDataIndustries.map((card, index) =>
          card.link ? (
            <Link href={card.link} key={index}>
              <MoreCardIndustries
                imageSrc={card.imageSrc}
                imageAlt={card.imageAlt}
                imageHeight={card.imageHeight}
                imageWidth={card.imageWidth}
                title={card.title}
                buttonText={card.buttonText}
              />
            </Link>
          ) : (
            <MoreCardIndustries
              key={index}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              imageHeight={card.imageHeight}
              imageWidth={card.imageWidth}
              title={card.title}
              buttonText={card.buttonText}
            />
          ),
        )}
      </div>
    </section>
  );
};
