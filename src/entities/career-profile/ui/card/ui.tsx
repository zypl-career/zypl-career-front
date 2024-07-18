import { Button, TimeIcon } from '@/shared';
import { cardFutureData } from '.';

export const CardFuture = () => {
  return (
    <div className="bg-white py-5 px-5">
      <h3 className="font-bold text-lg">{cardFutureData.title}</h3>
      <p className="text-gray-600">{cardFutureData.description}</p>
      <div className="pt-5 lg:pt-10 lg:flex items-center gap-2">
        <Button variant="subscribe" showRightArrowIcon={true} size="subscribe">
          Пройти тест
        </Button>
        <div className="flex items-center justify-center gap-1 py-2">
          <TimeIcon />
          <p className="font-thin">Займет около часа</p>
        </div>
      </div>
    </div>
  );
};
