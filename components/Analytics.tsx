import Script from 'next/script';
import { globalConfig } from '@/lib/config';
export const Analytics: React.VFC = () =>
  typeof window != 'undefined' &&
  window.location.href.includes(globalConfig.siteUrl) ? (
    <Script src="/bee.js" data-api="/_hive" strategy="afterInteractive" />
  ) : null;