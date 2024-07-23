import { CardValue, FeedbackValues } from '@/entities';
import { careerValuesContent } from '.';

export const CareerValues = () => {
  return (
    <section className="flex gap-5 py-8 lg:px-20">
      <CardValue />
      <div>
        <h2 className="font-bold text-2xl">{careerValuesContent.heading}</h2>
        <div className="text-gray-600">
          <p>{careerValuesContent.description}</p>
        </div>
        <FeedbackValues />
      </div>
    </section>
  );
};
