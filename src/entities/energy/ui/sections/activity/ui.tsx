import { ActivityCard, data } from '@/entities';

export const Activity = () => {
  return (
    <div className="lg:px-24">
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-md lg:w-[400px]">
        <div className="">
          {data.map((item, index) => (
            <ActivityCard
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
