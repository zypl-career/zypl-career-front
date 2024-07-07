import { Button, LogoIcon, Select } from '@/shared';

export const Header = () => {
  return (
    <header className="bg-purple-800 py-5">
      <div className="flex justify-between px-5">
        <LogoIcon />
        <Button showGlassesIcon={true} variant="secondary" size="default">
          Версия для слабовидящих
        </Button>
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
    </header>
  );
};
