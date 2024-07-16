'use client';

import { useState } from 'react';
import { BADGES_DATA, CardSection, TABS_DATA } from '@/entities';
import { Badge } from '@/shared';

export const TabsCourses = () => {
  const [activeTab, setActiveTab] = useState(TABS_DATA[0].id);

  return (
    <div>
      <div className="flex border-b border-gray-200">
        {TABS_DATA.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 px-2 text-gray-700 ${activeTab === tab.id ? 'border-b-2 border-purple-500 text-gray-900 font-bold' : ''}`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="py-4 bg-white">
        {activeTab === 1 && (
          <div>
            {BADGES_DATA.map((badge) => (
              <Badge key={badge.id} title={badge.title} />
            ))}
            <CardSection />
          </div>
        )}
        {activeTab === 2 && (
          <div> Здесь будет контенд для раздела "Библиотека курсов"</div>
        )}
      </div>
    </div>
  );
};
