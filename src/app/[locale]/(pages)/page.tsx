import {
  CareerTips,
  FollowFuture,
  Hero,
  Navbar,
  Partners,
  partnersData,
  ToolsInspirationUI,
} from '@/entities';
import { Footer } from '@/widgets';

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <ToolsInspirationUI />
      <CareerTips />
      <FollowFuture />
      <Partners data={partnersData} />
      <Footer />
    </div>
  );
};

export default HomePage;
