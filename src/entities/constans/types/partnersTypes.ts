import { Aflotoun, Emblem, Flag, Tajrupt, Unicef } from '@/shared';

export type ImageSrc =
  | typeof Aflotoun
  | typeof Emblem
  | typeof Flag
  | typeof Tajrupt
  | typeof Unicef;

export type TPartnerProps = {
  imageSrc: ImageSrc;
  altText: string;
  text?: string;
};
