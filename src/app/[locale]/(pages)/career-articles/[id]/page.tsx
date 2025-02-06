'use client';

import {
  FraudPreventionContent,
  FraudPreventionsHero,
  Navbar,
} from '@entities';
import { PageParams } from '@types';
import { Footer } from '@widgets';
import { useArticleId } from '@ui';


// async function getPostData(slug: string) {
//   const res = await fetch(`https://api.kasbiman.pro/${slug}`, {
//     // e.g. revalidate after 60s
//     next: { revalidate: 60 },
//   });
//   return res.json();
// }

// export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
//   const t = await getTranslations({ locale, namespace: 'HomePage' });

//   return {
//     title: `Zypl.career | ${t('title')}`,
//     description: t('about'),
//   };
// }


const ArticleIdPage = ({ params }: PageParams) => {
  const { data, isLoading } = useArticleId(params.id);
  return (
    <div className="bg-gray-100 min-h-screen overflow-x-hidden">
      <Navbar />
      <FraudPreventionsHero data={data} isLoading={isLoading} />
      <FraudPreventionContent data={data} />
      <Footer />
    </div>
  );
};
export default ArticleIdPage;
