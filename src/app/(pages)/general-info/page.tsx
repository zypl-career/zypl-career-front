import { GeneralInfoHero, GeneralInfoSection, Navbar } from '@/entities';
import { Footer } from '@/widgets';

const GeneralInfoPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen overflow-x-hidden">
      <Navbar />
      <GeneralInfoHero />
      <GeneralInfoSection />
      <Footer />
    </div>
  );
};

export default GeneralInfoPage;
