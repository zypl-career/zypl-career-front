import { FC } from 'react';
import { DowloadIcon } from '@/shared';
import type { TDownloadButtonProps } from '.';

export const DownloadButton: FC<TDownloadButtonProps> = ({
  fileSize,
  fileType,
}) => {
  return (
    <div className="flex items-center px-3 py-1 bg-[#F9FAFB] border border-[#DADADD] rounded-full">
      <DowloadIcon />
      <span className="ml-2 text-sm font-medium">
        ({fileType} {fileSize})
      </span>
    </div>
  );
};
