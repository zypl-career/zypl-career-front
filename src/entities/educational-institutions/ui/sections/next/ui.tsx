import { NextEducational } from '@/entities';
import { UNIVERSITY_TITLES } from '.';

export const NextSections = () => {
  return (
    <div className="lg:px-36 pb-56">
      {UNIVERSITY_TITLES.map((title, index) => (
        <NextEducational key={index} title={title} />
      ))}
    </div>
  );
};
