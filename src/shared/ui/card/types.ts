export type TCardItem = {
  id: string;
  title: string;
  borderColor: string;
  textColor: string;
  active: boolean;
  isDone: boolean;
};

export type TCardItemProps = {
  data: TCardItem[];
};
