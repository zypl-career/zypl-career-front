import Image from 'next/image';
import { FC } from 'react';
import { Button } from '@ui';
import { getDMY } from '@utils';
import type { TMoreCardProps } from '.';

export const MoreCard: FC<TMoreCardProps> = ({
  imageSrc,
  imageAlt,
  imageHeight,
  imageWidth,
  title,
  date,
  buttonText,
}) => {
  return (
    <div className="my-5 bg-white border border-gray-100 rounded-md theme:bg-primaryBg theme:border-primary">
      <Image
        src={imageSrc}
        alt={imageAlt}
        height={imageHeight}
        width={imageWidth}
      />
      <div className="md:px-5 px-2">
        <p className="font-bold md:text-xl pt-5">{title}</p>
        <div className="flex items-center justify-between md:gap-20 pt-10 pb-4">
          <p className="text-gray-600 text-sm theme:text-primary">
            {getDMY(date)}
          </p>
          <Button variant="outline" rounded="full">
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};
