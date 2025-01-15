'use client';

import { FC } from 'react';
import { UseQueryResult } from '@tanstack/react-query';
import { PillSkeleton, Badge } from '@ui';
import { cn } from '@utils';

type TagsFilterWithDataProp = {
  api?: never;
  data: string[];
};

type TagsFilterWithApiProp = {
  api: UseQueryResult<string[], Error>;
  data?: never;
};

export type TagsFilterProps = (
  | TagsFilterWithApiProp
  | TagsFilterWithDataProp
) & {
  selectedTag: string | string[];
  onSelectTag: (tag: string) => void;
};

export const TagsFilter: FC<TagsFilterProps> = ({
  data,
  api,
  selectedTag,
  onSelectTag,
}) => {
  if (api) {
    return api.isLoading ? (
      <PillSkeleton />
    ) : (
      api.data?.map((tag) => (
        <Badge
          key={tag}
          title={tag}
          className={cn({
            'bg-[#9746B3] text-white': selectedTag.includes(tag),
          })}
          onClick={() => onSelectTag(tag)}
        />
      ))
    );
  }

  return data?.map((tag) => (
    <Badge
      key={tag}
      title={tag}
      className={cn({
        'bg-[#9746B3] text-white': selectedTag.includes(tag),
      })}
      onClick={() => onSelectTag(tag)}
    />
  ));
};
