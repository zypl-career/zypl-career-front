'use client';

import {
  FRAUD_PREVENTION_CONTENT,
  KeyFindings,
  MoreCardSectionFraud,
  Warn,
} from '@/entities';
import Image from 'next/image';
import { Content } from '@/shared';

export const FraudPreventionContent = () => {
  return (
    <div className="bg-white px-4 lg:px-48">
      <h3 className="font-bold text-2xl pt-10 pb-4">
        {FRAUD_PREVENTION_CONTENT.heading}
      </h3>
      <p
        className="underline leading-10 text-[#2B2B2B]"
        dangerouslySetInnerHTML={{
          __html: FRAUD_PREVENTION_CONTENT.tableOfContents,
        }}
      ></p>
      <div>
        <h2 className="text-3xl font-bold lg:w-[800px] lg:pt-10 lg:pb-5">
          {FRAUD_PREVENTION_CONTENT.section1.heading}
        </h2>
        <p
          className="text-[#2B2B2B] leading-8"
          dangerouslySetInnerHTML={{
            __html: FRAUD_PREVENTION_CONTENT.section1.content,
          }}
        ></p>
        <div className="lg:py-5 py-10 lg:px-0 px-2 ">
          <Warn />
        </div>
        <div className="">
          <h2 className="text-3xl font-bold py-5">
            {FRAUD_PREVENTION_CONTENT.section2.heading}
          </h2>
          <p
            className="leading-9 text-[#2B2B2B]"
            dangerouslySetInnerHTML={{
              __html: FRAUD_PREVENTION_CONTENT.section2.content,
            }}
          ></p>
        </div>
      </div>
      <div className="py-5">
        <Image src={Content} alt="content" className="w-full lg:px-0 " />
        <div
          className="text-[#2B2B2B] leading-9"
          dangerouslySetInnerHTML={{
            __html: FRAUD_PREVENTION_CONTENT.additionalContent,
          }}
        ></div>
      </div>
      <div>
        <KeyFindings />
      </div>
      <div className="py-16">
        <h2 className="text-3xl font-bold">
          {FRAUD_PREVENTION_CONTENT.relatedArticles}
        </h2>
        <MoreCardSectionFraud />
      </div>
    </div>
  );
};
