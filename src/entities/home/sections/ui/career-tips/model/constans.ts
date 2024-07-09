import { Guide, GenderIgnore, ChoiceCourses } from '@/shared';
import { TCardData } from '@/entities';

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
        imageAlt: 'guide',
        imageHeight: 300,
        imageWidth: 470,
        title: 'Как игнорировать гендерную предвзятость в профессиях',
        date: '1 сентября',
        buttonText: 'Подробнее',
    },
    {
        imageSrc: ChoiceCourses,
        imageAlt: 'guide',
        imageHeight: 300,
        imageWidth: 470,
        title: 'Выбор предпочтений курса',
        date: '1 сентября',
        buttonText: 'Подробнее',
    },
];
