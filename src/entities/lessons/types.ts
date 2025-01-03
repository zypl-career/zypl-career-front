export type TLessonIdData = {
  id: string;
  item: number;
  courseId: string;
  name: string;
  description: string;
  status: string;
  type: string;
  resource: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};

export type TLessonIdTableProps = {
  data: TLessonIdData[];
  onDelete: (id: TLessonIdData['id']) => void;
  onEdit: (item: TLessonIdData) => void;
};

export type TLessonIdProps = {
  courseId: string;
};
