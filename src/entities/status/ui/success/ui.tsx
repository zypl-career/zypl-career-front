import { FC } from 'react';
import { Button } from '@/shared';
import { TStatusProps } from '@/entities';

export const StatusCard: FC<TStatusProps> = ({ Icon, title, message }) => {
  return (
    <div className="py-5 bg-white w-[300px] md:w-[360px] rounded-md">
      <div className="flex justify-center">
        {Icon}
      </div>
      <div className="md:w-[352px] text-center">
        <p className="font-bold text-2xl py-2">{title}</p>
        <p className="mb-8 px-2 md:text-[16px]">{message}</p>
        <div className="mt-4 flex justify-center px-5">
          <Button variant="status" showRightArrowIcon={true}>
            На главную
          </Button>
        </div>
      </div>
    </div>
  );
};
