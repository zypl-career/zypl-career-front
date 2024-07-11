import { Badge } from '@/shared';
import { BADGE_TITLES } from '@/entities';

export const BadgeSection = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {BADGE_TITLES.map((title, index) => (
        <Badge key={index} title={title} />
      ))}
    </div>
  );
};
