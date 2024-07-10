import { NextCard, professions } from '@/entities';

export const CardsSection = () => {
  return (
    <div className="grid lg:grid-cols-2 px-28 py-14 pb-28">
      {professions.map((profession, index) => (
        <NextCard key={index} title={profession.title} />
      ))}
    </div>
  );
};
