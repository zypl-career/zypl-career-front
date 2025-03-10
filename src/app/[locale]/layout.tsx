import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { redirect } from 'next/navigation';
import { ThemeProvider, Toaster } from '@/shared';
import {
  ReactQueryProvider,
  NextIntlProvider,
  PostHogProvider,
} from '@providers';
import { locales } from 'i18n';
import './styles/globals.css';

import favicon from '../../shared/assets/icons/favicon.png';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Касби ман',
  description: 'Education platform for future professionals',
  icons: {
    icon: favicon.src,
  },
  keywords: [
    'Kasbi man',
    'Касб',
    'Интихоби касб',
    'Роҳнамоии касбӣ',
    'Касби ман',
    'зипл кариер',
    'zypl career',
    'Профессия',
    'Выбор профессии',
    'Профессиональное руководство',
    'Моя профессия',
    'зипл карьера',
    'zypl карьера',
    'Интихоби касб',
    'Роҳнамоии касбӣ',
    'Машварати касбӣ',
    'Профориентация',
  ],
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!locale) {
    redirect('/tj');
  }
  return (
    <html lang={locale}>
      <head>
        {locales.map((loc) => (
          <link key={loc} rel="alternate" hrefLang={loc} href={`/${loc}`} />
        ))}
      </head>

      <ReactQueryProvider>
        <ThemeProvider>
          <PostHogProvider>
            <body className={inter.className}>
              <Toaster />
              <NextIntlProvider>{children}</NextIntlProvider>
            </body>
          </PostHogProvider>
        </ThemeProvider>
      </ReactQueryProvider>
    </html>
  );
}
