'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavbarData } from '@/entities';
import { Button, SearchIcon, HamburgerIcon, UserIcon } from '@/shared';
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="bg-white px-5 md:px-24 py-4 flex justify-between items-center relative border border-gray-200 theme:border-primary theme:bg-primaryBg"
    >
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
      <div className="flex items-center gap-2">
        <div className="w-[24px] h-[24px] cursor-pointer flex md:hidden">
          <SearchIcon />
        </div>
        <div className="w-[24px] h-[24px] cursor-pointer flex md:hidden bg-background">
          <UserIcon />
        </div>
        <Button className="lg:block hidden" variant="register" rounded="full">
          Зарегистрироваться
        </Button>
        <Button
          className="lg:flex hidden"
          variant="outline"
          rounded="full"
          showRightArrowIcon
        >
          <Link href="/login">
            Войти
          </Link>
        </Button>
      </div>
    </nav>
  );
};
