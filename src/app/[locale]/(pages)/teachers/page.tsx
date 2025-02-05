import { Navbar, ResourcesTeachers, TeachersHero } from '@entities';
import { Footer } from '@/widgets';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'teachersHero' });

  return {
    title: `Касби ман | ${t('title')}`,
    description: t('title'),
  };
}

const TeachersPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <TeachersHero />
      {/* <YourPupil /> */}
      <ResourcesTeachers />
      <Footer />
    </div>
  );
};

export default TeachersPage;
