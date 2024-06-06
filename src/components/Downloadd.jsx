// import React from 'react'
import taxi from "../assets/taxi.png";
import appstore from "../assets/appstore.png";
import playstore from "../assets/playstore.png";

const Downloadd = () => {
  return (
    <div className="max-w-[1280px] mx-auto mt-10" id="blog">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-yellow-500 text-3xl font-semibold mt-5">
          Download
        </h2>
        <h1 className=" text-3xl font-semibold justify-center items-center flex">
          Best cab services
        </h1>
      </div>
      <div className="sm:flex gap-5 sm:mt-10 p-5 sm:p-20">
        <div className="">
          <h1 className="font-bold text-2xl text-center">
            Download the Cab voucher app free! Get Exciting New Offers
          </h1>
          <p className="text-center mt-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At natus
            illum sint deserunt, adipisci repudiandae.
          </p>
          <div className="flex justify-center">
            <img className="sm:w-60 w-36 cursor-pointer mt-10" src={appstore} alt="appstore" />
            <img className="sm:w-60 w-36 cursor-pointer mt-10" src={playstore} alt="playstore" />
          </div>
        </div>
        <div>
          <img src={taxi} alt="taxi" />
        </div>
      </div>
    </div>
  );
};

export default Downloadd;
