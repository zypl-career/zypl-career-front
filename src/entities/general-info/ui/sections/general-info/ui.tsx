import Image from 'next/image';
import { GeneralInfo } from '@/shared';

export const GeneralInfoSection = () => {
  return (
    <div>
      <div className="lg:px-60">
        <h2 className="text-3xl font-bold py-4">Общие сведения</h2>
        <Image src={GeneralInfo} alt="general-info" />
      </div>
    </div>
  );
};
