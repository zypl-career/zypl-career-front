import { FC, SVGProps } from "react";

export type ToolsProps = {
  Icons: FC<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  link: string;
};
