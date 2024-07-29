import { ContentProfessions, Navbar } from '@/entities';
import { Footer } from '@/widgets';

const ProfessionsYouPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <ContentProfessions />
      <Footer />
    </div>
  );
};

export default ProfessionsYouPage;
