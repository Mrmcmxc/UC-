//SPDX-License-Identifier: MIT
pragma solidity >= 0.7.0 < 0.9.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";


contract Auction is ERC721URIStorage, ReentrancyGuard {
    //Counting total tokens (NFT in the Marketplace)
    using Counters for Counters.Counter;
    Counters.Counter private totalItems;

    struct AuctionStruct {
        string name;
        string description;
        string image;
        uint tokenId;
        address seller;
        address owner;
        address winner;
        uint price;
        bool sold;
        bool live;
        uint bids;
        uint duration;
        bool biddable;

    }

    event AuctionItemCreated(
        uint indexed tokenId,
        address seller,
        address owner,
        uint price,
        bool sold
    );

    uint royaltyFee;
    address companyAcc;
    uint listingPrice = 0.02 ether;

    //this mapping ensure that every token Id is assigned via the Auction structure
    mapping(uint => AuctionStruct) auctionedItem;
    mapping(uint => bool) auctionedItemExist;
    


    //constructor to run first to initialize variables before interactions begin
     constructor(uint _royaltyFee) ERC721("Daltonic Tokens", "DAT") {
        royaltyFee = _royaltyFee;
        companyAcc = msg.sender;
    }

    //complete mint token function
    function mintToken(string memory tokenURI) internal returns (bool){
        totalItems.increment();
        uint tokenId = totalItems.current();
        // mint function pulled from Openzepplin ERC721
        _mint(msg.sender, tokenId);
        //Meta Data 
        _setTokenURI(tokenId, tokenURI);

        return true;

    }
    // parameters tekn for the user i.e. a form subission 
    function createAuction(
        string memory name,
        string memory description,
        string memory image,
        string memory tokenURI,
        uint price

    //vaildation to ensure information is supplied and accurately     
    ) public payable nonReentrant() {
        require(price > 0 ether, "sales price must be greater than Zero");
        require(msg.value >= listingPrice, "Price must be greater than the listing price");
        
        require(bytes(name).length > 0, "Name connot be empty");
        require(bytes(description).length > 0, "Description connot be empty");
        require(bytes(image).length > 0, "Image connot be empty");
        require(bytes(tokenURI).length > 0, "TokenURI connot be empty");

        require(mintToken(tokenURI), "Could not mint token");

        uint tokenId = totalItems.current();

        //structed Item has possession of the all above struct attributes
        AuctionStruct memory item;
        //assigning structure
        item.tokenId = tokenId;
        item.name = name;
        item.description = description;
        item.image = image;
        item.price = price;
        item.duration = getTimestamp(0,0,0,0);
        item.seller = msg.sender;
        item.owner = msg.sender;
        //Added variables to an array
        auctionedItem[tokenId] = item;
        auctionedItemExist[tokenId] = true;
        //paymnet to the company
        payTo(companyAcc, msg.value);

        emit AuctionItemCreated(tokenId , msg.sender, address(0), price, false);
        }

        // function to allow bidding with validations 
        function offerAuction(
            uint tokenId,
            bool biddable,
            uint sec,
            uint min,
            uint hour,
            uint day

        )public{
            require(auctionedItem[tokenId].owner == msg.sender, "Unauthorized entity");
            require(auctionedItem[tokenId].bids == 0, "Won auction claim now");

            if(!auctionedItem[tokenId].live){
                setApprovalForAll(address(this), true);
                IERC721(address(this)).transferFrom(msg.sender, address(this), tokenId
                );
            }

            auctionedItem[tokenId].bids = 0;
            auctionedItem[tokenId].live = true;
            auctionedItem[tokenId].sold = false;
            auctionedItem[tokenId].biddable = biddable;
            auctionedItem[tokenId].duration=getTimestamp(sec, min, hour, day);

        }

        function buyAuctionedItem(uint tokenId) public payable nonReentrant() {
            require(msg.value >= auctionedItem[tokenId].price, "Insufficent Amount");
            require(auctionedItem[tokenId].duration > getTimestamp(0, 0, 0, 0), "Auctioned item not available"); 
            require(!auctionedItem[tokenId].biddable, "Auction must not be biddable");

            address seller = auctionedItem[tokenId].seller;
            address owner = auctionedItem[tokenId].owner;

            auctionedItem[tokenId].live = false;
            auctionedItem[tokenId].sold = true;
            auctionedItem[tokenId].bids =  0;
            auctionedItem[tokenId].duration = getTimestamp(0, 0, 0, 0);
            auctionedItem[tokenId].owner =  msg.sender;

            uint royalty = (msg.value * royaltyFee) /100;
            payTo(owner, (msg.value - royalty));
            payTo(seller, royalty);

            IERC721(address(this)).transferFrom(address(this), msg.sender, tokenId);

        }
        
        function getTimestamp(
            uint sec,
            uint min,
            uint hour,
            uint day
        ) internal returns(uint){
            return block.timestamp + 
            (1 seconds * sec) +
            (1 minutes * min) +
            (1 hours * hour) +
            (1 days * day) ;
        } 

        //payment of the listing fee to the NFT application owner company 
        function payTo(address to, uint amount) internal {
            (bool success,) = payable(to).call{value: amount}("");
            require(success);
        }





}