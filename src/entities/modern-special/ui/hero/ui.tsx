import {
  FacebookIcon,
  InstagramIcon,
  ModernSpecial,
  TgIcon,
  VKIcon,
} from '@/shared';
import Image from 'next/image';

export const ModernSpecialHero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-gray-100 lg:px-20">
      <div className="py-5 px-2  md:py-32">
        <p className="text-2xl md:text-5xl md:w-[522px] font-bold md:pb-8">
          Какие специалисты нужны современному Таджикистану
        </p>
        <p className="md:w-[522px] text-gray-600">
          «Ветер перемен» каждый день, а может и каждый час, меняет требования к
          развитию личности, в том числе по подготовке специалистов, и сегодня,
          имея диплом о высшем образовании, встает вопрос: где и как
          трудоустроиться? Как, имея диплом, найти себя и реализоваться в жизни?
        </p>
        <div className="my-4 text-gray-400">
          Поделитесь на:
          <div className="flex items-center gap-5 cursor-pointer py-2 my-2">
            <VKIcon />
            <TgIcon />
            <InstagramIcon />
            <FacebookIcon />
          </div>
        </div>
      </div>
      <div className="lg:w-[630px] px-5 py-24 flex justify-center">
        <Image src={ModernSpecial} alt="modern-special" />
      </div>
    </div>
  );
};
