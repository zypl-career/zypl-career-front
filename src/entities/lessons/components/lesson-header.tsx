'use client';

import { cn } from '@utils';
import { Button, Modal } from '@ui';
import { ArrowLeft, InfoIcon } from 'lucide-react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react';

type LessonHeaderProps = {
  title?: string;
  description?: string;
  className?: string;
};

export const LessonHeader: FC<LessonHeaderProps> = ({ title, description, className }) => {
  const router = useRouter();
  const locale = useLocale();
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  return (
    <>
      <header
        className={cn(
          'items-center gap-3 bg-gray-100 sm:p-6 p-3 sticky top-0',
          className,
        )}
      >
        <Button
          onClick={() => router.replace(`/${locale}/courses`)}
          variant="ghost"
        >
          <ArrowLeft size={24} />
        </Button>
        <h1 className="flex-1 line-clamp-2">{title}</h1>
        <Button onClick={() => setIsInfoOpen(true)} variant="ghost">
          <InfoIcon size={16} className="text-gray-400" />
        </Button>
      </header>
      <Modal toggle={isInfoOpen} setToggle={setIsInfoOpen}>
        <div className="max-w-3xl container max-h-[600px] overflow-auto">
          <h1 className="text-xl font-bold mb-4">{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: description ?? '' }} />
        </div>
      </Modal>
    </>
  );
};
