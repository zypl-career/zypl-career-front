'use client';

import { Hero, Navbar, ToolsInspirationUI } from '@/entities';

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <ToolsInspirationUI />
    </div>
  );
};

export default HomePage;
