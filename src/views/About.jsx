import React from "react";
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import image1 from "../assets/images/picture1.png";

const About = () => {
  return (
    <div className=" py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              What is The Universal Collective?
            </h2>
            <p className="mt-4 text-lg text-white">
              The Universal Collective is a remarkable initiative that leverages
              the power of blockchain technology to offer valuable support to
              artists and charitiesy.
            </p>
            <div className="mt-8 flex">
              <a href="#" className="text-white hover:text-blue-500">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="ml-6 text-white hover:text-blue-500">
                <span className="sr-only">Instagram</span>
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="ml-6 text-white hover:text-blue-500">
                <span className="sr-only">Facebook</span>
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="ml-6 text-white hover:text-blue-500">
                <span className="sr-only">Facebook</span>
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="my-40 lg:mt-0 lg:col-span-2">
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <dl className="space-y-10">
                  <div>
                    <dt className="text-lg leading-6 font-medium text-white">
                      Our Mission
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Our mission is to create a vibrant community of creators
                      who are passionate about using their talents for good. We
                      will provide a variety of tools and resources to help
                      artists succeed, including marketing and promotional
                      support, access to a community of fellow creators, and
                      educational resources to help them improve their craft.
                      Our goal is to make a positive impact on society, one NFT
                      at a time.
                    </dd>
                  </div>
                  <div>
                    <ul>
                      <li></li>
                    </ul>
                  </div>
                </dl>
              </div>
              <div>
                <div className="blobAb"></div>
                <div className="blobAb1"></div>
                {/* <img className="rounded-lg shadow-lg" src={image1} alt="Team photo" /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="  ">
          <h2 className="text-3xl font-bold text-white mb-8">Our Values</h2>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <li className="bg-[#9fccff] bg-opacity-10 backdrop-blur-3xl rounded-2xl shadow-lx shadow-black py-6 px-4">
              <h3 className=" text-white text-lg font-bold mb-2 underline">
                Integrity
              </h3>
              <p className="text-white leading-relaxed">
                We uphold honesty, ethics, and moral principles in all of our
                actions and decisions.
              </p>
            </li>
            <li className="bg-[#9fccff] bg-opacity-10 backdrop-blur-3xl rounded-2xl shadow-lx shadow-black py-6 px-4">
              <h3 className="text-white text-lg font-bold mb-2 underline">
                Creativity
              </h3>
              <p className="text-white leading-relaxed">
                We encourage and embrace innovative thinking and imaginative
                solutions to help us achieve our goals.
              </p>
            </li>
            <li className="bg-[#9fccff] bg-opacity-10 backdrop-blur-3xl rounded-2xl shadow-lx shadow-black py-6 px-4">
              <h3 className="text-white text-lg font-bold mb-2 underline">
                Diversity
              </h3>
              <p className="text-white leading-relaxed">
                We embrace and celebrate differences in people and ideas,
                recognizing that diversity is essential to our success.
              </p>
            </li>
            <li className="bg-[#9fccff] bg-opacity-10 backdrop-blur-3xl rounded-2xl shadow-lx shadow-black py-6 px-4">
              <h3 className="text-white text-lg font-bold mb-2 underline">
                Collaboration
              </h3>
              <p className="text-white leading-relaxed">
                We work together in a cooperative and supportive manner towards
                common goals, valuing open communication and respect for each
                other's ideas and perspectives.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
