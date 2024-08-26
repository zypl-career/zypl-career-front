'use client';

import { useContext } from 'react';
import { ThemeContext } from './context';

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return { theme, setTheme };
};
