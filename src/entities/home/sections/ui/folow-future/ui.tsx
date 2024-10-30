import { Button } from '@/shared';
import { useTranslations } from 'next-intl';

export const FollowFuture = () => {
  const t = useTranslations('FollowFuture');

  return (
    <section className="theme:bg-primaryBg theme:border-y theme:border-primary theme:text-primary">
      <div className="container mx-auto">
        <h2 className="font-bold text-2xl my-5">{t('heading')}</h2>
        <p className="lg:w-[847px] my-5">{t('description')}</p>
        <div className="pb-10">
          <Button showRightArrowIcon variant="default" rounded="full">
            {t('buttonText')}
          </Button>
        </div>
      </div>
    </section>
  );
};
