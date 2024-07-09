import { footerData } from '@/widgets';
import {
  FacebookIcon,
  InstagramIcon,
  LogoFooter,
  TelegramIcon,
  VkIcn,
  YoutubeIcon,
} from '@/shared';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 p-8">
      <div className="flex lg:px-24 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {footerData.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-2 hover:underline cursor-pointer">
                {section.title}
              </h3>
              <ul>
                {section.items.map((item, idx) => (
                  <li key={idx} className="mb-1 hover:underline cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <hr className="my-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col sm:flex-row sm:items-start">
          <LogoFooter />
          <p className="mt-2 sm:mt-0 sm:ml-2">
            &copy; 2024. zypl.career. Все права защищены
          </p>
        </div>
        <div className="flex flex-col sm:flex-row  sm:justify-end gap-2">
          <div className="flex gap-2">
            <VkIcn />
            <TelegramIcon />
            <InstagramIcon />
            <YoutubeIcon />
            <FacebookIcon />
          </div>
          <p className="mt-2 sm:mt-0">Пользовательское соглашение</p>
        </div>
      </div>
    </footer>
  );
};
