// import React from 'react'
import img from "../assets/1.png";

// eslint-disable-next-line react/prop-types
const Card = ({heading, Rs}) => {
  return (
    <div className="h-auto w-80 bg-red-100 hover:bg-red-200 m-4 p-4 justify-center items-center flex-col  rounded-md">
      <div className="">
        {" "}
        <img
          //   id="car"
          src={img}
          alt=""
          className="w-[200px] sm:w-[500px] lg:w-[700px]"
        />
      </div>
      <div className="flex flex-col">
        <h2 className="flex justify-center font-bold text-xl">{heading}</h2>
        <p className="flex mt-2 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
          minus.
        </p>
        {/* <p className="flex justify-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque rem repellat ut cupiditate quaerat magni molestias possimus, non culpa aliquam!</p> */}
        <h1 className="flex mt-2 justify-center text-2xl text-yellow-800 font-bold ">
          {Rs} Rs./km
        </h1>
        <button className=" bg-black text-white px-4 py-2 rounded-md mt-5 flex justify-center">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Card;
