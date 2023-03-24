import { useState } from 'react';
import {FaTimes} from 'react-icons/fa'
import picture6 from '../assets/images/picture6.png';
import { setGlobalState, useGlobalState } from '../store';


const CreateNFT = () => {
    const[boxModal] = useGlobalState('boxModal');
    const[name, setName] = useState('')
    const[description, setDescription] = useState('')
    const[price, setPrice] = useState('')
    const[fileUrl, setFileURL] = useState('')
    const[imgBase64, setImgBase64] = useState('')
    

   const handleSubmit = async (e) => {
    //checks to see if the field are filled corrctly 
    e.preventDefault()
    if (!name || !price || !description || !fileUrl) return

    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', price)
    formData.append('description', description)
    formData.append('image', fileUrl)
    resetFrom()

    //Testing for the browser
    console.log('Submitted')
   }

   const onClose = () => {
    resetFrom()
    setGlobalState('boxModal', 'scale-0')
   }

    const resetFrom = () => {
    setFileURL('')
    setImgBase64('')
    setName('')
    setDescription('')
    setPrice ('')
    }

   // IMAGE MANAGEMENT FOR ADD NFT
    // Event Listener to listen for any change in the image field
    const changeImage = async (e) => {
    const reader = new FileReader();
    //Changes the input image field to show the proposed image to be minted
    if (e.target.files[0]) reader.readAsDataURL(e.target.files[0]);

    // While reading this function will preform geting the file, seting to the variabels such as setFileURL and setImgBase64
    reader.onload = (readerEvent) => {
        const file = readerEvent.target.result
        setImgBase64(file)
        setFileURL(e.target.files[0])
    }
   }
  
   return (
    //add NFT Modal interface
    <div className={`z-10 fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50  transform transition-transform duration-300 ${boxModal}`}>

        <div className="z-10 bg-[#151c25] shadow-md shadow-[#2574bd] rounded-lg w-11/12 sm:w-2/5 h-7/12 p-6">
            {/* onSubmit function triggered through form */}
            <form on onSubmit={handleSubmit} className='flex flex-col'>
                <div className=' flex justify-between items-center text-white'>
                    <p className='font-semibold italic'>Add NFT</p>
                    <button type='button' onClick={onClose} className='border-0 bg-transparent focus:outline-none'><FaTimes/></button>
                </div>
                <div className='flex justify-center items-center rounded-md mt-5'>
                    <div className='shrink-0 rounded-xl overflow-hidden h-20 w-20'>
                        {/* This will ensure an img is always showing on the form */}
                        <img src={imgBase64 || picture6} alt="Artwork" className='h-full w-full object-cover cursor-pointer' />
                    </div>
                </div>
                <div className='flex justify-between items-center bg-gray-800 rounded-xl mt-5'>
                    <label className='block'>
                        <span className='sr-only'>Choose NFT Artwork</span>
                        <input type="file" 
                        accept='image/png, image/gif, image/jpeg, image/webp, image/jpg' className='block w-full text-sm text-slate-500 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-[#1d2631] file:text-gray-300 hover:file:bg-[#1d2631] cursor-pointer focus:ring-0' onChange={changeImage} required />
                    </label>
                </div>
                <div className='flex justify-between items-center bg-gray-800 rounded-xl mt-5'>
                        <input type="text" 
                        accept='image/png, image/gif, image/jpeg, image/webp, image/jpg' className='block w-full text-sm text-slate-500 focus:outline-none cursor-pointer focus:ring-0 bg-transparent border-0
                        px-4 py-2' placeholder='Title' value={name} onChange={(e) => setName(e.target.value)} name="name" required />
                </div>
                <div className='flex justify-between items-center bg-gray-800 rounded-xl mt-5'>
                        <input type="number"
                        min={0.01}
                        step={0.01}
                        accept='image/png, image/gif, image/jpeg, image/webp, image/jpg' className='block w-full text-sm text-slate-500 focus:outline-none cursor-pointer focus:ring-0 bg-transparent border-0
                        px-4 py-2' placeholder='Price (ETH)' value={price} onChange={(e) => setPrice(e.target.value)} name="Price" required />
                </div>
                <div className='flex justify-between items-center bg-gray-800 rounded-xl mt-5'>
                        <textarea 
                        accept='image/png, image/gif, image/jpeg, image/webp, image/jpg' className='block w-full text-sm text-slate-500 focus:outline-none cursor-pointer focus:ring-0 bg-transparent border-0 h-18
                        px-4 py-2' placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)}  name="Description" required ></textarea>
                </div>
                <button type='submit' className=' flex justify-center items-center w-full text-white text-md bg-[#0047a5] mt-5 py-2 px-5 rounded-full drop-shadow-md border border-transparent hover:bg-transparent hover:text-white hover:border hover:border-[#12c6fd] focus:outline-none focus:ring-0'>Mint Now</button>


            </form>
        </div>
    </div>


  )
}

export default CreateNFT