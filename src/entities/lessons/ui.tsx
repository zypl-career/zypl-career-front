'use client';
import { FC, useCallback, useEffect, useState } from 'react';
import { LessonListUI } from './components/lesson-list';
import { useLessonById, useLessonId } from './services';
import { TLessonIdProps } from './types';
import { useCourseById } from '../courses/services';
import { LessonItem } from './components/lesson';
import { Button, Modal, Spinner } from '@ui';
import { ArrowLeft, InfoIcon } from 'lucide-react';
import router from 'next/router';
import { useLocale } from 'next-intl';

export const Lessons: FC<TLessonIdProps> = ({ courseId }) => {
  const locale = useLocale();
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const { data: lessons = [], isLoading: isLoadingLessons } =
    useLessonId(courseId);
  const { data: course, isLoading: isCourseLoading } = useCourseById(courseId);
  const [lessonId, setLessonId] = useState(lessons?.[0]?.id || '');
  const { data: lesson } = useLessonById(lessonId);

  const handleNextLesson = useCallback(() => {
    const currentIndex = lessons.findIndex((item) => item.id === lessonId);
    if (currentIndex < lessons.length - 1) {
      setLessonId(lessons[currentIndex + 1].id);
    }
  }, [lessonId, lessons]);

  const handlePrevLesson = useCallback(() => {
    const currentIndex = lessons.findIndex((item) => item.id === lessonId);
    if (currentIndex > 0) {
      setLessonId(lessons[currentIndex - 1].id);
    }
  }, [lessonId, lessons]);

  useEffect(() => {
    if (lessons.length) {
      setLessonId(lessons[0].id);
    }
  }, [lessons]);

  return (
    <div className="container min-h-[40vh]">
      {isLoadingLessons && isCourseLoading ? (
        <div className="flex justify-center items-center min-h-[40vh] w-full">
          <Spinner />
        </div>
      ) : (
        <section className="flex sm:flex-row flex-col-reverse border">
          <Modal toggle={isInfoOpen} setToggle={setIsInfoOpen}>
            <div className="max-w-3xl container max-h-[600px] overflow-auto">
              <h1 className="text-xl font-bold mb-4">{course?.title}</h1>
              <div
                dangerouslySetInnerHTML={{ __html: course?.description ?? '' }}
              />
            </div>
          </Modal>
          
          <LessonListUI
            list={lessons}
            lesson={lesson}
            course={course}
            onSelect={(lesson) => setLessonId(lesson.id)}
          />
          <LessonItem
            courseId={courseId}
            lessonId={lessonId}
            onNextLesson={handleNextLesson}
            onPrevLesson={handlePrevLesson}
          />
          <header className="sm:hidden flex items-center gap-3 bg-gray-100 p-6 sticky top-0">
            <Button
              onClick={() => router.replace(`/${locale}/courses`)}
              variant="ghost"
            >
              <ArrowLeft size={24} />
            </Button>
            <h1 className="flex-1 line-clamp-2">{course?.title}</h1>
            <Button onClick={() => setIsInfoOpen(true)} variant="ghost">
              <InfoIcon size={16} className="text-gray-400" />
            </Button>
          </header>
        </section>
      )}
    </div>
  );
};
