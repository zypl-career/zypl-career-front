import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Partners } from '@/shared';

export const PartnersHero = () => {
  const t = useTranslations('heroData.partners');

  return (
    <div className="bg-white">
      <div className="container flex flex-col md:flex-row justify-between theme:bg-primaryBg theme:text-primary theme:border theme:border-primary">
        <div className="order-1 md:order-2 pt-28 flex justify-center">
          <Image src={Partners} alt="partners" className="h-52 w-52" />
        </div>
        <div className="order-2 md:order-1 flex flex-col md:flex-row justify-between bg-white theme:bg-primaryBg">
          <div className="py-5 md:py-32">
            <p className="text-2xl md:text-5xl font-bold md:pb-8">
              {t('title')}
            </p>
            <p className="md:w-[500px] text-gray-600 theme:text-primary">
              {t('description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
