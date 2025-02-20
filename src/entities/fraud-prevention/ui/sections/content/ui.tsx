'use client';

import { FC } from 'react';
import { FRAUD_PREVENTION_CONTENT, MoreCardSectionFraud } from '@entities';
import { Editor, type TArticleData } from '@ui';

export const FraudPreventionContent: FC<{ data?: TArticleData }> = ({
  data,
}) => {
  return (
    <section className="bg-white">
      <div className="container">
        {data?.description ? <Editor value={data.description} /> : null}
        <div className="py-16">
          <h2 className="text-3xl font-bold">
            {FRAUD_PREVENTION_CONTENT.relatedArticles}
          </h2>
          <MoreCardSectionFraud data={data} />
        </div>
      </div>
    </section>
  );
};
