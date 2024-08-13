export const CardsAgricultural = ({ title }: { title: string }) => {
  return (
    <div className="px-5 sm:px-10 lg:px-5 xl:px-20">
      <div className="bg-gray-100 lg:w-[250px] p-5 sm:p-10 border border-[#E5E7EB] rounded-xl">
        <p className="text-center text-sm sm:text-base lg:text-lg">{title}</p>
      </div>
    </div>
  );
};
