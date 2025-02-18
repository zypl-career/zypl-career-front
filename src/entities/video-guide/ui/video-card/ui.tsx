'use client';

import { Spinner, VideoCard } from '@ui';
import { useGetVideoGuide } from '../../services';

export const VideoCardSection = () => {
  const { data, isLoading } = useGetVideoGuide();
  return (
    <div className="px-5">
      {isLoading ? <Spinner /> : data?.map((card, index) => (
        <VideoCard
          key={index}
          title={card.title}
          generalInfo={card.generalInfoFile}
          description={card.description}
          imageSrc={card.image}
        />
      ))}
    </div>
  );
};
