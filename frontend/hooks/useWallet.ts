import { useEffect, useState } from "react";
import { getEthereum } from "../utils/ethereum";

// Type of return
type ReturnUseWallet = {
  currentAccount: string | undefined;
  connectWallet: () => void;
};

/**
 * useWallet component
 * @returns ReturnUseWallet
 */
export const useWallet = (): ReturnUseWallet => {
    // state variable
    const [currentAccount, setCurrentAccount] = useState<string>();
    // get metamask object
    const ethereum = getEthereum();

    /**
     * connectWallet function
     */
    const connectWallet = async () => {
        try {
            if (!ethereum) {
                alert("Get MetaMask!");
                return;
            }
            
            const accounts = await ethereum.request({method: "eth_requestAccounts",});

            if (!Array.isArray(accounts)) return;
            
            console.log("Connected: ", accounts[0]);
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);
        }
    };

    /**
     * checkIfWalletIsConnected function
     */
    const checkIfWalletIsConnected = async () => {
        try {
            if (!ethereum) {
                console.log("Make sure you have MetaMask!");
                return;
            } else {
                console.log("We have the ethereum object", ethereum);
            }
            
            const accounts = await ethereum.request({ method: "eth_accounts" });

            if (!Array.isArray(accounts)) return;
            
            if (accounts.length !== 0) {
                const account = accounts[0];
                console.log("Found an authorized account:", account);
                setCurrentAccount(account);
            } else {
                console.log("No authorized account found");
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    return {
        currentAccount,
        connectWallet,
    };
};
