'use client';

import {
  CareerTips,
  FollowFuture,
  Hero,
  Navbar,
  Partners,
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
      <Partners />
      <Footer />
    </div>
  );
};

export default HomePage;
