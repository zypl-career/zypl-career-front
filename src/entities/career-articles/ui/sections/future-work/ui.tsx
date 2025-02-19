'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { getDMY, removeEmpty } from '@utils';
import {
  BlurImage,
  Button,
  Description,
  ResourcesSeekerFiles,
  useArticles,
} from '@ui';

export const FutureWork = () => {
  const router = useRouter();
  const t = useTranslations('futureWork');
  const articleApi = useArticles();
  const description: ResourcesSeekerFiles[] = removeEmpty(
    articleApi.data?.data?.map((item) => {
      const parsedDescription = JSON.parse(item.description) as Description[];
      const descriptionItem = parsedDescription.find(
        (desc) => desc.type !== 'file',
      );
      return descriptionItem ? { ...item, description: parsedDescription } : {};
    }),
  ) as ResourcesSeekerFiles[];
  const lastArticle = description?.[description?.length - 1];

  return (
    <div className="flex flex-col md:flex-row items-center px-6 md:px-24 py-5 lg:py-24">
      <BlurImage
        src={lastArticle?.image ?? ''}
        alt="future-work"
        width={400}
        height={400}
        className="mb-4 md:mb-0 md:mr-4"
      />
      {!articleApi.isLoading ? (
        <div className="text-left">
          <p className="text-sm text-gray-500">
            {getDMY(lastArticle?.createdAt)}
          </p>
          <h2 className="text-2xl font-bold mt-2 pb-4">{lastArticle?.title}</h2>
          <div className="py-5">
            <Button
              variant="subscribe"
              showRightArrowIcon
              size="subscribe"
              onClick={() => router.push(`/career-articles/${lastArticle?.id}`)}
            >
              {t('buttonText')}
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
