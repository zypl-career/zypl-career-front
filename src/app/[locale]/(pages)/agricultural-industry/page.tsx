import { Footer } from '@/widgets';
import { AgriculturalIndustryHero, BasicIndustry, Navbar } from '@/entities';

const AgriculturalIndustryPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AgriculturalIndustryHero />
      <BasicIndustry />
      <Footer />
    </div>
  );
};
export default AgriculturalIndustryPage;
