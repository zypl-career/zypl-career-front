import { TEXTS } from '.';
import { WarnContent } from '@/shared';

export const ContentModernSpecial = () => {
  return (
    <div className="lg:px-48">
      <div className="leading-9">
        <p className="py-4 text-[#2B2B2B]">{TEXTS.paragraph1}</p>
        <WarnContent title={TEXTS.warnContent1} />
        <p className="py-2">{TEXTS.paragraph2}</p>
        <h2>{TEXTS.header1}</h2>
        <p className="py-2">
          {TEXTS.paragraph3.split('\n').map((text, index) => (
            <span key={index}>{text}</span>
          ))}
        </p>
        <WarnContent title={TEXTS.warnContent2} />
        <p className="py-2">
          {TEXTS.paragraph3.split('\n').map((text, index) => (
            <span key={index}>{text}</span>
          ))}
        </p>
      </div>
      <div className="pb-2">
        <WarnContent title={TEXTS.warnContent2} />
        <h2 className="py-2">{TEXTS.header2}</h2>
        <WarnContent title={TEXTS.warnContent3} />
      </div>
    </div>
  );
};
