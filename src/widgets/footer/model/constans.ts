import { TFooterItem } from '@/widgets';

export const footerData: TFooterItem[] = [
  {
    title: 'Узнайте о себе',
    items: [
      { label: 'Мой карьерный профиль', link: '/career-profiles' },
      { label: 'Карьерные успехи', link: '/' },
    ],
  },
  {
    title: 'Исследуйте возможности',
    items: [
      { label: 'Профессии', link: '/professions' },
      { label: 'Курсы', link: '/courses' },
      { label: 'Отрасли', link: '/industries' },
    ],
  },
  {
    title: 'Помощь другим',
    items: [
      {
        label: 'Как учитель или практикующий профессию',
        link: '/teachers',
      },
      { label: 'Как родитель или опекун', link: '/parents' },
    ],
  },
];
