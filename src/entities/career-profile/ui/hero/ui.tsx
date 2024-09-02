import Image from 'next/image';
import { CareerProfile } from '@/shared';

export const CareerProfileHero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-white px-1 lg:px-36">
      <div className="lg:w-96 py-24 md:px-16 flex justify-center order-1 md:order-2">
        <Image src={CareerProfile} alt="video-hero" className="w-52 lg:w-96" />
      </div>
      <div className="py-5 px-2 md:py-32 order-2 md:order-1">
        <p className="text-2xl md:text-5xl font-bold md:pb-8">
          Мой карьерный профиль
        </p>
        <p className="text-gray-600">
          Начните свой личный карьерный путь. Проходите тесты, которые помогут
          определить ваши интересы, ценности и навыки, а затем просмотрите
          результаты, включая предлагаемые профессии, чтобы изучить курсы и
          карьерные пути.
        </p>
      </div>
    </div>
  );
};
