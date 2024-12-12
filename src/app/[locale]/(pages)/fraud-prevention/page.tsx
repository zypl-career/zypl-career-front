import { FraudPreventionContent, Navbar } from '@entities';
import { Footer } from '@/widgets';

const FraudPreventionPage = () => {
  // const { data } = useArticleId();
  return (
    <div className="bg-gray-100 min-h-screen overflow-x-hidden">
      <Navbar />
      {/* <FraudPreventionsHero /> */}
      <FraudPreventionContent />
      <Footer />
    </div>
  );
};
export default FraudPreventionPage;
