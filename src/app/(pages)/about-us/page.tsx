import { AboutUsHero, Navbar } from '@/entities';
import { Footer } from '@/widgets';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AboutUsHero />
      <Footer />
    </div>
  );
};
export default AboutUsPage;
