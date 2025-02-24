'use client';

import { ReactNode } from 'react';
import { X } from 'lucide-react';
import { Button } from '@ui';
import { cn } from '@utils';
import { themes } from '@features';
import { Header } from '@widgets';
import { useTheme } from '@providers';

import { FontSizesChange } from '../fonts-change';
import { VoiceOverText } from '../voice-over-text';

export const Themes = () => {
  const { setTheme } = useTheme();
  return (
    <div className="py-5 md:px-24 bg-[#1F2937]">
      <main className="container flex sm:flex-row flex-col sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-white">ВКЛ/ВЫКЛ:</span>
          <Button
            className="size-14 text-xl text-white bg-transparent theme:text-primary border"
            variant="outline"
            onClick={() => setTheme('')}
          >
            <X />
          </Button>
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
                ...(theme?.border
                  ? { border: `2px solid ${theme.border}` }
                  : {}),
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
