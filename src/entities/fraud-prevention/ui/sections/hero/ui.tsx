import {
  BlurImage,
  FacebookIcn,
  InstaIcon,
  Skeleton,
  TgIcon,
  VkontakteIcon,
} from '@/shared';
import { TArticleData } from '@entities';
import { FC } from 'react';

export const FraudPreventionsHero: FC<{
  data?: TArticleData;
  isLoading: boolean;
}> = ({ data, isLoading }) => {
  return (
    <div className="flex justify-center p-4 lg:p-0 my-5 lg:my-24">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-52">
        <div className="text-left">
          {isLoading ? (
            <Skeleton className="h-5 w-20 mb-2 bg-slate-400" />
          ) : (
            <p className="text-[#7E7E7E] mb-2">
              {data?.minutesRead} минут чтения
            </p>
          )}

          <h2 className="text-3xl font-bold lg:w-[522px] mb-4">
            {data?.title}
          </h2>
          <p className="text-gray-700 lg:w-[522px] mb-4">{data?.generalInfo}</p>
          <p className="mb-4 text-gray-400">
            Поделитесь на:
            <div className="flex items-center gap-5 cursor-pointer py-2 my-2">
              <VkontakteIcon />
              <TgIcon />
              <InstaIcon />
              <FacebookIcn />
            </div>
          </p>
        </div>
        {isLoading ? (
          <div className="flex items-center justify-center w-[630px] h-[420px] mb-4 bg-gray-300 rounded dark:bg-gray-700 animate-pulse">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          </div>
        ) : (
          <BlurImage
            src={data?.image || ''}
            alt="career-decide"
            width={630}
            height={420}
            className="w-[630px] h-[420px] object-contain"
            isSkeleton
          />
        )}
      </div>
    </div>
  );
};
