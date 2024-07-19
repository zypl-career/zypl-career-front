import Image from 'next/image';
import { AboutUs } from '@/shared';
import { HERO_DATA } from '.';

export const AboutUsHero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-white px-5">
      {HERO_DATA.map((hero, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row justify-between bg-white lg:px-36"
        >
          <div className="py-5 px-2 md:py-32">
            <p className="text-2xl md:text-5xl font-bold md:pb-8">
              {hero.title}
            </p>
            <p className="text-gray-600">{hero.description}</p>
          </div>
        </div>
      ))}
      <div className="lg:w-96 py-24  md:px-16 flex justify-center">
        <Image src={AboutUs} alt="about-us" />
      </div>
    </div>
  );
};
