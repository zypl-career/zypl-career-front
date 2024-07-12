import {
  GeneralInfoContent,
  GeneralInfoHero,
  GeneralInfoSection,
  Navbar,
} from '@/entities';
import { Footer } from '@/widgets';

const GeneralInfoPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <GeneralInfoHero />
      <GeneralInfoSection />
      <GeneralInfoContent />
      <Footer />
    </div>
  );
};

export default GeneralInfoPage;
