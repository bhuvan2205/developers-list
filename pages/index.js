import Head from 'next/head';
import Link from "next/link";
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <>
      <Head>
        <title>Developers | Home</title>
        <meta name='keywords' content='developers' />
      </Head>
      <div className="content">
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
        <p className={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
        <Link href='/developers'>
          <a className={styles.btn}>See all Developers</a>
        </Link>
      </div>
    </>
  )
}

export default Home;