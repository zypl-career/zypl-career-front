'use client';

import * as React from 'react';
import { cn } from '@/shared/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { ArrowDownIcon, RussianFlag } from '@/shared';

import type { TVariantType, TSizeType, TSelectProps } from '.';

const selectVariants = cva(
  'inline-flex items-center justify-between rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-purple-800 text-white hover:bg-purple-800 border-none',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default' as TVariantType,
      size: 'default' as TSizeType,
    },
  },
);

const Select = React.forwardRef<
  HTMLSelectElement,
  TSelectProps & { showFlagIcon?: boolean }
>(
  (
    {
      className,
      variant,
      size,
      showFlagIcon = false,
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const Comp = asChild ? Slot : 'select';

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };

    const handleBlur = () => {
      setIsOpen(false);
    };

    return (
      <div className={cn('relative', className)}>
        {showFlagIcon && (
          <div className="absolute left-5 inset-y-0 flex items-center pointer-events-none">
            <RussianFlag />
          </div>
        )}
        <Comp
          className={cn(
            selectVariants({ variant, size, className }),
            'appearance-none pl-10',
          )}
          ref={ref}
          {...props}
          onClick={handleToggle}
          onBlur={handleBlur}
        >
          {children}
        </Comp>
        <div
          className={cn(
            'absolute right-[-2px] inset-y-0 flex items-center pointer-events-none transition-transform duration-300',
            {
              'rotate-180': isOpen,
            },
          )}
        >
          <ArrowDownIcon />
        </div>
      </div>
    );
  },
);

Select.displayName = 'Select';

export { Select, selectVariants };