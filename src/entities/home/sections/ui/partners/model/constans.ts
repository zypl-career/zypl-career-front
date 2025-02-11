import { Aflotoun, Emblem, Flag, Tajrupt, Unicef } from '@img';
import { TPartner } from '@entities';

export const partnersData: TPartner[] = [
  {
    link: 'https://maorif.tj',
    imageSrc: Emblem,
    altText: 'emblem',
    text: 'Вазорати маориф ва илми Ҷумҳурии Тоҷикистон',
  },
  {
    link: 'https://www.mehnat.tj/',
    imageSrc: Emblem,
    altText: 'emblem',
    text: 'Вазорати меҳнат, муҳоҷират ва шуғли аҳолӣ Ҷумҳурии Тоҷикистон',
  },
  {
    link: 'https://www.unicef.org/tajikistan',
    imageSrc: Unicef,
    altText: 'emblem',
  },
  {
    link: 'https://www.eeas.europa.eu/delegations/tajikistan_en?s=228',
    imageSrc: Flag,
    altText: 'emblem',
    text: 'Бо маблағгузории Иттиҳоди Аврупо',
  },
  {
    link: 'https://www.tajrupt.org/',
    imageSrc: Tajrupt,
    altText: 'emblem',
  },
  {
    link: 'https://aflatoun.org',
    imageSrc: Aflotoun,
    altText: 'emblem',
  },
];
