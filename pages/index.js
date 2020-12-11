import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 class='is-size-1'>KO4JZT</h1>

      <p>👋🏻 Hi there! I'm Colin KO4JZT, I'm 17 years old and recently got my amateur radio technician license.<br />
      This site will soon be a hub for blog posts I write, APIs I make for ham radio, etc. For now, this is a placeholder.<br />
      In the meantime, check this out!
      </p>

      <a href='https://www.qrz.com/db/ko4jzt'><button class='button is-primary'>QRZ.com Page</button></a>

      <footer className={styles.footer}>
        Made with 💚 by Bender
      </footer>
    </div>
  )
}
