import { Hero as HeroImg } from '@/shared';
import Image from 'next/image';

export const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-[#F8F8F8] theme:bg-primaryBg">
      <div className="py-5 px-2 md:mx-24 md:py-32">
        <p className="text-2xl md:text-5xl md:w-[522px] font-bold md:pb-8 text-primary">
          Формируйте свое будущее
        </p>
        <p className="md:w-[522px] text-gray-600 text-primary">
          zypl.career предоставляет ресурсы для изучения карьерных путей и
          инструментов для развития самопознания, чтобы помочь в принятии
          решений о карьере.
        </p>
      </div>
      <div className="flex justify-center md:justify-end py-5 md:py-0">
        <Image
          src={HeroImg}
          alt="Hero"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
    </div>
  );
};
