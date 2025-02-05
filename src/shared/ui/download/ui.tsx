import { FC } from 'react';
import { downloadFile, DownloadIcon } from '@/shared';
import type { TDownloadButtonProps } from '.';

export const DownloadButton: FC<TDownloadButtonProps> = ({
  fileType,
  fileUrl,
}) => {
  return (
    <div className="flex items-center px-3 py-1 bg-[#F9FAFB] cursor-pointer border border-[#DADADD] rounded-full">
      <DownloadIcon />
      <span
        onClick={async () => await downloadFile(fileUrl)}
        className="ml-2 text-sm font-medium cursor-pointer"
      >
        {fileType}
      </span>
    </div>
  );
};
