/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, SVGProps } from 'react';

const VideoIcon: FC<SVGProps<SVGSVGElement>> = ({ stroke, ...props }) => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M56.35 16.05C56.053 14.8635 55.4482 13.7764 54.5966 12.8985C53.745 12.0206 52.6768 11.383 51.5 11.05C47.2 10 30 10 30 10C30 10 12.8 10 8.49996 11.15C7.32308 11.483 6.25491 12.1206 5.40333 12.9985C4.55175 13.8764 3.94694 14.9635 3.64996 16.15C2.863 20.5139 2.47805 24.9408 2.49996 29.375C2.47191 33.8426 2.85688 38.3033 3.64996 42.7C3.97736 43.8496 4.59573 44.8954 5.44532 45.7362C6.29492 46.577 7.34702 47.1845 8.49996 47.5C12.8 48.65 30 48.65 30 48.65C30 48.65 47.2 48.65 51.5 47.5C52.6768 47.167 53.745 46.5294 54.5966 45.6515C55.4482 44.7736 56.053 43.6865 56.35 42.5C57.1309 38.169 57.5158 33.7758 57.5 29.375C57.528 24.9074 57.143 20.4467 56.35 16.05V16.05Z"
        stroke="#2A2A2A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.375 37.55L38.75 29.375L24.375 21.2V37.55Z"
        stroke="#B265D0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default VideoIcon;