import { FC, SVGProps } from 'react';

const UniversityIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 55H53.75M7.5 32.5V55M52.5 32.5V55M18.75 20V55M41.25 20V55M5 32.5H17.5M55 32.5H42.5M16.25 20H43.75M30 20V12.455M30 12.455V7.42502C30 6.24002 30 5.64752 30.365 5.28002C31.515 4.12252 36.25 6.85752 38.05 7.96752C39.57 8.90252 40 10.7725 40 12.455H30ZM30 55V50"
      stroke="#2A2A2A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26 30V31.25M33.5 30V31.25M26 40V41.25M33.5 40V41.25"
      stroke="#B265D0"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default UniversityIcon;
