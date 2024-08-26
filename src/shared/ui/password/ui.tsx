'use client';

import * as React from 'react';
import { cn } from '@utils';
import { cva } from 'class-variance-authority';

import type { TVariantType, TInputProps } from './types';

const inputVariants = cva(
  'flex h-10 w-full text-black border px-3 py-2 pl-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-none bg-background rounded-2xl',
        secondary: 'border-none bg-background rounded-xl',
        gray: 'bg-gray-100 border-none text-gray-700 rounded-2xl',
        outline: 'border border-[#D1D5DB] rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default' as TVariantType,
    },
  },
);

export const Password = React.forwardRef<HTMLInputElement, TInputProps>(
  (
    {
      className,
      variant = 'default',
      label,
      labelPosition = 'top',
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className="relative flex flex-col">
        {label && labelPosition === 'top' && (
          <label className="mb-1 text-sm text-[#374151] font-medium">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {label && labelPosition === 'inside' && (
            <label className="absolute -top-2 left-2 bg-white px-1 text-gray-500">
              {label}
            </label>
          )}
          <input
            type={showPassword ? 'text' : 'password'}
            className={cn(inputVariants({ variant }), className)}
            ref={ref}
            {...props}
          />
          <button
            type="button"
            className="absolute right-3"
            onClick={togglePasswordVisibility}
          ></button>
        </div>
      </div>
    );
  },
);

Password.displayName = 'Password';
