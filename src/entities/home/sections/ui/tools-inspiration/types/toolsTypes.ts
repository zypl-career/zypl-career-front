import { FC, SVGProps } from 'react';

export type ToolsProps = {
  Icons: FC<SVGProps<SVGSVGElement>>;
  title?: string;
  key: string;
  description?: string;
  link: string;
};
