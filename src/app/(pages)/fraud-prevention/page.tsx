import { FraudPreventionsHero, Navbar } from '@/entities';
import { Footer } from '@/widgets';

const FraudPreventionPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <FraudPreventionsHero />
      <Footer />
    </div>
  );
};
export default FraudPreventionPage;
