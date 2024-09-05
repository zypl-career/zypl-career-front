import Image from 'next/image';
import { Button, Hero as HeroImg, TimeIcon } from '@/shared';

export const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-[#F8F8F8] theme:bg-primaryBg">
      <div className="py-5 container md:mx-24 md:py-32">
        <p className="text-2xl md:text-5xl md:w-[522px] font-bold md:pb-8 text-primary">
          Формируйте свое будущее
        </p>
        <p className="md:w-[522px] text-gray-600 text-primary">
          zypl.career предоставляет ресурсы для изучения карьерных путей и
          инструментов для развития самопознания, чтобы помочь в принятии
          решений о карьере.
        </p>
        <div className="hidden md:flex gap-2 py-5">
          <Button
            showRightArrowIcon
            variant="default"
            size="subscribe"
            rounded="full"
          >
            Пройти тест
          </Button>
          <div className="flex items-center justify-center gap-1 py-2">
            <TimeIcon />
            <p className="font-thin">Займет около 30-40 минут</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-end py-5">
        <Image src={HeroImg} alt="hero" className="lg:w-[1180px]" />
      </div>
      <div className="container flex md:hidden flex-col items-center gap-2 py-5">
        <Button
          showRightArrowIcon
          variant="default"
          size="subscribe"
          rounded="full"
          className="w-full md:w-auto text-center"
        >
          Пройти тест
        </Button>
        <div className="flex items-center justify-center gap-1 py-2">
          <TimeIcon />
          <p className="font-thin">Займет около 30-40 минут</p>
        </div>
      </div>
    </div>
  );
};
