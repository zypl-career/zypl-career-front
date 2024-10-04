// import { Badge } from '@/shared';
// import { careerSociology } from '@/entities/sociology';
import { FC } from 'react';
import { TRelatedSociologyData } from '@/entities';

export const ReviewSociology: FC<{ description: TRelatedSociologyData }> = ({
  description,
}) => {
  const isShowDescription = description.sociology.every(
    (item) => item.description,
  );
  return isShowDescription ? (
    <div className="bg-white rounded-2xl border border-gray-200 lg:p-12">
      <>
        <h2 className="font-bold text-xl">Обзор</h2>
        {description.sociology.map((item, index) => (
          <p key={index} className="py-2 text-gray-600">
            {item.description}
          </p>
        ))}
      </>

      {/* <h3 className="font-bold text-black text-xl py-2">
        Карьерные возможности:
        </h3>
        <div className="">
        {careerSociology.map((opportunity, index) => (
          <Badge key={index} title={opportunity.title} />
          ))}
        </div> */}
    </div>
  ) : null;
};
