import { PartnersCard, type TPartnerProps } from '@/entities';
import { FC } from 'react';

export const Partners: FC<TPartnerProps> = ({ data }) => {
  return (
    <section className="bg-[#F8F8F8]">
      <div className="container pt-10 pb-28 theme:bg-primaryBg theme:text-primary">
        <h2 className="lg:text-2xl font-bold">Партнеры</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          {data.map((partner, index) => (
            <PartnersCard
              key={index}
              imageSrc={partner.imageSrc}
              altText={partner.altText}
              text={partner.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
