import { Badge } from '@/shared';
import { careerSociology } from '@/entities/sociology';

export const ReviewSociology = () => {
  return (
    <div className="bg-white lg:mx-24 rounded-2xl border border-gray-200 lg:p-12 my-5">
      <h2 className="font-bold text-xl">Обзор</h2>
      <p className="py-2 text-gray-600">
        Социология — это наука, изучающая общество, его структуру, процессы и
        изменения. Социологи исследуют взаимодействия между людьми, группы и
        социальные институты, такие как семья, образование, религия, и
        правительство. Они анализируют, как социальные силы влияют на поведение
        людей, их убеждения и нормы.
      </p>
      <h3 className="font-bold text-black text-xl py-2">
        Карьерные возможности:
      </h3>
      <div className="">
        {careerSociology.map((opportunity, index) => (
          <Badge key={index} title={opportunity.title} />
        ))}
      </div>
    </div>
  );
};
