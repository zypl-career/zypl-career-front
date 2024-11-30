'use client';

import { FC, useEffect, useMemo, useState } from 'react';
import { ArrowLeft, Download } from 'lucide-react';
import { Button, If, Skeleton } from '@ui';
import { useLessonById, useLessonId } from '../services';
import { cn, downloadFile, Spinner } from '@/shared';

type LessonItemProps = {
  lessonId: string;
  courseId: string;
  onNextLesson: () => void;
  onPrevLesson: () => void;
};

export const LessonItem: FC<LessonItemProps> = ({
  lessonId,
  courseId,
  onPrevLesson,
  onNextLesson,
}) => {
  const [isResourceLoading, setIsResourceLoading] = useState(true);
  const { data: lesson, isLoading } = useLessonById(lessonId);
  const { data: lessons = [] } = useLessonId(courseId);
  const [isDownloading, setIsDownloading] = useState(false);

  const isFirst = useMemo(
    () => lessons.findIndex((item) => item.id === lessonId) === 0,
    [lessonId, lessons],
  );
  const isLast = useMemo(
    () =>
      lessons.findIndex((item) => item.id === lessonId) === lessons.length - 1,
    [lessonId, lessons],
  );

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      await downloadFile(lesson?.resource || '', lesson?.name || 'lesson');
    } finally {
      setIsDownloading(false);
    }
  };

  useEffect(() => {
    setIsResourceLoading(true);
  }, [isLoading, lessonId]);

  return (
    <main className="flex-1 h-dvh">
      <header className="flex items-center justify-between text-xl font-bold bg-gray-100 p-6">
        {isLoading ? (
          <Skeleton className="w-40 h-5 bg-gray-700" />
        ) : (
          <h1>{lesson?.name}</h1>
        )}
        <Button
          rounded="full"
          variant="outline"
          disabled={isDownloading}
          onClick={handleDownload}
        >
          {isDownloading ? (
            <Spinner className="size-6" />
          ) : (
            <Download size={24} />
          )}
          <span>{lesson?.type === 'pdf' ? 'Скачать PDF' : 'Скачать'}</span>
        </Button>
      </header>
      <div className="h-[80%]">
        {lessons.length ? (
          <>
            <If condition={isResourceLoading}>
              <div className="flex justify-center items-center min-h-full">
                <Spinner className="size-10" />
              </div>
            </If>
            <iframe
              allowFullScreen
              src={
                lesson?.description === 'empty'
                  ? lesson?.resource
                  : lesson?.description.replace('/watch?v=', '/embed/')
              }
              width="100%"
              height="100%"
              className={cn('h-[calc(100dvh-180px)]', {
                hidden: isResourceLoading,
              })}
              onLoad={() => setIsResourceLoading(false)}
            />
          </>
        ) : (
          'no data'
        )}
      </div>
      <div className="flex justify-center items-center gap-8 bg-gray-200 p-6">
        <Button
          variant="outline"
          rounded="full"
          disabled={isLoading || isFirst}
          onClick={onPrevLesson}
        >
          <ArrowLeft size={24} />
          Назад
        </Button>
        <Button
          rounded="full"
          showRightArrowIcon
          disabled={isLoading || isLast}
          onClick={onNextLesson}
        >
          Следующий
        </Button>
      </div>
    </main>
  );
};
