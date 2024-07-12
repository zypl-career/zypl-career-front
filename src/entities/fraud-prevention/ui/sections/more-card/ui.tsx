import { MoreCardFraudPrevention, moreDataFraudPrevention } from '@/entities';

export const MoreCardSectionFraud = () => {
  return (
    <div className="bg-white">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 pb-4 lg:pb-10 ">
        {moreDataFraudPrevention.map((card, index) => (
          <MoreCardFraudPrevention
            key={index}
            imageSrc={card.imageSrc}
            imageAlt={card.imageAlt}
            imageHeight={card.imageHeight}
            imageWidth={card.imageWidth}
            title={card.title}
            date={card.date}
            buttonText={card.buttonText}
          />
        ))}
      </div>
    </div>
  );
};
