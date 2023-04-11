import { Link } from "react-router-dom"


const Header = () => {
  return (

  <nav className="w-4/5 flex md:justify-center justify-between items-center py-12 mx-auto text-white">
    <div className="md:flex-[0.5] flex-initial justify-center items-center ">
      {/* Logo/Name of site */}
        <Link to="/">
            <span className="px-1 py-1 font-bold text-lg sm:text-2xl "> The Universal Collective</span>
        </Link>
    </div>
    {/* Navbar  */}
    <ul className="md:flex-[0.5] hidden md:flex list-none justify-end items-center flex-initial pr-4 ">
        <Link to="/" className="mx-4 cursor-pointer hover:underline hover:text-blue-300">Market</Link>
        <Link to="/Collections" className="mx-4 cursor-pointer hover:underline hover:text-blue-300 ">Collections</Link>
        <Link to="/About" className="mx-4 cursor-pointer hover:underline hover:text-blue-300">About</Link>
        <Link to="/NewToNFT" className="mx-4 cursor-pointer hover:underline hover:text-blue-300">Learn</Link>
    </ul>
    <button className="shadow-md shadow-blue-700 bg-blue-500 hover:bg-blue-700 md:text-sm sm:text-base p-2 rounded-md">Connect Wallet</button>

  </nav>
  )
}

export default Header


//Sticky NAV
// import React, {useEffect, useState} from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [show, setShow] = useState(true)
//   const controlNavbar = () =>{
//     if (window.scrollY>100) {
//       setShow(false)
//     }else{
//       setShow(true)
//     }
//   }

//   useEffect (() =>{
//     window.addEventListener("scroll", controlNavbar)
//     return () => {
//       window.removeEventListener("scroll", controlNavbar)
//     }
//   }, [])

//   return (
//     <nav className={`nav ${show} bg-[#9fccff] bg-opacity-5 backdrop-blur-xl w-full flex md:justify-center justify-between items-center py-4 px-4 mx-auto text-white sticky top-0 z-50`}>
//       <div className="md:flex-[0.5] flex-initial justify-center items-center">
//         {/* Logo/Name of site */}
//         <Link to="/">
//           <span className="mx-8 px-1 py-1 font-bold text-lg sm:text-2xl "> The Universal Collective</span>
//         </Link>
//       </div>
//       {/* Navbar  */}
//       <ul className="md:flex-[0.5] hidden md:flex list-none justify-end items-center flex-initial pr-4 ">
//         <Link to="/" className="mx-4 cursor-pointer">Market</Link>
//         <Link to="/Collections" className="mx-4 cursor-pointer ">Collections</Link>
//         <Link to="/About" className="mx-4 cursor-pointer">About</Link>
//         <Link to="/NewToNFT" className="mx-4 cursor-pointer">Learn</Link>
//       </ul>
//       <button className="shadow-md shadow-blue-700 bg-blue-500 hover:bg-blue-700 md:text-sm sm:text-base p-2 rounded-md">Connect Wallet</button>
//     </nav>
//   );
// };

// export default Header;





