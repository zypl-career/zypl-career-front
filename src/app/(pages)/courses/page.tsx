import { CoursesHero, Navbar } from '@/entities';
import { Footer } from '@/widgets';

const CoursesPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen overflow-x-hidden">
      <Navbar />
      <CoursesHero />
      <Footer />
    </div>
  );
};
export default CoursesPage;
