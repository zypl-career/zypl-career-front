import { HeroCareerArticles, Navbar } from '@/entities';
import { Footer } from '@/widgets';

const CareerArticlesPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <HeroCareerArticles />
      <Footer />
    </div>
  );
};
export default CareerArticlesPage;
