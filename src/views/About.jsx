import React from "react";
import bird from "../assets/images/bird.png"

const About = () => {
  return (
    <div className="bg-none">
      
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            About Us
          </h2>
          <p className=" text-white mt-2 text-3xl leading-8 font-extrabold tracking-tight  sm:text-4xl">
            The Universal Collective
          </p>
        
          <br />
          <h1 className="  mt-4 max-w-2xl text-xl text-white lg:mx-auto">
            Our Vision
          </h1>
          <p className="mt-4  text-white lg:mx-auto"> "The company's vision is to utilise a decentralized NFT marketplace that empowers creators to make a positive impact on society by supporting charities they care about. We believe that the power of art can be harnessed to make a difference in the world, and we want to enable artists to create while also giving back".</p>
          <br />
          <h1 className="  mt-4 max-w-2xl text-xl text-white lg:mx-auto">
            Our Mission
          </h1>
          <p className="mt-4  text-white lg:mx-auto"> Our mission is to create a vibrant community of creators who are passionate about using their talents for good. We will provide a variety of tools and resources to help artists succeed, including marketing and promotional support, access to a community of fellow creators, and educational resources to help them improve their craft. Our goal is to make a positive impact on society, one NFT at a time.</p>


        </div>



        <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className=" text-white mt-2 text-3xl leading-8 font-extrabold tracking-tight  sm:text-4xl">
            Charities
          </p>
          <p className="mt-4 max-w-2xl text-xl text-white lg:mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            magnam voluptatum cupiditate veritatis in, accusamus quisquam.
          </p>
        </div>
        </div>

        <div className="flex justify-center items-center">
      <div className="flex justify-between w-4/5">
        <img src={bird} alt="Image 1" className="w-1/4" />
        <img src={bird} alt="Image 2" className="w-1/4" />
        <img src={bird} alt="Image 3" className="w-1/4" />
        <img src={bird} alt="Image 4" className="w-1/4" />
      </div>
    </div>

        </div>
      </div>
  )
}

          
          export default About;