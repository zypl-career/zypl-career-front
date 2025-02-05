'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { WarnIcon } from '@icons';
import { Button, Modal } from '@ui';
import { useUserStore } from '@stores';

export const ApproveTestModal = () => {
  const t = useTranslations('HomePage');
  const router = useRouter();
  const [toggleApprove, setToggleApprove] = useState(false);
  const { isAuth } = useUserStore();
  
  const handleToTest = useCallback(() => {
    isAuth ? router.push('/test/values') : setToggleApprove(true);
  }, [isAuth, router]);
  
  return (
    <>
      <Button rounded="full" showRightArrowIcon onClick={handleToTest}>
        {t('test')}
      </Button>
      <Modal toggle={toggleApprove} setToggle={setToggleApprove}>
        <div className="flex justify-center">
          <WarnIcon />
        </div>
        <div className="text-center">{t('approveTitle')}</div>
        <Button
          size="md"
          rounded="full"
          showRightArrowIcon
          asChild
        >
          <Link href="/auth/register">{t('register')}</Link>
        </Button>
        <Button variant="outlineSecondary" size="md" rounded="full" asChild>
          <Link href="/test/form">{t('continueWithoutRegistration')}</Link>
        </Button>
      </Modal>
    </>
  );
};
