import Image from 'next/image';
import { Button, FutureWorkImg } from '@/shared';

export const FutureWork = () => {
  return (
    <div className="flex flex-col md:flex-row items-center px-6 md:px-24 py-5 lg:py-24">
      <Image
        src={FutureWorkImg}
        alt="future-work"
        width={400}
        height={400}
        className="mb-4 md:mb-0 md:mr-4"
      />
      <div className="text-left">
        <p className="text-sm text-gray-500">29 июня / 12 минут чтения</p>
        <h2 className="text-2xl font-bold mt-2 pb-4">Будущее работы</h2>
        <p className="mt-2">
          Будущее работы будет динамичным и захватывающим. Это откроет новые
          карьеры и способы работы по мере внедрения новых технологий, и мы
          приспосабливаемся к таким проблемам, как COVID-19. Ознакомьтесь с
          нашими ресурсами, чтобы узнать, как меняется мир труда.
        </p>
        <div className="py-5">
          <Button
            variant="subscribe"
            showRightArrowIcon={true}
            size="subscribe"
          >
            Подробнее
          </Button>
        </div>
      </div>
    </div>
  );
};
