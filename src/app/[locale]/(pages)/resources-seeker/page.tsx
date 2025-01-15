import {
  FileSave,
  Navbar,
  ResourcesSeekersArticle,
  ResourcesSeekersHero,
} from '@entities';
import { Footer } from '@widgets';

const ResourcesSeekerPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <ResourcesSeekersHero />
      <div className="container">
        <FileSave />
        <FileSave />
      </div>
      <ResourcesSeekersArticle />
      <Footer />
    </div>
  );
};

export default ResourcesSeekerPage;
