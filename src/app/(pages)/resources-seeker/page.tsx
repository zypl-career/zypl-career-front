import { FileSave, Navbar, ResourcesSeekersHero } from '@/entities';
import { Footer } from '@/widgets';

const ResourcesSeekerPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <ResourcesSeekersHero />
      <FileSave />
      <Footer />
    </div>
  );
};

export default ResourcesSeekerPage;
