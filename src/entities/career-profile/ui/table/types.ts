export type TableDataProps = {
  id: number;
  title: string;
};

export type TResultsTableProps = {
  title: string;
};

export type TProfessionsClasser = {
  id: number;
  title: string;
  classerId: number;
};

export type TSociology = {
  id: number;
  profId: number;
  title: string;
  type: string;
  class: number;
  education: string;
  educationType: string;
  educationPrice: number;
  lang: string;
  nameOfSchool: string;
  description: string;
};

export type TRelatedSociologyData = {
  sociology: TSociology[];
  id: number;
  title: string;
  classerId: number;
  classer?: TableDataProps;
};
