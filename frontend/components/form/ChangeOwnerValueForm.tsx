import styles from "./Form.module.css";
import { BigNumber } from "ethers";
import { useState } from "react";

// Type of Props
type Props = {
  processing: boolean;
  currentValue: BigNumber | undefined;
  changeValue: (limits: BigNumber) => void;
};

/**
 * ChangeOwnerValueForm Component
 * @param param0 
 * @returns 
 */
function ChangeOwnerValueForm({
    processing,
    currentValue,
    changeValue,
}: Props) {
    const [limits, setLimits] = useState<string>("0");

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <div className={styles.title}>
                    Change number of pending messages limits !
                </div>
                {processing ? (
                    <p>processing...</p>
                ) : (
                    <p>current limits: {currentValue?.toNumber()}</p>
                )}

                <input
                    type="number"
                    name="limits_number"
                    placeholder="limits"
                    id="input_limits"
                    min={0}
                    className={styles.number}
                    onChange={(e) => setLimits(e.target.value)}
                />

                <div className={styles.button}>
                    <button
                        onClick={() => {
                            changeValue(BigNumber.from(limits));
                        }}
                    >
                        change{" "}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ChangeOwnerValueForm;