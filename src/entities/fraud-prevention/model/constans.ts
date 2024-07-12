import { ArtisticDirectors, AdminDatabase, Author } from '@/shared';
import { TCardMoreFraudProps } from '.';

export const moreDataFraudPrevention: TCardMoreFraudProps[] = [
  {
    imageSrc: ArtisticDirectors,
    imageAlt: 'guide',
    imageHeight: 300,
    imageWidth: 470,
    title: 'Художественные директора, медиапродюсеры и ведущие',
    date: '1 сентября',
    buttonText: 'Подробнее',
  },
  {
    imageSrc: Author,
    imageAlt: 'guide',
    imageHeight: 300,
    imageWidth: 470,
    title: 'Авторы, редакторы книг и сценариев',
    date: '1 сентября',
    buttonText: 'Подробнее',
  },
  {
    imageSrc: AdminDatabase,
    imageAlt: 'guide',
    imageHeight: 300,
    imageWidth: 470,
    title:
      'Администраторы баз данных и систем, а также специалисты по безопасности ИКТ',
    date: '1 сентября',
    buttonText: 'Подробнее',
  },
];
