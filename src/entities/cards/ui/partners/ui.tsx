import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';
import { cn } from '@utils';
import type { TPartnersCardProps } from './types';

export const PartnersCard: FC<TPartnersCardProps> = ({
  imageSrc,
  altText,
  text,
  link = '',
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener"
      className={cn(
        'partner-card flex items-center justify-center bg-white m-2 lg:m-3 py-12 lg:py-[32px] rounded-lg shadow-md h-52 transition hover:scale-105',
        text ? 'flex-row' : 'flex-col',
      )}
    >
      {text ? (
        <div className="flex items-center gap-5 px-5 lg:px-10">
          <Image
            src={imageSrc}
            alt={altText}
            className="partner-image"
            width={100}
            height={100}
          />
          <p className="partner-text font-semibold text-gray-700 mr-4">
            {text}
          </p>
        </div>
      ) : (
        <Image
          src={imageSrc}
          alt={altText}
          className="partner-image my-auto"
          width={200}
          height={200}
        />
      )}
    </Link>
  );
};
