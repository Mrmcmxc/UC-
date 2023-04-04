import React from 'react'
import { FaWallet,  } from 'react-icons/fa'
import { BsFillCollectionFill} from 'react-icons/bs'
import { MdAddToPhotos } from 'react-icons/md'
import { AiFillDollarCircle } from 'react-icons/ai'

const HowITWorks = () => {
  return (
    <div className='my-12 py-12 text-white'>
        <h1 className='flex items-start justify-center pb-10 text-xl font-bold z-50 '> How it Works </h1>
        <div className='mx-60 flex items-start space-x-4 justify-center '>
            
            <div className='w-[100px] h-[100px]  bg-[#9fccff] bg-opacity-10 backdrop-blur-3xl rounded-full shadow-lx shadow-black flex justify-center items-center'><FaWallet className='h-[40px] w-[40px] hover:fill-blue-500'/></div>
            <div class="flex-grow h-px bg-gray-400 text-center mt-12"></div> 
            <div className=' w-[100px] h-[100px]  bg-[#9fccff] bg-opacity-10 backdrop-blur-3xl rounded-full shadow-lx shadow-black flex justify-center items-center'><BsFillCollectionFill className='h-[40px] w-[40px] hover:fill-blue-500'/></div>
            <div class="flex-grow h-px bg-gray-400 text-center mt-12 "></div> 
            <div className=' w-[100px] h-[100px]  bg-[#9fccff] bg-opacity-10 backdrop-blur-3xl rounded-full shadow-lx shadow-black flex justify-center items-center'><MdAddToPhotos className='h-[40px] w-[40px] hover:fill-blue-500'/></div>
            <div class="flex-grow h-px bg-gray-400 text-center mt-12"></div> 
            <div className=' w-[100px] h-[100px]  bg-[#9fccff] bg-opacity-10 backdrop-blur-3xl rounded-full shadow-lx shadow-black flex justify-center items-center'><AiFillDollarCircle className='h-[40px] w-[40px] hover:fill-blue-500'/></div>
        </div>
        <div className=' flex items-start space-x-44 justify-center py-4'>
            <h1>Setup Your Wallet</h1>
            <h1>Create Your Collection</h1>
            <h1>Add Your NFT's</h1>
            <h1>List Them For Sale</h1>
        </div>
        
    </div>
  )
}

<div class="flex-grow h-px bg-gray-400"></div> 




export default HowITWorks