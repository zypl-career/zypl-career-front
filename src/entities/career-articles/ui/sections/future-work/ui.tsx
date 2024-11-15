import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Button, FutureWorkImg } from '@/shared';

export const FutureWork = () => {
  const t = useTranslations('futureWork');

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
        <p className="text-sm text-gray-500">{t('date')}</p>
        <h2 className="text-2xl font-bold mt-2 pb-4">{t('title')}</h2>
        <p className="mt-2">{t('description')}</p>
        <div className="py-5">
          <Button variant="subscribe" showRightArrowIcon size="subscribe">
            {t('buttonText')}
          </Button>
        </div>
      </div>
    </div>
  );
};
