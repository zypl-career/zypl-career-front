'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { PropsWithChildren, useEffect } from 'react';

import 'posthog-js/dist/exception-autocapture';
import 'posthog-js/dist/recorder';
import 'posthog-js/dist/surveys';
import 'posthog-js/dist/tracing-headers';
import 'posthog-js/dist/web-vitals';

export const PostHogProvider = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    posthog.init(String(process.env.NEXT_PUBLIC_POSTHOG_KEY), {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      person_profiles: 'identified_only',
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
};
