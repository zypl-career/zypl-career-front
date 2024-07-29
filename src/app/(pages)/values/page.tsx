import { CareerValues, FeedbackContent, Navbar } from '@/entities';
import { Footer } from '@/widgets';

const VideoGuidePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <CareerValues />
      <FeedbackContent />
      <Footer />
    </div>
  );
};

export default VideoGuidePage;
