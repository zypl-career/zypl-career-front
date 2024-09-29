import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { ReactNode } from 'react';

const VisuallyHiddenComponent = ({ children }: { children: ReactNode }) => (
  <VisuallyHidden.Root>{children}</VisuallyHidden.Root>
);

export default VisuallyHiddenComponent;
