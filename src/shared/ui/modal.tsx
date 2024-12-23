import { Dialog, DialogContent, DialogTitle } from '@ui';
import { FC, ReactNode } from 'react';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

export type TModalProps = {
  toggle: boolean;
  setToggle: (value: boolean) => void;
  children?: ReactNode;
  className?: string;
};

export const Modal: FC<TModalProps> = ({
  toggle,
  setToggle,
  className,
  children,
}) => {
  return (
    <Dialog open={toggle} onOpenChange={setToggle}>
      <VisuallyHidden.Root>
        <DialogTitle></DialogTitle>
      </VisuallyHidden.Root>
      <DialogContent className={className}>{children}</DialogContent>
    </Dialog>
  );
};
