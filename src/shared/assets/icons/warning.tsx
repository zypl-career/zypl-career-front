/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, SVGProps } from 'react';

const WarningIcon: FC<SVGProps<SVGSVGElement>> = ({ stroke, ...props }) => {
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="#073044"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 14C12.5523 14 13 13.5523 13 13V8C13 7.44771 12.5523 7 12 7C11.4477 7 11 7.44771 11 8V13C11 13.5523 11.4477 14 12 14Z"
        fill="#FDF4D3"
      />
      <path
        d="M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z"
        fill="#FDF4D3"
      />
    </svg>
  );
};

export default WarningIcon;
