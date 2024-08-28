/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, SVGProps } from 'react';

const SkillsLevelIcon: FC<SVGProps<SVGSVGElement>> = ({ stroke, ...props }) => {
  return (
    <svg
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M37.8335 37.5H27.8335V5H37.8335V37.5ZM30.3335 35H35.3335V7.5H30.3335V35ZM25.3335 37.5H15.3335V15H25.3335V37.5ZM17.8335 35H22.8335V17.5H17.8335V35ZM12.8335 37.5H2.8335V22.5H12.8335V37.5ZM5.3335 35H10.3335V25H5.3335V35Z"
        fill="#632C73"
      />
    </svg>
  );
};

export default SkillsLevelIcon;
