import {
  FraudPreventionContent,
  FraudPreventionsHero,
  Navbar,
} from '@/entities';
import { Footer } from '@/widgets';

const FraudPreventionPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen overflow-x-hidden">
      <Navbar />
      <FraudPreventionsHero />
      <FraudPreventionContent />
      <Footer />
    </div>
  );
};
export default FraudPreventionPage;