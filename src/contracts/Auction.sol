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

    // Bidder characteristics
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

    //this mapping ensure that every token Id is assigned via the Auction structure
    mapping(uint => AuctionStruct) auctionedItem;
    mapping(uint => bool) auctionedItemExist;
    mapping(uint => BiddableStruct[]) biddersOf;
    


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
            //checking to see if funds are available
            require(msg.value >= auctionedItem[tokenId].price, "Insufficent Amount");
            //time expire tracking on a bid
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

        //allows multiple people/accounts to bid on a token
        function placeBid(uint tokenId) public payable{
             //checking to see if funds are available
            require(msg.value >= auctionedItem[tokenId].price, "Insufficent Amount");
            //time expire tracking on a bid
            require(auctionedItem[tokenId].duration > getTimestamp(0, 0, 0, 0), "Auctioned item not available"); 
            require(auctionedItem[tokenId].biddable, "Auction must be biddable");


            BiddableStruct memory bidder;
            bidder.bidder = msg.sender;
            bidder.price = msg.value;
            bidder.timestamp = getTimestamp(0,0,0,0);


            //pushed to array
            biddersOf[tokenId].push(bidder);
            //increasing the number of bids by 1
            auctionedItem[tokenId].bids++;
            //ensures price is not increased and asigned the new highes bid value (new bidders cannot bid below the current bid value)
            auctionedItem[tokenId].price = msg.value;
            auctionedItem[tokenId].winner = msg.sender;

        }

        function claimPrize(uint tokenId, uint bid) public{
            //Ensure time on bid is expired otherwise Auction is still live
            require(getTimestamp(0,0,0,0) > auctionedItem[tokenId].duration, "Auction still live"); 
            require(auctionedItem[tokenId].winner == msg.sender, "You have not won the auction");

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

            payTo(owner,(price - royalty));
            payTo(seller, royalty);

            IERC721(address(this)).transferFrom(address(this), msg.sender, tokenId);

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

    function changePrice(uint tokenId, uint price) public {
        require(auctionedItem[tokenId].owner == msg.sender, "Unauthorized entity");
        require(getTimestamp(0,0,0,0) > auctionedItem[tokenId].duration, "Auction still live");
        require(price > 0 ether, "Price must be greater than 0 Ether");
        auctionedItem[tokenId].price = price;
    }


    //get and set listing price (cost for listing NFT on the platform)
    function setListingPrice(uint price) public {
        require(msg.sender == companyAcc, "Unauthorized entity!");
        listingPrice = price;
    }
    function getListingPrice() public view returns (uint) {
        return listingPrice;
    }

    


        
        
        function getTimestamp(
            uint sec,
            uint min,
            uint hour,
            uint day
        ) internal view returns(uint){
            return block.timestamp + 
            (1 seconds * sec) +
            (1 minutes * min) +
            (1 hours * hour) +
            (1 days * day);
        } 

        //payment of the listing fee to the NFT application owner company 
        function payTo(address to, uint amount) internal {
            (bool success,) = payable(to).call{value: amount}("");
            require(success);
        }





}