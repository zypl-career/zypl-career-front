import { PartnersCard, partnersData } from '@/entities';

export const Partners = () => {
  return (
    <section className="bg-[#F8F8F8] lg:px-24 lg:py-32">
      <h2 className="lg:text-2xl font-bold">Партнеры</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        {partnersData.map((partner, index) => (
          <PartnersCard
            key={index}
            imageSrc={partner.imageSrc}
            altText={partner.altText}
            text={partner.text}
          />
        ))}
      </div>
    </section>
  );
};
