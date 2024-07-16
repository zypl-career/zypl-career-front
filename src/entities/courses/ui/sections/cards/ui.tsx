import { CARD_COURSES_DATA, CardCourses } from '@/entities';

export const CardSection = () => {
  return (
    <div className="bg-white">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 pb-4 lg:pb-10 ">
        {CARD_COURSES_DATA.map((card, index) => (
          <CardCourses
            key={index}
            imageSrc={card.imageSrc}
            imageAlt={card.imageAlt}
            imageHeight={card.imageHeight}
            imageWidth={card.imageWidth}
            title={card.title}
          />
        ))}
      </div>
    </div>
  );
};
