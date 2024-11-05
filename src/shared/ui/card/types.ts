export type TCardItem = {
  id: string;
  title: string;
  active: boolean;
  isDone: boolean;
};

export type TCardItemProps = {
  data: TCardItem[];
};
