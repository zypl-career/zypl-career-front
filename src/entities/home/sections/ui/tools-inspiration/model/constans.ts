import {
  CareerArticlesIcon,
  CareerIcon,
  CoursesIcon,
  IndustriesIcon,
  ProfessionsIcon,
  UniversityIcon,
  ResourcesIcon,
  TrainingCentersIcon,
  VideoIcon,
} from '@/shared';
import { ToolsProps } from '@/entities';

export const toolsData: ToolsProps[] = [
  {
    Icons: CareerIcon,
    title: 'Мой карерный путь',
    description:
      'Мы аккумулируем большое количество онлайн-курсов по различным направлениям, позволяя сравнивать их, и выбирать то, что вам нравится',
    link: '/career-profiles',
  },
  {
    Icons: CareerIcon,
    title: 'Профессии',
    description:
      'Изучите более 350 профессий, описывающих задачи, уровни квалификации и текущую информацию о рынке труда.',
    link: '/professions',
  },
  {
    Icons: CareerIcon,
    title: 'Отрасли',
    description:
      'Доступ к важной информации (включая перспективы трудоустройства) по каждой отрасли.',
    link: '/industries',
  },
  {
    Icons: CareerIcon,
    title: 'Карьерные статьи',
    description:
      'Откройте для себя практическую информацию для поддержки вашего карьерного исследования.',
    link: '/career-articles',
  },
  {
    Icons: CareerIcon,
    title: 'Курсы',
    description:
      'Откройте для себя курс, просмотрев текущие курсы высшего образования и профессионального образования и обучения.',
    link: '/courses',
  },
  {
    Icons: CareerIcon,
    title: 'Вузы и колледжи',
    description: 'Подбери вуз для успешной карьеры',
    link: '/educational-institutions',
  },
  {
    Icons: CareerIcon,
    title: 'Ресурсы для соискателей',
    description:
      'Откройте для себя шаблоны резюме и сопроводительных писем и другие ресурсы, которые помогут вам найти и получить работу.',
    link: '/resources-seeker',
  },
  {
    Icons: CareerIcon,
    title: 'Учебные центры',
    description:
      'Узнайте советы и рекомендации, прочитав реальные карьерные истории о личном опыте.',
    link: '/training-centers',
  },
  {
    Icons: CareerIcon,
    title: 'Видео с руководством пользователя',
    description:
      'Просмотрите короткие видео, демонстрирующие ключевые разделы веб-сайта, чтобы узнать, как получить максимальную отдачу от моего будущего.',
    link: '/video-guide',
  },
];
