import Image from 'next/image';
import { partnerCards } from './constants';

export const CardsPartners = () => {
  return (
    <div className="flex justify-center">
      <div className="container lg:px-28 grid gap-11 p-5 grid-cols-1 lg:grid-cols-2 pt-16 pb-28 cursor-pointer theme:bg-primaryBg theme:text-primary theme:border theme:border-primary">
        {partnerCards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col h-64 lg:w-[550px] items-center justify-center rounded-lg py-16 border border-gray-200 bg-white text-center theme:bg-primaryBg theme:border theme:border-primary"
          >
            <Image
              src={card.image}
              alt={card.alt}
              className={card.id === 1 || card.id === 2 ? 'w-24' : 'w-48'}
            />
            {card.description && (
              <p className="text-gray-600 font-bold py-5 text-xl lg:w-[400px]">
                {card.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
