import { CardsPartners, Navbar, PartnersHero } from '@/entities';
import { Footer } from '@/widgets';

const PartnersPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <PartnersHero />
      <CardsPartners />
      <Footer />
    </div>
  );
};

export default PartnersPage;
