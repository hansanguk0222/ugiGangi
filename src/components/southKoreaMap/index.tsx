'use client';

import { loadNaverMap } from '@/utils/loadNaverMap';
import Script from 'next/script';

export const SouthKoreaMap = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_ID}`}
        onReady={loadNaverMap}
      />
      <div id="naverMap" className="w-full h-full" />
    </>
  );
};
