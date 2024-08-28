import { FC, SVGProps } from 'react';

export type TFeedbackOption = {
  id: number;
  text: string;
  icons: FC<SVGProps<SVGSVGElement>>[];
};
