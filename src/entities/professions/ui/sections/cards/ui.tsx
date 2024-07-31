import { NextCard, professions } from '@/entities';
import Link from 'next/link';

export const CardsSection = () => {
  return (
    <div className="grid lg:grid-cols-2 px-28 py-14 pb-28">
      {professions.map((profession, index) => (
        <Link
          key={index}
          href={profession.title === 'Энергетика' ? '/energy' : '#'}
        >
          <NextCard title={profession.title} />
        </Link>
      ))}
    </div>
  );
};
