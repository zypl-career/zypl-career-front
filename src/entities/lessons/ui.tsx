'use client';
import { FC, useCallback, useEffect, useState } from 'react';
import { LessonListUI } from './components/lesson-list';
import { useLessonById, useLessonId } from './services';
import { TLessonIdProps } from './types';
import { useCourseById } from '../courses/services';
import { LessonItem } from './components/lesson';
import { Spinner } from '@ui';

export const Lessons: FC<TLessonIdProps> = ({ courseId }) => {
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
        <section className="flex border">
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
        </section>
      )}
    </div>
  );
};
