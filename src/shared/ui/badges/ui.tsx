import { TBadgeProps } from '.';

export const Badge: React.FC<TBadgeProps> = ({ title }) => {
  return (
    <div className="bg-gray-100 rounded-3xl px-4 py-2 cursor-pointer transform transition-transform duration-300 ease-in-out active:scale-75 active:bg-gray-200 active:shadow-lg">
      <p className="text-gray-700">{title}</p>
    </div>
  );
};
