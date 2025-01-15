import { FC } from 'react';
import Link from 'next/link';
import { BlurImage, Button, CardLoader } from '@ui';
import { getDMY } from '@utils';
import { useTranslations } from 'next-intl';

export type TCardRepeatWithLoading = {
  repeat: number;
  isLoading: boolean;
};

export type TCardRepeatWithoutLoading = {
  repeat?: never;
  isLoading?: false;
};

export type TCardProps = (
  | TCardRepeatWithoutLoading
  | TCardRepeatWithLoading
) & {
  id?: number | string;
  href: string;
  imageSrc: string;
  imageAlt?: string;
  imageHeight?: number;
  imageWidth?: number;
  title: string;
  buttonText?: string;
  date?: string | Date | number;
};

export const CardArticle: FC<TCardProps> = ({
  href,
  title,
  isLoading = false,
  repeat,
  imageSrc,
  imageWidth = 300,
  imageHeight = 420,
  imageAlt = title,
  date,
  buttonText,
}) => {
  const t = useTranslations('futureWork');
  return isLoading ? (
    <CardLoader repeat={repeat} />
  ) : (
    <Link
      href={href}
      className="bg-white border border-gray-100 shadow-lg rounded-xl transition-transform transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer my-5 flex flex-col"
    >
      <div className="flex flex-col flex-1">
        <BlurImage
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          sizes="100vw"
          className="w-full h-[300px] object-cover rounded-t-xl"
          isSkeleton
        />
        <h1 className="md:px-5 px-2 font-bold md:text-xl pt-5">{title}</h1>
      </div>
      <div className="md:px-5 px-2">
        <div className="flex items-center justify-between pt-10 pb-4">
          <p className="text-gray-600 text-sm">{getDMY(date)}</p>
          <Button variant="outlineCard">{buttonText ?? t('buttonText')}</Button>
        </div>
      </div>
    </Link>
  );
};
