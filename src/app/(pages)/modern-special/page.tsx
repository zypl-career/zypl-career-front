import { ContentModernSpecial, ModernSpecialHero, Navbar } from '@/entities';
import { KeyFindingsUI } from '@/shared/ui/key-findings/ui';

export const ModernSpecialPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen overflow-x-hidden">
      <Navbar />
      <ModernSpecialHero />
      <ContentModernSpecial />
      <KeyFindingsUI
        title="Ключевые выводы:"
        subtitle="Школьные проекты могут стать отправной точкой для создания успешного бизнеса."
        description=" Даже небольшое задание может перерасти в серьезное дело при должном подходе и энтузиазме."
      />
    </div>
  );
};
export default ModernSpecialPage;
