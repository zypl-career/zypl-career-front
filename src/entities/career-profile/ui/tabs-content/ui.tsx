import { Tabs } from '@/entities';
import { ProgressBar } from '@/shared';

export const TabsContent = () => {
  return (
    <div className="px-5 lg:px-36 py-10">
      <Tabs />
      <ProgressBar size="small" percentage={20} />
    </div>
  );
};
