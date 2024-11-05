import {
  DislikeIcon,
  DislikeOrangeIcon,
  NeutralIcon,
  LikeIcon,
  VeryLikeIcon,
} from '@/shared';
import { useTranslations } from 'next-intl';

export const FeedbackValues = () => {
  const t = useTranslations('feedbackValues');

  const feedbackOptions = [
    { Icon: DislikeIcon, label: t('options.veryDislike') },
    { Icon: DislikeOrangeIcon, label: t('options.dislike') },
    { Icon: NeutralIcon, label: t('options.neutral') },
    { Icon: LikeIcon, label: t('options.like') },
    { Icon: VeryLikeIcon, label: t('options.veryLike') },
  ];

  return (
    <section>
      <h3 className="font-semibold py-8">{t('heading')}</h3>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
        {feedbackOptions.map(({ Icon, label }, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Icon className="w-8 h-8" />
            <p>{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
