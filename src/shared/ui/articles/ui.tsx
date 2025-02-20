'use client';

import { useTagFilter } from '@hooks';
import { CardLoader, TagsFilter } from '@ui';
import { cn } from '@utils';
import { useArticles, useArticleTags } from './services';
import type { ArticleProps, TArticleData } from './types';

export const Articles = <T extends TArticleData[]>({
  children,
  fallback,
  repeatFallback = 9,
  once = false,
  withoutTags = false,
  params,
  fallbackClassName,
  ...props
}: ArticleProps<T>): JSX.Element => {
  const { activeTag, toggleTagHandler } = useTagFilter({ once });
  const { data, isLoading } = useArticles({
    ...params,
    hashtags: Array.isArray(activeTag) ? activeTag : [activeTag],
  });
  const tagsApi = useArticleTags();

  return (
    <section {...props}>
      {withoutTags ? null : (
        <header
          className={cn(
            'py-5 flex items-center flex-wrap gap-2',
            fallbackClassName,
          )}
        >
          <TagsFilter
            api={tagsApi}
            selectedTag={activeTag}
            onSelectTag={toggleTagHandler}
          />
        </header>
      )}
      {isLoading
        ? fallback ?? (
            <div
              className={cn(
                'grid grid-rows-1 gap-10 lg:grid-cols-3 md:grid-cols-2',
                fallbackClassName,
              )}
            >
              <CardLoader repeat={repeatFallback} />
            </div>
          )
        : typeof children === 'function'
          ? children(data?.data as T, isLoading)
          : children}
    </section>
  );
};
