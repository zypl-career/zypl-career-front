import { ResourcesSeekers } from '@/shared';
import Image from 'next/image';

export const ResourcesSeekersHero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-white lg:px-36">
      <div className="py-5 px-2 md:py-32">
        <p className="text-2xl md:text-5xl md:w-[522px] font-bold md:pb-8">
          Ресурсы для соискателей
        </p>
        <p className="md:w-[522px] text-gray-600">
          Соискателям нужен целый ряд информации, которая поможет им
          подготовиться к различным этапам поиска работы. Чтобы помочь вам, мы
          собрали некоторые ресурсы myfuture, которые помогут вам найти и
          получить работу
        </p>
      </div>
      <div className="lg:w-96 py-24  md:px-16 flex justify-center">
        <Image src={ResourcesSeekers} alt="educational" />
      </div>
    </div>
  );
};
