import { FC } from 'react';
import { TLessonIdData } from '../types';
import { TCourseData } from '@/entities/courses/types';
import { LessonHeader } from './lesson-header';
import { LessonItem } from './lesson-item';

type TLessonListProps = {
  list: TLessonIdData[];
  lesson?: TLessonIdData;
  course?: TCourseData;
  onSelect: (lesson: TLessonIdData) => void;
};

export const LessonListUI: FC<TLessonListProps> = ({
  list,
  course,
  lesson,
  onSelect,
}) => {
  return (
    <aside className="md:max-h-dvh max-h-96 md:max-w-80 overflow-auto border">
      <LessonHeader
        title={course?.title}
        description={course?.description}
        className="md:flex hidden"
      />
      <ul className="divide-y overflow-hidden flex-1 w-full">
        {list.map((lessonItem, idx) => (
          <LessonItem
            idx={idx}
            key={lessonItem.id}
            lessonItem={lessonItem}
            currentLesson={lesson}
            onSelectLesson={onSelect}
          />
        ))}
      </ul>
    </aside>
  );
};
