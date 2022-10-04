import type { NextPage } from 'next'
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import RequireWallet from "../components/layout/RequireWallet";
import { useWallet } from "../hooks/useWallet";

/**
 * Home Component
 */
const Home: NextPage = () => {
    const { currentAccount, connectWallet } = useWallet();

    return (
      <Layout home>
        <RequireWallet
          currentAccount={currentAccount}
          connectWallet={connectWallet}
        >
          <div className={styles.container}>
            <main className={styles.main}>
              <h1 className={styles.title}>Welcome to Messenger 📫</h1>
              <div className={styles.card}>
                <Link href="/message/SendMessagePage">
                  <h2>send &rarr;</h2>
                </Link>
                <p>send messages and avax to other accounts</p>
              </div>
              <div className={styles.card}>
                <Link href="/message/ConfirmMessagePage">
                  <h2>check &rarr;</h2>
                </Link>
                <p>Check messages from other accounts</p>
              </div>
            </main>
          </div>
        </RequireWallet>
      </Layout>
    )
}

export default Home
