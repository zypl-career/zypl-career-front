import Image from 'next/image';
import { Partners } from '@/shared';
import { HERO_DATA } from '.';

export const PartnersHero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-white px-5 theme:bg-primaryBg theme:text-primary theme:border theme:border-primary">
      {HERO_DATA.map((hero, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row justify-between bg-white lg:px-36 theme:bg-primaryBg"
        >
          <div className="py-5 px-2 md:py-32">
            <p className="text-2xl md:text-5xl font-bold md:pb-8">
              {hero.title}
            </p>
            <p className="text-gray-600 theme:text-primary">{hero.description}</p>
          </div>
        </div>
      ))}
      <div className="py-32 md:px-16">
        <Image src={Partners} alt="about-us" />
      </div>
    </div>
  );
};
