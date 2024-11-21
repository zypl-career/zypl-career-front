export type TArticleData = {
  id: string
  title: string
  image: string
  description: string
  minutesRead: number
  generalInfoFile: string
  generalInfo: string
  hashtags: string[]
  createdAt: Date | number | string
  updatedAt: Date | number | string
}

export type TArticleDataRequest = Omit<Partial<TArticleData>, 'createAt' | 'updateAt'> & {
 page?: string
 limit?: string;
};
