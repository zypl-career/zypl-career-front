import { FC, SVGProps } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TelegramIcon: FC<SVGProps<SVGSVGElement>> = ({ stroke, ...props }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.49335 8.85566L5.26177 12.113C5.5931 12.113 5.7366 11.9707 5.90869 11.7997L7.4621 10.3152L10.6809 12.6724C11.2713 13.0014 11.6872 12.8282 11.8464 12.1293L13.9593 2.22899L13.9599 2.22841C14.1471 1.35574 13.6443 1.01449 13.0691 1.22857L0.649937 5.98332C-0.197646 6.31232 -0.184813 6.78482 0.505854 6.99891L3.68094 7.98649L11.056 3.37174C11.4031 3.14191 11.7187 3.26907 11.4591 3.49891L5.49335 8.85566Z"
        fill="white"
      />
    </svg>
  );
};

export default TelegramIcon;
