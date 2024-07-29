import Image from 'next/image';
import { partnerCards } from '.';

export const CardsPartners = () => {
  return (
    <div className="grid gap-11 p-5 grid-cols-1 lg:grid-cols-2 lg:px-20 pt-16 pb-28 cursor-pointer">
      {partnerCards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center rounded-lg py-16 shadow-lg bg-white  transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-center"
        >
          <Image src={card.image} alt={card.alt} height={200} width={200} />
          {card.description && (
            <p className="text-gray-600 font-bold py-5 text-xl lg:text-2xl lg:w-[400px]">
              {card.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};
