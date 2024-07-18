import { Footer } from '@/widgets';
import { CareerProfileHero, Navbar } from '@/entities';

const CareerProfilePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <CareerProfileHero />
      <Footer />
    </div>
  );
};
export default CareerProfilePage;
