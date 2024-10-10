/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, SVGProps } from 'react';

const YoutubeIcon: FC<SVGProps<SVGSVGElement>> = ({ stroke, ...props }) => {
  return (
    <svg
      width="24"
      height="16"
      viewBox="0 0 24 16"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4058_36875)">
        <mask
          id="mask0_4058_36875"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="16"
        >
          <path
            d="M21.7143 0H2.28571C1.02335 0 0 0.955126 0 2.13333V13.8667C0 15.0449 1.02335 16 2.28571 16H21.7143C22.9767 16 24 15.0449 24 13.8667V2.13333C24 0.955126 22.9767 0 21.7143 0Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_4058_36875)">
          <path
            d="M21.7143 0H2.28571C1.02335 0 0 0.955126 0 2.13333V13.8667C0 15.0449 1.02335 16 2.28571 16H21.7143C22.9767 16 24 15.0449 24 13.8667V2.13333C24 0.955126 22.9767 0 21.7143 0Z"
            fill="#0034A9"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 10.6667H24V16H0V10.6667Z"
            fill="#D7280F"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0H24V5.33333H0V0Z"
            fill="white"
          />
          <path
            d="M21.7132 0.533325H2.2846C1.33782 0.533325 0.570312 1.24967 0.570312 2.13333V13.8667C0.570312 14.7503 1.33782 15.4667 2.2846 15.4667H21.7132C22.6599 15.4667 23.4275 14.7503 23.4275 13.8667V2.13333C23.4275 1.24967 22.6599 0.533325 21.7132 0.533325Z"
            stroke="black"
            strokeOpacity="0.1"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_4058_36875">
          <rect width="24" height="16" rx="3" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default YoutubeIcon;
