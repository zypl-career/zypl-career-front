'use client';

import React, { useState } from 'react';
import { TForgotPasswordSteps } from './types';
import { ForgotPasswordEmail } from './components/email';
import { ForgotPasswordPassword } from './components/password';
import { ForgotPasswordCode } from './components/code';
import {
  TForgotComponentsProps,
  TForgotComponentsValues,
  TOnDoneParams,
} from './components/types';
import { ForgotSuccess } from './components/success';

const ForgotPasswordComponents = ({
  onDone,
  values,
}: TForgotComponentsProps) => {
  return {
    email: <ForgotPasswordEmail values={values} onDone={onDone} />,
    code: <ForgotPasswordCode values={values} onDone={onDone} />,
    newPassword: <ForgotPasswordPassword values={values} onDone={onDone} />,
    success: <ForgotSuccess values={values} onDone={onDone} />,
  };
};

export const ForgotPassword = () => {
  const [renderComponentByKey, setRenderComponentByKey] =
    useState<TForgotPasswordSteps>('success');
  const [values, setValues] = useState<Partial<TForgotComponentsValues>>({});

  const handleSendCode = async (params: TOnDoneParams) => {
    setValues(params.values);
    setRenderComponentByKey(params.key);
  };

  return (
    <main className="bg-gray-100 h-[calc(100dvh-90px)] flex items-center justify-center">
      {
        ForgotPasswordComponents({ onDone: handleSendCode, values })[
          renderComponentByKey
        ]
      }
    </main>
  );
};
