import { WarningIcon } from '@/shared';

export const Warn = () => {
  return (
    <div className="bg-[#FDF4D3] rounded-2xl p-4 flex flex-items md:flex-row items-start md:items-center gap-4 md:gap-6 lg:w-[950px]  ">
      <WarningIcon className="flex-shrink-0" />
      <p className=" lg:leading-8 text-sm md:text-base lg:text-lg">
        Никто еще не исследовал дистанционные тесты для бизнеса по этому
        вопросу. Однако мы можем предположить, что результаты будут похожи:
        <span className="font-bold">
          {' '}
          онлайн-оценки НЕ более склонны к неэтичному поведению.
        </span>
      </p>
    </div>
  );
};
