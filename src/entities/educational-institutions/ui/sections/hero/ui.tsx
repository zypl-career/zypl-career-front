import Image from 'next/image';
import { Universities } from '@/shared';

export const HeroEducational = () => {
  return (
    <div className="bg-white">
      <div className="container flex flex-col md:flex-row justify-between">
        <div className="lg:w-96 pt-24 flex justify-center order-1 md:order-2">
          <Image
            src={Universities}
            alt="educational"
            className="w-52 lg:w-72 lg:h-72"
          />
        </div>
        <div className="py-5 md:py-32 order-2 md:order-1">
          <p className="text-2xl md:text-5xl md:w-[522px] font-bold md:pb-8">
            Вузы и колледжи
          </p>
          <p className="md:w-[522px] text-gray-600">
            В 2022 году по результатам ЦВЭ должен осуществиться приём студентов
            в 39 образовательных учреждений высшего профессионального
            образования (18 университетов, 1 академия, 14 институтов, 6 филиалов
            университетов и институтов) и 70 образовательных учреждений среднего
            профессионального образования.
          </p>
        </div>
      </div>
    </div>
  );
};
