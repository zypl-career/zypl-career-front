'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import { Button } from '@ui';
import { HamburgerIcon, UserIcon } from '@icons';
import { useUserStore } from '@stores';
import { useNavbarData } from '..';

export const Navbar = () => {
  const { userData, isAuth } = useUserStore();
  const [isOpen, setIsOpen] = useState(false);
  const NavbarData = useNavbarData();
  const t = useTranslations('navbar');

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white px-5 md:px-24 py-4 flex justify-between items-center relative border border-gray-200 theme:border-primary theme:bg-primaryBg">
      <div className="flex items-center gap-4">
        <div className="block md:hidden cursor-pointer" onClick={toggleMenu}>
          <HamburgerIcon />
        </div>
        <ul className="flex-col md:flex-row lg:items-center gap-4 md:gap-8 hidden md:flex">
          {NavbarData.map((item, index) => (
            <li
              key={index}
              className="text-gray-700 hover:text-gray-900 theme:text-primary"
            >
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="flex-col gap-4 flex absolute bg-white p-4 top-16 left-0 right-0 md:hidden"
            >
              {NavbarData.map((item, index) => (
                <li key={index} className="text-gray-700 hover:text-gray-900">
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
      <div className="flex items-center gap-2" suppressHydrationWarning>
        {!isAuth ? (
          <div className="flex items-center gap-2" suppressHydrationWarning>
            <Button variant="register" rounded="full" asChild>
              <Link href="/auth/register">{t('register')}</Link>
            </Button>
            <Button variant="outline" rounded="full" asChild>
              <Link href="/auth/login">{t('login')}</Link>
            </Button>
          </div>
        ) : (
          <Link
            href="/user-edit"
            className="flex items-center bg-background gap-2"
          >
            <UserIcon />
            <span>{userData?.user?.name}</span>
          </Link>
        )}
      </div>
    </nav>
  );
};
