import { GENERAL_INFO_CONTENT } from '.';

export const GeneralInfoContent = () => {
  return (
    <div className="lg:px-60 pb-28">
      <p
        className="text-gray-600 leading-8 py-5"
        dangerouslySetInnerHTML={{ __html: GENERAL_INFO_CONTENT }}
      />
    </div>
  );
};
