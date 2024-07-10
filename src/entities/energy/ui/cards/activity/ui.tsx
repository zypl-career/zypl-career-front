export const ActivityCard = ({ title, description }) => {
  return (
    <div className="mb-4 border-b py-2">
      <p className="text-gray-500">{title}</p>
      <p className="text-black font-bold">{description}</p>
    </div>
  );
};
