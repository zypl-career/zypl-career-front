import { FutureWork, HeroCareerArticles, Navbar } from '@/entities';
import { Footer } from '@/widgets';

const CareerArticlesPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <HeroCareerArticles />
      <FutureWork />
      <Footer />
    </div>
  );
};
export default CareerArticlesPage;
