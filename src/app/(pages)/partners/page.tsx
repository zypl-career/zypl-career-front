import {CardsSection,  Navbar} from '@/entities';
import { Footer } from '@/widgets';
import {PartnersHero} from "@/entities/partners/ui/sections/hero";

const PartnersPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
        <PartnersHero />
      <CardsSection />
      <Footer />
    </div>
  );
};

export default PartnersPage;
