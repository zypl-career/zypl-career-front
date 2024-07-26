import { FC } from 'react';
import { dataSociology, SociologyCard } from '@/entities/sociology';

export const ActivitySociology: FC = () => {
  return (
    <div className="lg:px-24">
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-md lg:w-[400px]">
        <div className="">
          {dataSociology.map((item, index) => (
            <SociologyCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
