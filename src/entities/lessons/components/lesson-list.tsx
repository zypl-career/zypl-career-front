import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@ui';
import { ArrowLeft, InfoIcon, PlayIcon } from 'lucide-react';
import { cn } from '@utils';
import { TLessonIdData } from '../types';
import { TCourseData } from '@/entities/courses/types';
import { Modal, PDFIcon } from '@/shared';
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
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  return (
    <aside className="sm:max-h-dvh max-h-96 max-w-80 overflow-auto border">
      <Modal toggle={isInfoOpen} setToggle={setIsInfoOpen}>
        <div className="max-w-3xl container max-h-[600px] overflow-auto">
          <h1 className="text-xl font-bold mb-4">{course?.title}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: course?.description ?? '' }}
          />
        </div>
      </Modal>
      <header className="sm:flex hidden items-center gap-3 bg-gray-100 p-6 sticky top-0">
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
      <ul className="divide-y overflow-hidden">
        {list.map((item, idx) => (
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
                'size-5 overflow-hidden rounded-full border text-[10px] flex justify-center items-center',
                { 'border-[#007728] text-[#007728]': item.id === lesson?.id },
              )}
            >
              {idx+1 < 10 ? `0${idx+1}` : idx}
            </div>
            <div className="flex items-center justify-center rounded-md bg-[#7E3794] size-14">
              {item.type === 'video' ? (
                <PlayIcon className="text-white fill-white" />
              ) : (
                <PDFIcon />
              )}
            </div>
            <p className="line-clamp-2 flex-1">{item.name}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
};
