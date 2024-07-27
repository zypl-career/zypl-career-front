import { Navbar, ResourcesTeachers, TeachersHero, YourPupil } from '@/entities';
import { Footer } from '@/widgets';

const TeachersPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <TeachersHero />
      <YourPupil />
      <ResourcesTeachers />
      <Footer />
    </div>
  );
};

export default TeachersPage;
