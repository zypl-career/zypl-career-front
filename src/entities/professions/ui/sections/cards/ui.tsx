import Link from 'next/link';
import { NextCard, uniqueProfessions } from '@/entities';

export const CardsSection = () => {
  return (
    <section className="theme:bg-primaryBg theme:text-primary theme:border-primary theme:border-y">
      <div className="grid lg:grid-cols-2 py-14 pb-28 container">
        {uniqueProfessions.map((profession, index) => (
          <Link key={index} href={`/profession/${profession?.id}`}>
            <NextCard title={profession.title} />
          </Link>
        ))}
      </div>
    </section>
  );
};
