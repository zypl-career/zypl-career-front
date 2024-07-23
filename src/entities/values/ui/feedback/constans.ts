import {
  DislikeIcon,
  DislikeOrangeIcon,
  NeutralIcon,
  LikeIcon,
  VeryLikeIcon,
} from '@/shared';
import type { TFeedbackOption } from '@/entities';

export const feedbackOptions: TFeedbackOption[] = [
  { Icon: DislikeIcon, label: 'Очень не нравится' },
  { Icon: DislikeOrangeIcon, label: 'Скорее не нравится' },
  { Icon: NeutralIcon, label: 'Нейтрально' },
  { Icon: LikeIcon, label: 'Нравится' },
  { Icon: VeryLikeIcon, label: 'Очень нравится' },
];
