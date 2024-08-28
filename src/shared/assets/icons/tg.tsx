import { FC, SVGProps } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TgIcon: FC<SVGProps<SVGSVGElement>> = ({ stroke, ...props }) => {
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
        d="M9.63186 14.9155L9.26792 20.0344C9.78862 20.0344 10.0141 19.8107 10.2846 19.5421L12.7258 17.2091L17.7842 20.9135C18.7119 21.4305 19.3655 21.1583 19.6158 20.06L22.9361 4.50161L22.937 4.5007C23.2313 3.1293 22.4411 2.59302 21.5372 2.92945L2.0204 10.4016C0.688421 10.9186 0.708589 11.6611 1.79398 11.9976L6.78364 13.5496L18.3736 6.29745C18.9191 5.93627 19.415 6.13611 19.0071 6.49729L9.63186 14.9155Z"
        fill="#073044"
      />
    </svg>
  );
};

export default TgIcon;
