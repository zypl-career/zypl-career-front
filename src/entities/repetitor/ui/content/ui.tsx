import Image from 'next/image';

import { RepetitorMain } from '@/shared';
import {
  GENERAL_INFO_CONTENT_REPETITOR,
  GENERAL_INFO_HEADING_REPETITOR,
} from '@/entities';

export const RepetitorContent = () => {
  return (
    <div className="p-4">
      <div className="lg:px-[25%]">
        <h3 className="font-semibold text-2xl mb-4">
          {GENERAL_INFO_HEADING_REPETITOR}
        </h3>
      </div>
      <div className="flex justify-center mb-4">
        <Image src={RepetitorMain} alt="repetitor.tj" />
      </div>
      <div className="lg:px-24">
        <div className="lg:w-[58%] md:w-full mx-auto">
          <p
            className="text-gray-600"
            dangerouslySetInnerHTML={{ __html: GENERAL_INFO_CONTENT_REPETITOR }}
          />
        </div>
      </div>
    </div>
  );
};
