export const ActivityCard = ({ title, description }: { title: string, description: string }) => {
  return (
    <div className="mb-4 border-b py-2">
      <p className="text-gray-500">{title}</p>
      <p className="text-black font-bold">{description}</p>
    </div>
  );
};
