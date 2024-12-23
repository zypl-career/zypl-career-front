import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { redirect } from 'next/navigation';
import { ThemeProvider, Toaster } from '@/shared';
import { ReactQueryProvider, NextIntlProvider } from '@providers';
import './styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zypl.career',
  description: 'Education platform for future professionals',
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
      <ReactQueryProvider>
        <ThemeProvider>
          <body className={inter.className}>
            <Toaster />
            <NextIntlProvider>{children}</NextIntlProvider>
          </body>
        </ThemeProvider>
      </ReactQueryProvider>
    </html>
  );
}
