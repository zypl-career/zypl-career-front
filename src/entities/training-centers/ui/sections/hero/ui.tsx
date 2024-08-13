import Image from 'next/image';
import { TrainingCenters } from '@/shared';
import { HERO_DATA } from './constants';

export const TrainingCenterHero = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between bg-white px-5">
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
      <div className="py-32 md:px-16">
        <Image src={TrainingCenters} alt="about-us" />
      </div>
    </section>
  );
};
