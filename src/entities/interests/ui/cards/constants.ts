import {
  Botany,
  Chemistry,
  Electronics,
  MeetingWork,
  Photo,
  CompanyManagement,
  Shop,
  Family,
  PhysicalEducation,
  Doctor,
  Music,
  WorkingWood,
  ScienceInteres,
  PhysicsInteres,
  Institution,
  Painting,
  Rights,
  Babysitter,
  Electrician,
  Metre,
  GroupsMusic,
  Agent,
  Mechanic,
  Sounds,
  WorkInOffice,
  Forester,
  Nurse,
  Economist,
  Electro,
  Accountancy,
  Geology,
  Building,
  ApproveHomeLoan,
  HelpSick,
} from '@/shared';
import type { TCardDataInters } from './types';

export const CARDS_DATA_INTERES: TCardDataInters[][] = [
  [
    { selected: false, src: Chemistry, title: 'Химия', name: 'Chemistry' },
    {
      selected: false,
      src: Electronics,
      title: 'Электроника',
      name: 'Electronics',
    },
  ],
  [
    { selected: false, src: Botany, title: 'Ботаника', name: 'Botany' },
    { selected: false, src: Photo, title: 'Фотография', name: 'Photography' },
  ],
  [
    {
      selected: false,
      src: MeetingWork,
      title: 'Маслиҳат дар бораи кор',
      name: 'Advice on work',
    },
    {
      selected: false,
      src: Shop,
      title: 'Соҳиби мағоза будан',
      name: 'Owning a store',
    },
  ],
  [
    {
      selected: false,
      src: CompanyManagement,
      title: 'Роҳбарӣ кардани ширкат',
      name: 'Company management',
    },
    {
      selected: false,
      src: Family,
      title: 'Ба оилаҳои эҳтиёҷман кумак расонидан',
      name: 'Helping families in need',
    },
  ],
  [
    { selected: false, src: PhysicalEducation, title: 'Тарбияи ҷисмони', name: 'Physical training' },
    { selected: false, src: Doctor, title: 'Тиб', name: 'Doktor' },
  ],
  [
    { selected: false, src: Music, title: 'Мусиқӣ', name: 'Music' },
    {
      selected: false,
      src: WorkingWood,
      title: 'Кор бо чуб',
      name: 'Working with wood',
    },
  ],
  [
    {
      selected: false,
      src: ScienceInteres,
      title: 'Илмҳои хоҷагидорӣ/иқтисодиёт',
      name: 'Economic sciences',
    },
    { selected: false, src: PhysicsInteres, title: 'Физика', name: 'Physics' },
  ],
  [
    {
      selected: false,
      src: Institution,
      title: 'Маориф/таълим',
      name: 'Education',
    },
    { selected: false, src: Painting, title: 'Санъат', name: 'Art' },
  ],
  [
    {
      selected: false,
      src: Rights,
      title: 'Ҳуқуқшиносӣ',
      name: 'Law',
    },
    {
      selected: false,
      src: Sounds,
      title: 'Санъаткор/ҳунарҳои мардумӣ',
      name: 'Artist / Folk Crafts',
    },
  ],
  [
    { selected: false, src: Babysitter, title: 'Нигоҳубинӣ кудак', name: 'Child care' },
    {
      selected: false,
      src: Electrician,
      title: 'Устои электроника',
      name: 'Stand electronics',
    },
  ],
  [
    { selected: false, src: Metre, title: 'Заминченкунӣ', name: 'Landscaping' },
    {
      selected: false,
      src: GroupsMusic,
      title: 'Дар гурӯҳ бозӣ кардан, яъзои дастаи мусиқӣ будан',
      name: 'Playing in a group, being a member of a music team',
    },
  ],
  [
    { selected: false, src: Agent, title: 'Агенти сайёҳӣ', name: 'Travel agent' },
    {
      selected: false,
      src: Mechanic,
      title: 'Механик',
      name: 'Mechanic',
    },
  ],
  [
    { selected: false, src: WorkInOffice, title: 'Кор дар офис', name: 'Work in the office' },
    {
      selected: false,
      src: Painting,
      title: 'Тасвири расмҳо',
      name: 'Picture description',
    },
  ],
  [
    { selected: false, src: Forester, title: 'Ҷангалбон', name: 'Forest' },
    {
      selected: false,
      src: Nurse,
      title: 'Ҳамшираи шафқат',
      name: 'The nurse of mercy',
    },
  ],
  [
    { selected: false, src: Economist, title: 'Иқтисодчӣ', name: 'Economist' },
    {
      selected: false,
      src: Electro,
      title: 'Электрикӣ',
      name: 'Electric',
    },
  ],
  [
    { selected: false, src: Accountancy, title: 'Муҳосибот', name: 'Accounting' },
    {
      selected: false,
      src: Geology,
      title: 'Геология',
      name: 'Geology',
    },
  ],
  [
    { selected: false, src: Building, title: 'Бинокор', name: 'Builder' },
    {
      selected: false,
      src: Economist,
      title: 'Иқтисодчӣ',
      name: 'Economist',
    },
  ],
  [
    { selected: false, src: ApproveHomeLoan, title: 'Тасдиқӣ қарзи хона (ипотека)', name: 'Confirmation of a home loan (mortgage)' },
    {
      selected: false,
      src: HelpSick,
      title: 'Ба беморон дар беморхона ёри расонидан',
      name: 'Helping patients in the hospital',
    },
  ],
];
