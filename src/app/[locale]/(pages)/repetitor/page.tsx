import { Navbar, RepetitorContent, RepetitorHero } from '@/entities';
import { Footer } from '@/widgets';

const RepetitorPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <RepetitorHero />
      <RepetitorContent />
      <Footer />
    </div>
  );
};

export default RepetitorPage;
