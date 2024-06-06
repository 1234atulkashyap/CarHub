// import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoAndroid } from "react-icons/io";
import { FaAppStoreIos } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { GiArrowCursor } from "react-icons/gi";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col gap-5 bg-red-400 p-10 sm:p-16" id="contact">
        <h2 className="text-xl sm:text-3xl font-semibold">
          WE ARE READY TO TAKE YOUR CALL 24 HOURS, 7 DAYS!
        </h2>
        <h1 className="text-2xl sm:text-4xl font-bold">+91 7992233578</h1>
      </div>
      <div className="max-w-[1280px] mx-auto p-10">
        <div className="md:flex justify-between items-center gap-5">
          <div className=" w-auto md:max-w-[25%] h-auto">
            <h1 className="text-3xl font-bold sm:mt-10">About the cab</h1>
            <div className="w-80 md:w-52  h-3 bg-red-400 mt-5 mb-5"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              laudantium nulla assumenda repudiandae minus voluptatibus
              temporibus ratione quisquam praesentium rerum!
            </p>
            <div className="m-5 flex gap-5">
              <FaFacebook size={"30px"} color="" />
              <FaInstagram size={"30px"} color="" />
              <FaXTwitter size={"30px"} color="" />
            </div>
          </div>

          <div className=" md:max-w-[25%] h-auto p-10">
            <h1 className="text-3xl font-bold mt-10">Download</h1>
            <div className="w-80 md:w-52 h-3 bg-red-400 mt-5 mb-5"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              laudantium nulla assumenda repudiandae minus voluptatibus
              temporibus ratione quisquam praesentium rerum!
            </p>
            <div className="m-5 flex-col gap-5">
              <div className="flex gap-3">
                <h1 className="font-bold">Android User</h1>
                <IoLogoAndroid size={"30px"} />
              </div>
              <div className="flex gap-3">
                <h1 className="font-bold">IOS User</h1>
                <FaAppStoreIos size={"30px"} />
              </div>
            </div>
          </div>

          <div className=" w-auto md:max-w-[25%] h-auto">
            <h1 className="text-3xl font-bold mt-10">Contact</h1>
            <div className="w-80 md:w-52 h-3 bg-red-400 mt-5 mb-5"></div>
            <div className="flex gap-5">
              <IoLocationSharp size={"20px"} />
              Ranchi, Jharkhand
            </div>
            <div className="flex gap-5 mt-5">
              <IoIosCall size={"20px"} />
              +91 7992233578
            </div>
            <div className="flex gap-5 mt-5">
              <MdEmail size={"20px"} />
              1234bhdsghsdjb@gmail.com
            </div>
            <div className="flex gap-5 mt-5">
              <GiArrowCursor size={"20px"} />
              carbookingsite.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
