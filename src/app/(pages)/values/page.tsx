import { CareerValues, Navbar } from '@/entities';
import { Footer } from '@/widgets';

const VideoGuidePage = () => {
  return (
    <div className=" bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container">
        <CareerValues />
      </div>
      <Footer />
    </div>
  );
};

export default VideoGuidePage;
