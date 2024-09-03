import Image from 'next/image';
import { AboutUs } from '@/shared';
import { HERO_DATA } from './constants';

export const AboutUsHero = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between bg-white px-5 theme:bg-primaryBg theme:text-primary theme:border theme:border-primary">
      <div className="order-1 md:order-2 py-32 md:px-16">
        <Image src={AboutUs} alt="about-us" />
      </div>
      {HERO_DATA.map((hero, index) => (
        <div
          key={index}
          className="order-2 md:order-1 flex flex-col md:flex-row justify-between bg-white lg:px-36 theme:bg-primaryBg"
        >
          <div className="py-5 px-2 md:py-32">
            <p className="text-2xl md:text-5xl font-bold md:pb-8">
              {hero.title}
            </p>
            <p className="text-gray-600 theme:text-primary">
              {hero.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};
