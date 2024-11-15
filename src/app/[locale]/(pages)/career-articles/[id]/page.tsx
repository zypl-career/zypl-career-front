'use client';

import {
  FraudPreventionContent,
  FraudPreventionsHero,
  Navbar,
  useArticleId,
} from '@entities';
import { PageParams } from '@types';
import { Footer } from '@/widgets';

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
