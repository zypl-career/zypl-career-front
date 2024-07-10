import { TBadgeProps } from '.';

export const Badge: React.FC<TBadgeProps> = ({ title }) => {
  return (
    <div className="bg-gray-100 rounded-3xl inline-block mx-1 my-1 px-4 py-2">
      <p className="text-gray-700">{title}</p>
    </div>
  );
};
