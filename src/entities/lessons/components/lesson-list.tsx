import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@ui';
import { ArrowLeft, PlayIcon } from 'lucide-react';
import { cn } from '@utils';
import { TLessonIdData } from '../types';
import { TCourseData } from '@/entities/courses/types';
import { PDFIcon } from '@/shared';
import { useLocale } from 'next-intl';

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
  const router = useRouter();
  const locale = useLocale();
  return (
    <aside className="max-h-dvh overflow-auto border">
      <header className="flex items-center gap-3 bg-gray-100 p-6 sticky top-0">
        <Button onClick={() => router.replace(`/${locale}/courses`)} variant="ghost">
          <ArrowLeft size={24} />
        </Button>
        <h1>{course?.title}</h1>
      </header>
      <ul className="divide-y">
        {list.map((item) => (
          <li
            key={item.id}
            className={cn(
              'cursor-pointer flex items-center gap-4 py-5 px-6',
              item.id === lesson?.id ? 'bg-[#FBF6FD]' : 'bg-transparent',
            )}
            onClick={() => onSelect(item)}
          >
            <div
              className={cn(
                'size-5 rounded-full border text-[10px] flex justify-center items-center',
                { 'border-[#007728] text-[#007728]': item.id === lesson?.id },
              )}
            >
              {item.item < 10 ? `0${item.item}` : item.item}
            </div>
            <div className="flex items-center justify-center rounded-md bg-[#7E3794] size-14">
              {item.type === 'video' ? <PlayIcon className="text-white fill-white" /> : <PDFIcon />}
            </div>
            {item.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};
