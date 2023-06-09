
"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    if (location?.protocol !== 'https:') {
      location.replace(`https:${location.href.substring(location.protocol.length)}`);
    }
  }, [])
  return (
    <div className={styles.divAll}>
      <Image src="/images/closet-do-bem.png" alt='brecho' width={600} height={800} />
    </div>
  )

}
