import {
  BasicsEngineering,
  Corrosion,
  GeneralElectronics,
  LifeSafety,
  OilandGas,
  Physics,
  TechnicalSupport,
  TheretorialMechanics,
  TrunkIndustry,
} from '@/shared';
import { TCardCoursesProps } from '..';

export const CARD_COURSES_DATA: TCardCoursesProps[] = [
  {
    imageSrc: GeneralElectronics,
    imageAlt: 'general-electronics',
    imageHeight: 300,
    imageWidth: 470,
    title: 'Общая электроника',
  },
  {
    imageSrc: OilandGas,
    imageAlt: 'oiland-gas',
    imageHeight: 300,
    imageWidth: 470,
    title: 'Материаловедение в нефтегазовой отрасли',
  },
  {
    imageSrc: TrunkIndustry,
    imageAlt: 'trunk-industry',
    imageHeight: 300,
    imageWidth: 470,
    title: 'Строительство магистральных газонефтепроводов',
  },
  {
    imageSrc: Corrosion,
    imageAlt: 'corrosion',
    imageHeight: 300,
    imageWidth: 470,
    title: 'Коррозия и защита нефтегазового оборудования',
  },
  {
    imageSrc: TheretorialMechanics,
    imageAlt: 'theretorial-mechanics',
    imageHeight: 300,
    imageWidth: 470,
    title: 'Теоретическая механика',
  },
  {
    imageSrc: LifeSafety,
    imageAlt: 'life-safety',
    imageHeight: 300,
    imageWidth: 470,
    title: 'Безопасность жизнедеятельности',
  },
  {
    imageSrc: Physics,
    imageAlt: 'physics',
    imageHeight: 300,
    imageWidth: 470,
    title: 'Физика. Подготовка к егэ',
  },
  {
    imageSrc: BasicsEngineering,
    imageAlt: 'basics-engineering',
    imageHeight: 300,
    imageWidth: 470,
    title: 'Основы инженерной компьютерной графики',
  },
  {
    imageSrc: TechnicalSupport,
    imageAlt: 'technical-support',
    imageHeight: 300,
    imageWidth: 470,
    title: 'Производственно-техническое обеспечение строительства',
  },
];
