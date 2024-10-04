export const SociologyCard = ({
  title,
  description,
}: {
  title: string;
  description: string | number;
}) => {
  return (
    <div className="mb-4 border-b py-2">
      <p className="text-gray-500">{title}</p>
      {description ? <p className="text-black font-bold">{description}</p> : '–'}
    </div>
  );
};
