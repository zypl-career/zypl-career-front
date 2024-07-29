import { feedbackOptions } from '.';

export const FeedbackValues = () => {
  return (
    <section>
      <h3 className="font-semibold py-8">
        Насколько важным для Вас является каждое из следующих утверждений?
      </h3>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
        {feedbackOptions.map(({ Icon, label }, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Icon className="w-8 h-8" />
            <p>{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
