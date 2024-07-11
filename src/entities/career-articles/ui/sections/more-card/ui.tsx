import { MoreCardIndustries, moreDataCareer } from '@/entities';

export const MoreCardSection = () => {
  return (
    <div>
      <div className="grid grid-rows-1 md:grid-cols-3 px-5 lg:mx-20 md:mx-20 pb-4 lg:pb-10">
        {moreDataCareer.map((card, index) => (
          <MoreCardIndustries
            key={index}
            imageSrc={card.imageSrc}
            imageAlt={card.imageAlt}
            imageHeight={card.imageHeight}
            imageWidth={card.imageWidth}
            title={card.title}
            buttonText={card.buttonText}
          />
        ))}
      </div>
    </div>
  );
};
