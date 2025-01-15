'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@ui';
import { cn } from '@utils';
import { selectVariants } from './ui';
import { TSelectProps } from './types';

type ISelectFieldProps<T> = Omit<TSelectProps, 'onChange'> & {
  value: string;
  label?: string;
  options: T[];
  printType: keyof T;
  valueType: keyof T;
  placeholder?: string;
  onChange: (value: T[keyof T]) => void;
};

export const SelectField = <T,>({
  options,
  value,
  label,
  valueType,
  printType,
  placeholder = 'Выберите элемент',
  className,
  variant,
  size,
  onChange,
}: ISelectFieldProps<T>) => (
  <Select
    onValueChange={(value) => onChange(value as T[keyof T])}
    value={value}
  >
    {label && (
      <label className="block text-sm font-semibold text-gray-700">
        {label}
      </label>
    )}
    <SelectTrigger
      className={cn(
        selectVariants({ variant, size, className }),
        'appearance-none',
      )}
    >
      <SelectValue placeholder={placeholder} />
    </SelectTrigger>
    <SelectContent>
      {options
        ? options.map((status, idx) => (
            <SelectItem key={idx} value={String(status[valueType])}>
              {String(status[printType])}
            </SelectItem>
          ))
        : null}
    </SelectContent>
  </Select>
);
