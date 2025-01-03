import { ContentModernSpecial, ModernSpecialHero, Navbar } from '@/entities';
import { Footer } from '@/widgets';

const ModernSpecialPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <ModernSpecialHero />
      <ContentModernSpecial />
      <Footer />
    </div>
  );
};

export default ModernSpecialPage;
