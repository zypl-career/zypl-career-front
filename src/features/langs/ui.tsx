'use client';

import { useCallback, useEffect, useState } from 'react';
import { SelectField } from '@ui';

import { TValueLangs, type TLang } from './types';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { langs } from './constants';

export const Lang = () => {
  const router = useRouter();
  const pathname = usePathname();

  const localeActive = useLocale();
  const [lang, setLang] = useState<Partial<TLang>>({});

  const changeLocale = useCallback((value: string): void => {
    const locale = value.toLowerCase() as TValueLangs;
    setLang((prev) => ({ ...prev, value: locale }));
    if (locale !== localeActive) {
      const newPathname = pathname.replace(`/${localeActive}`, `/${locale}`);
      router.replace(newPathname, { scroll: false });
    }
  }, [localeActive, pathname, router]);

  useEffect(() => {
    if (!localeActive) {
      changeLocale('tj');
    }
  }, [changeLocale, localeActive]);

  return (
    <SelectField
      variant="secondary"
      options={langs}
      value={lang.value || localeActive} 
      valueType="value"
      printType="label"
      onChange={changeLocale}
    />
  );
};
