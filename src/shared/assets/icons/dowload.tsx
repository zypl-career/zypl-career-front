import { FC, SVGProps } from 'react';

const DownloadIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="12"
    height="14"
    viewBox="0 0 12 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.75 13.25H10.75M5.75 1.16666V9.91666M5.75 9.91666L8.66667 6.99999M5.75 9.91666L2.83333 6.99999"
      stroke="#4B5563"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default DownloadIcon;
