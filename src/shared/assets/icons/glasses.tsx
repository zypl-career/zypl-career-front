/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, SVGProps } from 'react';

const Glasses: FC<SVGProps<SVGSVGElement>> = ({ stroke, ...props }) => {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.5 33.25C14.366 33.25 17.5 30.116 17.5 26.25C17.5 22.384 14.366 19.25 10.5 19.25C6.63401 19.25 3.5 22.384 3.5 26.25C3.5 30.116 6.63401 33.25 10.5 33.25Z"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.5 33.25C35.366 33.25 38.5 30.116 38.5 26.25C38.5 22.384 35.366 19.25 31.5 19.25C27.634 19.25 24.5 22.384 24.5 26.25C24.5 30.116 27.634 33.25 31.5 33.25Z"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.5 26.25C24.5 25.3217 24.1313 24.4315 23.4749 23.7751C22.8185 23.1187 21.9283 22.75 21 22.75C20.0717 22.75 19.1815 23.1187 18.5251 23.7751C17.8687 24.4315 17.5 25.3217 17.5 26.25M4.375 22.75L8.75 12.25C9.975 9.975 11.2 8.75 14 8.75M37.625 22.75L33.25 12.25C32.025 9.975 30.625 8.75 28 8.75"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Glasses;
