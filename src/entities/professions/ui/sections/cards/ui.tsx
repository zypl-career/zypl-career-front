import Link from 'next/link';
import { NextCard, professions } from '@/entities';

export const CardsSection = () => {
  return (
    <div className="grid lg:grid-cols-2 lg:px-28 py-14 pb-28 px-5">
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
