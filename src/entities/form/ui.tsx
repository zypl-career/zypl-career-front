import { Button, Input, RadioGroup, RadioGroupItem, Select } from '@/shared';

export const FormInfo = () => {
  return (
    <div className="bg-white py-8 px-7 max-w-md mx-auto rounded-lg border my-10">
      <p className="font-semibold mb-4 pb-3 border-b">
        Чтобы предоставить вам наилучшие рекомендации, пожалуйста, ответьте на
        несколько вопросов:
      </p>
      <div>
        <div className="mb-4">
          <label className="block text-gray-700">Ваш пол</label>
          <div className="mt-2">
            <RadioGroup defaultValue="option-one">
              <RadioGroupItem
                value="option-one"
                id="option-one"
                label="Мужской"
              />
              <RadioGroupItem
                value="option-two"
                id="option-two"
                label="Женский"
              />
            </RadioGroup>
          </div>
        </div>
        <div className="mb-4">
          <Select
            variant="outline"
            options={['Душанбе', 'Худжанд']}
            size="default"
            label="Город"
          />
        </div>
        <div className="mb-4">
          <Input variant="outline" label="Ваш возраст" />
        </div>
        <div className="flex justify-between">
          <Button variant="ghost">Отменить</Button>
          <Button
            variant="subscribe"
            showRightArrowIcon={true}
            size="subscribe"
          >
            Продолжить
          </Button>
        </div>
      </div>
    </div>
  );
};
