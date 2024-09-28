import { FeedbackContent, FeedbackValues } from '@/entities';
import { careerValuesContent } from '.';
import { CardValue, cardData } from '@/shared';

export const CareerValues = () => {
  return (
    <section className="flex gap-5 py-8 lg:px-20">
      <CardValue data={cardData} />
      <div>
        <h2 className="font-bold text-2xl">{careerValuesContent.heading}</h2>
        <div className="text-gray-600">
          <p>{careerValuesContent.description}</p>
        </div>
        <FeedbackValues />
        <FeedbackContent />
      </div>
    </section>
  );
};
