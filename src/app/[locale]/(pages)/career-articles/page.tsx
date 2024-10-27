import {
  FutureWork,
  HeroCareerArticles,
  MoreCardSection,
  Navbar,
} from '@/entities';
import { Footer } from '@/widgets';

const CareerArticlesPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroCareerArticles />
      <FutureWork />
      <MoreCardSection />
      <Footer />
    </div>
  );
};
export default CareerArticlesPage;
