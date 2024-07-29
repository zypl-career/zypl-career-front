import { cva } from 'class-variance-authority';

export const progressBar = cva('relative bg-gray-200 rounded', {
  variants: {
    size: {
      small: 'h-4',
      medium: 'h-6',
      large: 'h-8',
    },
    color: {
      purple: 'bg-gradient-to-r from-purple-700 to-purple-500',
    },
  },
  defaultVariants: {
    size: 'medium',
    color: 'purple',
  },
});
