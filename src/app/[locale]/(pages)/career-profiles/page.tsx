import { CareerProfileHero, Navbar, TabsContent } from '@/entities';
import { Footer } from '@/widgets';

const CareerProfilePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <CareerProfileHero />
      <TabsContent />
      <Footer />
    </div>
  );
};
export default CareerProfilePage;
