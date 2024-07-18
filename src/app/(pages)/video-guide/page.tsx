import { Navbar, VideoGuideHero } from '@/entities';
import { Footer } from '@/widgets';
import { VideoCardUI } from '@/features';

const VideoGuidePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <VideoGuideHero />
      <VideoCardUI />
      <Footer />
    </div>
  );
};

export default VideoGuidePage;
