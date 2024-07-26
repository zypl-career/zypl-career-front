import {
  ActivitySociology,
  HeroSociology,
  Navbar,
  ReviewSociology,
  SociologyCards,
} from '@/entities';
import { Footer } from '@/widgets';

const SociologyPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSociology />
      <SociologyCards />
      <ReviewSociology />
      <ActivitySociology />
      <Footer />
    </div>
  );
};
export default SociologyPage;
