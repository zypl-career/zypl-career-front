import { feedbackOptions } from '.';

export const FeedbackContent = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg border p-6">
        {feedbackOptions.map((option, index) => (
          <div
            key={option.id}
            className={`py-4 ${index < feedbackOptions.length - 1 ? 'border-b' : ''}`}
          >
            <div className="text-container flex flex-col sm:flex-row items-center justify-between">
              <div className="text-gray-700">{option.text}</div>
              <div className="icons-container flex space-x-2 mt-4 sm:mt-0">
                {option.icons.map((Icon, index) => (
                  <div
                    key={index}
                    className="text-2xl transition-transform transform hover:scale-110 focus:outline-none"
                  >
                    <Icon />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
