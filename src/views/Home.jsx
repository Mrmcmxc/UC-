import Hero from "../components/Hero"
import CreateNFT from "../components/CreateNFT"
import Artworks from "../components/Artworks"
import Footer from "../components/Footer"
import Empty from "../components/Empty"
import { useGlobalState } from "../store"




const Home = () => {
  const [auctions] = useGlobalState('auctions')

  return (
    <div className='w-4/5 mx-auto'>
      <Hero />
      <CreateNFT/>
      {/* <Artwork auctions={auctions}/> */}
      {auctions.length > 0 ? <Artworks auctions={auctions} /> : <Empty/>}
     
      <Footer/>

    </div>
  )
}

export default Home