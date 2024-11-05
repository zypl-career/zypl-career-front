'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@ui';
import { TSelectProps } from './types';
import { cn } from '@/shared';
import { selectVariants } from './ui';

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
    defaultValue={value}
  >
    {label && (
      <label className="block mb-1 text-sm font-semibold text-gray-700">
        {label}
      </label>
    )}
    <SelectTrigger
      className={cn(
        selectVariants({ variant, size, className }),
        'appearance-none pl-10 pr-10',
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
