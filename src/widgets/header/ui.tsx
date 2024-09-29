'use client';

import { Button, Select } from '@ui';
import { cn } from '@utils';
import { Themes } from '@/features/themes/ui';
import { useTheme } from '@providers';
import { Logo } from '@/shared';
import { GlassesIcon } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

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
          <div className="flex items-center not">
            <div className="hidden md:block">
              <Button
                startIcon={
                  <GlassesIcon className="theme:stroke-primaryBg stroke-purple-900" />
                }
                variant="secondary"
                size="default"
                className="mt-2.5"
                onClick={() => setShowThemes(prev => !prev)}
              >
                Версия для слабовидящих
              </Button>
            </div>
            <Select
              showFlagIcon
              variant="secondary"
              options={['Русский', 'Английсский']}
              size="default"
              className="ml-4"
            />
          </div>
        </div>
      </header>
    </>
  );
};
