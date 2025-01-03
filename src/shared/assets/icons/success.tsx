import { FC, SVGProps } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SuccessIcon: FC<SVGProps<SVGSVGElement>> = ({ stroke, ...props }) => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="0.416992"
        y="0.25"
        width="49.166"
        height="49.5"
        rx="24.583"
        fill="#C6FFE0"
      />
      <path
        d="M24.9998 38.3334C32.3636 38.3334 38.3332 32.3639 38.3332 25.0001C38.3332 17.6363 32.3636 11.6667 24.9998 11.6667C17.636 11.6667 11.6665 17.6363 11.6665 25.0001C11.6665 32.3639 17.636 38.3334 24.9998 38.3334Z"
        stroke="#009947"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 25.0002L23.6667 27.6668L29 22.3335"
        stroke="#009947"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SuccessIcon;
