import {HeroEducational, Navbar, UniversitySection} from '@/entities';
import { Footer } from '@/widgets';

const EnergyPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <HeroEducational />
        <UniversitySection />
      <Footer />
    </div>
  );
};
export default EnergyPage;
