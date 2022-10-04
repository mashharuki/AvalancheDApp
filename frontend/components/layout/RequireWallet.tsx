import styles from "./RequireWallet.module.css";

// Type of Props
type Props = {
    children: React.ReactNode;
    currentAccount: string | undefined;
    connectWallet: () => void;
};

/**
 * RequireWallet Component
 * @param param0 
 * @returns 
 */
function RequireWallet({
    children,
    currentAccount,
    connectWallet, 
}: Props) {

    return (
        <div>
            {currentAccount ? (
                <div>
                    <div className={styles.wallet}>
                        <p className={styles.title}>wallet: </p>
                        <p>{currentAccount}</p>
                    </div>
                    {children}
                </div>
            ) : (
                <button 
                    className="connectWalletButton" 
                    onClick={connectWallet}
                >
                    Connect Wallet
                </button>
            )}
        </div>
    );
}

export default RequireWallet;