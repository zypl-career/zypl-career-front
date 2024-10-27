import {
  HeroEducational,
  Navbar,
  NextSections,
  UniversitySection,
} from '@/entities';
import { Footer } from '@/widgets';

const EnergyPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroEducational />
      <UniversitySection />
      <NextSections />
      <Footer />
    </div>
  );
};
export default EnergyPage;
