// app/providers.tsx
'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { PropsWithChildren, useEffect } from 'react';

export const PostHogProvider = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    posthog.init(String(process.env.NEXT_PUBLIC_POSTHOG_KEY), {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      capture_pageview: false, // Disable automatic pageview capture, as we capture manually
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
};
