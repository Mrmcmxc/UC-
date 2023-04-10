import React from 'react';
import Meta from '../assets/images/meta.png'
import Bi from '../assets/images/BN.png'
import Aw from '../assets/images/aw.png'
import Twt from '../assets/images/TWT.png'

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-center text-3xl font-bold text-white mb-8">Wallets We Support</h2>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <li className="bg-[#9fccff] bg-opacity-10 backdrop-blur-3xl rounded-2xl shadow-lx shadow-black py-6 px-4">
          <img className='p-14' src={Meta} alt="1" />
          <h3 className=" text-white text-lg font-bold mb-2 text-center">MetaMask</h3>
         
        </li>
        <li className="bg-[#9fccff] bg-opacity-10 backdrop-blur-3xl rounded-2xl shadow-lx shadow-black py-6 px-4">
          <img className='p-14' src={Bi} alt="2" />
          <h3 className=" text-white text-lg font-bold mb-2 text-center">Binance</h3>
          
        </li>
        <li className="bg-[#9fccff] bg-opacity-10 backdrop-blur-3xl rounded-2xl shadow-lx shadow-black py-6 px-4">
          <img className='p-14' src={Twt} alt="3" />
          <h3 className=" text-white text-lg font-bold mb-2 text-center">Trust Wallet</h3>
          
        </li>
        <li className="bg-[#9fccff] bg-opacity-10 backdrop-blur-3xl rounded-2xl shadow-lx shadow-black py-6 px-4">
          <img className='p-14' src={Aw} alt="4" />
          <h3 className=" text-white text-lg font-bold mb-2 text-center">Alpha</h3>
          
        </li>
        
      </ul>
    </div>
  );
};

export default Home;
