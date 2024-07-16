'use client';

import { useState } from 'react';
import { TABS_DATA } from '@/entities';
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
            <Badge title="Все" />
            <Badge title="ИКТ" />
            <Badge title="Энергетика" />
            <Badge title="Механика" />
            <Badge title="Физика" />
            <Badge title="Сохтмон" />
            <Badge title="Агро" />
            <Badge title="Экология" />
            <Badge title="Гео" />
            <Badge title="Истехсолот" />
            <Badge title="Авиа" />
            <Badge title="Механика" />
            <Badge title="Математика" />
            <Badge title="Кимиё" />
          </div>
        )}
        {activeTab === 2 && <div>Content for Библиотека курсов</div>}
      </div>
    </div>
  );
};
