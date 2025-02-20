import {
  Navbar,
  ParentsHero,
  ResourcesParents,
} from '@entities';
import { Footer } from '@widgets';

const PartnersPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <ParentsHero />
      {/* <YourChildren /> */}
      <ResourcesParents />
      <Footer />
    </div>
  );
};

export default PartnersPage;
