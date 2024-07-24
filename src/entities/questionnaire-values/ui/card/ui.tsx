import { RadioGroupCard } from '@/shared';
import { LABELS_QUESTION } from '.';

export const CardQuestionnaireValues = () => {
  return (
    <div>
      <h3 className="font-semibold lg:px-80">
        Кадоме аз гуфтаҳои зерин аз ҳама бештар вазъи шуғли /кори падаратонро
        инъикос менамояд?
      </h3>
      {LABELS_QUESTION.map((label, index) => (
        <RadioGroupCard key={index} label={label} />
      ))}
    </div>
  );
};
