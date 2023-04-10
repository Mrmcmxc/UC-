const { expect } = require('chai')
const { ethers } = require('hardhat')

const toWei = (num) => ethers.utils.parseEther(num.toString())
const fromWei = (num) => ethers.utils.formatEther(num)

describe('Contract', () => {
  let contract, result
  const royaltyFee = 5
  const name = 'Graduate Ape'
  const description = 'Lorem Ipsum dalum'
  const image = 'https://ipfs.io/ipfs/Quijbsdnckjsfxcvsfdgfghfasd'
  const tokenURI = 'https://ipfs.io/ipfs/Hzijbsdnckjsfxcvsfdgfghfasd'
  const price = toWei(1.5)
  const newPrice = toWei(1.7)
  const listingPrice = toWei(0.02)
  const tokenId = 1
  const biddable = true
  const sec = 5

  beforeEach(async () => {
    const Contract = await ethers.getContractFactory('Auction')
    ;[seller, buyer, reseller, bidder] = await ethers.getSigners()

    contract = await Contract.deploy(royaltyFee)
    await contract.deployed()
  })

  describe('Auction', () => {
    beforeEach(async () => {
      await contract.createAuction(name, description, image, tokenURI, price, {
        from: seller.address,
        value: listingPrice,
      })

      await contract
        .connect(reseller)
        .createAuction(name, description, image, tokenURI, price, {
          value: listingPrice,
        })
    })

    it('Should confirm NFT Auction Price Change', async () => {
      result = await contract.getAuction(tokenId)
      expect(result.price).to.be.equal(price)

      await contract.chanagePrice(tokenId, newPrice, {
        from: seller.address,
      })

      result = await contract.getAuction(tokenId)
      expect(result.price).to.be.equal(newPrice)
    })

    it('Should confirm NFT Auction Listing', async () => {
      result = await contract.getAuctions()
      expect(result).to.have.lengthOf(2)
    })

    it('Should confirm NFT Auction Purchase', async () => {
      result = await contract.getAuction(tokenId)
      expect(result.owner).to.be.equal(seller.address)

      result = await contract.balanceOf(buyer.address)
      expect(result).to.be.equal(0)
      result = await contract.balanceOf(seller.address)
      expect(result).to.be.equal(1)

      await contract.offerAuction(tokenId, !biddable, sec, 0, 0, 0, {
        from: seller.address,
      })

      await contract.connect(buyer).buyAuctionedItem(tokenId, {
        value: price,
      })

      result = await contract.getAuction(tokenId)
      expect(result.owner).to.be.equal(buyer.address)

      result = await contract.balanceOf(buyer.address)
      expect(result).to.be.equal(1)
      result = await contract.balanceOf(seller.address)
      expect(result).to.be.equal(0)
    })

    it('Should confirm All Auctioned NFTs', async () => {
      result = await contract.getAuctions()
      expect(result).to.have.lengthOf(2)
    })

    it('Should confirm My Auctioned NFTs', async () => {
      result = await contract.getMyAuctions()
      expect(result).to.have.lengthOf(1)
    })

    it('Should confirm Unsold Auctioned NFTs', async () => {
      result = await contract.getUnsoldAuctions()
      expect(result).to.have.lengthOf(2)

      await contract.offerAuction(tokenId, !biddable, sec, 0, 0, 0, {
        from: seller.address,
      })

      await contract.connect(buyer).buyAuctionedItem(tokenId, {
        value: price,
      })

      result = await contract.getUnsoldAuctions()
      expect(result).to.have.lengthOf(1)
    })

    it('Should confirm Sold Auctioned NFTs', async () => {
      result = await contract.getSoldAuctions()
      expect(result).to.have.lengthOf(0)

      await contract.offerAuction(tokenId, !biddable, sec, 0, 0, 0, {
        from: seller.address,
      })

      await contract
        .connect(reseller)
        .offerAuction(tokenId + 1, !biddable, sec, 0, 0, 0)

      await contract.connect(buyer).buyAuctionedItem(tokenId, {
        value: price,
      })

      result = await contract.getSoldAuctions()
      expect(result).to.have.lengthOf(1)

      await contract.connect(buyer).buyAuctionedItem(tokenId + 1, {
        value: price,
      })

      result = await contract.getSoldAuctions()
      expect(result).to.have.lengthOf(2)
    })

    it('Should confirm Auctioned NFTs Relisting', async () => {
      result = await contract.getAuction(tokenId)
      expect(result.live).to.be.equal(false)

      await contract.offerAuction(tokenId, !biddable, sec, 0, 0, 0, {
        from: seller.address,
      })

      result = await contract.getAuction(tokenId)
      expect(result.live).to.be.equal(true)

      await contract.connect(buyer).buyAuctionedItem(tokenId, {
        value: price,
      })

      result = await contract.getAuction(tokenId)
      expect(result.live).to.be.equal(false)

      await contract
        .connect(buyer)
        .offerAuction(tokenId, !biddable, sec, 0, 0, 0)

      result = await contract.getAuction(tokenId)
      expect(result.live).to.be.equal(true)

      await contract.connect(reseller).buyAuctionedItem(tokenId, {
        value: price,
      })

      result = await contract.getAuction(tokenId)
      expect(result.live).to.be.equal(false)
    })

    it('Should confirm Auctioned NFTs Bidding and Claiming', async () => {
      result = await contract.getAuction(tokenId)
      expect(result.sold).to.be.equal(false)
      expect(result.price).to.be.equal(price)

      result = await contract.balanceOf(buyer.address)
      expect(result).to.be.equal(0)
      result = await contract.balanceOf(bidder.address)
      expect(result).to.be.equal(0)

      await contract.offerAuction(tokenId, biddable, sec, 0, 0, 0, {
        from: seller.address,
      })

      const bidder1price = toWei(2)
      await contract.connect(buyer).placeBid(tokenId, {
        value: bidder1price,
      })

      const bidder2price = toWei(2.4)
      await contract.connect(bidder).placeBid(tokenId, {
        value: bidder2price,
      })

      result = await contract.getBidders(tokenId)
      expect(result).to.have.lengthOf(2)

      result = await contract.getAuction(tokenId)
      expect(result.price).to.be.equal(bidder2price)

      setTimeout(async () => {
        await contract.connect(bidder).claimPrize(tokenId, 1)

        result = await contract.getAuction(tokenId)
        expect(result.sold).to.be.equal(true)
        expect(result.owner).to.be.equal(bidder.address)

        result = await contract.balanceOf(buyer.address)
        expect(result).to.be.equal(0)
        result = await contract.balanceOf(bidder.address)
        expect(result).to.be.equal(1)
      }, sec * 1000)
    })
  })
})
