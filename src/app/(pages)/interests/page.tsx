import { InterestsHead, Navbar } from '@/entities';
import { Footer } from '@/widgets';

const InterestsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <InterestsHead />
      <Footer />
    </div>
  );
};

export default InterestsPage;
