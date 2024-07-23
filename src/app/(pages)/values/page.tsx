import { Navbar } from '@/entities';
import { Footer } from '@/widgets';
import { CareerValues } from '@/entities/values';

const VideoGuidePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <CareerValues />
      <Footer />
    </div>
  );
};

export default VideoGuidePage;
