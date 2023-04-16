import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import picture6 from "../assets/images/picture6.png";
import { setGlobalState, useGlobalState } from "../store";
import axios from "axios";
import { toast } from "react-toastify";
import { createNFTItem } from "../servers/blockchain";

const CreateNFT = () => {
  const [boxModal] = useGlobalState("boxModal");

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [imgBase64, setImgBase64] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !price || !description || !fileUrl) return;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("image", fileUrl);

    await toast.promise(
      new Promise(async (resolve, reject) => {
        await axios
          .post("http://localhost:9000/process", formData)
          .then(async (res) => {
            await createNFTItem(res.data)
              .then(async () => {
                onClose();
                resolve();
              })
              .catch((error) => reject(error));
          })
          .catch((error) => reject(error));
      }),
      {
        pending: "Minting in progress...",
        success: "Minting completed...",
        error: "Encoutered an error",
      }
    );
  };

  const onClose = () => {
    resetForm();
    setGlobalState("boxModal", "scale-0");
  };

  const resetForm = () => {
    setFileUrl("");
    setImgBase64("");
    setName("");
    setDescription("");
    setPrice("");
  };

  // IMAGE MANAGEMENT FOR ADD NFT
  // Event Listener to listen for any change in the image field
  const changeImage = async (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) reader.readAsDataURL(e.target.files[0]);

    reader.onload = (readerEvent) => {
      const file = readerEvent.target.result;
      setImgBase64(file);
      setFileUrl(e.target.files[0]);
    };
  };

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center
      justify-center bg-black bg-opacity-50 transform
      transition-transform duration-300 ${boxModal}`}
    >
      <div
        className="bg-[#151c25] shadow-xl shadow-[#25bd9c] rounded-xl
        w-11/12 sm:w-2/5 h-7/12 p-6"
      >
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex justify-between items-center text-gray-400">
            <p className="font-semibold italic">Add NFT</p>
            <button
              type="button"
              onClick={onClose}
              className="border-0 bg-transparent focus:outline-none"
            >
              <FaTimes />
            </button>
          </div>

          <div className="flex justify-center items-center mt-5">
            <div className="shrink-0 rounded-xl overflow-hidden h-20 w-20">
              <img
                src={imgBase64 || picture6}
                alt="Artwork"
                className="h-full w-full object-cover cursor-pointer"
              />
            </div>
          </div>

          <div className="flex justify-between items-center bg-gray-800 rounded-xl mt-5">
            <label className="block">
              <span className="sr-only">Choose NFT Artwork</span>
              <input
                type="file"
                accept="image/png, image/gif, image/jpeg, image/jpg, image/webp"
                className="block w-full text-sm text-slate-500 focus:outline-none
                file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
                file:font-semibold file:bg-[#1d2631] file:text-gray-300
                hover:file:bg-[#1d2631] cursor-pointer focus:ring-0"
                onChange={changeImage}
                required
              />
            </label>
          </div>

          <div className="flex justify-between items-center bg-gray-800 rounded-xl mt-5">
            <input
              type="text"
              className="block w-full text-sm text-slate-500 focus:outline-none
              cursor-pointer focus:ring-0 bg-transparent border-0 px-4 py-2"
              placeholder="Title"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              required
            />
          </div>

          <div className="flex justify-between items-center bg-gray-800 rounded-xl mt-5">
            <input
              type="number"
              min={0.01}
              step={0.01}
              className="block w-full text-sm text-slate-500 focus:outline-none
              cursor-pointer focus:ring-0 bg-transparent border-0 px-4 py-2"
              placeholder="Price (ETH)"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-between items-center bg-gray-800 rounded-xl mt-5">
            <textarea
              className="block w-full text-sm text-slate-500 focus:outline-none
              cursor-pointer focus:ring-0 bg-transparent border-0 px-4 py-2 h-18"
              placeholder="Description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex justify-center items-center
            w-full text-white text-md bg-[#25bd9c] mt-5
            py-2 px-5 rounded-full drop-shadow-xl border border-transparent
            hover:bg-transparent hover:text-white focus:ring-0
            hover:border hover:border-[#25bd9c] focus:outline-none"
          >
            Mint Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNFT;
