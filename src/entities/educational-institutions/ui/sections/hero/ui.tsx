import { Universities } from '@/shared';
import Image from 'next/image';

export const HeroEducational = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-white lg:px-36">
      <div className="py-5 px-2 md:py-32">
        <p className="text-2xl md:text-5xl md:w-[522px] font-bold md:pb-8">
          Карьерные статьи
        </p>
        <p className="md:w-[522px] text-gray-600">
          Изучите советы и рекомендации и откройте для себя информацию по многим
          темам карьеры, таким как опыт работы, стажировка, написание резюме и
          подача заявления о приеме на работу.
        </p>
      </div>
      <div className="lg:w-96 py-24 lg:px-20 md:px-16 flex justify-center">
        <Image src={Universities} alt="educational" className="" />
      </div>
    </div>
  );
};
