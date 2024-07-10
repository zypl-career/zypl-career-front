import { CardsSection, HeroPartners, Navbar } from '@/entities';
import { Footer } from '@/widgets';

const ProfessionsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <HeroPartners />
      <CardsSection />
      <Footer />
    </div>
  );
};

export default ProfessionsPage;
