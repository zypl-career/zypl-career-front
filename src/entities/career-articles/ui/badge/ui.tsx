import { Badge } from '@/shared';
import { useTranslations } from 'next-intl';

export const BadgeSection = () => {
  const t = useTranslations('badgeSection');

  const BADGE_TITLES = [
    t('professionalEducation'),
    t('internship'),
    t('workExperience'),
    t('volunteering'),
    t('entrepreneurship'),
    t('graduatePrograms'),
    t('careerAchievements'),
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {BADGE_TITLES.map((title, index) => (
        <Badge key={index} title={title} />
      ))}
    </div>
  );
};
