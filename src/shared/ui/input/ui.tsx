'use client';

import * as React from 'react';
import { cn } from '@/shared';
import { cva } from 'class-variance-authority';

import type { TVariantType, TInputProps } from './types';

const inputVariants = cva(
  'flex theme:text-primary error:border-red-500 theme:bg-primaryBg text theme:border-primary h-10 w-full text-black border px-3 py-2 pl-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
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

export const Input = React.forwardRef<HTMLInputElement, TInputProps>(
  (
    {
      className,
      type,
      variant = 'default',
      label,
      labelPosition = 'top',
      onEnter,
      onKeyDown,
      ...props
    },
    ref,
  ) => {
    const handlePressEnter = React.useCallback(
      (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (onKeyDown) {
          onKeyDown(event);
        }
        if (event.key === 'Enter' && onEnter && props.value) {
          event.preventDefault();
          onEnter(props.value.toString());
        }
      },
      [onEnter, onKeyDown, props.value],
    );

    return (
      <div className="relative flex flex-col">
        {label && labelPosition === 'top' && (
          <label className="mb-2 text-sm text-[#374151] theme:text-primary font-semibold">
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
            type={type}
            className={cn(inputVariants({ variant }), className)}
            ref={ref}
            onKeyDown={handlePressEnter}
            {...props}
          />
        </div>
      </div>
    );
  },
);

Input.displayName = 'Input';
