export type TCourseData = {
  id: string;
  title: string;
  image: string;
  description: string;
  tags: string[];
  finishedPercentage: number;
  createdAt: string;
  updatedAt: string;
};

export type TCourseParams = Partial<
  TCourseData & {
    page: string;
    limit: string;
  }
>;
