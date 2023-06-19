"use client"
import { MOBILE_LIMIT_WIDTH } from '@/constants';
import { useWindowSize } from '@/hooks/useWindowSize';
import { PageMobile } from './page.mobile';
import { PageDesktop } from './page.desktop';
import { useEffect } from 'react';


export default function Home() {
  const size = useWindowSize();

  useEffect(() => {
    if (location?.protocol !== 'https:') {
      location.replace(`https:${location.href.substring(location.protocol.length)}`);
    }
  }, [])

  if (size?.width <= MOBILE_LIMIT_WIDTH) {
  return <PageMobile />
  }

  return <PageDesktop />
}
