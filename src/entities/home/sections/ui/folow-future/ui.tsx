import { Button } from '@/shared';

export const FollowFuture = () => {
  return (
    <section className="theme:bg-primaryBg theme:border-y theme:border-primary theme:text-primary">
      <div className="container mx-auto">
        <h2 className="font-bold text-2xl my-5">
          Готовы начать исследовать свое будущее?
        </h2>
        <p className="lg:w-[847px] my-5">
          Выполните задания, чтобы помочь определить ваши интересы, ценности и
          навыки. Посмотреть предлагаемые профессии и курсы.
        </p>
        <div className="pb-10">
          <Button
            variant="subscribe"
            showRightArrowIcon
            size="followFuture"
          >
            Начните строить свой карьерный профиль
          </Button>
        </div>
      </div>
    </section>
  );
};
