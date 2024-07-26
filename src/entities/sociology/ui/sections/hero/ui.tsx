import { ArrowLeft } from '@/shared';

export const HeroSociology = () => {
  return (
    <div>
      <div className="bg-gray-700 lg:mx-24 my-5 rounded-2xl">
        <div className="flex items-center lg:px-5 gap-14">
          <ArrowLeft />
          <p className="font-bold lg:text-3xl text-[#F9FAFB] py-2">
            Сотсиология
          </p>
        </div>
        <p className="text-gray-300 lg:px-24 pt-1 pb-4">
          Номи кластер: <span className="font-bold">Ҷомеашиносӣ ва ҳуқуқ</span>
        </p>
      </div>
    </div>
  );
};
