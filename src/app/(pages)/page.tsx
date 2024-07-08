'use client';

import { CareerTips, Hero, Navbar, ToolsInspirationUI } from '@/entities';

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <ToolsInspirationUI />
      <CareerTips />
    </div>
  );
};

export default HomePage;
