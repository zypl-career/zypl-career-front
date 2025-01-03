import { MoreCardIndustries } from '@/entities';
import { MORE_DATA_PARENTS } from './constants';

export const CardSectionTeachers = () => {
  return (
    <div className="grid grid-rows-1 lg:grid-cols-3 md:grid-cols-2 pb-4 lg:pb-10 gap-14">
      {MORE_DATA_PARENTS.map((card, index) => (
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
      ))}
    </div>
  );
};
