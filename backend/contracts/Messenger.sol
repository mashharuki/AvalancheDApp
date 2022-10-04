// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "./Ownable.sol";

/**
 * Messenger Contract
 */
contract Messenger is Ownable {

    uint256 public numOfPendingLimits;

    // Struct of Message
    struct Message {
        address payable sender;
        address payable receiver;
        uint256 depositInWei;
        uint256 timestamp;
        string text;
        bool isPending;
    }

    mapping(address => Message[]) private messagesAtAddress;
    mapping(address => uint256) private numOfPendingAtAddress;

    // event
    event NewMessage(
        address sender,
        address receiver,
        uint256 depositInWei,
        uint256 timestamp,
        string text,
        bool isPending
    );
    event MessageConfirmed(address receiver, uint256 index);
    event NumOfPendingLimitsChanged(uint256 limits);

    constructor(uint256 _numOfPendingLimits) payable {
        console.log("Here is my first smart contract!");
        ownable();
        numOfPendingLimits = _numOfPendingLimits;
    }

    /**
     * post function
     */
    function post(string memory _text, address payable _receiver) public payable {

        // check
        require(
            numOfPendingAtAddress[_receiver] < numOfPendingLimits,
            "The receiver has reached the number of pending limits"
        );

        // increment
        numOfPendingAtAddress[_receiver] += 1;
        
        console.log(
            "%s posts text:[%s] token:[%d]",
            msg.sender,
            _text,
            msg.value
        );

        messagesAtAddress[_receiver].push(Message(
            payable(msg.sender),
            _receiver,
            msg.value,
            block.timestamp,
            _text,
            true
        ));

        emit NewMessage(msg.sender, _receiver, msg.value, block.timestamp, _text, true);
    }

    /**
     * accept function
     */
    function accept(uint256 _index) public {
        // cofirm message
        confirmMessage(_index);

        Message memory message = messagesAtAddress[msg.sender][_index];
        // send avax
        sendAvax(message.receiver, message.depositInWei);

        emit MessageConfirmed(message.receiver, _index);
    }

    /**
     * deny message function
     */
    function deny(uint256 _index) public payable {
        // cofirm message
        confirmMessage(_index);
        // get message
        Message memory message = messagesAtAddress[msg.sender][_index];
        // return avax to sender
        sendAvax(message.sender, message.depositInWei);

        emit MessageConfirmed(message.receiver, _index);
    }

    /**
     * confirmMessage
     */
    function confirmMessage(uint256 _index) private {
        // get message
        Message storage message = messagesAtAddress[msg.sender][_index];

        // check
        require(msg.sender == message.receiver, "Only the receiver can confirmMessage the message");
        require(message.isPending == true, "This message has already been confirmed");

        // change status
        message.isPending = false;
    }

    /**
     * send avax function
     */
    function sendAvax(address payable _to, uint256 _amountInWei) private {
        // send
        (bool success, ) = (_to).call{value: _amountInWei}("");
        // check 
        require(success, "Failed to withdraw AVAX from contract");
    }

    /**
     * get all message function
     */
    function getOwnMessages() public view returns (Message[] memory) {
        return messagesAtAddress[msg.sender];
    }

    /**
     * change Num of pending limits function
     */
    function changeNumOfPendingLimits(uint256 _limits) external onlyOwner {
        numOfPendingLimits = _limits;
        emit NumOfPendingLimitsChanged(numOfPendingLimits);
    }
}