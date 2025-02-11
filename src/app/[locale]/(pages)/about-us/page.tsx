import { AboutUsHero, Navbar, OurMissions } from '@entities';
import { Footer } from '@widgets';
// import {  } from '@/entities/about-us/ui/sections/our-missions/ui';

const AboutUsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen overflow-x-hidden">
      <Navbar />
      <AboutUsHero />
      <OurMissions />
      <Footer />
    </div>
  );
};
export default AboutUsPage;
