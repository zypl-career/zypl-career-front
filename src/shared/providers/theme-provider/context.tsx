'use client';

import { createContext } from "react";
import { TThemeContext } from "./types";

export const ThemeContext = createContext<TThemeContext>({
  theme: '',
  setTheme: () => {},
})