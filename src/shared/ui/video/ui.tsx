import { FC } from 'react';
import { AsyncText } from '@ui';

import type { TVideoProps } from './types';

export const VideoCard: FC<TVideoProps> = ({
  title,
  description,
  generalInfo,
  imageSrc,
}) => {
  return (
    <div className="my-10 lg:mx-28">
      <h2 className="font-bold text-2xl my-2">{title}</h2>
      <div className="bg-white border shadow py-8 rounded-xl">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-3 lg:gap-20 px-4 lg:px-20">
          <p className="flex-1">
            <AsyncText file={generalInfo} />
          </p>
          {imageSrc.endsWith('.mp4') ? (
            <video
              controls
              className="w-full lg:w-96 cursor-pointer transform transition-transform duration-200 hover:scale-110"
            >
              <source src={imageSrc} type="video/mp4" />
            </video>
          ) : (
            <iframe
            className="max-w-[620px] max-h-[315px]"
              src={description}
              title="YouTube video player"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope;"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </div>
  );
};
