'use client';

import { useState } from 'react';
import { CardFuture } from '@/entities';

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tests');

  return (
    <div>
      <div className="bg-white flex items-center space-x-2 p-2 w-full lg:w-[400px] rounded-lg shadow cursor-pointer">
        <div
          className={`flex-1 py-2 text-center ${
            activeTab === 'tests'
              ? 'border-b-4 border-purple-500 text-black'
              : 'text-gray-400'
          }`}
          onClick={() => setActiveTab('tests')}
        >
          Тесты
        </div>
        <div className=" h-12 text-white border-r">d</div>
        <div
          className={`flex-1 py-2 text-center ${
            activeTab === 'results'
              ? 'border-b-4 border-purple-500 text-black'
              : 'text-gray-400'
          }`}
          onClick={() => setActiveTab('results')}
        >
          Результаты
        </div>
      </div>
      <div className="mt-8 p-4 bg-white shadow w-full lg:w-[580px] rounded-xl">
        {activeTab === 'tests' && <CardFuture />}
        {activeTab === 'results' && (
          <div>
            <h2 className="text-xl font-bold mb-2">Таб 2</h2>
            <p>Здесь содержимое для таба "Результаты".</p>
          </div>
        )}
      </div>
    </div>
  );
};
