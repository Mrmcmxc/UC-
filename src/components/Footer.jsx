// const Footer = () => {
//   return (
    
//     <div className="w-4/5 flex flex-col sm:flex-row justify-between items-center my-4 mx-auto py-5 text-white">
//       <div className="hidden sm:flex flex-1 justify-start items-center text-base space-x-12">
//         <p className=" cursor-pointer">Market</p>
//         <p className=" cursor-pointer">Artist</p>
//         <p className=" cursor-pointer">Features</p>
//         <p className=" cursor-pointer">Community</p>
//       </div>
//       <p className="text-right text-xs">&copy;2023 All rights reserved.</p>
//     </div>
//   )
// }

// export default Footer

import React from 'react';

function Footer() {
  return (
    
    <div className="pb-10 m-auto sm:px-6 lg:px-8 justify-between items-center">
      <hr className='my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-25 dark:opacity-100' />
      <div className=" m-auto w-4/5 flex flex-wrap justify-between items-center">
        <div className="w-full sm:w-auto mb-6 sm:mb-0 text-white">
          <h1>The Universal Collective</h1>
        </div>
        <div className="w-full sm:w-auto mb-6 sm:mb-0">
          <h3 className="text-white font-bold mb-2">Resources</h3>
          <ul className="text-gray-400">
            <li className="mb-1">Learn</li>
            <li className="mb-1">Partners</li>
            <li className="mb-1">External</li>
          </ul>
        </div>
        <div className="w-full sm:w-auto mb-6 sm:mb-0">
          <h3 className="text-white font-bold mb-2">Company</h3>
          <ul className="text-gray-400">
            <li className="mb-1">About</li>
            <li className="mb-1">Charities</li>
            <li className="mb-1">Contact Us</li>
          </ul>
        </div>
        <div className="w-full sm:w-auto mb-6 sm:mb-0">
          <h3 className="text-white font-bold mb-2">Socials</h3>
          <ul className="text-gray-400">
            <li className="mb-1">Facebook</li>
            <li className="mb-1">Instagram</li>
            <li className="mb-1">LinkedIn</li>
          </ul>
        </div>
        <div className="w-full sm:w-auto">
          <div className="relative">
            <input type="search" className="w-full bg-gray-800 rounded-md p-2 pl-10 text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Search"/>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 16a8 8 0 100-16 8 8 0 000 16zm9.707-1.293l-4-4a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className=" text-white pt-8 text-center text-xs">&copy;2023 All rights reserved.</p>
    </div>
  );
}

export default Footer;
