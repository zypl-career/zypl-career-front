import {Button, Input, LogoIcon, Select} from '@/shared';

export const Header = () => {
  return (
    <header className="fixed w-full bg-purple-800 py-5 md:px-20">
      <div className="flex justify-between items-center px-5">
        <LogoIcon />
        <div className="flex items-center">
          <div className="hidden md:block">

          <Button showGlassesIcon={true} variant="secondary" size="default">
            Версия для слабовидящих
          </Button>
          </div>
          <Select
            showFlagIcon={true}
            variant="secondary"
            size="default"
            className="ml-4"
          >
            <option value="ru">Русский</option>
            <option value="en">English</option>
          </Select>
        </div>
      </div>
    </header>
  );
};
