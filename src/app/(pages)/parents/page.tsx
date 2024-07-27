import { Navbar, ParentsHero } from '@/entities';
import { Footer } from '@/widgets';
import { YourChildren } from '@/entities/parents/ui/your-children/ui';
import { ResourcesParents } from '@/entities/parents/ui/resources';

const PartnersPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <ParentsHero />
      <YourChildren />
      <ResourcesParents />
      <Footer />
    </div>
  );
};

export default PartnersPage;
