import Image from 'next/image';
import { CARDS_DATA_INTERES } from '.';
import { Button } from '@/shared';

export const CardsInteres = () => {
  return (
    <section className="px-10 lg:px-80 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 cursor-pointer ">
        {CARDS_DATA_INTERES.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md transition-transform transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
          >
            <div className="w-48 h-48 mb-4 relative ">
              <Image src={card.src} alt={card.title} />
            </div>
            <h2 className="text-lg font-semibold mb-2 text-center">
              {card.title}
            </h2>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center mt-8 mb-40">
        <Button variant="ghost" className="order-2 sm:order-1">
          Отменить
        </Button>
        <Button
          variant="subscribe"
          showRightArrowIcon={true}
          size="subscribe"
          className="order-1 sm:order-2"
        >
          Продолжить
        </Button>
      </div>
    </section>
  );
};