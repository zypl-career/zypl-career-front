import { FC, SVGProps } from 'react';

const RussianFlag: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="24"
    height="16"
    viewBox="0 0 24 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_2290_22242)">
      <mask
        id="mask0_2290_22242"
        style={{ maskType: 'alpha' }}
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
      <g mask="url(#mask0_2290_22242)">
        <path
          d="M21.7143 0H2.28571C1.02335 0 0 0.955126 0 2.13333V13.8667C0 15.0449 1.02335 16 2.28571 16H21.7143C22.9767 16 24 15.0449 24 13.8667V2.13333C24 0.955126 22.9767 0 21.7143 0Z"
          fill="#0034A9"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 10.6667H24V16.0001H0V10.6667Z"
          fill="#D7280F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H24V5.33333H0V0Z"
          fill="white"
        />
        <path
          d="M21.7144 0.533447H2.28582C1.33905 0.533447 0.571533 1.24979 0.571533 2.13345V13.8668C0.571533 14.7504 1.33905 15.4668 2.28582 15.4668H21.7144C22.6612 15.4668 23.4287 14.7504 23.4287 13.8668V2.13345C23.4287 1.24979 22.6612 0.533447 21.7144 0.533447Z"
          stroke="black"
          strokeOpacity="0.1"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_2290_22242">
        <rect width="24" height="16" rx="3" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default RussianFlag;
