import {ModernSpecialHero, Navbar} from '@/entities';

export const ModernSpecialPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen overflow-x-hidden">
      <Navbar />
        <ModernSpecialHero />
    </div>
  );
};
export default ModernSpecialPage;
