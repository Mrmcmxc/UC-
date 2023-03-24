import {BsArrowRightShort} from 'react-icons/bs'
import nart1 from '../assets/images/nart1.jpg'
import { setGlobalState } from '../store'


const Hero = () => {
  return (
    <div className="flex flex-col item-start md:flex-row space-y-4 sm:space-y-0">
        <Banner/>
        <Bidder/>

    </div>
  )
}

const Banner = () => {
    return (
        // Top Page Title
        
        <div className="flex flex-col md:flex-row w-full justify-between items-center mx-auto"> 

            <div className="text-white z-10">
                <h1 className=" font-semibold text-5xl py-1">Create, Collect</h1>
                <h1 className="font-semibold text-4xl mb-4 py-2">and Sell<span className="text-blue-500 px-1" >NFTs</span>.</h1>
                <p className="font-light" >Helping charities to create opportunity.</p>
                <p className="font-light mb-11" >Get your NFT now.</p>
               {/* Secondary title */}
                <div>
                    <button className="text-sm my-4 p-2 bg-blue-500 rounded-sm w-auto flex justify-center items-center shadow-md shadow-blue-700 hover:bg-blue-700 " onClick={() => setGlobalState('boxModal', 'scale-100' )} >Create NFT
                    <BsArrowRightShort size={20} />
                    </button>
                </div>
                    <div className='flex items-center justify-start space-x-14 w-3/4 mt-5'>
                        <div>
                            <p className='font-bold' >100k</p>
                            <snall className='text-gray-300'>Auctions</snall>
                        </div>
                        <div>
                            <p className='font-bold' >210k</p>
                            <snall className='text-gray-300'>Rare</snall>
                        </div>
                        <div>
                            <p className='font-bold' >120k</p>
                            <snall className='text-gray-300'>Artists</snall>
                        </div>
                    </div>
                    
            </div>
            <div class="blob"></div>  
            <div class="blob3"></div> 
        </div>
        
    )
}

const Bidder = () => {
    return (
        <div className='w-full text-white overflow-hidden  bg-white bg-opacity-10 backdrop-blur-lg rounded-md shadow-lg shadow-blue-900 md:w-3/5 lg:w-2/5 md:mt-0 font-sans'>
            <h1 className='pt-4 pl-4 text-lg font-bold'> This weeks top sale</h1>
            <img className=' object-cover p-4 w-full h-80' src={nart1} alt="NFT" />
            <div className=' flex justify-between items-center px-4' >
                <div className='p-4'>
                    Current Bid
                    <div className='font-bold text-center '>2.231 ETH</div>
                </div>
                <div className='p-4'>
                    Auction Ends
                    <div className='font-bold text-center '>20:10</div>
                </div>
            </div>
            

        </div>
    )
}

export default Hero

