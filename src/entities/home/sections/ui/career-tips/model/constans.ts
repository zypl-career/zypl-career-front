import { TCardData } from '@/entities';
import { Guide, ChoiceCourses, GenderIgnore } from '@/shared';

export const moreData: TCardData[] = [
  {
    imageSrc: Guide,
    imageAlt: 'guide',
    imageHeight: 300,
    imageWidth: 470,
    title: 'Краткое руководство по принятию карьерных решений',
    date: '1 сентября',
    buttonText: 'Подробнее',
  },
  {
    imageSrc: GenderIgnore,
    imageAlt: 'gender ignore',
    imageHeight: 300,
    imageWidth: 470,
    title: 'Как игнорировать гендерную предвзятость в профессиях',
    date: '1 сентября',
    buttonText: 'Подробнее',
  },
  {
    imageSrc: ChoiceCourses,
    imageAlt: 'choice courses',
    imageHeight: 300,
    imageWidth: 470,
    title: 'Выбор предпочтений курса',
    date: '1 сентября',
    buttonText: 'Подробнее',
  },
];
