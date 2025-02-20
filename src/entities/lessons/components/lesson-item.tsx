'use client';

import { FC, useCallback, useState } from 'react';
import { PlayIcon } from 'lucide-react';
import { apiService } from '@api';
import { DownloadIcon, PDFIcon } from '@icons';
import { Button, Spinner } from '@ui';
import { cn, downloadFile } from '@utils';
import { TLessonIdData } from '../types';

export type LessonItemProps = {
  idx: number;
  lessonItem: TLessonIdData;
  currentLesson?: TLessonIdData;
  onSelectLesson: (selectedLesson: TLessonIdData) => void;
};

export const LessonItem: FC<LessonItemProps> = ({
  lessonItem,
  currentLesson,
  idx,
  onSelectLesson,
}) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const handleDownload = useCallback(
    async (
      e: React.MouseEvent<HTMLButtonElement>,
      selectedLesson: TLessonIdData,
    ) => {
      try {
        e.preventDefault();
        e.stopPropagation();
        setIsDownloading(true);
        const { data: lessonData } = await apiService.get<TLessonIdData>(
          `lesson/get/${selectedLesson.id}`,
        );

        await downloadFile(
          lessonData?.resource || '',
          lessonData?.name || 'lesson',
        );
      } finally {
        setIsDownloading(false);
      }
    },
    [],
  );
  return (
    <li
      key={lessonItem.id}
      className={cn(
        'cursor-pointer flex items-center gap-4 py-5 px-6',
        lessonItem.id === currentLesson?.id ? 'bg-[#FBF6FD]' : 'bg-transparent',
      )}
      onClick={() => onSelectLesson(lessonItem)}
    >
      <div
        className={cn(
          'size-5 overflow-hidden rounded-full border text-[10px] flex justify-center items-center',
          {
            'border-[#007728] text-[#007728]':
              lessonItem.id === currentLesson?.id,
          },
        )}
      >
        {idx + 1 < 10 ? `0${idx + 1}` : idx}
      </div>
      <div className="flex items-center justify-center rounded-md bg-[#7E3794] size-14">
        {lessonItem.type === 'video' ? (
          <PlayIcon className="text-white fill-white" />
        ) : (
          <PDFIcon />
        )}
      </div>
      <p className="line-clamp-2 flex-1">{lessonItem.name}</p>
      <Button
        variant="ghost"
        className="md:hidden"
        onClick={(e) => handleDownload(e, lessonItem)}
        disabled={isDownloading}
      >
        {isDownloading ? <Spinner /> : <DownloadIcon />}
      </Button>
    </li>
  );
};
