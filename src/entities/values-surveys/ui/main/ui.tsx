import { CardValuesSurveys } from '@/entities';
import { Button } from '@/shared';

export const MainValuesSureys = () => {
  return (
    <div>
      <CardValuesSurveys />
      <div className="flex flex-col sm:flex-row items-center mt-8 mb-40 lg:px-80">
        <Button variant="ghost" className="order-2 sm:order-1">
          Отменить
        </Button>
        <Button
          variant="subscribe"
          showRightArrowIcon={true}
          size="subscribe"
          className="order-1 sm:order-2"
        >
            Далее
        </Button>
      </div>
    </div>
  );
};
