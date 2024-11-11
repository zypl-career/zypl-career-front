import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ResourcesSeekers } from '@/shared';

export const ResourcesSeekersHero = () => {
  const t = useTranslations('resourcesSeekersHero');

  return (
    <section className="bg-white">
      <div className="container flex flex-col md:flex-row justify-between">
        <div className="lg:w-96 pt-24 flex justify-center order-1 md:order-2">
          <Image
            src={ResourcesSeekers}
            alt="educational"
            className="w-52 lg:w-72 lg:h-72"
          />
        </div>
        <div className="py-5 md:py-32 order-2 md:order-1">
          <p className="text-2xl md:text-5xl md:w-[522px] font-bold md:pb-8">
            {t('title')}
          </p>
          <p className="md:w-[522px] text-gray-600 pb-5">{t('description')}</p>
        </div>
      </div>
    </section>
  );
};
