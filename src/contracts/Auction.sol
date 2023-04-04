//SPDX-License-Identifier: MIT
pragma solidity >=0.7.00 <0.9.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";


contract Auction is ERC721URIStorage, ReentrancyGuard {
    //Counting total tokens (NFT in the Marketplace)
    using Counter for Counter.Counter;
    Counter.Counter private totalItems;

    uint _royaltyFee;
    address compnayAcc;


    //constructor to run first to initialize variables before interactions begin
    constructor(uint _royaltyFee) ERC721("uc tokens", "DAT") {
        royaltyFee = _royaltyFee;
        companyAcc = msg.sender;

    }



}