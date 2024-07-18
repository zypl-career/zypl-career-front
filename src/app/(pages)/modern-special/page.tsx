import {
  ContentModernSpecial,
  KeyFindingsSection,
  ModernSpecialHero,
  Navbar,
} from '@/entities';

export const ModernSpecialPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <ModernSpecialHero />
      <ContentModernSpecial />
    </div>
  );
};
export default ModernSpecialPage;
