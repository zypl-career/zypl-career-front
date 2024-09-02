import { ResourcesSeekers } from '@/shared';
import Image from 'next/image';

export const ResourcesSeekersHero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-white px-1 lg:px-36">
      <div className="lg:w-96 pt-24 md:px-16 flex justify-center order-1 md:order-2">
        <Image
          src={ResourcesSeekers}
          alt="educational"
          className="w-52 lg:w-96"
        />
      </div>
      <div className="py-5 px-2 md:py-32 order-2 md:order-1">
        <p className="text-2xl md:text-5xl md:w-[522px] font-bold md:pb-8">
          Ресурсы для соискателей
        </p>
        <p className="md:w-[522px] text-gray-600 pb-5">
          Соискателям нужен целый ряд информации, которая поможет им
          подготовиться к различным этапам поиска работы. Чтобы помочь вам, мы
          собрали некоторые ресурсы myfuture, которые помогут вам найти и
          получить работу.
        </p>
      </div>
    </div>
  );
};
