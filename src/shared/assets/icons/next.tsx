import { FC, SVGProps } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NextIcon: FC<SVGProps<SVGSVGElement>> = ({ stroke, ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.65067 17.7238C8.30615 17.3655 8.31732 16.7958 8.67562 16.4512L13.4009 12L8.67562 7.54875C8.31732 7.20423 8.30615 6.6345 8.65066 6.2762C8.99518 5.91791 9.56492 5.90673 9.92321 6.25125L15.3232 11.3512C15.4997 11.5209 15.5994 11.7552 15.5994 12C15.5994 12.2448 15.4997 12.4791 15.3232 12.6487L9.92321 17.7487C9.56492 18.0933 8.99518 18.0821 8.65067 17.7238Z"
        fill="#6B7280"
      />
    </svg>
  );
};

export default NextIcon;
