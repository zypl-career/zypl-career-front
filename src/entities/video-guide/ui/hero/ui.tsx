import { VideoHero } from '@/shared';
import Image from 'next/image';

export const VideoGuideHero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-white lg:px-36">
      <div className="py-5 px-2 md:py-32">
        <p className="text-2xl md:text-5xl font-bold md:pb-8">
          Видео с руководством пользователя
        </p>
        <p className="text-gray-600">
          Просмотрите короткие видео, демонстрирующие ключевые разделы
          веб-сайта, чтобы узнать, как получить максимальную отдачу от моего
          будущего.
        </p>
      </div>
      <div className="lg:w-96 py-24  md:px-16 flex justify-center">
        <Image src={VideoHero} alt="educational" />
      </div>
    </div>
  );
};
