import { Button } from '@/shared';

export const FollowFuture = () => {
  return (
    <section className="mx-5 lg:mx-28">
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
          showRightArrowIcon={true}
          size="followFuture"
        >
          Начните строить свой карьерный профиль
        </Button>
      </div>
    </section>
  );
};
