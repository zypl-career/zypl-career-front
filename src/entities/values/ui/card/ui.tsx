import { cardData } from '@/entities';

export const CardValue = () => {
  return (
    <div className="bg-white rounded-lg border p-4 px-10 w-96">
      <div className="flex flex-col space-y-4">
        {cardData.map((item) => (
          <div key={item.id}>
            <div className="flex items-center space-x-2 py-3">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${item.borderColor} ${item.textColor}`}
              >
                {item.id}
              </div>
              <div className={`${item.textColor} font-semibold`}>
                {item.title}
              </div>
            </div>
            <hr className="border-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
};
