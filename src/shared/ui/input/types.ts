import * as React from 'react';

export type TVariantType = 'default' | 'gray' | 'secondary' | 'outline';

export type TInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: 'default' | 'gray' | 'secondary' | 'outline';
  labelPosition?: 'top' | 'inside';
  showSearchIcon?: boolean;
  label?: string;
};
