/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, SVGProps } from 'react';

const LeftArrowIcon: FC<SVGProps<SVGSVGElement>> = ({ stroke, ...props }) => {
  return (
    <svg
      width="14"
      height="12"
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 6C14 6.41421 13.6642 6.75 13.25 6.75L2.61208 6.75L6.76983 10.7094C7.06841 10.9965 7.07772 11.4713 6.79062 11.7698C6.50353 12.0684 6.02875 12.0777 5.73017 11.7906L0.230168 6.54062C0.0831096 6.39922 -2.71186e-07 6.20401 -2.62268e-07 6C-2.53351e-07 5.79599 0.0831096 5.60078 0.230168 5.45938L5.73017 0.209376C6.02875 -0.0777193 6.50353 -0.0684098 6.79062 0.230169C7.07772 0.528748 7.06841 1.00353 6.76983 1.29063L2.61208 5.25L13.25 5.25C13.6642 5.25 14 5.58579 14 6Z"
        fill="#374151"
      />
    </svg>
  );
};

export default LeftArrowIcon;
