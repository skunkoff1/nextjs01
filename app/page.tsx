import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>HEllo WOrld</h1>
      <Link href="/about">Link to about</Link>
    </main>
  )
}
