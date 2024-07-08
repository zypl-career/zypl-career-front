'use client';

import {
  CareerTips,
  FollowFuture,
  Hero,
  Navbar,
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
    </div>
  );
};

export default HomePage;
