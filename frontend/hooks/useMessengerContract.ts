import { useState, useEffect } from "react";
import { BigNumber, ethers } from "ethers";
import abi from "../utils/Messenger.json";
import { getEthereum } from "../utils/ethereum";
import { Messenger as MessengerType } from "../typechain-types";

const contractAddress = "0xfe03B6a6B4B095248F06Ed9528e913995ED58f97";
const contractABI = abi.abi;

export type Message = {
  sender: string;
  receiver: string;
  depositInWei: BigNumber;
  timestamp: Date;
  text: string;
  isPending: boolean;
};

type PropsSendMessage = {
  text: string;
  receiver: string;
  tokenInEther: string;
};

type ReturnUseMessengerContract = {
  processing: boolean;
  ownMessages: Message[];
  owner: string | undefined;
  numOfPendingLimits: BigNumber | undefined;
  sendMessage: (props: PropsSendMessage) => void;
  acceptMessage: (index: BigNumber) => void;
  denyMessage: (index: BigNumber) => void;
  changeNumOfPendingLimits: (limits: BigNumber) => void;
};

type PropsUseMessengerContract = {
  currentAccount: string | undefined;
};

/**
 * useMessengerContract Component
 * @param param0 currentAccount
 */
export const useMessengerContract = ({
  currentAccount,
}: PropsUseMessengerContract): ReturnUseMessengerContract => {
  // state variable
  const [processing, setProcessing] = useState<boolean>(false);
  const [messengerContract, setMessengerContract] = useState<MessengerType>();
  const [ownMessages, setOwnMessages] = useState<Message[]>([]);
  const [owner, setOwner] = useState<string>();
  const [numOfPendingLimits, setNumOfPendingLimits] = useState<BigNumber>();

  // get ethereum object
  const ethereum = getEthereum();

  /**
   * getMessengerContract function
   */
  function getMessengerContract() {
    try {
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const MessengerContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        ) as MessengerType;
        setMessengerContract(MessengerContract);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * getOwnMessages function
   */
  async function getOwnMessages() {
    if (!messengerContract) return;

    try {
      // call getOwnMessages function
      const OwnMessages = await messengerContract.getOwnMessages();

      const messagesCleaned: Message[] = OwnMessages.map((message: any) => {
        return {
          sender: message.sender,
          receiver: message.receiver,
          depositInWei: message.depositInWei,
          timestamp: new Date(message.timestamp.toNumber() * 1000),
          text: message.text,
          isPending: message.isPending,
        };
      });
      setOwnMessages(messagesCleaned);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * sendMessage function
   * @param param0 
   * @returns 
   */
  async function sendMessage({
    text,
    receiver,
    tokenInEther,
  }: PropsSendMessage) {
    if (!messengerContract) return;

    try {
      const tokenInWei = ethers.utils.parseEther(tokenInEther);
      
      console.log(
        "call post with receiver:[%s], token:[%s]",
        receiver,
        tokenInWei.toString()
      );
      // call post function
      const txn = await messengerContract.post(text, receiver, {
        gasLimit: 300000,
        value: tokenInWei,
      });

      console.log("Processing...", txn.hash);
      setProcessing(true);
      await txn.wait();

      console.log("Done -- ", txn.hash);
      setProcessing(false);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * acceptMessage function
   * @param index 
   * @returns 
   */
  async function acceptMessage(index: BigNumber) {
    if (!messengerContract) return;
    try {
      console.log("call accept with index [%d]", index);
      // call accept function
      const txn = await messengerContract.accept(index, {
        gasLimit: 300000,
      });

      console.log("Processing...", txn.hash);
      setProcessing(true);
      await txn.wait();
      console.log("Done -- ", txn.hash);
      setProcessing(false);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * denyMessage function 
   * @param index 
   * @returns 
   */
  async function denyMessage(index: BigNumber) {
    if (!messengerContract) return;
    try {
      console.log("call deny with index [%d]", index);
      // deny function
      const txn = await messengerContract.deny(index, {
        gasLimit: 300000,
      });

      console.log("Processing...", txn.hash);
      setProcessing(true);
      await txn.wait();
      console.log("Done -- ", txn.hash);
      setProcessing(false);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * get owner address function
   */
  async function getOwner() {
    if (!messengerContract) return;
    try {
      console.log("call getter of owner");
      // call owner() function
      const owner = await messengerContract.owner();
      // set
      setOwner(owner.toLocaleLowerCase());
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * getNumOfPendingLimits function 
   */
  async function getNumOfPendingLimits() {
    if (!messengerContract) return;
    try {
      console.log("call getter of numOfPendingLimits");
      // call numOfPendingLimits function
      const limits = await messengerContract.numOfPendingLimits();
      // set 
      setNumOfPendingLimits(limits);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * changeNumOfPendingLimits function
   * @param limits new limit 
   * @returns 
   */
  async function changeNumOfPendingLimits(limits: BigNumber) {
    if (!messengerContract) return;
    try {
      console.log("call changeNumOfPendingLimits with [%d]", limits.toNumber());
      // call changeNumOfPendingLimits function
      const txn = await messengerContract.changeNumOfPendingLimits(limits, {
        gasLimit: 300000,
      });

      console.log("Processing...", txn.hash);
      setProcessing(true);
      await txn.wait();
      console.log("Done -- ", txn.hash);
      setProcessing(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMessengerContract();
    getOwnMessages();
    getOwner();
    getNumOfPendingLimits();
  }, [currentAccount, ethereum]);

  useEffect(() => {
    // event listener
    const onNewMessage = (
      sender: string,
      receiver: string,
      depositInWei: BigNumber,
      timestamp: BigNumber,
      text: string,
      isPending: boolean
    ) => {
      console.log("NewMessage from %s to %s", sender, receiver);
      
      if (receiver.toLocaleLowerCase() === currentAccount) {
        setOwnMessages((prevState) => [
          ...prevState,
          {
            sender: sender,
            receiver: receiver,
            depositInWei: depositInWei,
            timestamp: new Date(timestamp.toNumber() * 1000),
            text: text,
            isPending: isPending,
          },
        ]);
      }
    };

    const onMessageConfirmed = (receiver: string, index: BigNumber) => {
      console.log(
        "MessageConfirmed index:[%d] receiver: [%s]",
        index.toNumber(),
        receiver
      );

      if (receiver.toLocaleLowerCase() === currentAccount) {
        setOwnMessages((prevState) => {
          // chage status
          prevState[index.toNumber()].isPending = false;
          return [...prevState];
        });
      }
    };

    const onNumOfPendingLimitsChanged = (limitsChanged: BigNumber) => {
      console.log(
        "NumOfPendingLimitsChanged limits:[%d]",
        limitsChanged.toNumber()
      );
      setNumOfPendingLimits(limitsChanged);
    };
  

    if (messengerContract) {
      messengerContract.on("NewMessage", onNewMessage);
      messengerContract.on("MessageConfirmed", onMessageConfirmed);
      messengerContract.on("NumOfPendingLimitsChanged", onNumOfPendingLimitsChanged);
    }

    return () => {
      if (messengerContract) {
        messengerContract.off("NewMessage", onNewMessage);
        messengerContract.off("MessageConfirmed", onMessageConfirmed);
        messengerContract.off("NumOfPendingLimitsChanged", onNumOfPendingLimitsChanged);
      }
    };
  }, [messengerContract]);

  return {
    processing,
    ownMessages,
    owner,
    numOfPendingLimits,
    sendMessage,
    acceptMessage,
    denyMessage,
    changeNumOfPendingLimits,
  };
}