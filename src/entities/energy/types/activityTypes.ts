import { TSociology } from '@/entities';

export type TDataItem = {
  title: string;
  description: string;
  key?: keyof TSociology;
};
