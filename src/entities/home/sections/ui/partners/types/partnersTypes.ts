import { Aflotoun, Emblem, Flag, Tajrupt, Unicef } from '@/shared';

export type ImageSrc =
  | typeof Aflotoun
  | typeof Emblem
  | typeof Flag
  | typeof Tajrupt
  | typeof Unicef;

export type TPartnerProps = {
  data: TPartner[];
};

export type TPartner = {
  imageSrc: ImageSrc | string;
  altText: string;
  text?: string;
  link?: string;
};
