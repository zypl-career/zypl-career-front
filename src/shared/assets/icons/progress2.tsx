/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, SVGProps } from 'react';

const ProgressIcon: FC<SVGProps<SVGSVGElement>> = ({ stroke, ...props }) => {
  return (
    <svg
      width="869"
      height="6"
      viewBox="0 0 869 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="869" height="6" rx="3" fill="#E5E7EB" />
      <rect width="85.2907" height="6" rx="3" fill="#9746B3" />
    </svg>
  );
};

export default ProgressIcon;
