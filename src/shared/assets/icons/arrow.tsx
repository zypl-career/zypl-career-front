import { FC, SVGProps } from 'react';

const ArrowIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 7.62939e-06L4.9425 1.05751L9.1275 5.25001H0V6.75001H9.1275L4.9425 10.9425L6 12L12 6.00001L6 7.62939e-06Z"
    />
  </svg>
);
export default ArrowIcon;
