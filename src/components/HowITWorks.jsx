// import React from 'react'
// import { FaWallet,  } from 'react-icons/fa'
// import { BsFillCollectionFill} from 'react-icons/bs'
// import { MdAddToPhotos } from 'react-icons/md'
// import { AiFillDollarCircle } from 'react-icons/ai'

// const HowITWorks = () => {
//   return (
//     <div className=' my-12 py-12 text-white'>
//         <h1 className='flex items-start justify-center pb-10 text-xl font-bold z-50 '> How it Works </h1>
//         <div className=' flex mx-60 items-start space-x-4 justify-center '>
//           <div className=' grid grid-cols-8 '>
//             <div className='w-[100px] h-[100px]  bg-[#9fccff] bg-opacity-10 backdrop-blur-3xl rounded-full shadow-lx shadow-black flex justify-center items-center'><FaWallet className='h-[40px] w-[40px] hover:fill-blue-500'/></div>
//             <h1>Setup Your Wallet</h1>
//             {/* <div class="flex-grow h-px bg-gray-400 text-center mt-12"> </div>  */}
            
//             <div className=' w-[100px] h-[100px]  bg-[#9fccff] bg-opacity-10 backdrop-blur-3xl rounded-full shadow-lx shadow-black flex justify-center items-center'><BsFillCollectionFill className='h-[40px] w-[40px] hover:fill-blue-500'/></div>
//             <h1>Create Your Collection</h1>
//             {/* <div class="flex-grow h-px bg-gray-400 text-center mt-12 "></div>  */}
//             <div className=' w-[100px] h-[100px]  bg-[#9fccff] bg-opacity-10 backdrop-blur-3xl rounded-full shadow-lx shadow-black flex justify-center items-center'><MdAddToPhotos className='h-[40px] w-[40px] hover:fill-blue-500'/></div>
//             <h1>Add Your NFT's</h1>

//             {/* <div class="flex-grow h-px bg-gray-400 text-center mt-12"></div>  */}
//             <div className=' w-[100px] h-[100px]  bg-[#9fccff] bg-opacity-10 backdrop-blur-3xl rounded-full shadow-lx shadow-black flex justify-center items-center'><AiFillDollarCircle className='h-[40px] w-[40px] hover:fill-blue-500'/></div>
//             <h1>List Them For Sale</h1>
//         </div>
//         </div>




//         <div className=' flex items-start space-x-44 justify-center py-4'>
//             <h1>Setup Your Wallet</h1>
//             <h1>Create Your Collection</h1>
//             <h1>Add Your NFT's</h1>
//             <h1>List Them For Sale</h1>
//         </div>
        
//     </div>
//   )
// }

// <div class="flex-grow h-px bg-gray-400"></div> 




// export default HowITWorks

// import React from 'react';
// import { HiOutlineCamera, HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';

// const HowITWorks = () => {
//   return (
//     <div className="grid grid-cols-8 gap-4 my-10 pl-28 ">
//       <div className="text-center">
//         <div className="mx-auto w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
//           <HiOutlineCamera />
//         </div>
//         <p className="mt-2 text-gray-600">Photos</p>
//       </div>
//       <div class="flex-grow h-px bg-gray-400 text-center mt-12"> </div> 

//       <div className="text-center">
//         <div className="mx-auto w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
//           <HiOutlineMail />
//         </div>
//         <p className="mt-2 text-gray-600">Email</p>
//       </div>
//       <div class="flex-grow h-px bg-gray-400 text-center mt-12"> </div> 


//       <div className="text-center">
//         <div className="mx-auto w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
//           <HiOutlinePhone />
//         </div>
//         <p className="mt-2 text-gray-600">Phone</p>
//       </div>
//       <div class="flex-grow h-px bg-gray-400 text-center mt-12"> </div> 

//       <div className="text-center">
//         <div className="mx-auto w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
//           <HiOutlineLocationMarker />
//         </div>
//         <p className="mt-2 text-gray-600">Address</p>
//       </div>
//     </div>
//   );
// };

// export default HowITWorks;

import React from 'react'
import { FaWallet } from 'react-icons/fa'
import { BsFillCollectionFill} from 'react-icons/bs'
import { MdAddToPhotos } from 'react-icons/md'
import { AiFillDollarCircle } from 'react-icons/ai'


const HowITWorks = () => {
  return (
    <div> <h1 className='text-white text-center mt-10'>How it works </h1> 
      <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-8 gap-4 my-14 pl-4 md:pl-28">
        <div className="text-center">
          <div className="mx-auto w-20 h-20 bg-[#9fccff] bg-opacity-10 backdrop-blur-3xl rounded-full flex items-center justify-center">
            <FaWallet className='h-10 w-10 text-white hover:text-blue-600' />
          </div>
          <p className="mt-2 text-white">Setup Your Wallet</p>
        </div>
        <div class="flex-grow h-px bg-gray-400 sm: mt-12"> </div> 
        <div className="text-center">
          <div className="mx-auto w-20 h-20 bg-[#9fccff] bg-opacity-10 backdrop-blur-3xl rounded-full flex items-center justify-center">
            <BsFillCollectionFill className='h-10 w-10 text-white hover:text-blue-600' />
          </div>
          <p className="mt-2 text-white">Create Your Collection</p>
        </div>
        <div class="flex-grow h-px bg-gray-400 sm: mt-12"> </div> 
        <div className="text-center">
          <div className="mx-auto w-20 h-20 bg-[#9fccff] bg-opacity-10 backdrop-blur-3xl rounded-full  flex items-center justify-center">
            <MdAddToPhotos className='h-10 w-10 text-white hover:text-blue-600' />
          </div>
          <p className="mt-2 text-white">Add Your NFT's</p>
        </div>
        <div class="flex-grow h-px bg-gray-400 sm: mt-12"> </div> 
        <div className="text-center">
          <div className="mx-auto w-20 h-20 bg-[#9fccff] bg-opacity-10 backdrop-blur-3xl rounded-full flex items-center justify-center">
            <AiFillDollarCircle className='h-10 w-10 text-white hover:text-blue-600' />
          </div>
          <p className="mt-2 text-white">List Them For Sale</p>
        </div>
      </div>
    </div>
  );
};

export default HowITWorks;
