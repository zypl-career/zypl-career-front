import { RegistrationUI } from '@/features';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'formRegister' });

  return {
    title: `Kasbi man | ${t('seoDescription')}`,
    description: t('seoDescription'),
  };
}

const RegisterPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <RegistrationUI />
    </div>
  );
};

export default RegisterPage;
