import Hero from "../components/Hero"
import CreateNFT from "../components/CreateNFT"
import Artworks from "../components/Artworks"
import Empty from "../components/Empty"
import { useGlobalState } from "../store"
import HowITWorks from "../components/HowITWorks"
import Wallets from "../components/Wallets"




const Home = () => {
  const [auctions] = useGlobalState('auctions')

  return (
    <div className='w-4/5 mx-auto'>
      <Hero />
      <HowITWorks />
      <CreateNFT/>
      {/* <Artwork auctions={auctions}/> */}
      {auctions.length > 0 ? <Artworks auctions={auctions} /> : <Empty/>}
      <Wallets />
      
      
    </div>
  )
}

export default Home