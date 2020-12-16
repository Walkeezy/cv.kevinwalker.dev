import { Head } from './components/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head title="Kevin Walker – Webentwickler"></Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Kevin Walker</h1>
        <p className={styles.description}>Webdeveloper & digital consultant</p>
      </main>
    </div>
  )
}
