export const SociologyCard = ({
  title,
  description,
}: {
  title: string;
  description: string | number;
}) => {
  return (
    <div className="border-b last:border-none py-4">
      <p className="text-gray-500">{title}</p>
      {description ? (
        <p className="text-black font-bold">{description}</p>
      ) : (
        '–'
      )}
    </div>
  );
};
