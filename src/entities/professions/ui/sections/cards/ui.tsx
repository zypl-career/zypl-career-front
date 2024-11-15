import Link from 'next/link';
import { NextCard, uniqueProfessions } from '@/entities';

export const CardsSection = () => {
  return (
    <section className="container">
      <div className="grid lg:grid-cols-2 py-14 pb-28">
        {uniqueProfessions.map((profession, index) => (
          <Link
            key={index}
            href={`/profession/${profession?.id}`}
          >
            <NextCard title={profession.title} />
          </Link>
        ))}
      </div>
    </section>
  );
};
