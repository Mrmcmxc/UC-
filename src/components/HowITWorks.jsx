import React from "react";
import { FaWallet } from "react-icons/fa";
import { BsFillCollectionFill } from "react-icons/bs";
import { MdAddToPhotos } from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";

const HowITWorks = () => {
  return (
    <div>
      {" "}
      <h1 className="pt-28 text-center text-3xl font-bold text-white mb-8">
        How it works{" "}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-8 gap-4 my-14 pl-4 md:pl-28">
        <div className="text-center">
          <div className="mx-auto w-20 h-20 bg-[#9fccff] bg-opacity-10 backdrop-blur-3xl rounded-full flex items-center justify-center">
            <FaWallet className="h-10 w-10 text-white hover:text-blue-600" />
          </div>
          <p className="mt-2 text-white">Setup Your Wallet</p>
        </div>
        <div className="flex-grow h-px bg-gray-400 sm: mt-12"> </div>
        <div className="text-center">
          <div className="mx-auto w-20 h-20 bg-[#9fccff] bg-opacity-10 backdrop-blur-3xl rounded-full flex items-center justify-center">
            <BsFillCollectionFill className="h-10 w-10 text-white hover:text-blue-600" />
          </div>
          <p className="mt-2 text-white">Create Your Collection</p>
        </div>
        <div className="flex-grow h-px bg-gray-400 sm: mt-12"> </div>
        <div className="text-center">
          <div className="mx-auto w-20 h-20 bg-[#9fccff] bg-opacity-10 backdrop-blur-3xl rounded-full  flex items-center justify-center">
            <MdAddToPhotos className="h-10 w-10 text-white hover:text-blue-600" />
          </div>
          <p className="mt-2 text-white">Add Your NFT's</p>
        </div>
        <div className="flex-grow h-px bg-gray-400 sm: mt-12"> </div>
        <div className="text-center">
          <div className="mx-auto w-20 h-20 bg-[#9fccff] bg-opacity-10 backdrop-blur-3xl rounded-full flex items-center justify-center">
            <AiFillDollarCircle className="h-10 w-10 text-white hover:text-blue-600" />
          </div>
          <p className="mt-2 text-white">List Them For Sale</p>
        </div>
      </div>
    </div>
  );
};

export default HowITWorks;
