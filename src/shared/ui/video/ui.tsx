import { FC } from 'react';
import Image from 'next/image';

import type { TVideoProps } from './types';

export const VideoCard: FC<TVideoProps> = ({
  title,
  description,
  imageSrc,
}) => {
  return (
    <div className="my-10 lg:mx-28">
      <h2 className="font-bold text-2xl my-2">{title}</h2>
      <div className="bg-white border shadow py-8 rounded-xl">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-3 lg:gap-20 px-4 lg:px-20">
          <p>{description}</p>
          <Image src={imageSrc} alt="image" className="w-full lg:w-96 cursor-pointer transform transition-transform duration-200 hover:scale-110" />
        </div>
      </div>
    </div>
  );
};
