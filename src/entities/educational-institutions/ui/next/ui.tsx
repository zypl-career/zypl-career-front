import { NextIcon } from '@icons';
import Link from 'next/link';

export const NextEducational = ({
  title,
  href,
}: {
  title: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className="bg-white flex justify-between my-4 py-8 items-center cursor-pointer px-5 rounded-xl transform transition-transform duration-300 ease-in-out active:scale-90"
    >
      <p>{title}</p>
      <NextIcon className="flex-shrink-0" />
    </Link>
  );
};
