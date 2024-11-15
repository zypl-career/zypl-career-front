import Link from 'next/link';
import { MoreCardIndustries, moreDataIndustries } from '@/entities';
import { useTranslations } from 'next-intl';

export const CardSectionIndustries = () => {
  const t = useTranslations('cardSectionIndustries');

  return (
    <section>
      <p className="lg:px-24 py-5 px-3">{t('description')}</p>
      <div className="container grid grid-rows-1 gap-10 lg:grid-cols-3 md:grid-cols-2 px-5 pb-4 lg:pb-10">
        {moreDataIndustries.map((card, index) =>
          card.link ? (
            <Link href={card.link} key={index}>
              <MoreCardIndustries
                id={index}
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
              id={index}
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
