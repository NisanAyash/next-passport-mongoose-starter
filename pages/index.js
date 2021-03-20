import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Home Page</h1>

        <Link href="/signin">
          <a>Login</a>
        </Link>

        <Link href="/signup">
          <a>register</a>
        </Link>

        <p>Just auth users could get in to profile page</p>
        <Link href="/secret">
          <a>profile</a>
        </Link>
      </main>

      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}
