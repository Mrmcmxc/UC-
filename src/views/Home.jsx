import Hero from "../components/Hero"
import CreateNFT from "../components/CreateNFT"
import Artworks from "../components/Artworks"
import Footer from "../components/Footer"
import Empty from "../components/Empty"
import { useGlobalState } from "../store"
import HowITWorks from "../components/HowITWorks"




const Home = () => {
  const [auctions] = useGlobalState('auctions')

  return (
    <div className='w-4/5 mx-auto'>
      <Hero />
      <HowITWorks />
      <CreateNFT/>
      {/* <Artwork auctions={auctions}/> */}
      {auctions.length > 0 ? <Artworks auctions={auctions} /> : <Empty/>}
     
      
      <hr className='my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-25 dark:opacity-100' />
    </div>
  )
}

export default Home