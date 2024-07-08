'use client';

import {
  CareerTips,
  FollowFuture,
  Hero,
  Navbar,
  Partners,
  ToolsInspirationUI,
} from '@/entities';

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <ToolsInspirationUI />
      <CareerTips />
      <FollowFuture />
      <Partners />
    </div>
  );
};

export default HomePage;
