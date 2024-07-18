import {CareerProfileHero, Navbar, Tabs} from '@/entities';
import { Footer } from '@/widgets';

const CareerProfilePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <CareerProfileHero />
      <Tabs />
      <Footer />
    </div>
  );
};
export default CareerProfilePage;
