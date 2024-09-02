import Image from 'next/image';
import { TrainingCenters } from '@/shared';
import { HERO_DATA } from './constants';

export const TrainingCenterHero = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between bg-white px-1">
      <div className="pt-32 container order-1 md:order-2 flex justify-center">
        <Image src={TrainingCenters} alt="about-us" className="w-52 lg:w-52" />
      </div>
      {HERO_DATA.map((hero, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row justify-between bg-white lg:px-36 order-2 md:order-1"
        >
          <div className="py-5 px-2 md:py-32">
            <p className="text-2xl md:text-5xl font-bold md:pb-8">
              {hero.title}
            </p>
            <p className="text-gray-600">{hero.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
