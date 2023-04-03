import { useGlobalState } from "../store"
import { truncate } from "../store"


const NFT = () => {
  const [auction] = useGlobalState('auction')
  const [connectedAccount] = useGlobalState('connectedAccount')

  return (
    
      <div className="grid lg:grid-cols-2 gaps-6 md:gap-4 lg:gap-3 py-2.5 text-white font-sans capitalize w-4/5 mx-auto mt-11'">
        <div className="h-[400px] bg-[#9fccff] bg-opacity-10 backdrop-blur-3xl rounded-md shadow-lx md:w-4/5">
          <img src={auction.image} alt={auction.name} className=" object-contain w-full h-80 mt-10 "/>
      </div>
      <div>
        <Details auction={auction} account={connectedAccount}/> 
      </div>
    </div>


  )
}

const Details = ({auction, account}) => {
  return (
    <div className="py-2 " >
      <h1 className="font-bold text-lg mb-1">{auction.name}</h1>
      <p className="font-semibold text-sm">
        <span className="text-blue-500">
          {/* truncate function passed here to adjust the length of the string  Start 4, end 4 , max length 11*/}
          @{auction?.owner == account ? 'You' : truncate(auction?.owner, 4, 4, 11)}
        </span>
      </p>
    </div>
  )
}

export default NFT