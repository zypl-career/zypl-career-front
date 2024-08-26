import { Universities } from '@/shared';
import Image from 'next/image';

export const HeroEducational = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-white lg:px-36">
      <div className="py-5 px-2 md:py-32">
        <p className="text-2xl md:text-5xl md:w-[522px] font-bold md:pb-8">
          Вузы и колледжи
        </p>
        <p className="md:w-[522px] text-gray-600">
          В 2022 году по результатам ЦВЭ должен осуществиться приём студентов в
          39 образовательных учреждений высшего профессионального образования
          (18 университетов, 1 академия, 14 институтов, 6 филиалов университетов
          и институтов) и 70 образовательных учреждений среднего
          профессионального образования.
        </p>
      </div>
      <div className="lg:w-96 py-24 lg:px-20 md:px-16 flex justify-center">
        <Image src={Universities} alt="educational" />
      </div>
    </div>
  );
};
