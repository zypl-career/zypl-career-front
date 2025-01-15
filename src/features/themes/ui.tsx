'use client';

import { cn, useTheme } from '@/shared';
import { themes } from '@/features/themes/constants';
import { ReactNode } from 'react';
import { Header } from '@/widgets';
import { X } from 'lucide-react';
import { FontSizesChange } from '../fonts-change';
import { VoiceOverText } from '../voice-over-text';

export const Themes = () => {
  const { setTheme } = useTheme();
  return (
    <div className="py-5 md:px-24 bg-[#1F2937]">
      <main className="container flex sm:flex-row flex-col sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-white">ВКЛ/ВЫКЛ:</span>
          <div
            className="w-14 h-14 text-2xl bg-white rounded flex items-center justify-center cursor-pointer text-primary"
            onClick={() => setTheme('')}
          >
            <X />
          </div>
          <VoiceOverText />
        </div>
        <FontSizesChange />
        <div className="flex items-center sm:justify-end gap-2">
          <span className="text-white">Фон:</span>
          {themes.map((theme) => (
            <div
              key={theme.theme}
              className="w-14 h-14 text-2xl border-green-300 rounded flex items-center justify-center cursor-pointer text-primary"
              style={{
                color: theme.color,
                background: theme.bg,
                ...(theme?.border ? { border: `2px solid ${theme.border}` } : {}),
              }}
              onClick={() => setTheme(theme.theme)}
            >
              Ц
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export const ThemesLayout = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  return (
    <main className={cn({ [`theme theme-${theme}`]: theme })}>
      <Header />
      {children}
    </main>
  );
};
