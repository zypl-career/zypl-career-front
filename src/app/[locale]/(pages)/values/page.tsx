import { CareerValues, Navbar } from '@/entities';
import { Footer } from '@/widgets';

const VideoGuidePage = () => {
  return (
    <div className="min-h-screen theme:bg-primaryBg theme:text-primary">
      <Navbar />
      <div className="container">
        <CareerValues />
      </div>
      <Footer />
    </div>
  );
};

export default VideoGuidePage;
