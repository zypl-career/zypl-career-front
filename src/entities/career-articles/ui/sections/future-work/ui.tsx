'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { getDMY } from '@utils';
import { BlurImage, Button, useArticles } from '@ui';

export const FutureWork = () => {
  const router = useRouter();
  const t = useTranslations('futureWork');
  const articleApi = useArticles();
  const lastArticle = articleApi.data?.data[articleApi.data?.data.length - 1];

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
