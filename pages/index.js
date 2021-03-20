import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/common/Layout";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Layout>
          <h1>Home Page</h1>

          <Link href="/signin">
            <a>Login</a>
          </Link>

          <Link href="/signup">
            <a>register</a>
          </Link>

          <p>Authenticated users!</p>
          <Link href="/secret">
            <a>profile</a>
          </Link>
        </Layout>
      </main>

      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}
