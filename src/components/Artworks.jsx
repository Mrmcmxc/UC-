import { setGlobalState, useGlobalState } from '../store'
import { FaDigg } from "react-icons/fa"
import { Link } from "react-router-dom"
import Countdown from "./Countdown"


const Artworks = ({auctions, title, showOffer}) => {
  return (
    <div className=" py-10 mx-auto justify-center">
        <p className="text-xl uppercase text-white mb-4 " > {title ? title : 'Live Auctions'}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2.5 text-white font-mono px-1">

           {auctions.map((auction, i) => (<Auction key={1} auction={auction}/>))}
        </div>
    </div>



  )
}

const Auction = ({auction, showOffer}) => {
    return (
    <div className="overflow:hidden bg-[#9fccff] bg-opacity-10 backdrop-blur-3xl rounded-md shadow-lx shadow-black md:mt-0 font-sans my-8  ">
        <Link to={'/nft/' + auction.tokenid}> <img src={auction.image} alt={auction.name} className="object-cover  p-4 w-full h-80 " />

        </Link>
        <div className="shadow-md shadow-gray-900 grid grid-cols-2 justify-between items-center text-gray-300 px-4  ">
            <div className="flex flex-col items-start py-2 px-1">
                <span>Current Bid</span>
                <div className="font-bold text-center">{auction.price}ETH</div>
            </div>
            <div className="flex flex-col items-start py-2 px-5">
                <span>Auction End</span>
                <div className="font-bold text-center">
                    {auction.live && auction.duration > Date.now() ? (<Countdown timestamp={auction.duration}/>) : ('00:00:00') }
                </div>
            </div>
            <div className=' p-2 col-start-1 col-span-4 '>
                {auction.tokenid % 2 == 0 ? (<button className="bg-blue-700 w-full h-[40px] p-2 text-center font-bold font-mono rounded-md hover:text-[#ffffff]"onClick={() => setGlobalState('priceModal', 'scale-100')}>Place a Bid</button>
                ) : 
                <button className="bg-green-700 w-full h-[40px] p-2 text-center font-bold font-mono rounded-md hover:text-[#ffffff]"onClick={() => setGlobalState('bidModal', 'scale-100')}>Buy Now</button>}
            </div>
            
        </div>
    
        </div>    
    )
}

export default Artworks