import {
  ActivitySociology,
  HeroSociology,
  Navbar,
  ReviewSociology,
} from '@entities';
import { Footer } from '@widgets';

const SociologyPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="container">
        <HeroSociology />
        <ReviewSociology />
        <ActivitySociology />
      </div>
      <Footer />
    </div>
  );
};
export default SociologyPage;
