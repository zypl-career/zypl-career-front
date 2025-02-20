import { TQueryParams } from '@types';
import { HTMLAttributes, ReactNode } from 'react';

export type TArticleData = {
  id: string;
  title: string;
  image: string;
  description: string;
  minutesRead: number;
  generalInfoFile: string;
  generalInfo: string;
  hashtags: string[];
  createdAt: Date | number | string;
  updatedAt: Date | number | string;
};

export type TArticleSection =
  | 'Partners'
  | 'Universities and Colleges'
  | 'Professions'
  | 'Industries'
  | 'Educational Centers'
  | 'Courses'
  | 'Career Articles'
  | 'Resources for Job Seekers'
  | 'User Guide Videos'
  | 'Articles for Parents'
  | 'Articles for Teachers and Practitioners'
  | 'Articles for Homepage';

export type TArticleType = 'student' | 'teacher' | 'parent' | 'admin';

export type TArticleDataRequest = Omit<
  Partial<
    TArticleData &
      TQueryParams & {
        type?: TArticleType;
        sections?: TArticleSection[];
      }
  >,
  'createAt' | 'updateAt'
>;

export type Props = {
  backgroundColor: string;
  name: string;
  url: string;
  caption: string;
};

export type Description = {
  id: string;
  type: string;
  props: Props;
  children: any[];
};

export type ResourcesSeekerFiles = Partial<
  Omit<TArticleData, 'description'> & {
    description?: Description[] | undefined;
  }
>;

export type ArticleProps<T> = Omit<HTMLAttributes<HTMLElement>, 'children'> & {
  children:
    | ((data?: T, isLoading?: boolean) => ReactNode | JSX.Element)
    | ReactNode;
  withoutTags?: boolean;
  params?: TArticleDataRequest;
  once?: boolean;
  fallback?: ReactNode;
  fallbackClassName?: string;
  repeatFallback?: number;
};
