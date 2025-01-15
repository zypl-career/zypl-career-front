import { CardSectionIndustries, IndustriesHero, Navbar } from '@entities';
import { Footer } from '@widgets';

const IndustriesPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <IndustriesHero />
      <CardSectionIndustries />
      <Footer />
    </div>
  );
};
export default IndustriesPage;
