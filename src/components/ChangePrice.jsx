import { useState } from 'react';
import {FaTimes} from 'react-icons/fa'
import picture6 from '../assets/images/picture6.png';
import { setGlobalState, useGlobalState } from '../store';


const ChangePrice = () => {
    const[priceModal] = useGlobalState('priceModal');
    const[auction] = useGlobalState('auction');
    const[price, setPrice] = useState('')
    const[imgBase64, setImgBase64] = useState('')
    

   const handleSubmit = async (e) => {
    //checks to see if the field are filled corrctly 
    e.preventDefault()
    if ( !price ) return

    //Testing for the browser
    console.log('Submitted')
   }

   const onClose = () => {
    resetFrom()
    setGlobalState('priceModal', 'scale-0')
   }

    const resetFrom = () => {
    setPrice ('')
    }

 
  
   return (
    //add NFT Modal interface
    <div className={`z-10 fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50  transform transition-transform duration-300 ${priceModal}`}>

        <div className="z-10 bg-[#151c25] shadow-md shadow-[#2574bd] rounded-lg w-11/12 sm:w-2/5 h-7/12 p-6">
            {/* onSubmit function triggered through form */}
            <form on onSubmit={handleSubmit} className='flex flex-col'>
                <div className=' flex justify-between items-center text-white'>
                    <p className='font-semibold italic'>Change NFT Price</p>
                    <button type='button' onClick={onClose} className='border-0 bg-transparent focus:outline-none'><FaTimes/></button>
                </div>
                <div className='flex justify-center items-center rounded-md mt-5'>
                    <div className='shrink-0 rounded-xl overflow-hidden h-20 w-20'>
                        {/* This will ensure an img is always showing on the form */}
                        <img src={auction.image || picture6} alt="Artwork" className='h-full w-full object-cover cursor-pointer' />
                    </div>
                </div>
               
                <div className='flex justify-between items-center bg-gray-800 rounded-xl mt-5'>
                        <input type="number"
                        min={0.01}
                        step={0.01}
                        accept='image/png, image/gif, image/jpeg, image/webp, image/jpg' className='block w-full text-sm text-slate-500 focus:outline-none cursor-pointer focus:ring-0 bg-transparent border-0
                        px-4 py-2' placeholder='Price (ETH)' value={price} onChange={(e) => setPrice(e.target.value)} name="Price" required />
                </div>
            
                <button type='submit' className=' flex justify-center items-center w-full text-white text-md bg-[#0047a5] mt-5 py-2 px-5 rounded-full drop-shadow-md border border-transparent hover:bg-transparent hover:text-white hover:border hover:border-[#12c6fd] focus:outline-none focus:ring-0'>Change Price</button>


            </form>
        </div>
    </div>


  )
}

export default ChangePrice