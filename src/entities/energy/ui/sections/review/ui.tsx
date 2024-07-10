import { Badge } from '@/shared';
import { careerOpportunities } from '@/entities';

export const Review = () => {
  return (
    <div className="bg-white lg:mx-24 rounded-2xl border border-gray-200 lg:p-12 my-5">
      <h2 className="font-bold text-xl">Обзор</h2>
      <p className="py-2 text-gray-600">
        Энергетический сектор Таджикистана предлагает широкий спектр карьерных
        возможностей, как для начинающих специалистов, так и для опытных
        профессионалов. Развитие гидроэнергетики, внедрение новых технологий и
        реализация крупных проектов создают спрос на квалифицированных
        специалистов в различных областях.
      </p>
      <h3 className="font-bold text-black text-xl py-2">
        Карьерные возможности:
      </h3>
      <div className="">
        {careerOpportunities.map((opportunity, index) => (
          <Badge key={index} title={opportunity.title} />
        ))}
      </div>
    </div>
  );
};
