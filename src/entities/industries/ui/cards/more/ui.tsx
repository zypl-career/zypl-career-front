import { FC } from 'react';
import { Button } from '@/shared';
import { TMoreCardProps } from '@/entities';

export const MoreCardIndustries: FC<TMoreCardProps> = ({
  imageSrc: ImageComponent,
  imageAlt,
  imageHeight,
  imageWidth,
  title,
  date,
  buttonText,
}) => {
  return (
    <div className="md:w-[413px] bg-white border border-gray-100 rounded-md">
      <ImageComponent alt={imageAlt} />
      <div className="md:px-5 px-2">
        <p className="font-bold md:text-xl pt-5">{title}</p>
        <div className="flex items-center justify-between pt-10 pb-4">
          <p className="text-gray-600 text-sm">{date}</p>
          <Button variant="outlineCard">{buttonText}</Button>
        </div>
      </div>
    </div>
  );
};
