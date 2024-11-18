'use client';

import {
  FRAUD_PREVENTION_CONTENT,
  MoreCardSectionFraud,
  TArticleData,
} from '@/entities';
import { FC } from 'react';

import dynamic from 'next/dynamic';

export const BlockNotes = dynamic(() => import('@/shared/ui/block-note/ui'), { ssr: false });

export const FraudPreventionContent: FC<{ data?: TArticleData }> = ({ data }) => {
  return (
    <div className="bg-white px-4 lg:px-48 pt-20">
      <BlockNotes value={data?.description} />
      {/* <div dangerouslySetInnerHTML={{ __html: data?.description || '' }} /> */}
      <div className="py-16">
        <h2 className="text-3xl font-bold">
          {FRAUD_PREVENTION_CONTENT.relatedArticles}
        </h2>
        <MoreCardSectionFraud data={data} />
      </div>
    </div>
  );
};
