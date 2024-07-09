import { NavbarData } from '@/entities';
import { Button, SearchIcon } from '@/shared';

export const Navbar = () => {
  return (
    <nav className="px-5 bg-white md:px-24 py-4 flex justify-between border border-gray-200">
      <ul className="flex items-center gap-4">
        {NavbarData.map((item, index) => (
          <li key={index} className="text-gray-700 hover:text-gray-900">
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2">
        <div className="w-[24px] h-[24px] cursor-pointer">
          <SearchIcon />
        </div>
        <Button variant="register">Зарегистрироваться</Button>
        <Button variant="purpleOutline" showArrowIcon={true}>
          Войти
        </Button>
      </div>
    </nav>
  );
};
