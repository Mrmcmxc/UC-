import React from 'react';
import nft from '../assets/images/nftgold.png'
import eth from '../assets/images/ethimage.png'
import met from '../assets/images/meta.png'
 

const NewToNFT = () => {
 return (
      <div>

        {/* Section 1 */}
        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
           Learn
          </h2>
          
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Non Fungable Tokens (NFTs)
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipiscing elit.Lorem ipsum dolor sit amet consect adipiscing elit.Lorem ipsum dolor sit amet consect adipiscing elit.Lorem ipsum dolor sit amet consect adipiscing elit.Lorem ipsum dolor sit amet consect adipiscing elit.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="col-span-1">
                <div className="flex items-center justify-center h-96 text-white">
                 <img className='w-[190px]' src={nft} alt="image 1" />
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex items-center justify-center h-96 text-white ">
                 <p>An NFT is a unique digital asset that represents ownership of a piece of content, like artwork or music. They are stored on a blockchain, making ownership and transactions transparent and secure. NFTs allow creators to monetize their digital content and collectors to own unique pieces of digital art.</p>
                </div>
              </div>
             
            </div>
          </div>
        </section>
        <hr className='my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-25 dark:opacity-100' />
        {/* Section 2 */}
        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:text-center">
           
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              MetaMask (Wallet)
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipiscing elit. Lorem ipsum dolor sit amet consect adipiscing elit.Lorem ipsum dolor sit amet consect adipiscing elit.Lorem ipsum dolor sit amet consect adipiscing elit.Lorem ipsum dolor sit amet consect adipiscing elit.Lorem ipsum dolor sit amet consect adipiscing elit.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="col-span-1">
                <div className="flex items-center justify-center h-96 text-white">
                <img className='w-[190px]' src={met} alt="image 2" />
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex items-center justify-center h-96 text-white ">
                  <p>Metamask is a digital wallet browser extension for managing and using cryptocurrencies on decentralized applications built on the Ethereum blockchain. It stores private keys and allows users to manage multiple assets and networks in a secure and user-friendly way.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className='my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-25 dark:opacity-100' />
        {/* section 3 */}
        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:text-center">
          
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Ethereum (Currency)
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipiscing elit. Lorem ipsum dolor sit amet consect adipiscing elit.Lorem ipsum dolor sit amet consect adipiscing elit.Lorem ipsum dolor sit amet consect adipiscing elit.Lorem ipsum dolor sit amet consect adipiscing elit.Lorem ipsum dolor sit amet consect adipiscing elit.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="col-span-1">
                <div className="flex items-center justify-center h-96 text-white">
                <img className='w-[150px]' src={eth} alt="image 2" />
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex items-center justify-center h-96 text-white ">
                  <p>Lorem ipsum dolor sit amet consect adipiscing elit.Lorem ipsum dolor sit amet consect adipiscing elit.Lorem ipsum dolor sit amet consect adipiscing elit.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
     
      </div>

      
        

        
       
        
  
 )
} 
export default NewToNFT;




  

