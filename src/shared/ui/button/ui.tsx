import * as React from 'react';
import { cn } from '@/shared/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { GlassesIcon, RightArrowIcon } from '@/shared';

import type { TVariantType, TSizeType, TButtonProps } from '.';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-white text-purple-900 hover:bg-secondary/80',
        auth: 'bg-purple-800 rounded-2xl font-[600] text-white w-full md:w-[400px] transform transition-transform duration-200 active:scale-110',

        status:
          'bg-purple-800 rounded-2xl font-[600] text-white w-full transform transition-transform duration-200 active:scale-110',
        outlineSecondary:
          'border border-[#9CA3AF] text-[#4B5563] bg-background font-[600] hover:text-accent-foreground rounded-2xl w-full md:w-[400px] transform transition-transform duration-200 active:scale-110',
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

const Button = React.forwardRef<
  HTMLButtonElement,
  TButtonProps & { showGlassesIcon?: boolean; showRightArrowIcon?: boolean }
>(
  (
    {
      className,
      variant,
      size,
      showGlassesIcon = false,
      showRightArrowIcon = false,
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {showGlassesIcon && <GlassesIcon className="mr-2" />}
        {children}
        {showRightArrowIcon && (
          <RightArrowIcon className="ml-2 animate-moveRight" />
        )}
      </Comp>
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
