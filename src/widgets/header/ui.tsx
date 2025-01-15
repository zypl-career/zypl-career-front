'use client';
import { useState } from 'react';
import Link from 'next/link';
import { GlassesIcon } from 'lucide-react';

import { Button } from '@ui';
import { cn } from '@utils';
import { useTheme } from '@providers';
import { Lang, Themes } from '@features';
import { Logo } from '@/shared';

export const Header = () => {
  const { theme } = useTheme();
  const [showThemes, setShowThemes] = useState(false);
  return (
    <>
      {showThemes ? <Themes /> : null}
      <header
        className={cn(
          'w-full py-5 md:px-20',
          theme ? 'bg-primaryBg' : 'bg-purple-800',
        )}
      >
        <div className="flex justify-between items-center px-5">
          <Link href="/">
            <Logo className="theme:fill-primary" />
          </Link>
          <div className="flex items-center gap-6">
            <Button
              startIcon={
                <GlassesIcon className="theme:stroke-primaryBg stroke-purple-900" />
              }
              variant="secondary"
              size="default"
              onClick={() => setShowThemes((prev) => !prev)}
            >
              <span className="sm:inline-block hidden">Версия для слабовидящих</span>
            </Button>
            <Lang />
          </div>
        </div>
      </header>
    </>
  );
};
