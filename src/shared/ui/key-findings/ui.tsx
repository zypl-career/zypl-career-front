export const KeyFindingsUI = ({ title, description, subtitle }) => {
  return (
    <div className="bg-[#F2F5F8] rounded-xl p-10">
      <h3 className="py-2 text-xl font-bold">{title}</h3>
      <p className="font-bold">{subtitle}</p>
      <p className="leading-9">{description}</p>
    </div>
  );
};
