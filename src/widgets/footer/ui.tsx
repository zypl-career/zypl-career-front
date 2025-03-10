import Link from 'next/link';
import { FC } from 'react';
import { FacebookIcon, InstagramIcon } from '@icons';
import { Logo } from '@img';
import { footerData } from './model';

export const Footer: FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8 px-8 theme:border-primary theme:border theme:bg-primaryBg theme:text-primary">
      <div className="flex lg:px-24 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {footerData.map((section, index) => (
            <div className="lg:py-14" key={index}>
              <h3 className="text-white font-semibold mb-2 hover:underline cursor-pointer">
                {section.title}
              </h3>
              <ul className="pb-20">
                {section.items.map((item, idx) => (
                  <li key={idx} className="mb-1 hover:underline cursor-pointer">
                    {item.link ? (
                      <Link href={item.link}>{item.label}</Link>
                    ) : (
                      item.label
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-b border-gray-600"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-5">
        <div className="flex flex-col sm:flex-row sm:items-center items-start">
          <Logo className="theme:fill-primary" />
          <p className="mt-2 sm:mt-0 sm:ml-2">
            &copy; 2025. Kasbi man. Все права защищены
          </p>
        </div>
        <div className="flex flex-row  sm:justify-end gap-2">
          <div className="flex gap-2 items-center">
            <p className="mt-2 sm:mt-0 md:order-1">
              Пользовательское соглашение
            </p>
            <Link
              target="_blank"
              rel="noopener"
              href="https://www.instagram.com/kasbiman.pro/"
              className="transition hover:scale-125"
            >
              <InstagramIcon />
            </Link>
            <Link
              target="_blank"
              rel="noopener"
              href="https://www.facebook.com/people/Kasbimanpro/61572600953558/"
              className="transition hover:scale-125"
            >
              <FacebookIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
