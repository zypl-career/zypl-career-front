import { MoreCardCareerArticles } from '@/entities';
import { TRAINING_CARD_DATA } from './constants';

export const MoreCardTraining = () => {
  return (
    <div className="grid grid-rows-1 md:grid-cols-3 px-5 md:mx-20 pb-4 lg:pb-10">
      {TRAINING_CARD_DATA.map((card, index) => (
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
      ))}
    </div>
  );
};
