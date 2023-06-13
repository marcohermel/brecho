"use client"
import { MOBILE_LIMIT_WIDTH } from '@/constants';
import { useWindowSize } from '@/hooks/useWindowSize';
import { PageMobile } from './page.mobile';
import { PageDesktop } from './page.desktop';


export default function Home() {
  const size = useWindowSize();

  //if (size?.width <= MOBILE_LIMIT_WIDTH) {
  return <PageMobile />
  //}

 // return <PageDesktop />
}
