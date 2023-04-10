//SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Auction is ERC721URIStorage, ReentrancyGuard {
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
        bool biddable;
        uint bids;
        uint duration;
    }

    struct BiddableStruct {
        address bidder;
        uint price;
        uint timestamp;
        bool refunded;
        bool won;
    }

    event AuctionItemCreated(
        uint indexed tokenId,
        address seller,
        address owner,
        uint price,
        bool sold
    );

    uint public royaltyFee;
    address public companyAcc;
    uint listingPrice = 0.02 ether;

    mapping(uint => AuctionStruct) auctionedItem;
    mapping(uint => bool) auctionedItemExist;
    mapping(uint => BiddableStruct[]) biddersOf;

    constructor(uint _royaltyFee) ERC721("Daltonic Tokens", "DAT") {
        royaltyFee = _royaltyFee;
        companyAcc = msg.sender;
    }

    function mintToken(string memory tokenURI) internal returns (bool) {
        totalItems.increment();
        uint tokenId = totalItems.current();

        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, tokenURI);

        return true;
    }

    function createAuction(
        string memory name,
        string memory description,
        string memory image,
        string memory tokenURI,
        uint price
    ) public payable nonReentrant() {
        require(price > 0 ether, "Sales price must be greater than zero");
        require(msg.value >= listingPrice, "Price must be greater than the listing price");

        require(bytes(name).length > 0, "name cannot be empty");
        require(bytes(description).length > 0, "description cannot be empty");
        require(bytes(image).length > 0, "image cannot be empty");
        require(bytes(tokenURI).length > 0, "tokenURI cannot be empty");
        
        require(mintToken(tokenURI), "Could not mint token");

        uint tokenId = totalItems.current();

        AuctionStruct memory item;
        item.tokenId = tokenId;
        item.name = name;
        item.description = description;
        item.image = image;
        item.price = price;
        item.duration = getTimestamp(0,0,0,0);
        item.seller = msg.sender;
        item.owner = msg.sender;

        auctionedItem[tokenId] = item;
        auctionedItemExist[tokenId] = true;

        payTo(companyAcc, msg.value);

        emit AuctionItemCreated(tokenId, msg.sender, address(0), price, false);
    }

    function offerAuction(
        uint tokenId,
        bool biddable,
        uint sec,
        uint min,
        uint hour,
        uint day
    ) public {
        require(auctionedItem[tokenId].owner == msg.sender, "Unauthorized entity");
        require(auctionedItem[tokenId].bids == 0, "Winner should claim prize first");

        if(!auctionedItem[tokenId].live) {
            setApprovalForAll(address(this), true);
            IERC721(address(this)).transferFrom(
                msg.sender,
                address(this),
                tokenId
            );
        }

        auctionedItem[tokenId].bids = 0;
        auctionedItem[tokenId].live = true;
        auctionedItem[tokenId].sold = false;
        auctionedItem[tokenId].biddable = biddable;
        auctionedItem[tokenId].duration = getTimestamp(sec,min,hour,day);
    }

    function buyAuctionedItem(uint tokenId) public payable nonReentrant() {
        require(msg.value >= auctionedItem[tokenId].price, "Insufficent Amount");
        require(
            auctionedItem[tokenId].duration > getTimestamp(0,0,0,0),
            "Auctioned Item not avaible"
        );
        require(!auctionedItem[tokenId].biddable, "Auction must not be biddable");

        address seller = auctionedItem[tokenId].seller;
        address owner = auctionedItem[tokenId].owner;

        uint royalty = (msg.value * royaltyFee) / 100;
        payTo(owner, (msg.value - royalty));
        payTo(seller, royalty);

        IERC721(address(this)).transferFrom(
            address(this),
            msg.sender,
            tokenId
        );

        auctionedItem[tokenId].live = false;
        auctionedItem[tokenId].sold = true;
        auctionedItem[tokenId].bids = 0;
        auctionedItem[tokenId].duration = getTimestamp(0,0,0,0);
        auctionedItem[tokenId].owner = msg.sender;
    }

    function placeBid(uint tokenId) public payable {
        require(msg.value >= auctionedItem[tokenId].price, "Insufficent Amount");
        require(
            auctionedItem[tokenId].duration > getTimestamp(0,0,0,0),
            "Auctioned Item not avaible"
        );
        require(auctionedItem[tokenId].biddable, "Auction must be biddable");

        BiddableStruct memory bidder;
        bidder.bidder = msg.sender;
        bidder.price = msg.value;
        bidder.timestamp = getTimestamp(0,0,0,0);

        biddersOf[tokenId].push(bidder);
        auctionedItem[tokenId].bids++;
        auctionedItem[tokenId].price = msg.value;
        auctionedItem[tokenId].winner = msg.sender;
    }

    function claimPrize(uint tokenId, uint bid) public nonReentrant() {
        require(getTimestamp(0,0,0,0) > auctionedItem[tokenId].duration, "Auction still live");
        require(auctionedItem[tokenId].winner == msg.sender, "You are not the winner");

        biddersOf[tokenId][bid].won = true;
        uint price = auctionedItem[tokenId].price;
        uint royalty = (price * royaltyFee) / 100;
        address seller = auctionedItem[tokenId].seller;
        address owner = auctionedItem[tokenId].owner;

        auctionedItem[tokenId].winner = address(0);
        auctionedItem[tokenId].live = false;
        auctionedItem[tokenId].sold = true;
        auctionedItem[tokenId].bids = 0;
        auctionedItem[tokenId].owner = msg.sender;
        auctionedItem[tokenId].duration = getTimestamp(0,0,0,0);

        payTo(owner, (price - royalty));
        payTo(seller, royalty);

        IERC721(address(this)).transferFrom(
            address(this),
            msg.sender,
            tokenId
        );

        performRefund(tokenId);
    }

    function performRefund(uint tokenId) internal {
        for(uint i = 0; i < biddersOf[tokenId].length; i++) {
            BiddableStruct memory bidder = biddersOf[tokenId][i];
            if(bidder.bidder != msg.sender) {
                bidder.refunded = true;
                payTo(bidder.bidder, bidder.price);
            } else {
                bidder.won = true;
            }
            bidder.timestamp = getTimestamp(0,0,0,0);
        }

        delete biddersOf[tokenId];
    }

    function chanagePrice(uint tokenId, uint price) public {
        require(auctionedItem[tokenId].owner == msg.sender, "Unauthorized entity");
        require(getTimestamp(0,0,0,0) > auctionedItem[tokenId].duration, "Auction still live");
        require(price > 0 ether, "Price must be greater than zero");
        auctionedItem[tokenId].price = price;
    }

    function setListingPrice(uint price) public {
        require(msg.sender == companyAcc, "Unauthorized entity");
        listingPrice = price;
    }

    function getListingPrice() public view returns (uint) {
        return listingPrice;
    }

    function getAuction(uint tokenId) public view returns (AuctionStruct memory) {
        return auctionedItem[tokenId];
    }

    function getAuctions() public view returns (AuctionStruct[] memory Auctions) {
        Auctions = new AuctionStruct[](totalItems.current());

        for(uint i = 0; i < totalItems.current(); i++) {
            Auctions[i] = auctionedItem[i + 1];
        }
    }

    function getUnsoldAuctions() public view returns (AuctionStruct[] memory Auctions) {
        uint totalSpace;
        for(uint i = 0; i < totalItems.current(); i++) {
            if(!auctionedItem[i + 1].sold) totalSpace++;
        }

        Auctions = new AuctionStruct[](totalSpace);

        uint index;
        for(uint i = 0; i < totalItems.current(); i++) {
            if(!auctionedItem[i + 1].sold) {
                Auctions[index] = auctionedItem[i + 1];
                index++;
            }
        }
    }

    function getSoldAuctions() public view returns (AuctionStruct[] memory Auctions) {
        uint totalSpace;
        for(uint i = 0; i < totalItems.current(); i++) {
            if(auctionedItem[i + 1].sold) totalSpace++;
        }

        Auctions = new AuctionStruct[](totalSpace);

        uint index;
        for(uint i = 0; i < totalItems.current(); i++) {
            if(auctionedItem[i + 1].sold) {
                Auctions[index] = auctionedItem[i + 1];
                index++;
            }
        }
    }

    function getMyAuctions() public view returns (AuctionStruct[] memory Auctions) {
        uint totalSpace;
        for(uint i = 0; i < totalItems.current(); i++) {
            if(auctionedItem[i + 1].owner == msg.sender) totalSpace++;
        }

        Auctions = new AuctionStruct[](totalSpace);

        uint index;
        for(uint i = 0; i < totalItems.current(); i++) {
            if(auctionedItem[i + 1].owner == msg.sender) {
                Auctions[index] = auctionedItem[i + 1];
                index++;
            }
        }
    }

    function getLiveAuctions() public view returns (AuctionStruct[] memory Auctions) {
        uint totalSpace;
        for(uint i = 0; i < totalItems.current(); i++) {
            if(auctionedItem[i + 1].duration > getTimestamp(0,0,0,0)) totalSpace++;
        }

        Auctions = new AuctionStruct[](totalSpace);

        uint index;
        for(uint i = 0; i < totalItems.current(); i++) {
            if(auctionedItem[i + 1].duration > getTimestamp(0,0,0,0)) {
                Auctions[index] = auctionedItem[i + 1];
                index++;
            }
        }
    }

    function getBidders(uint tokenId) public view returns (BiddableStruct[] memory) {
        return biddersOf[tokenId];
    }

    function getTimestamp(
        uint sec,
        uint min,
        uint hour,
        uint day
    ) internal view returns (uint) {
        return 
            block.timestamp +
            (1 seconds * sec) +
            (1 minutes * min) +
            (1 hours * hour) +
            (1 days * day);
    }

    function payTo(address to, uint amount) internal {
        (bool success, ) = payable(to).call{value: amount}("");
        require(success);
    }
}