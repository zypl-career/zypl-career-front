import { Button, LogoIcon, Select } from '@/shared';

export const Header = () => {
  return (
    <header className="w-full bg-purple-800 py-5 md:px-20">
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
            options={['Русский', 'Английсский']}
            size="default"
            className="ml-4"
          />
        </div>
      </div>
    </header>
  );
};
