import { RadioGroup, RadioGroupItem } from '@/shared';

export const CardValuesSurveys = () => {
  return (
    <div className="p-4 bg-white border rounded-lg lg:mx-80">
      <RadioGroup defaultValue="option-one">
        <div className="flex items-center">
          <RadioGroupItem
            value="option-one"
            id="option-one"
            label="Official / Registered Employee (NOT YOUR FAMILY BUSINESS)"
          />
        </div>
      </RadioGroup>
    </div>
  );
};
    