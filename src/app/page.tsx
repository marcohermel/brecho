
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {

  return (
    <div className={styles.divAll}>
      <Image src="/images/closet-do-bem.png" alt='brecho' width={600} height={800} />
    </div>
  )

}
