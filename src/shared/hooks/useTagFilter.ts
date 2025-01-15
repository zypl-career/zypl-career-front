import { useCallback, useState } from 'react';

export type TTagFilterParams<T> = {
  once?: T;
};

export type TTagFilterReturn<T> = {
  activeTag: T extends true ? string : string[];
  toggleTagHandler: (tag: string) => void;
};

export const useTagFilter = <T extends boolean = false>(
  params?: TTagFilterParams<T>,
): TTagFilterReturn<T> => {
  type TActiveTag = T extends true ? string : string[];

  const [activeTag, setActiveTag] = useState<TActiveTag>(
    (params?.once ? '' : []) as TActiveTag,
  );

  const toggleTagHandler = useCallback((tag: string) => {
    if (params?.once) {
      setActiveTag(prev => (prev === tag ? '' : tag) as TActiveTag);
    } else {
      setActiveTag((prev) => {
        const arrayOfTags = (prev as unknown) as string[];
        return (arrayOfTags.includes(tag)
          ? arrayOfTags.filter((item) => item !== tag)
          : [...arrayOfTags, tag]) as TActiveTag;
      });
    }
  }, [params?.once]);

  return { activeTag, toggleTagHandler };
};
