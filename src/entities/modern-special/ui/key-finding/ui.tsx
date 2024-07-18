import { FC } from 'react';

import { KEY_FINDINGS } from '@/entities';
import { KeyFindingsUI } from '@/shared';

export const KeyFindingsSection: FC = () => {
  return (
    <div>
      {KEY_FINDINGS.map((finding, index) => (
        <div key={index} className="bg-[#F2F5F8] rounded-xl py-8 px-10">
          <KeyFindingsUI title={finding.title} content={finding.content} />
          {finding.content.map((item, subIndex) => (
            <div className="py-2" key={subIndex}>
              <p className="font-bold">{item.subtitle}</p>
              <p className="leading-9">{item.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
