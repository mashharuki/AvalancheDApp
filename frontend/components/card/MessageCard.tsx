import { ethers } from "ethers";
import { Message } from "../../hooks/useMessengerContract";
import styles from "./MessageCard.module.css";

/**
 * Type of Props
 */
type Props = {
    message: Message;
    onClickAccept: () => void;
    onClickDeny: () => void;
};

/**
 * MessageCard Component
 * @param param0 
 * @returns 
 */
function MessageCard({
  message,
  onClickAccept,
  onClickDeny,
}: Props) {
    // deposit
    const depositInEther = ethers.utils.formatEther(message.depositInWei);

    return (
        <div className={styles.card}>
            <p className={styles.title}>from {message.sender}</p>
            <p>AVAX: {depositInEther}</p>
            <p className={styles.text}>{message.text}</p>
            {message.isPending && (
                <div className={styles.container}>
                    <button 
                        className={styles.item} 
                        onClick={onClickAccept}
                    >
                        accept
                    </button>
                    <button 
                        className={styles.item} 
                        onClick={onClickDeny}
                    >
                        deny
                    </button>
                </div>
            )}
            <p className={styles.date}>{message.timestamp.toDateString()}</p>
        </div>
    );
}

export default MessageCard;