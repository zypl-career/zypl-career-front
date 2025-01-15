import { TQueryParams } from '@types';

export type TEducationCenterData = {
  id: string;
  image: string;
  title: string;
  generalInfoFile: string;
  city: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
};

export type TEducationCenterParams = Partial<
  TEducationCenterData & TQueryParams
>;
