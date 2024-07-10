import { Footer } from '@/widgets';
import { AgriculturalIndustryHero, BasicIndustry, Navbar } from '@/entities';

const AgriculturalIndustryPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <AgriculturalIndustryHero />
      <BasicIndustry />
      <Footer />
    </div>
  );
};
export default AgriculturalIndustryPage;
