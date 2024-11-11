import { useTranslations } from 'next-intl';
import { TNavbarItem } from '@/entities';

export const useNavbarData = () => {
  const t = useTranslations('navbar');
  const NavbarData: TNavbarItem[] = [
    { title: t('main'), link: '/' },
    { title: t('teachers'), link: '/teachers' },
    { title: t('parents'), link: '/parents' },
    { title: t('aboutUs'), link: '/about-us' },
    { title: t('partners'), link: '/partners' }
  ];
  return NavbarData;
};
