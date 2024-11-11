import { useTranslations } from 'next-intl';

export const UniversitySection = () => {
  const t = useTranslations('universitySection');

  return (
    <div>
      <div className="flex justify-center">
        <p className="text-center text-3xl lg:w-[950px] leading-9 text-gray-600 py-16">
          {t('description')}{' '}
          <span className="font-bold text-black">{t('city')}</span>
        </p>
      </div>
    </div>
  );
};
