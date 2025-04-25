'use client';

import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { ArrowLeft, Download } from 'lucide-react';
import { Button, If, Skeleton } from '@ui';
import { useLessonById, useLessonId } from '../services';
import { cn, downloadFile, Spinner } from '@/shared';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

type LessonItemProps = {
  lessonId: string;
  courseId: string;
  onNextLesson: () => void;
  onPrevLesson: () => void;
};

export const LessonShow: FC<LessonItemProps> = ({
  lessonId,
  courseId,
  onPrevLesson,
  onNextLesson,
}) => {
  const [isResourceLoading, setIsResourceLoading] = useState(true);
  const { data: lesson, isLoading } = useLessonById(lessonId);
  const { data: lessons = [] } = useLessonId(courseId);
  const [isDownloading, setIsDownloading] = useState(false);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const isFirst = useMemo(
    () => lessons.findIndex((item) => item.id === lessonId) === 0,
    [lessonId, lessons],
  );
  const isLast = useMemo(
    () =>
      lessons.findIndex((item) => item.id === lessonId) === lessons.length - 1,
    [lessonId, lessons],
  );

  const isYoutube = lesson?.description?.includes('youtube');
  const isPdf = lesson?.type === 'pdf';
  const isVideo = lesson?.type === 'video';

  const handleDownload = useCallback(async () => {
    try {
      setIsDownloading(true);
      await downloadFile(lesson?.resource || '', lesson?.name || 'lesson');
    } finally {
      setIsDownloading(false);
    }
  }, [lesson]);

  useEffect(() => {
    setIsResourceLoading(true);
    setPageNumber(1);
  }, [isLoading, lessonId]);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setIsResourceLoading(false);
  };

  const onDocumentLoadError = () => {
    setIsResourceLoading(false);
  };

  const goToPrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const goToNextPage = () => {
    if (pageNumber < (numPages || 0)) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <main className="flex-1 h-dvh">
      <header className="md:flex hidden items-center justify-between text-xl font-bold bg-gray-100 p-6">
        {isLoading ? (
          <Skeleton className="w-40 h-5 bg-gray-700" />
        ) : (
          <h1 className="md:text-base text-xs">{lesson?.name}</h1>
        )}
        <Button
          className="md:inline-flex hidden"
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
      <div
        className={cn('h-[80%]', {
          'flex items-center justify-center': !isYoutube && !isPdf,
        })}
      >
        {lessons.length ? (
          <>
            <If condition={!!(isResourceLoading && (isPdf || isYoutube))}>
              <div className="flex justify-center items-center min-h-full">
                <Spinner className="size-10" />
              </div>
            </If>
            {lesson?.id ? (
              <>
                <If condition={!!isYoutube}>
                  <iframe
                    allowFullScreen
                    src={lesson.description.replace('/watch?v=', '/embed/')}
                    width="100%"
                    height="100%"
                    className="h-[calc(100dvh-180px)]"
                    onLoad={() => setIsResourceLoading(false)}
                  />
                </If>
                <If condition={isPdf}>
                  <div className="flex flex-col h-[calc(100dvh-180px)] overflow-auto">
                    <Document
                      file={lesson.resource}
                      onLoadSuccess={onDocumentLoadSuccess}
                      onLoadError={onDocumentLoadError}
                      loading={<Spinner className="size-10 mx-auto my-10" />}
                      className="flex flex-col items-center"
                    >
                      <Page
                        pageNumber={pageNumber}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        className="mx-auto"
                      />
                    </Document>
                    {numPages && (
                      <div className="flex justify-center items-center gap-4 my-4">
                        <Button
                          variant="outline"
                          rounded="full"
                          disabled={pageNumber <= 1}
                          onClick={goToPrevPage}
                        >
                          Предыдущая страница
                        </Button>
                        <span className="mx-2">
                          Страница {pageNumber} из {numPages}
                        </span>
                        <Button
                          variant="outline"
                          rounded="full"
                          disabled={pageNumber >= (numPages || 0)}
                          onClick={goToNextPage}
                        >
                          Следующая страница
                        </Button>
                      </div>
                    )}
                  </div>
                </If>
                <If condition={isVideo}>
                  <video controls src={lesson.description} />
                </If>
              </>
            ) : null}
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
