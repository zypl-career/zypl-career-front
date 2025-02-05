import {
  CareerTips,
  FollowFuture,
  Hero,
  Navbar,
  Partners,
  partnersData,
  ToolsInspirationUI,
} from '@entities';
import { Footer } from '@widgets';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'HomePage' });

  return {
    title: `Касби ман | ${t('title')}`,
    description: t('about'),
  };
}

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <ToolsInspirationUI />
      <CareerTips />
      <FollowFuture />
      <Partners data={partnersData} />
      <Footer />
    </div>
  );
};

export default HomePage;
