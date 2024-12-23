import { InterestsHead, Navbar } from '@/entities';
import { Footer } from '@/widgets';

const InterestsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen theme:bg-primaryBg theme:text-primary">
      <Navbar />
      <div className="container">
        <InterestsHead />
      </div>
      <Footer />
    </div>
  );
};

export default InterestsPage;
