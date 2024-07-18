import { Navbar, VideoGuideHero } from '@/entities';
import { Footer } from '@/widgets';

const VideoGuidePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <VideoGuideHero />
      <Footer />
    </div>
  );
};

export default VideoGuidePage;
