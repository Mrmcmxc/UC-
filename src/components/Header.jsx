import { Link } from "react-router-dom"


const Header = () => {
  return (

  <nav className="w-4/5 flex md:justify-center justify-between items-center py-8 mx-auto text-white">
    <div className="md:flex-[0.5] flex-initial justify-center items-center ">
      {/* Logo/Name of site */}
        <Link to="/">
            <span className="px-1 py-1 font-bold text-lg sm:text-2xl "> The Universal Collective</span>
        </Link>
    </div>
    {/* Navbar  */}
    <ul className="md:flex-[0.5] hidden md:flex list-none justify-end items-center flex-initial pr-4 ">
        <Link to="/" className="mx-4 cursor-pointer">Market</Link>
        <Link to="/Collections" className="mx-4 cursor-pointer ">Collections</Link>
      
        <Link to="/About" className="mx-4 cursor-pointer">About</Link>
        <Link to="/NewToNFT" className="mx-4 cursor-pointer">Learn</Link>
    </ul>
    <button className="shadow-md shadow-blue-700 bg-blue-500 hover:bg-blue-700 md:text-sm sm:text-base p-2 rounded-md">Connect Wallet</button>

  </nav>
  )
}

export default Header