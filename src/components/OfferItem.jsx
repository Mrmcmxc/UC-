import { useState } from 'react';
import {FaTimes} from 'react-icons/fa'
import picture6 from '../assets/images/picture6.png';
import { setGlobalState, useGlobalState } from '../store';


const OfferItem = () => {
    const[offerModal] = useGlobalState('offerModal');
    const[auction] = useGlobalState('auction');
    
    const[period, setPeriod] = useState('')
    const[biddable, setBiddable] = useState('')
    const[timeline, setTimeLine] = useState('')
    

   const handleSubmit = async (e) => {
    //checks to see if the field are filled corrctly 
    e.preventDefault()
    if (!period || !biddable || !timeline) return

 
    console.log({period, biddable, timeline})
   }

   const onClose = () => {
    resetFrom()
    setGlobalState('offerModal', 'scale-0')
   }

    const resetFrom = () => {
    setPeriod ('')
    }


  
   return (
    //add NFT Modal interface
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${offerModal}`}>

        <div className="bg-[#151c25] shadow-md shadow-[#2574bd] rounded-lg w-11/12 sm:w-2/5 h-7/12 p-6">
            {/* onSubmit function triggered through form */}
            <form on onSubmit={handleSubmit} className='flex flex-col'>
                <div className=' flex justify-between items-center text-white'>
                    <p className='font-semibold italic'>Offer NFT</p>
                    <button type='button' onClick={onClose} className='border-0 bg-transparent focus:outline-none'><FaTimes/></button>
                </div>
                {/* Auction Image */}
                <div className='flex justify-center items-center rounded-md mt-5'>
                    <div className='shrink-0 rounded-xl overflow-hidden h-20 w-20'>
                        {/* This will ensure an img is always showing on the form */}
                        <img src={auction.image || picture6} alt="Artwork" className='h-full w-full object-cover cursor-pointer' />
                    </div>
                </div>
                {/* Period (days) */}
                <div className='flex justify-between items-center bg-gray-800 rounded-xl mt-5'>
                        <input type="number"
                        min={1}
                        className='block w-full text-sm text-slate-500 focus:outline-none cursor-pointer focus:ring-0 bg-transparent border-0
                        px-4 py-2' placeholder='Days e.g 7' value={period} onChange={(e) => setPeriod(e.target.value)} name="period" required />
                </div>
                {/* Timeline */}
                <div className='flex justify-between items-center bg-gray-800 rounded-xl mt-5'>
                <select 
                name="period" 
                className='block w-full text-sm text-slate-500 focus:outline-none cursor-pointer focus:ring-0 bg-transparent border-0 px-4 py-2' 
                placeholder='Days e.g 7'
                value={timeline} 
                onChange={(e) => setTimeLine(e.target.value)} 
                required>
                    <option value="" hidden> {' '} Select Duration</option>
                    <option value="sec">Seconds</option>
                    <option value="min">Minutes</option>
                    <option value="hours">Hours</option>
                    <option value="day">Days</option>
                </select>
                </div>
                
                <div className='flex justify-between items-center bg-gray-800 rounded-xl mt-5'>
                <select 
                name="period" 
                className='block w-full text-sm text-slate-500 focus:outline-none cursor-pointer focus:ring-0 bg-transparent border-0 px-4 py-2  ' 
                placeholder='Biddability'
                value={biddable} 
                onChange={(e) => setBiddable(e.target.value)} 
                required>
                    <option value="" hidden> {' '} Would you like to auctions this NFT?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                    
                </select>
                </div>

                {/* Submit Button */}
                <button type='submit' className=' flex justify-center items-center w-full text-white text-md bg-[#0047a5] mt-5 py-2 px-5 rounded-full drop-shadow-md border border-transparent hover:bg-transparent hover:text-white hover:border hover:border-[#12c6fd] focus:outline-none focus:ring-0'>Offer Item</button>


            </form>
        </div>
    </div>


  )
}

export default OfferItem