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

        {/* <button class="text-white font-medium rounded-lg px-4 py-2.5 text-center inline-flex items-center" type="button" data-dropdown-toggle="dropdown" >About <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

        <div class=" bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4">
          <div class="px-4 py-3"></div>
          <ul class="py-1" aria-labelledby="dropdown">
            <li>
              <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">The Universal Collective</a>
            </li>
            <li>
              <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Charities</a>
            </li>
          </ul>
        </div> */}
 
        <Link to="/About" className="mx-4 cursor-pointer">About</Link>
        <Link to="/NewToNFT" className="mx-4 cursor-pointer">Learn</Link>
    </ul>
    <button className="shadow-md shadow-blue-700 bg-blue-500 hover:bg-blue-700 md:text-sm sm:text-base p-2 rounded-md">Connect Wallet</button>

  </nav>
  )
}

export default Header