import { VideoCard } from '@/shared';
import { VIDEO_CARDS_DATA } from '.';

export const VideoCardSection = () => {
  return (
    <div className="px-5">
      {VIDEO_CARDS_DATA.map((card, index) => (
        <VideoCard
          key={index}
          title={card.title}
          description={card.description}
          imageSrc={card.imageSrc}
        />
      ))}
    </div>
  );
};
