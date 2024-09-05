import {
  FileSave,
  MoreCardSection,
  Navbar,
  ResourcesSeekersHero,
} from '@/entities';
import { Footer } from '@/widgets';

const ResourcesSeekerPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <ResourcesSeekersHero />
      <div className="container">
        <FileSave />
        <FileSave />
      </div>
      <MoreCardSection />
      <Footer />
    </div>
  );
};

export default ResourcesSeekerPage;
