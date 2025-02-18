import { Button, Input } from '@ui';
import { FC, useState } from 'react';
import { TForgotComponentsProps } from './types';
import { sendCode } from '../services';
import Link from 'next/link';
import { toast } from 'sonner';
import { useTranslations } from 'next-intl';

export const ForgotPasswordEmail: FC<TForgotComponentsProps> = ({ onDone }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const t = useTranslations('forgotPassowrdSections');

  const handleSendCode = async () => {
    try {
      setIsLoading(true);
      const { message } = await sendCode(email);
      onDone({
        message,
        values: { email },
        key: message === 'code successfully sended' ? 'code' : 'email',
      });
    } catch (error: any) {
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white max-w-96 container rounded-md px-5 py-5">
      <p className="font-bold  md:text-2xl">
        {t('email.title')}
      </p>
      <div className="py-5">
        <Input
          label="Email*"
          variant="outline"
          placeholder="example@mail.com"
          onChange={(e) => setEmail(e.target.value)}
          onEnter={handleSendCode}
          value={email}
          disabled={isLoading}
        />
      </div>
      <div className="flex flex-col gap-4">
        <Button
          variant="default"
          showRightArrowIcon
          disabled={isLoading}
          onClick={handleSendCode}
          rounded="full"
        >
          {t('buttons.next')}
        </Button>
        <Button variant="outline" asChild rounded="full">
          <Link href="/auth/login">
            {t('buttons.back')}
          </Link>
        </Button>
      </div>
    </div>
  );
};
