import Head from "next/head";
import styles from "./Layout.module.css";
import Link from "next/link";

/**
 * Type of Props
 */
type Props = {
    children: React.ReactNode;
    home?: boolean;
};

/**
 * Layout Component
 * @param param0 
 * @returns 
 */
function Layout({ children, home }: Props) {

    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.png" />
                <meta
                    name="description"
                    content="It is a message dapp that exchanges text and AVAX"
                />
                <title>Messenger Dapp</title>
            </Head>
            {/* children */}
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Layout;