import { EnergyCards, HeroEnergy, Navbar, Review } from '@/entities';
import { Footer } from '@/widgets';

const EnergyPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <HeroEnergy />
      <EnergyCards />
      <Review />
      <Footer />
    </div>
  );
};
export default EnergyPage;
