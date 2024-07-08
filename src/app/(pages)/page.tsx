'use client';

import { Hero, Navbar, ToolsInspiration } from '@/entities';
import { CareerIcon } from '@/shared';

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <ToolsInspiration
        Icons={CareerIcon}
        title="Мой карерный путь"
        description="Мы аккумулируем большое количество онлайн-курсов по различным направлениям, позволяя сравнивать их, и выбирать то, что вам нравится"
      />
    </div>
  );
};

export default HomePage;
