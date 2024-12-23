'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { WarnIcon, getUser } from '@/shared';
import { Button, Modal } from '@ui';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const ApproveTestModal = () => {
  const t = useTranslations('HomePage');
  const router = useRouter();
  const [toggleApprove, setToggleApprove] = useState(false);
  const { isAuth } = getUser();
  const handleToTest = () => {
    isAuth ? router.push('/test/values') : setToggleApprove(true);
  };
  return (
    <>
      <Button rounded="full" showRightArrowIcon onClick={handleToTest}>
        {t('test')}
      </Button>
      <Modal toggle={toggleApprove} setToggle={setToggleApprove}>
        <div className="flex justify-center">
          <WarnIcon />
        </div>
        <div className="text-center">
          Для последующего сохранение результатов тестирования,
          зарегистрируйтесь в системе
        </div>
        <Button
          variant="default"
          size="md"
          showRightArrowIcon
          rounded="full"
          asChild
        >
          <Link href="/auth/register">Регистрация</Link>
        </Button>
        <Button variant="outlineSecondary" size="md" rounded="full" asChild>
          <Link href="/test/form">Продолжить без регистрации</Link>
        </Button>
      </Modal>
    </>
  );
};
