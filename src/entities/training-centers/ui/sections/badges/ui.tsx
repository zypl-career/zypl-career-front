import { Badge } from '@/shared';
import { CITY_TITLES } from './constants';

export const BadgesSection = () => {
  return (
    <div className="px-5 md:mx-20 py-8">
      {CITY_TITLES.map((title, index) => (
        <Badge key={index} variant="white" title={title} />
      ))}
    </div>
  );
};
