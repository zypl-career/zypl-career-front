import { Aflotoun, China, Emblem, Tajrupt, Unicef } from '@/shared';
import { TPartnerCard } from './types';

export const partnerCards: TPartnerCard[] = [
  {
    id: 1,
    image: Emblem,
    description: 'Вазорати маориф ва илми Чумхурии Точикистон',
    alt: 'Emblem 1',
  },
  {
    id: 2,
    image: Emblem,
    description:
      'Вазорати мехнат, мухочират ва шуғли аҳолии Чумхурии Точикистон',
    alt: 'Emblem 2',
  },
  {
    id: 3,
    image: Unicef,
    alt: 'Unicef Partners',
  },
  {
    id: 4,
    image: China,
    alt: 'China',
  },
  {
    id: 5,
    image: Tajrupt,
    alt: 'Tajrupt',
  },
  {
    id: 6,
    image: Aflotoun,
    alt: 'Aflotoun',
  },
];
