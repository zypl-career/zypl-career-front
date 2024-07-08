'use client';

import { Hero, Navbar, toolsData, ToolsInspiration } from '@/entities';

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-3">
        {toolsData.map((tool, index) => (
          <ToolsInspiration
            key={index}
            Icons={tool.Icons}
            title={tool.title}
            description={tool.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
