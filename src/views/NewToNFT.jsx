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
              Section One
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
                  <p>Lorem ipsum dolor sit amet consect adipiscing elit.Lorem ipsum dolor sit amet consect adipiscing elit.Lorem ipsum dolor sit amet consect adipiscing elit.</p>
                </div>
              </div>
             
            </div>
          </div>
        </section>
        
        {/* Section 2 */}
        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Section Two
            </h2>
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
                  <p>Lorem ipsum dolor sit amet consect adipiscing elit.Lorem ipsum dolor sit amet consect adipiscing elit.Lorem ipsum dolor sit amet consect adipiscing elit.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section 3 */}
        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Section Three
            </h2>
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




  

