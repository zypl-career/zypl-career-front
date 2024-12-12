import { Dialog, DialogContent, DialogTitle } from '@ui';
import { FC, ReactNode } from 'react';
import VisuallyHiddenComponent from './utils';

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
      <DialogTitle>
        <VisuallyHiddenComponent> </VisuallyHiddenComponent>
      </DialogTitle>
      <DialogContent className={className}>{children}</DialogContent>
    </Dialog>
  );
};
