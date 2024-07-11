import Image from 'next/image';
import {
  CareerDecide,
  FacebookIcn,
  InstaIcon,
  TgIcon,
  VkontakteIcon,
} from '@/shared';

export const FraudPreventionsHero = () => {
  return (
    <div className="flex justify-center p-4 lg:p-0 my-5 lg:my-24">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-52">
        <div className="text-left">
          <p className="text-[#7E7E7E] mb-2">12 минут чтения</p>
          <h2 className="text-3xl font-bold lg:w-[522px] mb-4">
            Как предотвратить мошенничество в онлайн-тесте?
          </h2>
          <p className="text-gray-700 lg:w-[522px] mb-4">
            Обеспечение бесчитовой среды удаленного тестирования имеет решающее
            значение для фирм, которые ожидают надежности и действенных
            результатов. Здесь мы рассмотрим различные типы онлайн-экзаменов и
            предлагаем простые, но эффективные советы по решению этой проблемы.
          </p>
          <p className="mb-4 text-gray-400">
            Поделитесь на:
            <div className="flex items-center gap-5 cursor-pointer py-2 my-2">
              <VkontakteIcon />
              <TgIcon />
              <InstaIcon />
              <FacebookIcn />
            </div>
          </p>
        </div>
        <Image
          src={CareerDecide}
          alt="career-decide"
          width={700}
          height={700}
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};
