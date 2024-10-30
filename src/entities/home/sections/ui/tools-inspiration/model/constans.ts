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
    key: 'careerPath',
    link: '/career-profiles',
  },
  {
    Icons: ProfessionsIcon,
    key: 'professions',
    link: '/professions',
  },
  {
    Icons: IndustriesIcon,
    key: 'industries',
    link: '/industries',
  },
  {
    Icons: CareerArticlesIcon,
    key: 'careerArticles',
    link: '/career-articles',
  },
  {
    Icons: CoursesIcon,
    key: 'courses',
    link: '/courses',
  },
  {
    Icons: UniversityIcon,
    key: 'universities',
    link: '/educational-institutions',
  },
  {
    Icons: ResourcesIcon,
    key: 'resources',
    link: '/resources-seeker',
  },
  {
    Icons: TrainingCentersIcon,
    key: 'trainingCenters',
    link: '/training-centers',
  },
  {
    Icons: VideoIcon,
    key: 'videoGuide',
    link: '/video-guide',
  },
];
